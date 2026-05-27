"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Activity, ShieldAlert, ArrowRight, X } from "lucide-react";
import Link from "next/link";

interface HotspotData {
  id: string;
  title: string;
  side: "male" | "female";
  top: string;
  left: string;
  concerns: string[];
  resolutions: string[];
  therapy: string;
  link: string;
}

const VISUALIZER_DATA: Record<string, Record<string, HotspotData>> = {
  male: {
    "hair-loss": {
      id: "hair-loss",
      title: "Hair Loss & Scalp",
      side: "male",
      top: "4%",
      left: "48%",
      concerns: ["Male Alopecia", "Hair Thinning", "Follicle Dormancy", "Dandruff"],
      resolutions: ["FUE Hair Transplant", "PRP Hair Therapy", "Stem Cell Infusions"],
      therapy: "Highly reactive autologous growth factor infusion paired with advanced micro-channeling to revive hair stem cells natively.",
      link: "/services/hair-transplant",
    },
    "acne-face": {
      id: "acne-face",
      title: "Acne & Scars",
      side: "male",
      top: "10%",
      left: "47.5%",
      concerns: ["Cystic Acne", "Dermal Congestion", "Acne Scars", "Rough Texture"],
      resolutions: ["Q-Switched Carbon Laser", "Dermal Exfoliation Peel", "LED Light Healing"],
      therapy: "Photo-acoustic laser treatment targeting melanin and pore refinement, combined with localized cellular resurfacing exfoliation.",
      link: "/services/pimple-scar-treatment",
    },
    "pigmentation": {
      id: "pigmentation",
      title: "Facial Pigmentation",
      side: "male",
      top: "18%",
      left: "45%",
      concerns: ["Hyperpigmentation", "Dull Skin", "Sun Damage", "Uneven Tone"],
      resolutions: ["White Glow Therapy", "Glutathione Peels", "Laser Brightening"],
      therapy: "Premium skin brightening facials combined with custom chemical peeling and laser therapy to clear subcutaneous hyperpigmentation.",
      link: "/services/white-glow",
    },
    "weight-gain": {
      id: "weight-gain",
      title: "Metabolic Waistline",
      side: "male",
      top: "48%",
      left: "45.5%",
      concerns: ["Stubborn Belly Fat", "Visceral Adiposity", "Metabolic Slowdown"],
      resolutions: ["Belly Cryo-Sculpt", "EMS Dermal Stimulation", "Fat Lipolysis Care"],
      therapy: "Medical cryolipolysis cooling lipids to -11°C, inducing selective fat cell apoptosis without harming surrounding tissue systems.",
      link: "/services/non-surgical-weight-reduction",
    },
    "stamina-stress": {
      id: "stamina-stress",
      title: "Stress & Stamina",
      side: "male",
      top: "34%",
      left: "43%",
      concerns: ["Chronic Fatigue", "Brain Fog", "High Physical Stress"],
      resolutions: ["IV Nutrient Infusion", "NAD+ Energizer", "Hormonal Rebalance"],
      therapy: "Intravenous wellness therapies delivering ultra-pure cellular nutrients and trace minerals to dramatically boost cellular ATP.",
      link: "/services/iv-drips-skin-whitening",
    },
  },
  female: {
    "hair-fall": {
      id: "hair-fall",
      title: "Hair Fall & Density",
      side: "female",
      top: "4%",
      left: "52%",
      concerns: ["Crown Hair Thinning", "Dry Scalp Scaling", "Shaft Fragility"],
      resolutions: ["Crown Density PRP", "Purified Exosome Dermal", "Laser Dermal Nourish"],
      therapy: "Infusion of purified cellular exosome growth factors to reboot metabolic activity in dormant crown follicles.",
      link: "/services/hair-transplant",
    },
    "acne-glow": {
      id: "acne-glow",
      title: "Acne & Medi-Facials",
      side: "female",
      top: "10%",
      left: "52.5%",
      concerns: ["Hormonal Acne", "Clogged Pores", "Dry Epidermal Scaling"],
      resolutions: ["24K Gold Microneedling", "Medi-Facial HydraSurge", "Salicylic Peel"],
      therapy: "Dermatologist-prescribed facial treatments using medical-grade products to clear and hydrate standard skin types.",
      link: "/services/medi-facials",
    },
    "skin-glow": {
      id: "skin-glow",
      title: "Dermal Glass Glow",
      side: "female",
      top: "18%",
      left: "55%",
      concerns: ["Dullness", "Melasma", "Uneven Dermal Tone", "Fine Lines"],
      resolutions: ["White Glow Treatment", "Glutathione IV Drips", "Skin Brightening Peel"],
      therapy: "Triple-stage clinical exfoliation, custom chemical peels, and targeted glutathione therapy to restore a radiant, flawless, even tone.",
      link: "/services/white-glow",
    },
    "pcos-weight": {
      id: "pcos-weight",
      title: "PCOS & Metabolic Waist",
      side: "female",
      top: "48%",
      left: "54.5%",
      concerns: ["Belly Fat Accumulation", "PCOS Weight Gain", "Hormonal Bloating"],
      resolutions: ["Cryo-Lipo Fat Freeze", "Hormone Alignment Panels", "Metabolic Lifestyle"],
      therapy: "Bespoke clinical weight resolution uniting cryolipolysis fat freezing with clinical endocrinology metabolic programs.",
      link: "/services/non-surgical-weight-reduction",
    },
    "dark-circles": {
      id: "dark-circles",
      title: "Under-Eye Area",
      side: "female",
      top: "13%",
      left: "53.5%",
      concerns: ["Dark Under-Eye Circles", "Sunken Hollows", "Tired Look"],
      resolutions: ["Hyaluronic Volume Fillers", "LED Brightening", "Peptide Hydration"],
      therapy: "Subtle volume restoration under the eyes using pure hyaluronic acid fillers, combined with dynamic peptide hydration locks.",
      link: "/services/anti-aging-treatments",
    },
  },
};

