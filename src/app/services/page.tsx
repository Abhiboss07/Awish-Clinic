"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { servicesData, ClinicalService } from "@/data/servicesData";
import { Sparkles, Activity, ShieldAlert, ArrowRight, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "surgical" | "skin-hair" | "weight">("all");

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blur Background Layers */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-60 right-0 w-96 h-96 rounded-full bg-brand-lavender/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/3 w-96 h-96 rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />

      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-200/85 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-teal uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-brand-teal">Home</Link>
            <span className="text-slate-200">/</span>
            <span className="text-slate-500">Services</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-clinic-dark">
            Clinical Services & Treatments
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            Dermatologist-led pathways and advanced surgical procedures designed around your aesthetic and hormonal wellness goals.
          </p>
        </div>
      </section>

      {/* Services Grid Section with Filters */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Category Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl mx-auto">
          {[
            { id: "all", label: "All Treatments" },
            { id: "surgical", label: "Surgical / Aesthetic" },
            { id: "skin-hair", label: "Skin & Hair" },
            { id: "weight", label: "Weight Management" }
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-white bg-brand-teal shadow-md shadow-teal-500/20"
                    : "text-slate-650 bg-white border border-slate-200 hover:bg-slate-50 hover:text-brand-teal hover:border-brand-teal/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ClinicalService) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={service.slug}
                className="glass-panel p-8 rounded-[24px] bg-white/80 border-slate-200/80 shadow-sm hover:shadow-[0_20px_40px_rgba(13,148,136,0.04)] hover:border-brand-teal/40 transition-all duration-350 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      service.category === "surgical"
                        ? "bg-brand-teal/10 text-brand-teal border border-brand-teal/20"
                        : service.category === "skin-hair"
                        ? "bg-brand-lavender/10 text-brand-lavender border border-brand-lavender/20"
                        : "bg-brand-teal/5 text-brand-teal/80 border border-brand-teal/15"
                    }`}>
                      {service.tag}
                    </span>
                    
                    <span className="text-[11px] font-semibold text-slate-500 font-serif italic">
                      SR: {service.stats.successRate}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold tracking-wide text-clinic-dark group-hover:text-brand-teal transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-4 text-clinic-secondary text-[13.5px] leading-6 font-light">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-3">
                      Key Highlights
                    </span>
                    <ul className="flex flex-col gap-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12.5px] font-light text-clinic-secondary leading-5">
                          <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-light mb-1">
                    <span>Duration: {service.stats.procedureDuration}</span>
                    <span>Recovery: {service.stats.recoveryTime}</span>
                  </div>
                  
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-semibold text-brand-teal bg-brand-teal/5 border border-brand-teal/10 group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal transition-all duration-300 shadow-sm"
                  >
                    View Clinical Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      {/* Booking CTA Section */}
      <section className="pt-16 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-panel p-10 md:p-12 rounded-[32px] bg-gradient-to-br from-brand-teal/5 via-white to-brand-lavender/5 border-slate-200/80 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-brand-teal/10 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-brand-lavender/10 blur-2xl" />
          
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal relative z-10">Private Appointments</span>
          <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl font-serif tracking-wide mt-4 relative z-10">
            Need Guidance on a Treatment?
          </h2>
          <p className="mt-4 text-clinic-secondary text-base leading-7 font-light max-w-xl mx-auto relative z-10">
            Consult one-on-one with Dr. Vijay Kumar or Dr. Pooja Varshney. We will review your diagnostics, outline clear success variables, and recommend the best therapeutic pathways.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap relative z-10">
            <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white hover:opacity-90 shadow-md shadow-teal-500/20 transition-all duration-300 px-7 py-3.5 text-sm">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
