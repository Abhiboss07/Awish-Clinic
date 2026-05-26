import { Image as ImageIcon, Sparkles, Building, Video } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const items = [
    { title: "Clinic Environment", label: "Reception & Lounge", location: "Sarita Vihar, Delhi", type: "suite" },
    { title: "Private Consultation Suite", label: "One-on-One Consultations", location: "Sector 31, Gurugram", type: "consult" },
    { title: "Laser Treatment Room", label: "FDA-Approved Laser Setups", location: "Primary Clinic, New Delhi", type: "treatment" },
    { title: "Hair Restoration Suite", label: "FUE & PRP Care Room", location: "Swej Farm, Jaipur", type: "treatment" },
    { title: "Cosmetology Space", label: "Peels & Facial Wellness", location: "Sarita Vihar, Delhi", type: "suite" },
    { title: "Weight Management Center", label: "Cryolipolysis Contouring", location: "East Patel Nagar, Delhi", type: "consult" },
  ];

  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -z-10" />

      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-900/60 bg-[#08090d]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-pink uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-rose-450">Home</Link>
            <span className="text-slate-800">/</span>
            <span className="text-slate-550">Gallery</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-white">
            Clinic Gallery
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            See our state-of-the-art visual touchpoints, medical setups, and professional treatment environments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">Visual Directory</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-wide mt-4">
            Take a virtual tour of our diagnostic sanctuary.
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="glass-panel relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800/60 bg-[#08090d]/60 shadow-md hover:shadow-[0_20px_50px_rgba(255,0,60,0.03)] hover:border-brand-pink/40 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
              
              {/* Decorative Float Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink transition-transform duration-500 group-hover:scale-105">
                {item.type === "suite" ? <Building className="w-5 h-5" /> : item.type === "consult" ? <Sparkles className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
              </div>

              <h4 className="font-serif text-xl font-semibold text-white mt-5">{item.title}</h4>
              <p className="text-xs font-semibold text-brand-gold tracking-wider uppercase mt-1">{item.label}</p>
              
              <span className="text-[10px] font-bold text-brand-pink bg-brand-pink/10 border border-brand-pink/20 px-2.5 py-1 rounded-full mt-4 block">
                {item.location}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Transformations Disclaimer */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel p-8 md:p-12 rounded-[28px] bg-[#08090d]/60 border-slate-800/60 border-t-[3px] border-t-brand-pink shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">Clinical transformations</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-wide mt-4">
            Patient Confidentiality & Board Ethics
          </h2>
          <p className="mt-4 text-clinic-secondary text-sm md:text-base leading-8 font-light max-w-2xl mx-auto">
            We maintain absolute patient confidentiality. Case-specific before and after results, high-resolution treatment records, and procedural details are shared directly with candidates during private clinic consultations, strictly aligned with board-certified medical ethics and standards.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-full bg-brand-pink text-white hover:bg-rose-700 shadow-md hover:shadow-rose-950/20 transition-all duration-300 px-6 py-3.5 text-sm">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
