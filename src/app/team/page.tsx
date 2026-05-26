import { CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const doctors = [
    {
      name: "Dr. Vijay Kumar",
      title: "Chief Dermatologist & Surgical Lead",
      degree: "MBBS, MD (Dermatology)",
      bio: "Board-certified dermatologist leading hair transplant procedures, skin treatments and aesthetic consultations. Known for honest assessments and personalised treatment planning across all Awish Clinic locations.",
      skills: ["FUE Hair Transplant", "Patchy Beard Stimulation", "Aesthetic Dermatology", "Minor Surgical Procedures"],
      certifications: [
        "MD in Clinical Dermatology & Venereology",
        "Fellowship in Aesthetic Surgery (London)",
        "Member of Global Hair Restoration Association",
      ],
      glow: "pink",
    },
    {
      name: "Dr. Pooja Varshney",
      title: "Dermatologist & Cosmetology Lead",
      degree: "MBBS, MD (Dermatology)",
      bio: "Specialist in acne scar treatment, cosmetology and skin rejuvenation. Patients trust her for detailed skin assessments, chemical peel planning and compassionate, thorough consultations.",
      skills: ["Pimple Scar Treatment", "Advanced Cosmetology", "Skin Rejuvenation", "Bespoke Peels & Glow"],
      certifications: [
        "MD in Clinical Dermatology & Cosmetology",
        "Sub-surface Dermal Exfoliation Certification",
        "Member of Indian Association of Cosmetologists",
      ],
      glow: "gold",
    },
  ];

  return (
    <div className="flex flex-col w-full relative bg-clinic-bg text-clinic-dark pb-24">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />

      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-900/60 bg-[#08090d]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-pink uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-rose-450">Home</Link>
            <span className="text-slate-800">/</span>
            <span className="text-slate-500">Team</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-white">
            Meet Our Doctors
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            Board-certified MBBS, MD dermatologists delivering clear assessments and high-science restorations.
          </p>
        </div>
      </section>

      {/* Doctors Profiles List */}
      <section className="py-24 max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {doctors.map((doc, idx) => (
          <div
            key={doc.name}
            className="glass-panel p-8 md:p-12 rounded-[28px] bg-[#08090d]/60 border-slate-800/60 shadow-lg grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center"
          >
            {/* Left side: Vector frames and glow indicators */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800/80 bg-[#050508]/70 flex flex-col items-center justify-center p-6 text-center shadow-inner group">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              
              {/* Doctor Visual Indicator Ring */}
              <div className={`relative w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed ${
                doc.glow === "pink" ? "border-brand-pink" : "border-brand-gold"
              } transition-transform duration-700 group-hover:rotate-180`}>
                <span className="font-serif text-4xl font-bold text-white select-none">Dr.</span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mt-6">{doc.name}</h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">{doc.degree}</span>
              <span className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mt-4 border ${
                doc.glow === "pink" 
                  ? "bg-brand-pink/15 border-brand-pink/30 text-brand-pink" 
                  : "bg-brand-gold/15 border border-brand-gold/30 text-brand-gold"
              }`}>
                {doc.title}
              </span>
            </div>

            {/* Right side: Detailed Bio & Qualifications */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Professional Bio</span>
                <p className="text-clinic-secondary text-base leading-8 font-light mt-2">{doc.bio}</p>
              </div>

              {/* Focus tags */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-brand-pink" />
                  Clinical Focus Areas
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {doc.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[12.5px] font-medium border px-3 py-1.5 rounded-lg ${
                        doc.glow === "pink"
                          ? "bg-brand-pink/10 border-brand-pink/20 text-brand-pink"
                          : "bg-brand-gold/10 border-brand-gold/20 text-brand-gold"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications and credentials list */}
              <div className="flex flex-col gap-2.5 border-t border-slate-900/60 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                  Board Certifications & Credentials
                </span>
                <div className="flex flex-col gap-2.5 mt-2">
                  {doc.certifications.map((c) => (
                    <div key={c} className="flex items-start gap-2.5 text-slate-350 text-xs font-light">
                      <Award className={`w-4 h-4 shrink-0 mt-0.5 ${
                        doc.glow === "pink" ? "text-brand-pink" : "text-brand-gold"
                      }`} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Reassurance Callout */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">Patient Ethics</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-wide mt-4">
          Every consultation is private, unhurried and focused on your specific concern.
        </h2>
        <p className="mt-4 text-clinic-secondary text-[14px] leading-7 font-light max-w-xl mx-auto">
          Whether you need help with hair loss, acne scars, cosmetic surgery or weight management, our board-certified specialists take the time to explain your options clearly.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-full bg-brand-pink text-white hover:bg-rose-700 shadow-md hover:shadow-rose-950/20 transition-all duration-300 px-6 py-3.5 text-sm">
            Book Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