export default function HeroVisualizer() {
  const [activeSide, setActiveSide] = useState<"male" | "female" | null>(null);
  const [activePart, setActivePart] = useState<string | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion Scroll-Driven Animation using window scrollY directly
  const { scrollY } = useScroll();

  // Smooth out the raw scroll pixels using a high-fidelity low-inertia spring for a buttery-smooth 60fps feel
  const smoothScrollY = useSpring(scrollY, {
    damping: 20,
    stiffness: 90,
    mass: 0.1
  });

  // Scale of the split body image from 1.0 up to 1.2 dynamically as the user scrolls down to 900px
  const visualScale = useTransform(smoothScrollY, [0, 900], [1.0, 1.2]);

  const selectHotspot = (side: "male" | "female", id: string) => {
    setActiveSide(side);
    setActivePart(id);
  };

  // Close active diagnostics when clicking outside the visualizer
  useEffect(() => {
    if (!activePart) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-hotspot]")) {
        setActivePart(null);
        setActiveSide(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activePart]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[1440px] xl:max-w-[1650px] mx-auto py-8 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[85vh] z-10 overflow-visible gap-12"
    >
      {/* Decorative Blur Background Layers */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -z-10" />

      {/* LEFT COLUMN: Hero Text Content & Credentials (Always visible, stable and high-performance) */}
      <div className="w-full lg:w-[32%] flex flex-col justify-center order-2 lg:order-1 z-30 min-h-[420px] lg:min-h-[520px] lg:-translate-x-2 xl:-translate-x-4 2xl:-translate-x-6">
        <div className="w-full flex flex-col gap-5 text-left items-start animate-fade-in">
          <div className="flex items-center gap-2 animate-pulse">
            <span className="inline-flex rounded-full border border-brand-pink/20 bg-brand-pink/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-pink backdrop-blur">
              DELHI • GURUGRAM • JAIPUR
            </span>
          </div>
          
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight uppercase text-white">
            High-Science <br/>
            <span className="font-serif italic text-brand-gold font-normal lowercase tracking-normal">Aesthetic</span> <br/>
            Restoration.
          </h1>
          
          <p className="text-clinic-secondary text-[16px] leading-8 font-light lg:text-lg max-w-xl mt-2">
            Surgical, skin, hair, and metabolic bariatric weight care, led by board-certified MBBS, MD dermatologists. Transparent pricing, practical guidance, and a clinical sanctuary built around you.
          </p>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-2 gap-5 border-t border-slate-900 pt-6 mt-4 max-w-lg w-full">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center shrink-0 text-brand-pink font-serif text-[10px] font-bold">MD</div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Board Certified</h4>
                <p className="text-xs text-slate-350 font-light mt-0.5">MBBS, MD Dermatologists</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 text-brand-gold font-serif text-[10px] font-bold">FDA</div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Advanced Tech</h4>
                <p className="text-xs text-slate-350 font-light mt-0.5">US-FDA Approved Lasers</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 col-span-2">
              <div className="w-5 h-5 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 text-brand-pink font-serif text-[10px] font-bold">★</div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Proven Excellence</h4>
                <p className="text-xs text-slate-350 font-light mt-0.5">30,000+ Happy Patients & 7-Day Care Accessibility</p>
              </div>
            </div>
          </div>

          {/* Actions booking buttons */}
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center font-semibold rounded-full border border-slate-200 bg-white/60 text-slate-700 hover:bg-slate-50 transition-colors px-6 py-4 text-xs uppercase tracking-wider"
            >
              Explore Treatments
            </Link>
            <Link 
              href="/contact#booking" 
              className="inline-flex items-center justify-center font-semibold rounded-full bg-brand-pink text-white hover:bg-rose-700 shadow-md shadow-rose-950/20 transition-all duration-300 px-6 py-4 text-xs uppercase tracking-wider"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Visualizer (Sits on right, massive size, with dynamic floating details boxes next to clicked dots) */}
      <div className="w-full lg:w-[68%] flex items-center justify-center order-1 lg:order-2 relative overflow-visible min-h-[50vh] lg:min-h-[75vh] lg:translate-x-12 xl:translate-x-18">
        <motion.div
          style={{ scale: visualScale }}
          className="relative flex items-center justify-center origin-center lg:origin-[65%_50%] transition-all duration-300 ease-out"
        >
          {/* Symmetrical Split human body illustration (Perfect aspect ratio sizing) */}
          <div className="relative w-[90vw] sm:w-[500px] md:w-[700px] lg:w-[1100px] xl:w-[1350px] 2xl:w-[1550px] aspect-[1408/767] overflow-visible group flex items-center justify-center">
            {/* Split Body Image Asset (Backgroundless transparent PNG) */}
            <img
              src="/assets/split_image.png"
              alt="Awish Split-Body Clinical Model"
              className="w-full h-full object-contain pointer-events-none z-20 relative select-none opacity-100 transition-transform duration-700"
            />
          </div>

          {/* HOTSPOTS CONTAINER */}
          <div className="absolute inset-0 z-40 pointer-events-none">
            
            {/* ================= MALE HOTSPOTS (LEFT SIDE: left < 50%, shows details box on left side of dot) ================= */}
            {Object.values(VISUALIZER_DATA.male).map((spot) => {
              const isHovered = hoveredPart === spot.id;
              const isActive = activePart === spot.id;
              
              return (
                <div
                  key={spot.id}
                  data-hotspot={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute pointer-events-auto cursor-pointer p-3 transform -translate-x-1/2 -translate-y-1/2 group"
                  onClick={() => selectHotspot("male", spot.id)}
                  onMouseEnter={() => setHoveredPart(spot.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                >
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className={`dot-core w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive || isHovered ? "bg-brand-pink scale-125" : "bg-brand-pink/70"
                    } shadow-md shadow-rose-600/40`} />
                    <div className="absolute inset-0 rounded-full border border-brand-pink/50 hotspot-ring pointer-events-none" />
                  </div>
                  
                  {/* Floating Micro Tag Tooltip */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: -10 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        className="absolute right-full top-1/2 transform -translate-y-1/2 bg-slate-900 border border-slate-800 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md z-50 pointer-events-none"
                      >
                        {spot.title}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* FLOATING DIAGNOSTICS HUD PANEL (Left Side - Male) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 md:mr-6 w-[290px] sm:w-[320px] md:w-[360px] text-left font-sans z-50 cursor-default"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when tapping inside the card
                      >
                        <div className="relative glass-panel rounded-[20px] p-6 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-2xl shadow-slate-300/30 border-r-[4px] border-r-brand-pink">
                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActivePart(null);
                              setActiveSide(null);
                            }}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div className="flex flex-col gap-4 text-slate-700">
                            <div className="border-b border-slate-100 pb-2 flex flex-col gap-1 text-left">
                              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit bg-brand-pink/15 text-brand-pink border border-brand-pink/30">
                                Male Diagnostics
                              </span>
                              <h3 className="font-serif text-lg font-bold tracking-wide text-slate-900">
                                {spot.title}
                              </h3>
                            </div>

                            {/* Concerns */}
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-bold text-slate-450 uppercase tracking-wider flex items-center gap-1">
                                <ShieldAlert className="w-3 h-3 text-brand-pink" />
                                Clinical Concerns
                              </span>
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {spot.concerns.map((c) => (
                                  <span
                                    key={c}
                                    className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium"
                                  >
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Resolutions */}
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-brand-gold" />
                                Resolutions
                              </span>
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {spot.resolutions.map((r) => (
                                  <span
                                    key={r}
                                    className="text-[10px] bg-brand-pink/10 border border-brand-pink/20 text-brand-pink px-2 py-0.5 rounded font-semibold"
                                  >
                                    {r}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Therapy Protocol */}
                            <div className="flex flex-col gap-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-left">
                              <p className="text-[11px] leading-5 text-slate-600 font-light">
                                {spot.therapy}
                              </p>
                            </div>

                            {/* Redirect Link */}
                            <Link
                              href={spot.link}
                              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-white bg-brand-pink hover:bg-rose-700 shadow-md shadow-rose-950/20 transition-all duration-300"
                            >
                              Explore Treatment
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* ================= FEMALE HOTSPOTS (RIGHT SIDE: left > 50%, shows details box on right side of dot) ================= */}
            {Object.values(VISUALIZER_DATA.female).map((spot) => {
              const isHovered = hoveredPart === spot.id;
              const isActive = activePart === spot.id;
              
              return (
                <div
                  key={spot.id}
                  data-hotspot={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute pointer-events-auto cursor-pointer p-3 transform -translate-x-1/2 -translate-y-1/2 group"
                  onClick={() => selectHotspot("female", spot.id)}
                  onMouseEnter={() => setHoveredPart(spot.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                >
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className={`dot-core w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive || isHovered ? "bg-brand-gold scale-125" : "bg-brand-gold/70"
                    } shadow-md shadow-amber-500/40`} />
                    <div className="absolute inset-0 rounded-full border border-brand-gold/50 hotspot-ring pointer-events-none" />
                  </div>
                  
                  {/* Floating Micro Tag Tooltip */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 10 }}
                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                        className="absolute left-full top-1/2 transform -translate-y-1/2 bg-slate-900 border border-slate-800 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md z-50 pointer-events-none"
                      >
                        {spot.title}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* FLOATING DIAGNOSTICS HUD PANEL (Right Side - Female) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 md:ml-6 w-[290px] sm:w-[320px] md:w-[360px] text-left font-sans z-50 cursor-default"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when tapping inside the card
                      >
                        <div className="relative glass-panel rounded-[20px] p-6 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-2xl shadow-slate-300/30 border-l-[4px] border-l-brand-gold">
                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActivePart(null);
                              setActiveSide(null);
                            }}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div className="flex flex-col gap-4 text-slate-700">
                            <div className="border-b border-slate-100 pb-2 flex flex-col gap-1 text-left">
                              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                                Female Diagnostics
                              </span>
                              <h3 className="font-serif text-lg font-bold tracking-wide text-slate-900">
                                {spot.title}
                              </h3>
                            </div>

                            {/* Concerns */}
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-bold text-slate-450 uppercase tracking-wider flex items-center gap-1">
                                <ShieldAlert className="w-3 h-3 text-brand-gold" />
                                Clinical Concerns
                              </span>
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {spot.concerns.map((c) => (
                                  <span
                                    key={c}
                                    className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium"
                                  >
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Resolutions */}
                            <div className="flex flex-col gap-1 text-left">
                              <span className="text-[9px] font-bold text-brand-pink uppercase tracking-wider flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-brand-pink" />
                                Resolutions
                              </span>
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {spot.resolutions.map((r) => (
                                  <span
                                    key={r}
                                    className="text-[10px] bg-brand-pink/10 border border-brand-pink/20 text-brand-pink px-2 py-0.5 rounded font-semibold"
                                  >
                                    {r}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Therapy Protocol */}
                            <div className="flex flex-col gap-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-left">
                              <p className="text-[11px] leading-5 text-slate-600 font-light">
                                {spot.therapy}
                              </p>
                            </div>

                            {/* Redirect Link */}
                            <Link
                              href={spot.link}
                              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-white bg-brand-pink hover:bg-rose-700 shadow-md shadow-rose-950/20 transition-all duration-300"
                            >
                              Explore Treatment
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </motion.div>
      </div>

    </div>
  );
}
