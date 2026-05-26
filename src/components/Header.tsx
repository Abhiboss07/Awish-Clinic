"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Clinic", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-7xl z-50 transition-all duration-500 ${
          scrolled
            ? "top-4 py-3 glass-hud border border-white/60 shadow-lg shadow-teal-500/2"
            : "top-6 py-4 bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group select-none">
            <span className="font-serif text-2xl font-bold tracking-wide text-clinic-dark group-hover:text-brand-teal transition-colors duration-300">
              AWISH
            </span>
            <span className="text-[9px] font-bold tracking-[0.35em] text-brand-teal -mt-1 uppercase">
              CLINIC
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13.5px] font-medium transition-all duration-300 rounded-full hover:text-brand-teal ${
                    isActive ? "text-brand-teal font-semibold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-brand-teal/8 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918287640479"
              className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 text-slate-700 hover:bg-slate-50 transition-all px-4 py-2 text-[12.5px] font-bold shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
              +91 82876 40479
            </a>
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center font-bold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white hover:opacity-95 shadow-md shadow-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 px-5.5 py-2.5 text-[12.5px]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-teal transition-colors z-50"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-semibold tracking-wide transition-colors ${
                    isActive ? "text-brand-teal font-extrabold" : "text-slate-600 hover:text-brand-teal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
              <a
                href="tel:+918287640479"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-teal" />
                +91 82876 40479
              </a>
              <Link
                href="/contact#booking"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center font-bold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white px-6 py-4 text-sm shadow-md shadow-teal-500/10 hover:opacity-95 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
