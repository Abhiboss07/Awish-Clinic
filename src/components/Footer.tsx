import Link from "next/link";
import { Mail, PhoneCall, MapPin, Calendar, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-clinic-bg border-t border-slate-900 overflow-hidden z-10">
      {/* Background Decorative Ambient Orb */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col w-fit group">
              <span className="font-serif text-3xl font-bold tracking-wide text-white group-hover:text-brand-pink transition-colors">
                AWISH
              </span>
              <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-pink -mt-1 uppercase">
                CLINIC
              </span>
            </Link>
            <p className="text-clinic-secondary text-[14px] leading-7 font-light">
              Premium Medical Aesthetics, Skincare, & Hormonal Wellness. Reimagining dermatology through advanced clinical diagnostics and luxury care.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-500 hover:text-brand-pink text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Clinic", href: "/about" },
                { name: "Meet the Team", href: "/team" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Gallery", href: "/gallery" },
                { name: "Book Consultation", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-clinic-secondary hover:text-brand-pink text-[14px] transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Clinical Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "FUE Hair Transplant", href: "/services/hair-transplant" },
                { name: "Pimple Scar Treatment", href: "/services/pimple-scar-treatment" },
                { name: "Anti-Aging Treatments", href: "/services/anti-aging-treatments" },
                { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
                { name: "Belly Cryo-Sculpt", href: "/services/non-surgical-weight-reduction" },
                { name: "Bariatric Weight Surgery", href: "/services/surgical-weight-reduction" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-clinic-secondary hover:text-brand-pink text-[14px] transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Primary Clinic
            </h4>
            <ul className="flex flex-col gap-4 text-clinic-secondary text-[14px] font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-1" />
                <span>
                  L-5, 5, Pocket L, Sarita Vihar,<br />
                  New Delhi, Delhi 110076, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-brand-pink shrink-0" />
                <a href="tel:+918287640479" className="hover:text-brand-pink transition-colors">
                  +91 82876 40479
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-pink shrink-0" />
                <a href="mailto:awishclinics@gmail.com" className="hover:text-brand-pink transition-colors">
                  awishclinics@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-pink shrink-0 mt-1" />
                <span>
                  Mon - Sun: 10:00 AM - 8:00 PM<br />
                  <span className="text-[11px] text-brand-pink font-semibold tracking-wide uppercase mt-1 block">Open 7 Days</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Legal */}
        <div className="mt-16 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs font-light">
            &copy; {currentYear} Awish Clinic. All Rights Reserved. Affordable care. Premium feel.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500 font-light">
            <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
