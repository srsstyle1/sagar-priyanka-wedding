"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#journey" },
  { label: "Events", href: "#events" },
  { label: "Venue", href: "#venue" },
  { label: "Countdown", href: "#countdown" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/10 bg-[#12050B]/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#hero" className="group transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex flex-col">
        <span className="text-xl font-semibold uppercase tracking-[4px] text-[#D4AF37] transition-all duration-300 group-hover:text-[#F4D77A]">
            Sagar ✦ Priyanka
        </span>

        <span className="mt-1 whitespace-nowrap text-[10px] uppercase tracking-[4px] text-white/60">
              26 June 2026
           </span>
         </div>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
              group
              relative
              text-sm
              uppercase
              tracking-[4px]
              text-white/80
              transition
              duration-300
              hover:text-[#D4AF37]
              "
            >
              {item.label}
              <span
              className="
              absolute
              -bottom-2
              left-0
              h-[2px]
              w-0
              bg-[#D4AF37]
              transition-all
              duration-300
              group-hover:w-full
             "
            />
            </a>
          ))}

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#D4AF37] md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#D4AF37]/10 bg-[#12050B]/95 backdrop-blur-2xl md:hidden">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
              block
              border-b
              border-white/10
              px-6
              py-5
              text-sm
              uppercase
              tracking-[4px]
              text-white/80
              transition
              hover:bg-white/5
              hover:text-[#D4AF37]
              ">
              {item.label}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}