import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

// About section inline
function About() {
  const values = [
    { icon: "🚀", label: "Innovation" },
    { icon: "🤝", label: "Integrity" },
    { icon: "⭐", label: "Excellence" },
    { icon: "🔗", label: "Collaboration" },
    { icon: "🛡️", label: "Reliability" },
    { icon: "⚡", label: "Agility" },
  ];
  return (
    <section id="about" className="py-24 px-[5%]" style={{ background: "var(--ink2)" }}>
      <div className="grid gap-14 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
            <span className="w-7 h-0.5 bg-teal" />
            Who We Are
          </div>
          <h2 className="font-dm font-extrabold text-white tracking-tight mb-4" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Your Complete Technology Partner
          </h2>
          <p className="text-muted mb-4 leading-relaxed">Noventra Technologies is a full-spectrum IT company bringing together certified engineers, software architects, cybersecurity specialists, and digital strategists under one roof. We don't just solve technical problems — we align technology with your business goals.</p>
          <p className="text-muted mb-8 leading-relaxed">From startups to enterprises, we tailor our approach to match your ambition. Our mission: deliver reliable, intelligent, and future-proof technology that works.</p>
          <div className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#e2e8f8] transition-all duration-200 hover:cursor-default"
                style={{ background: "rgba(0,200,160,0.07)", border: "1px solid rgba(0,200,160,0.15)" }}
              >
                <span className="text-xl">{v.icon}</span>
                {v.label}
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-2xl p-10 relative overflow-hidden"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg,#00c8a0,#0ea5e9)" }} />
          <div className="mb-7">
            <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
              <span className="w-5 h-0.5 bg-teal" />Our Mission
            </div>
            <p className="text-[#e2e8f8] leading-relaxed italic">"To empower businesses with cutting-edge technology — enabling smarter operations, faster growth, and confident competition in a digital-first world."</p>
          </div>
          <div className="mb-7 pt-7" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
              <span className="w-5 h-0.5 bg-teal" />Our Vision
            </div>
            <p className="text-[#e2e8f8] leading-relaxed italic">"To be the most trusted technology partner across Africa and beyond, recognized for innovation, integrity, and transformative impact."</p>
          </div>
          <div className="pt-7" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
              <span className="w-5 h-0.5 bg-teal" />Our Motto
            </div>
            <p className="font-dm font-extrabold text-teal text-2xl">"Noventra Technologies, Innovating Today. Transform Tomorrow."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Us
