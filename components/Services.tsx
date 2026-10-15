"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🧭",
    title: "IT Consultancy & Advisory",
    desc: "Strategic technology guidance tailored to your goals. We assess, plan, and roadmap your digital transformation journey from day one.",
    tags: ["IT Strategy", "Digital Transformation", "IT Audits", "Project Management"],
  },
  {
    icon: "🌐",
    title: "Networking Services",
    desc: "We design and deploy fast, secure, and scalable network infrastructures — from LAN/WAN to enterprise-grade SD-WAN solutions.",
    tags: ["LAN/WAN/WLAN", "Firewall & VPN", "Structured Cabling", "SD-WAN"],
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Custom-built web apps, enterprise systems, mobile applications, and APIs — crafted to solve your unique business challenges.",
    tags: ["Web Apps", "ERP / CRM", "Mobile Apps", "API Integration"],
  },
  {
    icon: "✨",
    title: "Digital Development",
    desc: "Compelling websites, e-commerce platforms, UI/UX design, and digital branding that convert visitors into customers.",
    tags: ["Web Design", "E-Commerce", "UI/UX", "SEO & PWA"],
  },
  {
    icon: "☁️",
    title: "Cloud Services & Support",
    desc: "Migrate, manage, and optimize your cloud operations across AWS, Azure, and Google Cloud — securely and cost-efficiently.",
    tags: ["Cloud Migration", "Azure / AWS / GCP", "Disaster Recovery", "FinOps"],
  },
  {
    icon: "🔐",
    title: "Cybersecurity Services",
    desc: "Protect your digital assets with comprehensive security assessments, threat detection, incident response, and compliance.",
    tags: ["Pen Testing", "SIEM / EDR", "IAM / DLP", "ISO 27001"],
  },
  {
    icon: "🛠️",
    title: "Managed IT Services",
    desc: "Proactive 24/7 IT support, remote and on-site assistance, server administration, and full infrastructure management.",
    tags: ["24/7 Helpdesk", "Server Admin", "Asset Management", "CCTV Integration"],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Transform raw data into actionable business intelligence with BI dashboards, warehousing, and predictive analytics.",
    tags: ["Power BI", "Data Warehousing", "Machine Learning", "ETL Pipelines"],
  },
  {
    icon: "🎓",
    title: "Training & Capacity Building",
    desc: "Corporate IT training, cybersecurity workshops, cloud certification prep, and digital literacy programs for your teams.",
    tags: ["Corporate Training", "Security Workshops", "Cert Prep", "Digital Literacy"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5%]" style={{ background: "var(--ink)" }}>
      <div className="mb-14">
        <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
          <span className="w-7 h-0.5 bg-teal" />
          What We Do
        </div>
        <h2 className="font-dm font-extrabold text-white tracking-tight mb-3" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
          Comprehensive IT Services
        </h2>
        <p className="text-muted max-w-lg">From strategy to execution — we cover every dimension of your technology needs.</p>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))" }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            className="rounded-2xl p-8 cursor-default group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,160,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(0,200,160,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div
              className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{
                width: "52px",
                height: "52px",
                background: "linear-gradient(135deg, rgba(0,200,160,0.15), rgba(14,165,233,0.1))",
                border: "1px solid rgba(0,200,160,0.2)",
              }}
            >
              {s.icon}
            </div>
            <h3 className="font-dm font-bold text-white text-lg mb-2">{s.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full text-muted"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
