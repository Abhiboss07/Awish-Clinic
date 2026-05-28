"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin
} from "lucide-react";
import BookingWizard from "@/components/BookingWizard";

interface Branch {
  name: string;
  type: string;
  address: string;
  colorClass: string;
}

const BRANCHES: Branch[] = [
  {
    name: "Sarita Vihar, New Delhi (Primary Clinic)",
    type: "Primary Surgical & Aesthetics Hub",
    address: "L-5, 5, Pocket L, Sarita Vihar, New Delhi, Delhi 110076",
    colorClass: "border-l-brand-teal"
  },
  {
    name: "Sector 31, Gurugram (Consultation)",
    type: "Consultation & Diagnostics",
    address: "694, near Govt. Model Sanskriti Primary School, Sector 31, Gurugram, Haryana 122001",
    colorClass: "border-l-brand-lavender"
  },
  {
    name: "East Patel Nagar, New Delhi",
    type: "Dermatology & Skin Center",
    address: "Back Side, 25/4, Block 25, East Patel Nagar, Patel Nagar, New Delhi, Delhi 110008",
    colorClass: "border-l-brand-teal"
  },
  {
    name: "Swej Farm, Jaipur (Jaipur Branch)",
    type: "Advanced Skin & Laser Suite",
    address: "FIRST FLOOR, S-7, SWEJ FARM, opp. MAHIMA TRAINITY MALL, Civil Lines, Jaipur, Rajasthan 302019",
    colorClass: "border-l-brand-lavender"
  }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-60 right-0 w-96 h-96 rounded-full bg-brand-lavender/3 blur-[120px] pointer-events-none -z-10" />
      
      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-200/80 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-teal uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-brand-teal">Home</Link>
            <span className="text-slate-200">/</span>
            <span className="text-slate-500">Contact</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-clinic-dark">
            Reach the Clinic
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            Delhi-first clinical care with direct appointment coordination across four modular branches.
          </p>
        </div>
      </section>

      {/* Main Coordinate Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          
          {/* Column 1: Direct Coordinates */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">General Coordinates</span>
              <h2 className="text-3xl font-serif font-bold text-clinic-dark tracking-wide mt-3">
                Connect with our Medical Advisors
              </h2>
              <p className="mt-4 text-clinic-secondary text-[14.5px] leading-7 font-light">
                For prompt scheduling, clinical evaluations, or multi-location availability, connect directly with our patient care leads.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { 
                  icon: <Phone className="w-5 h-5 text-brand-teal" />, 
                  title: "Direct Call & WhatsApp", 
                  detail: "+91 82876 40479", 
                  sub: "Instant clinical scheduling support" 
                },
                { 
                  icon: <Mail className="w-5 h-5 text-brand-teal" />, 
                  title: "Concierge Email", 
                  detail: "awishclinics@gmail.com", 
                  sub: "For general or business inquiries" 
                },
                { 
                  icon: <Clock className="w-5 h-5 text-brand-teal" />, 
                  title: "Operating Hours", 
                  detail: "Mon - Sun: 10:00 AM - 8:00 PM", 
                  sub: "Available 7 Days a week" 
                }
              ].map((coord, idx) => (
                <div key={idx} className="glass-panel p-6 bg-white/80 border-slate-200/80 rounded-2xl flex items-start gap-4 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                    {coord.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{coord.title}</h4>
                    <p className="text-lg font-semibold text-clinic-dark mt-1">{coord.detail}</p>
                    <p className="text-[11px] font-light text-clinic-secondary mt-0.5">{coord.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Available Branches */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Clinic Locations</span>
              <h2 className="text-3xl font-serif font-bold text-clinic-dark tracking-wide mt-3">
                Our Consultation Hubs
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {BRANCHES.map((branch, idx) => (
                <div 
                  key={idx} 
                  className={`glass-panel p-6 rounded-2xl border-l-[4px] ${branch.colorClass} bg-white/80 border-slate-200/80 shadow-md flex items-start gap-4 hover:border-brand-teal/40 hover:bg-white transition-all duration-300`}
                >
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-[15px] font-bold text-clinic-dark">{branch.name}</h4>
                    <p className="text-[10px] font-bold text-brand-lavender uppercase tracking-wider mt-0.5">{branch.type}</p>
                    <p className="text-xs text-clinic-secondary font-light leading-5 mt-2">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECURE SCHEDULER WIZARD SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative z-10" id="booking">
        <div className="max-w-4xl mx-auto px-6 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Premium Consultation</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl font-serif tracking-wide mt-4">
              Begin Your Bespoke Transformation
            </h2>
            <p className="mt-4 text-clinic-secondary text-sm leading-7 font-light">
              Secure private, board-certified physician sessions. Fill out our responsive 4-step consultation wizard.
            </p>
          </div>

          <BookingWizard />
        </div>
      </section>

    </div>
  );
}
