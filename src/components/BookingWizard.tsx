"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  User,
  MessageSquare
} from "lucide-react";

const CONCERNS_MAP = {
  male: [
    { id: "hair-loss", label: "Hair Loss & Thinning" },
    { id: "beard-growth", label: "Beard Growth Density" },
    { id: "acne-scars", label: "Acne Scars & Texture" },
    { id: "stamina-stress", label: "Stamina & Chronic Stress" },
    { id: "belly-fat", label: "Stubborn Belly Fat" }
  ],
  female: [
    { id: "crown-thinning", label: "Crown Thinning & Hair Fall" },
    { id: "hormonal-acne", label: "Hormonal Acne Breakouts" },
    { id: "skin-glow", label: "Melasma & Pigmentation" },
    { id: "pcos-fat", label: "PCOS Weight Management" },
    { id: "dark-circles", label: "Under-Eye Dark Circles" }
  ],
  skincare: [
    { id: "laser-hair", label: "Laser Hair Removal" },
    { id: "carbon-peel", label: "Carbon Laser Facial" },
    { id: "gold-micro", label: "24K Gold Microneedling" },
    { id: "anti-aging", label: "Anti-Aging Fillers & Botox" },
    { id: "hydra-facial", label: "Medical Hydra-Facial" }
  ]
};

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<"male" | "female" | "skincare" | null>(null);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  
  // Contact Details
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");

  // Submit Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategorySelect = (value: "male" | "female" | "skincare") => {
    setCategory(value);
    setSelectedConcerns([]); // Reset concerns on category shift
    setStep(2);
  };

  const handleConcernToggle = (id: string) => {
    if (selectedConcerns.includes(id)) {
      setSelectedConcerns(selectedConcerns.filter((c) => c !== id));
    } else {
      setSelectedConcerns([...selectedConcerns, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setCategory(null);
    setSelectedConcerns([]);
    setBookingDate("");
    setTimeSlot("");
    setFullName("");
    setPhoneNumber("");
    setEmailAddress("");
    setMedicalNotes("");
    setIsSubmitted(false);
  };

  return (
    <div className="glass-panel p-8 md:p-12 rounded-[32px] bg-white/70 border border-slate-200/80 shadow-[0_20px_50px_rgba(31,38,135,0.03)] relative overflow-hidden">
      
      {/* Decorative Aurora Gradients inside Wizard */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full bg-brand-teal/4 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 rounded-full bg-brand-lavender/4 blur-2xl pointer-events-none -z-10" />

      {/* Step Indicator Header */}
      {!isSubmitted && (
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-8 mb-8 overflow-x-auto">
          {[
            { num: 1, label: "Category" },
            { num: 2, label: "Concern" },
            { num: 3, label: "Schedule" },
            { num: 4, label: "Details" }
          ].map((s) => {
            const isActive = step === s.num;
            const isDone = step > s.num;
            return (
              <div key={s.num} className="flex items-center gap-2 shrink-0">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isActive 
                    ? "bg-brand-teal text-white shadow shadow-teal-600/20 scale-105" 
                    : isDone 
                    ? "bg-emerald-500 text-white" 
                    : "bg-slate-100 text-slate-400"
                }`}>
                  {isDone ? <Check className="w-3.5 h-3.5" /> : s.num}
                </div>
                <span className={`text-[12px] font-semibold tracking-wide ${
                  isActive ? "text-brand-teal font-extrabold" : isDone ? "text-emerald-500 font-semibold" : "text-slate-450 font-normal"
                }`}>
                  {s.label}
                </span>
                {s.num < 4 && <div className="h-[1px] w-8 bg-slate-200 md:block hidden mx-2" />}
              </div>
            );
          })}
        </div>
      )}

      {/* Wizard Steps */}
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          /* Success Screen */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-250 flex items-center justify-center mb-6 shadow-sm">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-clinic-dark">Appointment Requested!</h3>
            <p className="mt-4 text-clinic-secondary text-sm leading-7 font-light max-w-md mx-auto">
              Thank you, <strong className="text-clinic-dark font-semibold">{fullName}</strong>. Our clinical coordinator will reach out to you at <strong className="text-clinic-dark font-semibold">{phoneNumber}</strong> within 2 hours to finalize your diagnostic schedule.
            </p>
            
            <div className="glass-panel p-6 rounded-xl border-emerald-100 bg-emerald-50/30 text-slate-700 text-xs text-left max-w-sm mt-8 w-full flex flex-col gap-2.5 shadow-sm">
              <div><strong>Selected Category:</strong> {category === "male" ? "Male Wellness & Hair" : category === "female" ? "Female Wellness & PCOS" : "Clinical Skincare"}</div>
              <div><strong>Date:</strong> {bookingDate}</div>
              <div><strong>Time Slot:</strong> {timeSlot}</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-8 font-bold rounded-full bg-gradient-to-r from-brand-teal to-brand-lavender text-white hover:opacity-95 shadow-md shadow-teal-500/10 px-6 py-3.5 text-xs uppercase tracking-widest transition-all"
            >
              Schedule Another Session
            </button>
          </motion.div>
        ) : (
          <form key="booking-form" onSubmit={handleSubmit} className="w-full">
            
            {/* Step 1: Category */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col gap-6"
              >
                <h3 className="font-serif text-2xl font-bold text-clinic-dark">Select Treatment Area</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                  {[
                    { id: "male", label: "Male Wellness & Hair", desc: "PRP density, FUE transplant mapping, belly fat freeze & performance IVs." },
                    { id: "female", label: "Female Wellness & PCOS", desc: "Crown hair fall, hormonal acne, melasma glow, PCOS weight & dark circles." },
                    { id: "skincare", label: "Clinical Skincare", desc: "Laser hair removal, chemical peels, carbon laser, and medi-facials." }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id as any)}
                      className="glass-panel p-6 rounded-2xl border-slate-200/80 bg-white/50 text-left hover:border-brand-teal hover:bg-white hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-0.5 transition-all flex flex-col justify-between h-[190px] group"
                    >
                      <span className="font-serif text-lg font-bold text-clinic-dark group-hover:text-brand-teal transition-colors">{cat.label}</span>
                      <p className="text-xs text-clinic-secondary font-light leading-5 mt-3">{cat.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-teal mt-4">
                        Select <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Concerns */}
            {step === 2 && category && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl font-bold text-clinic-dark">Primary Areas of Concern</h3>
                  <span className="text-[10px] font-bold text-brand-teal uppercase bg-teal-50/50 px-3 py-1.5 rounded-full border border-brand-teal/20">
                    {category === "male" ? "Male Focus" : category === "female" ? "Female Focus" : "Skin Focus"}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {CONCERNS_MAP[category].map((c) => {
                    const isSelected = selectedConcerns.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleConcernToggle(c.id)}
                        className={`glass-panel p-5 rounded-xl border-slate-200 bg-white/50 text-left transition-all flex justify-between items-center hover:bg-white hover:border-brand-teal/30 ${
                          isSelected ? "border-brand-teal bg-teal-50/15 ring-1 ring-brand-teal" : ""
                        }`}
                      >
                        <span className="text-slate-800 text-sm font-semibold">{c.label}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? "bg-brand-teal border-brand-teal text-white" : "border-slate-300"
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={selectedConcerns.length === 0}
                    className={`inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0f172a] shadow transition-all ${
                      selectedConcerns.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-teal"
                    }`}
                  >
                    Continue to Schedule <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Date and Time */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col gap-6"
              >
                <h3 className="font-serif text-2xl font-bold text-clinic-dark">Select Day & Time</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                  {/* Date Picker */}
                  <div className="flex flex-col gap-3">
                    <label htmlFor="bookingDate" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-teal" />
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      id="bookingDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal transition-all font-sans"
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-teal" />
                      Available Hours
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((slot) => {
                        const isSelected = timeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTimeSlot(slot)}
                            className={`px-4 py-3 rounded-xl border text-center text-sm font-semibold transition-all ${
                              isSelected 
                                ? "border-brand-teal bg-teal-50/50 text-brand-teal ring-1 ring-brand-teal" 
                                : "border-slate-200 bg-white/50 text-slate-650 hover:bg-white hover:border-brand-teal/30 hover:text-brand-teal"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    disabled={!bookingDate || !timeSlot}
                    className={`inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0f172a] shadow transition-all ${
                      (!bookingDate || !timeSlot) ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-teal"
                    }`}
                  >
                    Personal Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col gap-6"
              >
                <h3 className="font-serif text-2xl font-bold text-clinic-dark">Enter Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-teal" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal transition-all font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="phoneNumber" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <Phone className="w-4 h-4 text-brand-teal" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      required
                      placeholder="+91 (555) 000-0000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="emailAddress" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-teal" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    required
                    placeholder="johndoe@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal transition-all font-sans"
                  />
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="medicalNotes" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-teal" />
                    Additional Clinical Notes (Optional)
                  </label>
                  <textarea
                    id="medicalNotes"
                    rows={4}
                    placeholder="Share any relevant clinical history or specific questions..."
                    value={medicalNotes}
                    onChange={(e) => setMedicalNotes(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal transition-all font-sans resize-none"
                  />
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !fullName || !phoneNumber || !emailAddress}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-teal to-brand-lavender shadow hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Securing Slot..." : "Secure Consultation Now"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
