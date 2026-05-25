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
      setScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-clinic-bg/90 backdrop-blur-md border-b border-slate-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-2xl font-bold tracking-wide text-white group-hover:text-brand-pink transition-colors duration-300">
              AWISH
            </span>
            <span className="text-[9px] font-semibold tracking-[0.35em] text-brand-pink -mt-1 uppercase">
              CLINIC
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-medium transition-all duration-300 rounded-full hover:text-brand-pink ${
                    isActive ? "text-brand-pink font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-brand-pink/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Nav Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918287640479"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 text-slate-700 hover:bg-slate-50 transition-colors px-5 py-2 text-[13px] font-semibold shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-pink" />
              +91 82876 40479
            </a>
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center font-semibold rounded-full bg-brand-pink text-white hover:bg-rose-700 shadow-md hover:shadow-lg hover:shadow-rose-950/20 transition-all duration-300 px-6 py-2.5 text-[13px]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-pink transition-colors z-50"
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
            className="fixed inset-0 bg-clinic-bg/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-medium tracking-wide transition-colors ${
                    isActive ? "text-brand-pink font-bold" : "text-slate-700 hover:text-brand-pink"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
              <a
                href="tel:+918287640479"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-pink" />
                +91 82876 40479
              </a>
              <Link
                href="/contact#booking"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center font-semibold rounded-full bg-brand-pink text-white px-6 py-3.5 text-sm shadow-md hover:bg-rose-700 transition-colors"
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
