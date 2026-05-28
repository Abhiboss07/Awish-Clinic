"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroVisualizer from "@/components/HeroVisualizer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingWizard from "@/components/BookingWizard";
import { Sparkles, Compass, CheckCircle2, ChevronRight, ArrowRight, HelpCircle, ChevronDown, Award, Star } from "lucide-react";
import Link from "next/link";

const HOMEPAGE_SERVICES = [
  {
    title: "Follicular Restoration",
    desc: "Advanced cellular micro-grafting and platelet-rich plasma (PRP) treatments designed to stimulate dormant follicles and halt hair thinning.",
    categories: ["male", "female"],
    features: ["PRP Hair Restoration", "Cellular Stem Dermal-infusion", "Nutraceutical Stabilization"],
    link: "/services/hair-transplant"
  },
  {
    title: "Acne Erase Protocol",
    desc: "A medical-grade dermatological facial system utilizing targeted carbon lasers, light energy, and deeply exfoliating peels to refine and clear skin.",
    categories: ["male", "female", "skincare"],
    features: ["Q-Switched Carbon Laser", "Bespoke Salicylic Dermal Peels", "LED Photomicro Therapy"],
    link: "/services/pimple-scar-treatment"
  },
  {
    title: "Awish Glass Skin Glow",
    desc: "Our signature cocktail of high-concentration hyaluronic acid, glutathione, and micro-peptides infused via advanced gold needles for a flawless finish.",
    categories: ["female", "skincare"],
    features: ["24K Gold Micro-channeling", "Glutathione Hydration Cocktails", "Deep Dermabrasion Infusion"],
    link: "/services/white-glow"
  },
  {
    title: "Belly Fat Cryo-Sculpt",
    desc: "A premium cold-based adipose fat cell destruction treatment that safely targets localized fat deposits without needles, incisions, or downtime.",
    categories: ["male", "female"],
    features: ["Targeted Cryolipolysis", "High-Intensity Electro-Toning", "Lymphatic Drainage Therapy"],
    link: "/services/non-surgical-weight-reduction"
  },
  {
    title: "Hormonal & PCOS Wellness",
    desc: "Integrated endocrinological assessments and wellness paths specifically designed to target root causes of weight gain, irregular cycles, and stubborn acne.",
    categories: ["female"],
    features: ["Comprehensive Hormone Panels", "Insulin Resistance Rebalance", "Metabolic Lifestyle Integration"],
    link: "/services/overweight-treatment"
  },
  {
    title: "IV Stress & Fatigue Recovery",
    desc: "Intravenous wellness therapies delivering ultra-pure cellular nutrients, antioxidants, and trace elements to dramatically reduce stress and mental fog.",
    categories: ["male", "female"],
    features: ["Awish Executive Stress Drip", "NAD+ Youth & Cellular Energizer", "Super-Antioxidant Infusion"],
    link: "/services/iv-drips-skin-whitening"
  }
];

