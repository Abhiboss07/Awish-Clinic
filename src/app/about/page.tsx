import { CheckCircle2, Shield, HeartHandshake, Compass } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-brand-lavender/3 blur-[120px] pointer-events-none -z-10" />

      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-200/85 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-teal uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-brand-teal">Home</Link>
            <span className="text-slate-200">/</span>
            <span className="text-slate-500">Clinic</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-clinic-dark animate-fade-in">
            About Awish Clinic
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            Trusted dermatology and aesthetic care — close to home, backed by experience.
          </p>
        </div>
      </section>

      {/* Clinic Philosophy & Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Clinic Philosophy</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl lg:text-5xl font-serif tracking-wide">
              Affordable in approach, premium in presentation, realistic in guidance.
            </h2>
            <p className="text-clinic-secondary text-base leading-8 font-light lg:text-lg">
              Awish Clinic is located in Sarita Vihar, New Delhi, with consultation availability across Gurugram, East Patel Nagar and Jaipur. Our board-certified dermatologists provide honest assessments, personalised treatment plans and advanced procedures at fair, transparent prices.
            </p>
            <p className="text-clinic-secondary text-base leading-8 font-light lg:text-lg">
              Our clinic profile positions itself as a broader clinical wellness setup rather than a simple aesthetic salon, ensuring complete biological harmony.
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
              {[
                "One-on-One Consultations: एमबीबीएस, एमडी dermatologists who listen before prescribing.",
                "FDA-Approved Devices: Safe, advanced technology for permanent hair reduction, cold lipolysis, and acne carbon laser facials.",
                "Multi-location accessible booking across key Delhi and Jaipur hubs.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-slate-650 text-[14.5px] leading-7 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Box */}
          <div className="glass-panel p-8 md:p-10 rounded-[28px] bg-white/80 border-slate-200/80 shadow-lg flex flex-col gap-8">
            <h3 className="font-serif text-2xl font-bold text-clinic-dark">Proven Metrics of Trust</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="text-3xl font-bold text-brand-lavender font-serif">30,000+</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal mt-1">Satisfied Patients</p>
                </div>
                <p className="text-xs text-clinic-secondary font-light max-w-[60%]">A larger patient base reinforces the trust story associated with our brand.</p>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <span className="text-3xl font-bold text-brand-lavender font-serif">15+</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal mt-1">Health Sections</p>
                </div>
                <p className="text-xs text-clinic-secondary font-light max-w-[60%]">Broader clinical options covering skin, hair, bariatric, and cosmetic medicine.</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-brand-lavender font-serif">45+</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal mt-1">Awards Won</p>
                </div>
                <p className="text-xs text-clinic-secondary font-light max-w-[60%]">High-visibility clinical proof points that demonstrate medical excellence.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Three Step Care Method */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Our Care Method</span>
            <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl lg:text-5xl font-serif tracking-wide mt-4">
              How we approach every patient journey.
            </h2>
            <p className="mt-4 text-clinic-secondary text-base font-light leading-7">
              Every treatment begins with understanding. Our three-step method ensures you receive care that is assessed, personalised and supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-[24px] bg-white/70 border-slate-200/80 shadow-md flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
              <div>
                <span className="font-serif text-4xl font-bold text-brand-teal/50">01</span>
                <h3 className="font-serif text-2xl font-bold text-clinic-dark mt-6">Assess</h3>
                <p className="text-clinic-secondary text-[14px] leading-6 font-light mt-4">
                  Every journey starts with a close review of your concern, medical background suitability, and cosmetic goals before any clinical prescription is recommended.
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-lavender uppercase tracking-widest mt-12 block">Thorough Diagnostics</span>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-[24px] bg-white/70 border-slate-200/80 shadow-md flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
              <div>
                <span className="font-serif text-4xl font-bold text-brand-teal/50">02</span>
                <h3 className="font-serif text-2xl font-bold text-clinic-dark mt-6">Personalise</h3>
                <p className="text-clinic-secondary text-[14px] leading-6 font-light mt-4">
                  Treatments are tailored specifically to your skin sensitivity levels, follicular density profiles, and physiological recovery rates instead of using one generic template.
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-lavender uppercase tracking-widest mt-12 block">Bespoke Formulations</span>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-[24px] bg-white/70 border-slate-200/80 shadow-md flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
              <div>
                <span className="font-serif text-4xl font-bold text-brand-teal/50">03</span>
                <h3 className="font-serif text-2xl font-bold text-clinic-dark mt-6">Support</h3>
                <p className="text-clinic-secondary text-[14px] leading-6 font-light mt-4">
                  The clinical care stays transparent after your sessions too, with dedicated physician-led follow-up guidelines, realistic timelines, and immediate branch access.
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-lavender uppercase tracking-widest mt-12 block">Doctor-Led Recovery</span>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Booking */}
      <section className="pt-24 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Initial Consultations</span>
        <h2 className="text-3xl font-bold text-clinic-dark sm:text-4xl font-serif tracking-wide mt-4">
          Begin your clinical transformation journey today.
        </h2>
        <p className="mt-4 text-clinic-secondary text-base leading-8 font-light max-w-xl mx-auto">
          Secure private, unhurried, one-on-one sessions with our MBBS, MD dermatologists to structure your personalized treatment protocol.
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <Link href="/services" className="inline-flex items-center justify-center font-semibold rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
            Explore Services
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center font-bold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white hover:opacity-95 shadow-md shadow-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 px-6 py-3.5 text-sm">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
