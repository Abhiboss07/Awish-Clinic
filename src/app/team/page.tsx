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
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-lavender/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-brand-teal/3 blur-[120px] pointer-events-none -z-10" />

      {/* Subpage Header Banner */}
      <section className="pt-20 pb-16 text-center border-b border-slate-200/80 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-brand-teal uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-brand-teal">Home</Link>
            <span className="text-slate-200">/</span>
            <span className="text-slate-500">Team</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-clinic-dark">
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
            className="glass-panel p-8 md:p-12 rounded-[28px] bg-white/80 border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center hover:bg-white transition-all"
          >
            {/* Left side: Vector frames and glow indicators */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center shadow-inner group">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              
              {/* Doctor Visual Indicator Ring */}
              <div className={`relative w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed ${
                doc.glow === "pink" ? "border-brand-teal" : "border-brand-lavender"
              } transition-transform duration-700 group-hover:rotate-180`}>
                <span className="font-serif text-4xl font-bold text-clinic-dark select-none">Dr.</span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-clinic-dark mt-6">{doc.name}</h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1.5">{doc.degree}</span>
              <span className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mt-4 border ${
                doc.glow === "pink" 
                  ? "bg-brand-teal/15 border-brand-teal/30 text-brand-teal" 
                  : "bg-brand-lavender/15 border border-brand-lavender/30 text-brand-lavender"
              }`}>
                {doc.title}
              </span>
            </div>

            {/* Right side: Detailed Bio & Qualifications */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Professional Bio</span>
                <p className="text-clinic-secondary text-base leading-8 font-light mt-2">{doc.bio}</p>
              </div>

              {/* Focus tags */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-brand-teal" />
                  Clinical Focus Areas
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {doc.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[12.5px] font-semibold border px-3 py-1.5 rounded-lg ${
                        doc.glow === "pink"
                          ? "bg-brand-teal/10 border-brand-teal/20 text-brand-teal"
                          : "bg-brand-lavender/10 border-brand-lavender/20 text-brand-lavender"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications and credentials list */}
              <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                  Board Certifications & Credentials
                </span>
                <div className="flex flex-col gap-2.5 mt-2">
                  {doc.certifications.map((c) => (
                    <div key={c} className="flex items-start gap-2.5 text-slate-650 text-xs font-light">
                      <Award className={`w-4 h-4 shrink-0 mt-0.5 ${
                        doc.glow === "pink" ? "text-brand-teal" : "text-brand-lavender"
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
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Patient Ethics</span>
        <h2 className="text-2xl md:text-3xl font-bold text-clinic-dark font-serif tracking-wide mt-4">
          Every consultation is private, unhurried and focused on your specific concern.
        </h2>
        <p className="mt-4 text-clinic-secondary text-[14px] leading-7 font-light max-w-xl mx-auto">
          Whether you need help with hair loss, acne scars, cosmetic surgery or weight management, our board-certified specialists take the time to explain your options clearly.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center font-bold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white hover:opacity-95 shadow-md shadow-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 px-6 py-3.5 text-sm">
            Book Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
