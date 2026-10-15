"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-all duration-300 ${
          scrolled ? "border-b border-teal/10" : "border-b border-white/5"
        }`}
        style={{
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(5, 5, 9, 0.88)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/logo.png"
            alt="Noventra Technologies"
            width={220}
            height={55}
            style={{ objectFit: "contain", height: "85px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white text-sm font-medium transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-teal text-ink px-5 py-2 rounded-lg text-sm font-bold hover:bg-teal2 transition-all duration-200 no-underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(10,14,26,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="absolute top-5 left-5">
            <Image src="/logo.png" alt="Noventra Technologies" width={160} height={40} style={{ objectFit: "contain", height: "36px", width: "auto" }} />
          </div>
          <button className="absolute top-6 right-6 text-white" onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-2xl font-bold text-white hover:text-teal transition-colors no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-teal text-ink px-8 py-3 rounded-lg font-bold text-lg no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
