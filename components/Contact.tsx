"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: "📍", label: "Location", value: "Kisumu, Kenya" },
    { icon: "📧", label: "Email Us", value: "info@noventratechnologies.com" },
    { icon: "📞", label: "Call Us", value: "+254 700 000 000" },
    { icon: "⏰", label: "Business Hours", value: "Mon–Fri, 8:00 AM – 6:00 PM EAT" },
  ];

  return (
    <section id="contact" className="py-24 px-[5%]" style={{ background: "var(--ink)" }}>
      <div className="grid gap-14 items-start" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
            <span className="w-7 h-0.5 bg-teal" />
            Get In Touch
          </div>
          <h2 className="font-dm font-extrabold text-white text-4xl mb-4 leading-tight">
            Let's Build Something<br />
            <span className="text-teal">Remarkable</span> Together.
          </h2>
          <p className="text-muted mb-10">Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you. Our team responds within 24 hours.</p>

          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(0,200,160,0.1)", border: "1px solid rgba(0,200,160,0.15)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <span className="block text-xs text-muted uppercase tracking-wider mb-0.5">{item.label}</span>
                  <strong className="text-white text-sm">{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-10 relative overflow-hidden"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #00c8a0, #0ea5e9)" }} />
          <h3 className="font-dm font-bold text-white text-xl mb-6">Send Us a Message</h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                { name: "firstName", label: "First Name", placeholder: "John" },
                { name: "lastName", label: "Last Name", placeholder: "Doe" },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted font-medium">{f.label}</label>
                  <input
                    name={f.name}
                    type="text"
                    placeholder={f.placeholder}
                    value={(form as any)[f.name]}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 focus:border-teal"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", fontFamily: "inherit" }}
                  />
                </div>
              ))}
            </div>

            {[
              { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
              { name: "company", label: "Company / Organization", type: "text", placeholder: "Your company name" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-1.5 mb-4">
                <label className="text-xs text-muted font-medium">{f.label}</label>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={(form as any)[f.name]}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-white text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", fontFamily: "inherit" }}
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5 mb-4">
              <label className="text-xs text-muted font-medium">Service of Interest</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg text-white text-sm outline-none"
                style={{ background: "var(--ink2)", border: "1px solid var(--border)", fontFamily: "inherit" }}
              >
                <option value="">Select a service...</option>
                <option>IT Consultancy & Advisory</option>
                <option>Networking Services</option>
                <option>Software Development</option>
                <option>Digital Development</option>
                <option>Cloud Services & Support</option>
                <option>Cybersecurity Services</option>
                <option>Managed IT Services</option>
                <option>Data & Analytics</option>
                <option>Training & Capacity Building</option>
                <option>Multiple Services</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs text-muted font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project or challenge..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="px-4 py-3 rounded-lg text-white text-sm outline-none resize-y"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", fontFamily: "inherit" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-dm font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: submitted ? "linear-gradient(135deg,#00c8a0,#00a882)" : "linear-gradient(135deg,#00c8a0,#0ea5e9)",
                boxShadow: "0 4px 24px rgba(0,200,160,0.3)",
              }}
            >
              {submitted ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
