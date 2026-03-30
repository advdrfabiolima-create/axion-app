"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Trava o scroll do body quando o menu está aberto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0F]/90 backdrop-blur-sm border-b border-[#1E1E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* data-nav-logo: used by BrandIntro to measure exact position for the landing transition */}
          <div data-nav-logo>
            <Image
              src="/logo.png"
              alt="Axion Systems"
              width={200}
              height={52}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-200 tracking-wide ${
                pathname === item.href
                  ? "text-white"
                  : "text-[#8A8A93] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contato"
            className="text-sm font-medium px-5 py-2 bg-[#00C853] text-black rounded hover:bg-[#00B84A] transition-colors duration-200 whitespace-nowrap"
          >
            Solicitar demonstração
          </Link>
        </div>

        {/* Mobile: CTA compacto + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/contato"
            className="text-xs font-medium px-3 py-1.5 bg-[#00C853] text-black rounded hover:bg-[#00B84A] transition-colors duration-200 whitespace-nowrap"
          >
            Demonstração
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded border border-[#1E1E28] bg-[#121217] hover:border-[#2E2E38] transition-colors duration-200"
          >
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                backgroundColor: "white",
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                backgroundColor: "white",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "16px",
                height: "2px",
                backgroundColor: "white",
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide down */}
      <div
        style={{
          maxHeight: mobileOpen ? "384px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
        className="md:hidden"
      >
        <div className="bg-[#0F0F14] border-t border-[#1E1E28] px-4 py-6 flex flex-col gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-3 rounded-lg text-sm transition-colors duration-200 ${
                pathname === item.href
                  ? "text-white bg-[#1E1E28]"
                  : "text-[#8A8A93] hover:text-white hover:bg-[#1A1A22]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-[#1E1E28]">
            <Link
              href="/contato"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00C853] text-black font-semibold text-sm rounded hover:bg-[#00B84A] transition-colors duration-200 w-full"
            >
              Solicitar demonstração
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
