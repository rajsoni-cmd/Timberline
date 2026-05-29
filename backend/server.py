from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Resend setup
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'rajsoni48879@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactInquiry(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = ""
    budget: str
    contractors_contacted: Optional[str] = ""
    hear_about: Optional[str] = ""
    hear_about_other: Optional[str] = ""
    project_location: Optional[str] = ""
    project_type: str
    project_type_other: Optional[str] = ""
    notes: Optional[str] = ""


def build_email_html(data: ContactInquiry) -> str:
    submitted_at = datetime.now(timezone.utc).strftime('%B %d, %Y at %I:%M %p UTC')

    def row(label: str, value: str) -> str:
        if not value:
            value = "—"
        return (
            f'<tr>'
            f'<td style="padding:14px 20px;border-bottom:1px solid #eee;width:38%;'
            f'color:#01261d;font-family:Arial,sans-serif;font-size:13px;letter-spacing:1px;'
            f'text-transform:uppercase;font-weight:600;">{label}</td>'
            f'<td style="padding:14px 20px;border-bottom:1px solid #eee;'
            f'color:#231f20;font-family:Arial,sans-serif;font-size:15px;">{value}</td>'
            f'</tr>'
        )

    hear_value = data.hear_about
    if data.hear_about == "Other" and data.hear_about_other:
        hear_value = f"Other — {data.hear_about_other}"

    project_value = data.project_type
    if data.project_type == "Other" and data.project_type_other:
        project_value = f"Other — {data.project_type_other}"

    notes_html = (data.notes or "—").replace("\n", "<br/>")

    return f"""
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f4f1ec;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:32px 0;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e0d8;">
        <tr><td style="background:#01261d;padding:36px 32px;">
          <div style="color:#00a34f;font-family:Arial,sans-serif;font-size:11px;
            letter-spacing:3px;text-transform:uppercase;font-weight:600;">New Inquiry</div>
          <h1 style="margin:8px 0 0;color:#ffffff;font-family:'Georgia',serif;
            font-size:28px;font-weight:400;">Timberline Custom Homes</h1>
          <div style="color:#cfd6d2;font-family:Arial,sans-serif;font-size:13px;
            margin-top:8px;">Received {submitted_at}</div>
        </td></tr>
        <tr><td style="padding:8px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            {row("First Name", data.first_name)}
            {row("Last Name", data.last_name)}
            {row("Email", data.email)}
            {row("Phone", data.phone or "")}
            {row("Budget", data.budget)}
            {row("Contractors Contacted", data.contractors_contacted or "")}
            {row("Heard About Us", hear_value or "")}
            {row("Project Location", data.project_location or "")}
            {row("Project Type", project_value)}
            <tr><td colspan="2" style="padding:18px 20px;
              color:#01261d;font-family:Arial,sans-serif;font-size:13px;letter-spacing:1px;
              text-transform:uppercase;font-weight:600;border-bottom:1px solid #eee;">
              Additional Notes
            </td></tr>
            <tr><td colspan="2" style="padding:0 20px 24px;
              color:#231f20;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;">
              {notes_html}
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#01261d;padding:20px 32px;text-align:center;
          color:#cfd6d2;font-family:Arial,sans-serif;font-size:12px;">
          Reply directly to <a href="mailto:{data.email}" style="color:#00a34f;
          text-decoration:none;">{data.email}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>
"""


@api_router.get("/")
async def root():
    return {"message": "Timberline Custom Homes API"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "resend_configured": bool(RESEND_API_KEY)}


@api_router.post("/contact")
async def submit_contact(inquiry: ContactInquiry):
    if not RESEND_API_KEY:
        logger.error("RESEND_API_KEY not configured")
        raise HTTPException(
            status_code=503,
            detail="Email service not configured. Please add RESEND_API_KEY to backend .env."
        )

    subject = f"New Inquiry — {inquiry.first_name} {inquiry.last_name} ({inquiry.project_type})"
    html = build_email_html(inquiry)

    params = {
        "from": f"Timberline Custom Homes <{SENDER_EMAIL}>",
        "to": [RECIPIENT_EMAIL],
        "reply_to": inquiry.email,
        "subject": subject,
        "html": html,
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Inquiry email sent: {email.get('id')}")
        return {"status": "success", "message": "Inquiry sent", "email_id": email.get("id")}
    except Exception as e:
        logger.error(f"Failed to send inquiry email: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
