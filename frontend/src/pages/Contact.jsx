import { useState } from "react";
import { Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";
import axios from "axios";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BUDGETS = ["Under $250K", "$250K–$500K", "$500K–$1M", "$1M–$2M", "$2M+"];
const CONTRACTORS = ["None", "1–2", "3–5", "5+"];
const HEAR = ["Google", "Referral", "Social Media", "Repeat Client", "Other"];
const PROJECT_TYPES = [
  "Custom Home", "Cottage", "Boathouse", "Bunkie", "Garage", "Renovation",
  "Addition", "Deck/Dock", "Excavation", "Landscaping", "Other",
];

const initial = {
  first_name: "", last_name: "", email: "", phone: "",
  budget: "", contractors_contacted: "", hear_about: "", hear_about_other: "",
  project_location: "", project_type: "", project_type_other: "", notes: "",
};

const Field = ({ id, label, type = "text", required = false, value, onChange, testId }) => (
  <div className="tl-field">
    <input
      id={id}
      type={type}
      placeholder=" "
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
        image={IMAGES.user26}
        testId="contact-hero"
      />

      <section className="py-24 md:py-32 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT */}
          <Reveal className="lg:col-span-5">
            <div>
              <div className="eyebrow text-[#00a34f] mb-5">Get in Touch</div>
              <h2 className="font-serif-display text-[#01261d] text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Let's Start Your Project
              </h2>
              <div className="w-16 h-[2px] bg-[#00a34f] my-8" />
              <p className="text-[#231f20]/80 text-base md:text-lg leading-relaxed">
                Thank you for your interest in Timberline Custom Homes. Please fill out the form and a member of our team will be in touch.
              </p>

              <div className="mt-12 space-y-7">
                <a
                  href="tel:7056544312"
                  data-testid="contact-phone"
                  className="flex items-start gap-5 group"
                >
                  <Phone className="text-[#00a34f] mt-1" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[11px] tracking-[0.24em] uppercase text-[#231f20]/60">Phone</div>
                    <div className="font-serif-display text-[#01261d] text-2xl mt-1 group-hover:text-[#00a34f] transition-colors">
                      (705) 654-4312
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <MapPin className="text-[#00a34f] mt-1" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[11px] tracking-[0.24em] uppercase text-[#231f20]/60">Studio</div>
                    <div className="text-[#01261d] text-base mt-1 leading-relaxed">
                      5584 ON-28 Unit 5,<br />Woodview, ON K0L 3E0
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:info@timberlinecustomhomes.ca"
                  data-testid="contact-email"
                  className="flex items-start gap-5 group"
                >
                  <Mail className="text-[#00a34f] mt-1" size={22} strokeWidth={1.4} />
                  <div>
                    <div className="text-[11px] tracking-[0.24em] uppercase text-[#231f20]/60">Email</div>
                    <div className="text-[#01261d] text-base mt-1 group-hover:text-[#00a34f] transition-colors">
                      info@timberlinecustomhomes.ca
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal className="lg:col-span-7" delay={120}>
            {status.success ? (
              <div
                data-testid="contact-success"
                className="border border-[#00a34f]/30 bg-white p-12 md:p-16 text-center"
              >
                <CheckCircle2 className="text-[#00a34f] mx-auto" size={56} strokeWidth={1.2} />
                <h3 className="mt-6 font-serif-display text-[#01261d] text-3xl md:text-4xl tracking-tight">
                  Thank you!
                </h3>
                <p className="mt-4 text-[#231f20]/75 text-base md:text-lg">
                  We'll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: "" })}
                  data-testid="send-another-button"
                  className="mt-10 border border-[#01261d] text-[#01261d] text-[12px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-[#01261d] hover:text-white transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="contact-form"
                className="bg-white p-8 md:p-12 border border-[#01261d]/5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <Field id="first_name" label="First Name" required value={form.first_name} onChange={update("first_name")} testId="input-first-name" />
                  <Field id="last_name" label="Last Name" required value={form.last_name} onChange={update("last_name")} testId="input-last-name" />
                  <Field id="email" label="Email Address" type="email" required value={form.email} onChange={update("email")} testId="input-email" />
                  <Field id="phone" label="Phone Number" type="tel" value={form.phone} onChange={update("phone")} testId="input-phone" />

                  <SelectField id="budget" label="What is your budget?" required options={BUDGETS} value={form.budget} onChange={update("budget")} testId="select-budget" />
                  <SelectField id="contractors" label="Contractors Contacted" options={CONTRACTORS} value={form.contractors_contacted} onChange={update("contractors_contacted")} testId="select-contractors" />

                  <SelectField id="hear" label="How did you hear about us?" options={HEAR} value={form.hear_about} onChange={update("hear_about")} testId="select-hear-about" />
                  {form.hear_about === "Other" ? (
                    <Field id="hear_other" label="Please specify" value={form.hear_about_other} onChange={update("hear_about_other")} testId="input-hear-other" />
                  ) : <div className="hidden md:block" />}

                  <Field id="location" label="Project Location — Town or Lake" value={form.project_location} onChange={update("project_location")} testId="input-location" />
                  <SelectField id="project_type" label="Type of Project" required options={PROJECT_TYPES} value={form.project_type} onChange={update("project_type")} testId="select-project-type" />

                  {form.project_type === "Other" && (
                    <Field id="project_type_other" label="Please specify project" value={form.project_type_other} onChange={update("project_type_other")} testId="input-project-type-other" />
                  )}

                  <div className="md:col-span-2 tl-field">
                    <textarea
                      id="notes"
                      placeholder=" "
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
                    className="mt-6 border border-red-400/40 bg-red-50 text-red-800 text-sm p-4"
                  >
                    {status.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  data-testid="contact-submit-button"
                  className="mt-10 w-full md:w-auto bg-[#00a34f] text-white text-[12px] tracking-[0.3em] uppercase px-14 py-5 hover:bg-[#01261d] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
