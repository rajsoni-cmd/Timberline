/**
 * Cloudflare Pages Function — handles the Contact form (POST /api/contact).
 * Replaces the old FastAPI backend. Sends the enquiry by email via Resend.
 *
 * Set these in Cloudflare → your Pages project → Settings → Variables and Secrets:
 *   RESEND_API_KEY   (secret)  from https://resend.com/api-keys
 *   RECIPIENT_EMAIL            where enquiries go, e.g. ray@timberlinecustomhomes.ca
 *   SENDER_EMAIL               a verified sender, e.g. website@timberlinecustomhomes.ca
 *                              (until the domain is verified in Resend use onboarding@resend.dev)
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const esc = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const clip = (v, max = 2000) => String(v ?? "").trim().slice(0, max);

const row = (label, value) =>
  `<tr>` +
  `<td style="padding:14px 20px;border-bottom:1px solid #eee;width:38%;color:#01261d;font-family:Arial,sans-serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;font-weight:600;">${label}</td>` +
  `<td style="padding:14px 20px;border-bottom:1px solid #eee;color:#231f20;font-family:Arial,sans-serif;font-size:15px;">${esc(value) || "—"}</td>` +
  `</tr>`;

const resolveOther = (value, other) => (value === "Other" && other ? `Other — ${other}` : value || "");

function buildEmail(d) {
  const submitted = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    dateStyle: "long",
    timeStyle: "short",
  });
  const rows = [
    row("First Name", d.first_name),
    row("Last Name", d.last_name),
    row("Email", d.email),
    row("Phone", d.phone),
    row("Budget", d.budget),
    row("Contractors Contacted", d.contractors_contacted),
    row("Heard About Us", resolveOther(d.hear_about, d.hear_about_other)),
    row("Project Location", d.project_location),
    row("Project Type", resolveOther(d.project_type, d.project_type_other)),
  ].join("");
  const notes = esc(d.notes || "—").replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f4f1ec;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:32px 0;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e0d8;">
        <tr><td style="background:#01261d;padding:36px 32px;">
          <div style="color:#c9a96e;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">New Inquiry</div>
          <h1 style="margin:8px 0 0;color:#ffffff;font-family:Georgia,serif;font-size:28px;font-weight:400;">Timberline Custom Homes</h1>
          <div style="color:#cfd6d2;font-family:Arial,sans-serif;font-size:13px;margin-top:8px;">Received ${esc(submitted)}</div>
        </td></tr>
        <tr><td style="padding:8px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows}
            <tr><td colspan="2" style="padding:18px 20px;color:#01261d;font-family:Arial,sans-serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;font-weight:600;border-bottom:1px solid #eee;">Additional Notes</td></tr>
            <tr><td colspan="2" style="padding:0 20px 24px;color:#231f20;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;">${notes}</td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#01261d;padding:20px 32px;text-align:center;color:#cfd6d2;font-family:Arial,sans-serif;font-size:12px;">
          Reply directly to <a href="mailto:${esc(d.email)}" style="color:#c9a96e;text-decoration:none;">${esc(d.email)}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ detail: "Invalid request." }, 400);
  }

  const fields = [
    "first_name", "last_name", "email", "phone", "budget", "contractors_contacted",
    "hear_about", "hear_about_other", "project_location", "project_type",
    "project_type_other", "notes",
  ];
  const d = {};
  for (const f of fields) d[f] = clip(body[f], f === "notes" ? 5000 : 200);

  if (!d.first_name || !d.last_name || !d.budget || !d.project_type) {
    return json({ detail: "Please fill in all required fields." }, 422);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    return json({ detail: "Please enter a valid email address." }, 422);
  }

  if (!env.RESEND_API_KEY) {
    return json({ detail: "Email service not configured. Please call us instead." }, 503);
  }

  const to = (env.RECIPIENT_EMAIL || "info@timberlinecustomhomes.ca")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = env.SENDER_EMAIL || "onboarding@resend.dev";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Timberline Custom Homes <${from}>`,
      to,
      reply_to: d.email,
      subject: `New Inquiry — ${d.first_name} ${d.last_name} (${d.project_type})`,
      html: buildEmail(d),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ detail: "Sorry — your message could not be sent. Please call us instead." }, 502);
  }

  const out = await res.json().catch(() => ({}));
  return json({ status: "success", message: "Inquiry sent", email_id: out.id });
}

export const onRequest = () => json({ detail: "Method not allowed" }, 405);