const HOMEPAGE_FAQS = [
  {
    q: "What should I expect during my first aesthetic consultation?",
    a: "Your journey begins with an in-depth 45-minute clinical assessment. We utilize multi-spectral skin analysis to diagnose sub-surface vascularity, melanin, and hydration levels, and combine it with a review of your hormonal profile if you are experiencing hair or metabolic weight concerns. From this, our board-certified dermatologists design a bespoke therapy roadmap."
  },
  {
    q: "Are the laser and microneedling treatments painful?",
    a: "Patient comfort is our top priority. We apply premium, medical-grade topical numbing anesthetics 30 minutes before any fractional laser or microneedling treatments. The sensation is described as a mild, warm tingling or light scratching. There is absolutely no intense pain, and we incorporate cooling air grids during the session."
  },
  {
    q: "How long will it take before I see visible results?",
    a: "Clinical skincare treatments like chemical peels and HydraFacials yield immediate, glowing results within 24 hours. Structural treatments like exosome microneedling, laser resurfacing, or hair restoration cycles require collagen synthesis and follicle activation time—visible improvements typically emerge within 4 to 8 weeks, peaking at 3 months."
  },
  {
    q: "Do you offer customized programs for both men and women?",
    a: "Absolutely. Awish Clinic is built with a deep understanding that male and female skin, hormone systems, and aesthetic goals differ fundamentally. Our treatments, diagnostic protocols, and medical pathways are tailored explicitly to gender-specific physiology to ensure maximum safety and biological efficacy."
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "male" | "female" | "skincare">("all");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const filteredServices = HOMEPAGE_SERVICES.filter((s) => {
    if (activeTab === "all") return true;
    return s.categories.includes(activeTab);
  });

  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-clinic-bg text-clinic-dark">
      
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-lavender/3 blur-[120px] pointer-events-none -z-10" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 overflow-visible bg-clinic-bg z-20">
        <HeroVisualizer />
      </section>


      {/* ================= ACHIEVEMENTS STATS SECTION ================= */}
      <section className="py-8 bg-slate-50 border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel rounded-[20px] p-6 text-center bg-white/80 border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Satisfied Patients</span>
            <p className="mt-2 text-3xl font-bold text-clinic-dark lg:text-4xl">30,000+</p>
            <p className="mt-2 text-[13px] leading-6 text-clinic-secondary font-light">A larger patient base reinforces the trust story associated with our clinic.</p>
          </div>

          <div className="glass-panel rounded-[20px] p-6 text-center bg-white/80 border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Health Sections</span>
            <p className="mt-2 text-3xl font-bold text-clinic-dark lg:text-4xl">15+</p>
            <p className="mt-2 text-[13px] leading-6 text-clinic-secondary font-light">The clinic positions itself as a broader clinical setup rather than a one-service practice.</p>
          </div>

          <div className="glass-panel rounded-[20px] p-6 text-center bg-white/80 border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Awards Won</span>
            <p className="mt-2 text-3xl font-bold text-clinic-dark lg:text-4xl">45+</p>
            <p className="mt-2 text-[13px] leading-6 text-clinic-secondary font-light">High-visibility proof points help the homepage feel more established and credible.</p>
          </div>

          <div className="glass-panel rounded-[20px] p-6 text-center bg-white/80 border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Open All Week</span>
            <p className="mt-2 text-3xl font-bold text-clinic-dark lg:text-4xl">7 Days</p>
            <p className="mt-2 text-[13px] leading-6 text-clinic-secondary font-light">The clinic clearly communicates Monday-to-Sunday accessibility across branches.</p>
          </div>

        </div>
      </section>

      {/* ================= DYNAMIC PREMIUM SERVICES SECTION ================= */}
      <section className="py-24 relative z-10" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Designed for Ultimate Transformation</span>
            <h2 className="mt-4 text-3xl font-bold text-clinic-dark sm:text-4xl lg:text-5xl font-serif tracking-wide">
              Bespoke Premium Treatments
            </h2>
            <p className="mt-4 text-clinic-secondary text-base font-light leading-7">
              Explore our highly customized key services, targeting specific aesthetic and wellness needs with state-of-the-art technology.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Services" },
                { id: "male", label: "Male Wellness" },
                { id: "female", label: "Female Wellness" },
                { id: "skincare", label: "Clinical Skincare" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white bg-brand-teal shadow shadow-teal-600/20"
                      : "text-clinic-secondary bg-slate-100/80 border border-slate-200/80 hover:bg-slate-200/50 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={service.title}
                  className="glass-panel p-8 rounded-[24px] bg-white/70 flex flex-col justify-between hover:shadow-lg hover:border-brand-teal/30 hover:bg-white transition-all group"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold tracking-wide text-clinic-dark group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-clinic-secondary text-[13.5px] leading-6 font-light">
                      {service.desc}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-light text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-bold text-white bg-clinic-dark hover:bg-brand-teal transition-colors shadow-sm"
                    >
                      Explore Protocol Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= BEFORE & AFTER INTERACTIVE TRANSFORMATION ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/80" id="before-after">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Before & After</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl lg:text-5xl font-serif tracking-wide">
              The proof is in the transformation.
            </h2>
            <p className="text-clinic-secondary text-base leading-8 font-light lg:text-lg">
              Drag the interactive slider handle on the image panel to witness the real-world, clinical results achieved through our custom Acne Erase & Skin Resurfacing programs.
            </p>
            
            <div className="flex flex-col gap-4 text-slate-700 text-[14px] font-light bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p><strong>Patient Case:</strong> #88392-A</p>
              <p><strong>Timeline:</strong> 8 Weeks (4 Sessions)</p>
              <p><strong>Treatments:</strong> Q-Switched Carbon Laser & Gold Microneedling</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto w-full">
            <BeforeAfterSlider />
          </div>

        </div>
      </section>

      {/* ================= MEET THE TEAM ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Elite Medical Minds</span>
          <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl lg:text-5xl font-serif tracking-wide mt-4">
            Meet our board-certified dermatologists.
          </h2>
          <p className="mt-4 text-clinic-secondary text-base leading-7 font-light lg:text-lg max-w-2xl mx-auto">
            Our team of MBBS, MD dermatologists provides expert clinical care and surgical restorations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto text-left">
            
            <div className="glass-panel p-8 rounded-[24px] bg-white/70 hover:bg-white hover:shadow-lg transition-all">
              <span className="inline-block text-[9px] font-bold tracking-wider uppercase text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2.5 py-1 rounded-full mb-4">
                Hair & Aesthetic Surgery Lead
              </span>
              <h3 className="text-2xl font-serif font-bold text-clinic-dark">Dr. Vijay Kumar</h3>
              <span className="text-sm font-semibold text-brand-lavender">MBBS, MD (Dermatologist)</span>
              <p className="text-[13.5px] leading-6 text-clinic-secondary font-light mt-4">
                Leads FUE hair transplants, beard growth procedures, aesthetic dermatology, and surgical cosmetic assessments across all Awish branches.
              </p>
              <Link href="/team" className="inline-flex items-center gap-1 mt-6 text-xs font-bold text-brand-teal uppercase tracking-widest hover:opacity-85">
                View Full Profile
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel p-8 rounded-[24px] bg-white/70 hover:bg-white hover:shadow-lg transition-all">
              <span className="inline-block text-[9px] font-bold tracking-wider uppercase text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2.5 py-1 rounded-full mb-4">
                Acne Scar & Rejuvenation Lead
              </span>
              <h3 className="text-2xl font-serif font-bold text-clinic-dark">Dr. Pooja Varshney</h3>
              <span className="text-sm font-semibold text-brand-lavender">MBBS, MD (Dermatologist)</span>
              <p className="text-[13.5px] leading-6 text-clinic-secondary font-light mt-4">
                Specialist in acne scar treatments, microneedling resurfacing, advanced chemical peels, and non-surgical aesthetic skin rebalancing.
              </p>
              <Link href="/team" className="inline-flex items-center gap-1 mt-6 text-xs font-bold text-brand-teal uppercase tracking-widest hover:opacity-85">
                View Full Profile
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Got Questions?</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl font-serif tracking-wide mt-4">
              Frequently Asked Inquiries
            </h2>
            <p className="mt-4 text-clinic-secondary text-sm leading-7 font-light">
              Clear, honest, and direct answers to help you feel confident before your first consultation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {HOMEPAGE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-panel rounded-xl overflow-hidden border-slate-200 bg-white/75"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="flex items-center justify-between w-full p-5 text-left font-semibold text-slate-800 text-[14.5px] hover:bg-slate-50/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-teal" : ""
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-clinic-secondary text-[13.5px] leading-6 font-light border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT SCHEDULER WIZARD SECTION ================= */}
      <section className="py-24 bg-white border-t border-slate-100 relative z-10" id="booking">
        <div className="max-w-4xl mx-auto px-6 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Premium Consultation</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl font-serif tracking-wide mt-4">
              Begin Your Bespoke Transformation
            </h2>
            <p className="mt-4 text-clinic-secondary text-sm leading-7 font-light">
              Book a dedicated consultation slot with our MD specialists. Fill out our multi-step secure scheduler to initialize your clinical diagnostic path.
            </p>
          </div>

          <BookingWizard />
        </div>
      </section>

    </div>
  );
}
