"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, ClinicalService } from "@/data/servicesData";
import { 
  Clock, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown, 
  Activity, 
  Heart,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Find the current service
  const service = servicesData.find((s) => s.slug === slug);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-clinic-bg px-6 text-center text-clinic-dark">
        <h1 className="font-serif text-4xl font-bold text-white mb-4">Treatment Not Found</h1>
        <p className="text-clinic-secondary max-w-md font-light mb-8">
          The clinical pathway you are seeking is either relocated or custom-designed. Explore our full directory below.
        </p>
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 bg-brand-pink text-white font-semibold rounded-full px-6 py-3 hover:bg-rose-700 transition-colors shadow-md shadow-rose-950/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    );
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blur Background Layers */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-80 right-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-60 left-10 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />

      {/* Dynamic Subpage Header Banner */}
      <section className="pt-20 pb-16 border-b border-slate-900/60 bg-[#08090d]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-pink uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-rose-455">Home</Link>
            <span className="text-slate-800">/</span>
            <Link href="/services" className="hover:text-rose-455">Services</Link>
            <span className="text-slate-800">/</span>
            <span className="text-slate-555">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
            <div>
              <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
                service.category === "surgical"
                  ? "bg-brand-pink/15 text-brand-pink border border-brand-pink/35"
                  : service.category === "skin-hair"
                  ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/35"
                  : "bg-brand-pink/10 text-rose-350 border border-brand-pink/20"
              }`}>
                {service.tag}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight">
                {service.name}
              </h1>
              <p className="mt-6 text-slate-300 text-base md:text-lg font-light leading-8 max-w-2xl">
                {service.longDescription}
              </p>
            </div>

            {/* Quick Metrics HUD Panel */}
            <div className="glass-panel p-6 md:p-8 rounded-[24px] bg-[#08090d]/65 border-slate-800/70 shadow-lg flex flex-col gap-6 w-full lg:mt-8">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-900/60">
                <Activity className="w-5 h-5 text-brand-pink" />
                <h3 className="font-serif text-lg font-bold text-white">Clinical Overview</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Success Rate</span>
                  <p className="text-xl font-bold text-brand-gold font-serif mt-1">{service.stats.successRate}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Recovery Time</span>
                  <p className="text-xl font-bold text-brand-gold font-serif mt-1">{service.stats.recoveryTime}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Duration</span>
                  <p className="text-xl font-bold text-brand-gold font-serif mt-1">{service.stats.procedureDuration}</p>
                </div>
                {service.stats.anesthesiaType && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Anesthesia</span>
                    <p className="text-xs font-semibold text-slate-300 mt-1.5 leading-4">{service.stats.anesthesiaType}</p>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-900/60 pt-5 mt-2 flex flex-col gap-2.5">
                {service.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400 font-light">
                    <Award className="w-4 h-4 text-brand-pink shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          
          {/* Left Column: Key Benefits & Methodology */}
          <div className="flex flex-col gap-14">
            
            {/* Key Benefits Block */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold text-white tracking-wide">
                Key Therapeutic Outcomes
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-xl bg-[#08090d]/50 border-slate-800/60 flex items-start gap-4 hover:border-brand-pink/40 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-brand-pink/15 flex items-center justify-center shrink-0 text-brand-pink font-serif font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm leading-6 font-medium">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Process Timeline */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold text-white tracking-wide">
                Step-by-Step Clinical Protocol
              </h2>
              <div className="relative pl-8 border-l border-slate-900/60 flex flex-col gap-10 mt-4">
                {service.process.map((step, idx) => {
                  const [title, desc] = step.split(":");
                  return (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot Indicator */}
                      <div className="absolute left-[-41px] top-1 w-6 h-6 rounded-full bg-clinic-bg border-2 border-brand-pink flex items-center justify-center shadow-sm z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                      </div>
                      
                      <div>
                        <h4 className="font-serif text-lg font-bold text-white group-hover:text-brand-pink transition-colors">
                          {title}
                        </h4>
                        <p className="mt-2 text-clinic-secondary text-sm leading-6 font-light">
                          {desc ? desc.trim() : ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Suitability, FAQs & Appointment Scheduling */}
          <div className="flex flex-col gap-12">
            
            {/* Suitability Panel */}
            <div className="glass-panel p-8 rounded-[24px] bg-[#08090d]/50 border-slate-800/60 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Sparkles className="w-5 h-5 text-brand-pink" />
                <h3 className="font-serif text-xl font-bold">Ideal Candidates</h3>
              </div>
              <p className="text-clinic-secondary text-sm leading-6 font-light">
                {service.suitability}
              </p>
            </div>

            {/* Structured FAQs Accordion */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2 text-white">
                <HelpCircle className="w-5 h-5 text-brand-pink" />
                <h3 className="font-serif text-2xl font-bold tracking-wide">Patient FAQs</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className="glass-panel rounded-xl overflow-hidden border-slate-850 bg-[#08090d]/40"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex items-center justify-between w-full p-5 text-left font-medium text-slate-200 text-sm hover:bg-slate-900 transition-colors"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand-pink" : ""
                        }`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 pt-1 text-clinic-secondary text-[13.5px] leading-6 font-light border-t border-slate-900/60">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Concierge Schedule Card */}
            <div className="glass-panel p-8 rounded-[24px] bg-gradient-to-br from-slate-950 to-[#08090d] border border-slate-800/80 text-white relative overflow-hidden shadow-xl shadow-black/50">
              <div className="absolute top-[-30px] right-[-30px] w-36 h-36 rounded-full bg-brand-pink/5 blur-2xl" />
              
              <h3 className="font-serif text-2xl font-bold tracking-wide leading-8">
                Ready to Consult a Specialist?
              </h3>
              <p className="mt-3 text-clinic-secondary text-[13px] leading-6 font-light">
                Private, compassionate, one-on-one evaluations with board-certified physicians. Setup your diagnostic visit.
              </p>
              
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-brand-pink hover:bg-rose-700 transition-colors shadow-md shadow-rose-950/20"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