function WhyUs() {
  const points = [
    { num: "01", title: "Certified Professionals", desc: "Our team holds industry certifications across Microsoft, AWS, Cisco, and CompTIA — ensuring world-class delivery." },
    { num: "02", title: "End-to-End Ownership", desc: "From discovery and design to deployment and ongoing support — we see every project through with accountability." },
    { num: "03", title: "Locally Rooted, Globally Aligned", desc: "We understand the African business landscape while delivering solutions aligned with global technology standards." },
    { num: "04", title: "Scalable & Future-Proof", desc: "We architect solutions that grow with your business — designed for today, built for tomorrow's demands." },
  ];
  return (
    <section id="why" className="py-24 px-[5%]" style={{ background: "var(--ink2)" }}>
      <div className="grid gap-14 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
            <span className="w-7 h-0.5 bg-teal" />Why Noventra
          </div>
          <h2 className="font-dm font-extrabold text-white tracking-tight mb-3" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            The Noventra Difference
          </h2>
          <p className="text-muted mb-10">We're not just vendors — we're partners invested in your long-term success.</p>
          <div className="flex flex-col gap-4">
            {points.map((p) => (
              <div
                key={p.num}
                className="flex gap-5 items-start p-6 rounded-xl transition-all duration-200"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <span className="font-dm font-extrabold text-3xl leading-none" style={{ color: "rgba(0,200,160,0.3)", minWidth: "40px" }}>{p.num}</span>
                <div>
                  <h4 className="font-dm font-bold text-white mb-1">{p.title}</h4>
                  <p className="text-muted text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h3 className="font-dm font-extrabold text-white leading-tight mb-5" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            "Where<br /><span className="text-teal">Innovation</span><br />Meets<br />Infrastructure."
          </h3>
          <p className="text-muted text-sm mb-8">Every solution we deliver is purpose-built, rigorously tested, and backed by our commitment to excellence.</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white no-underline w-full"
            style={{ background: "linear-gradient(135deg,#00c8a0,#0ea5e9)", boxShadow: "0 4px 24px rgba(0,200,160,0.3)" }}
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}

// Process
function Process() {
  const steps = [
    { n: "01", title: "Discovery", desc: "We listen, ask the right questions, and deeply understand your business challenges and goals." },
    { n: "02", title: "Strategy & Design", desc: "Our experts craft a tailored solution architecture and project roadmap aligned with your vision." },
    { n: "03", title: "Build & Deploy", desc: "We execute with precision — developing, testing, and deploying your solution on time and spec." },
    { n: "04", title: "Support & Grow", desc: "Post-delivery, we remain your trusted partner — monitoring, optimizing, and scaling your investment." },
  ];
  return (
    <section id="process" className="py-24 px-[5%]" style={{ background: "var(--ink)" }}>
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
          <span className="w-7 h-0.5 bg-teal" />How We Work<span className="w-7 h-0.5 bg-teal" />
        </div>
        <h2 className="font-dm font-extrabold text-white tracking-tight mb-3" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
          Our Engagement Process
        </h2>
        <p className="text-muted mx-auto max-w-md">A structured, transparent approach — from first contact to full delivery.</p>
      </div>
      <div className="grid grid-cols-4 gap-6 relative">
        <div className="absolute top-9 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg,transparent,#00c8a0,#0ea5e9,transparent)" }} />
        {steps.map((s) => (
          <div key={s.n} className="text-center relative z-10 px-4">
            <div
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 font-dm font-extrabold text-xl text-teal"
              style={{ background: "var(--card)", border: "2px solid #00c8a0", boxShadow: "0 0 20px rgba(0,200,160,0.2)" }}
            >
              {s.n}
            </div>
            <h4 className="font-dm font-bold text-white mb-2 text-sm">{s.title}</h4>
            <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Industries
function Industries() {
  const list = [
    "Small & Medium Enterprises", "Large Corporations", "Government Agencies",
    "NGOs & Non-Profits", "Educational Institutions", "Healthcare & Hospitals",
    "Financial Services & FinTech", "Startups & Entrepreneurs",
    "Retail & E-Commerce", "Manufacturing & Logistics", "Real Estate", "Media & Publishing",
  ];
  return (
    <section id="industries" className="py-24 px-[5%]" style={{ background: "var(--ink2)" }}>
      <div className="mb-12">
        <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[2.5px] uppercase mb-3">
          <span className="w-7 h-0.5 bg-teal" />Industries We Serve
        </div>
        <h2 className="font-dm font-extrabold text-white tracking-tight mb-3" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
          Built for Every Sector
        </h2>
        <p className="text-muted max-w-lg">We bring specialized knowledge and adaptable solutions across a wide range of industries.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {list.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium text-[#e2e8f8] transition-all duration-200 cursor-default hover:border-teal/30"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <span className="w-2 h-2 rounded-full bg-teal" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="px-[5%] pt-16 pb-8" style={{ background: "var(--ink2)", borderTop: "1px solid var(--border)" }}>
      <div className="grid gap-12 mb-12" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
        <div>
          <div className="mb-4">
            <Image src="/logo.png" alt="Noventra Technologies" width={200} height={50} style={{ objectFit: "contain", height: "70px", width: "auto" }} />
          </div>
          <p className="text-muted text-sm max-w-xs">Innovating Today. Transform Tomorrow. Your end-to-end technology partner for growth, security, and digital excellence.</p>
        </div>
        {[
          { title: "Services", links: ["IT Consultancy", "Networking", "Software Dev", "Cloud Services", "Cybersecurity"] },
          { title: "Company", links: ["About Us", "Why Noventra", "Our Process", "Industries", "Careers"] },
          { title: "Contact", links: ["Kisumu, Kenya", "info@noventratechnologies.com", "+254 700 000 000", "Support Portal"] },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="font-dm font-bold text-white text-xs uppercase tracking-wider mb-4">{col.title}</h5>
            {col.links.map((l) => (
              <a key={l} href="#" className="block text-muted text-sm mb-2.5 hover:text-teal transition-colors no-underline">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-muted text-xs">© 2024 Noventra Technologies. All rights reserved.</p>
        <div className="flex gap-3">
          {["in", "tw", "fb", "yt"].map((s) => (
            <a key={s} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-muted text-xs hover:text-teal transition-colors no-underline" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)" }}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
