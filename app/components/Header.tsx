"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0F]/90 backdrop-blur-sm border-b border-[#1E1E28]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Axion Systems"
            width={200}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Soluções", href: "#solucoes" },
            { label: "Sobre", href: "#sobre" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#8A8A93] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contato"
            className="text-sm font-medium px-5 py-2 bg-[#00C853] text-black rounded hover:bg-[#00B84A] transition-colors duration-200"
          >
            Solicitar demonstração
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#121217] border-t border-[#1E1E28] px-6 py-6 flex flex-col gap-5">
          {[
            { label: "Soluções", href: "#solucoes" },
            { label: "Sobre", href: "#sobre" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#8A8A93] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium px-5 py-2.5 bg-[#00C853] text-black rounded hover:bg-[#00B84A] transition-colors text-center"
          >
            Solicitar demonstração
          </a>
        </div>
      )}
    </header>
  );
}
