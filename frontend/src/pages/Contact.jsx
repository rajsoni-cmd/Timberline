import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import axios from "axios";
import Reveal, { GoldRule } from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BUDGETS = ["Under $250K", "$250K–$500K", "$500K–$1M", "$1M–$2M", "$2M+"];
const CONTRACTORS = ["None", "1–2", "3–5", "5+"];
const HEAR = ["Google", "Referral", "Social Media", "Repeat Client", "Other"];
const PROJECT_TYPES = [
  "Custom Home", "Cottage", "Boathouse", "Bunkie", "Garage", "Renovation",
  "Addition", "Deck / Dock", "Excavation", "Landscaping", "Other",
];

const initial = {
  first_name: "", last_name: "", email: "", phone: "",
  budget: "", contractors_contacted: "", hear_about: "", hear_about_other: "",
  project_location: "", project_type: "", project_type_other: "", notes: "",
};

const TextField = ({ id, label, type = "text", required = false, value, onChange, testId, inputMode, placeholder }) => (
  <div className="tl-field">
    <input
      id={id}
      type={type}
      inputMode={inputMode}
      placeholder={placeholder || " "}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={testId}
    />
    <label htmlFor={id}>
      {label}{required && <span className="text-[#00a34f]"> *</span>}
    </label>
  </div>
);

const SelectField = ({ id, label, required = false, options, value, onChange, testId }) => (
  <div className={`tl-field ${value ? "has-value" : ""}`}>
    <select id={id} value={value} onChange={onChange} required={required} data-testid={testId}>
      <option value="" disabled hidden></option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    <label htmlFor={id}>
      {label}{required && <span className="text-[#00a34f]"> *</span>}
    </label>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ submitting: false, success: false, error: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: "" });
    try {
      await axios.post(`${API}/contact`, form);
      setStatus({ submitting: false, success: true, error: "" });
      setForm(initial);
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Please try again.";
      setStatus({ submitting: false, success: false, error: msg });
    }
  };

  return (
    <main data-testid="contact-page">
      <PageHero
        eyebrow="Let's Build"
        title="Contact Us"
        subtitle="Tell us about your project — we'll be in touch shortly."
        image={IMAGES.contactHero}
        testId="contact-hero"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT */}
          <Reveal variant="left" className="lg:col-span-5">
            <div>
              <GoldRule delay={150} />
              <div className="eyebrow mt-5">Start Your Project</div>
              <h2
                className="mt-6 font-display text-[#01261d] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
              >
                Let's Build<br />Something Together
              </h2>
              <div className="mt-7"><GoldRule delay={300} /></div>
              <p className="mt-8 text-[#231f20]/85 text-base md:text-lg font-light leading-[1.9]">
                Thank you for your interest in Timberline Custom Homes. Please fill out the form below and a member of our team will be in touch shortly.
              </p>

              <div className="mt-12 space-y-8">
                <a
                  href="tel:7056544312"
                  data-testid="contact-phone"
                  className="flex items-start gap-5 group"
                >
                  <Phone className="text-[#00a34f] mt-1 shrink-0" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.26em] uppercase text-[#231f20]/55">Phone</div>
                    <div className="font-display text-[#01261d] text-2xl mt-1 group-hover:text-[#00a34f] transition-colors">
                      (705) 654-4312
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <MapPin className="text-[#00a34f] mt-1 shrink-0" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.26em] uppercase text-[#231f20]/55">Studio</div>
                    <div className="text-[#01261d] text-base mt-1 font-light leading-relaxed">
                      5584 ON-28 Unit 5,<br />Woodview, ON K0L 3E0
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:info@timberlinecustomhomes.ca"
                  data-testid="contact-email"
                  className="flex items-start gap-5 group"
                >
                  <Mail className="text-[#00a34f] mt-1 shrink-0" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.26em] uppercase text-[#231f20]/55">Email</div>
                    <div className="text-[#01261d] text-base mt-1 font-light group-hover:text-[#00a34f] transition-colors break-all">
                      info@timberlinecustomhomes.ca
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal variant="right" className="lg:col-span-7" delay={140}>
            {status.success ? (
              <div
                data-testid="contact-success"
                className="border border-[#c9a96e]/40 bg-[#f5f0e8] p-12 md:p-20 text-center"
              >
                <div className="flex justify-center"><GoldRule delay={100} wide /></div>
                <h3
                  className="mt-8 font-display italic text-[#01261d] leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  Thank you.
                </h3>
                <p className="mt-6 text-[#231f20]/80 text-base md:text-lg font-light leading-[1.9] max-w-md mx-auto">
                  A member of our team will be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: "" })}
                  data-testid="send-another-button"
                  className="btn-luxury mt-10 border border-[#01261d] text-[#01261d] hover:bg-[#01261d] hover:text-[#f5f0e8]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="contact-form"
                className="space-y-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <TextField id="first_name" label="First Name" required value={form.first_name} onChange={update("first_name")} testId="input-first-name" />
                  <TextField id="last_name" label="Last Name" required value={form.last_name} onChange={update("last_name")} testId="input-last-name" />
                  <TextField id="email" label="Email Address" type="email" inputMode="email" required value={form.email} onChange={update("email")} testId="input-email" />
                  <TextField id="phone" label="Phone Number" type="tel" inputMode="tel" value={form.phone} onChange={update("phone")} testId="input-phone" />

                  <SelectField id="budget" label="What is your budget?" required options={BUDGETS} value={form.budget} onChange={update("budget")} testId="select-budget" />
                  <SelectField id="contractors" label="Contractors Contacted" options={CONTRACTORS} value={form.contractors_contacted} onChange={update("contractors_contacted")} testId="select-contractors" />

                  <SelectField id="hear" label="How did you hear about us?" options={HEAR} value={form.hear_about} onChange={update("hear_about")} testId="select-hear-about" />
                  {form.hear_about === "Other" ? (
                    <TextField id="hear_other" label="Please let us know" value={form.hear_about_other} onChange={update("hear_about_other")} testId="input-hear-other" />
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  <TextField
                    id="location"
                    label="Project Location — Town or Lake"
                    value={form.project_location}
                    onChange={update("project_location")}
                    testId="input-location"
                    placeholder="e.g. Stoney Lake, Peterborough"
                  />
                  <SelectField id="project_type" label="Type of Project" required options={PROJECT_TYPES} value={form.project_type} onChange={update("project_type")} testId="select-project-type" />

                  {form.project_type === "Other" && (
                    <TextField id="project_type_other" label="Please specify project" value={form.project_type_other} onChange={update("project_type_other")} testId="input-project-type-other" />
                  )}

                  <div className="md:col-span-2 tl-field">
                    <textarea
                      id="notes"
                      placeholder=" "
                      rows={4}
                      value={form.notes}
                      onChange={update("notes")}
                      data-testid="input-notes"
                    />
                    <label htmlFor="notes">Additional Notes</label>
                  </div>
                </div>

                {status.error && (
                  <div
                    data-testid="contact-error"
                    className="mt-6 border border-red-400/50 bg-red-50 text-red-800 text-sm font-light p-4"
                  >
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  data-testid="contact-submit-button"
                  className="btn-luxury w-full mt-10 bg-[#01261d] text-[#f5f0e8] hover:bg-[#00a34f] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.submitting ? "Sending…" : "Send Inquiry"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
