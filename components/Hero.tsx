"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "9+", label: "Service Verticals" },
  { num: "100%", label: "Client Commitment" },
  { num: "24/7", label: "Support Available" },
  { num: "∞", label: "Scalable Solutions" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[5%] pt-[120px] pb-20 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,160,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,200,160,0.12) 0%, transparent 70%)", animation: "pulse 6s ease-in-out infinite alternate" }}
      />
      <div
        className="absolute bottom-[-50px] left-[5%] w-[400px] h-[400px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite alternate-reverse" }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(0,200,160,0.1)",
            border: "1px solid rgba(0,200,160,0.25)",
            color: "#00c8a0",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal" style={{ animation: "blink 1.5s infinite" }} />
          Your Trusted IT Partner.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="font-dm font-extrabold text-white leading-[1.05] tracking-tight mb-6"
  style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
>
  Innovating{" "}
  <em className="not-italic text-teal">Today,</em>
  <br />
  <span className="whitespace-nowrap">
    Transform Tomorrow.
  </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted text-lg leading-relaxed max-w-xl mb-10"
        >
          Noventra Technologies delivers end-to-end IT solutions — from strategic consultancy and cloud infrastructure to custom software development and cybersecurity — empowering your organization to thrive in a digital-first world.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #00c8a0, #0ea5e9)",
              boxShadow: "0 4px 24px rgba(0,200,160,0.3)",
            }}
          >
            Explore Services →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white no-underline transition-all duration-200 hover:bg-white/5"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Talk to an Expert
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-10 mt-16 pt-10 flex-wrap"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-dm font-extrabold text-white text-3xl">{s.num}</span>
              <span className="text-xs text-muted tracking-wide">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse { from { opacity:0.6; transform:scale(1); } to { opacity:1; transform:scale(1.1); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
      `}</style>
    </section>
  );
}
