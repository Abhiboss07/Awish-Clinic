import { BookOpen, Sparkles, Mail } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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
            <span className="text-slate-500">Blog</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-white">
            Awish Blog
          </h1>
          <p className="mt-4 text-clinic-secondary text-base md:text-lg font-light leading-7 max-w-xl mx-auto">
            Expert articles on skin care, hair loss, bariatric health, and consultation planning.
          </p>
        </div>
      </section>

      {/* Empty State / Article Hub placeholder */}
      <section className="py-24 max-w-4xl mx-auto px-6 w-full text-center">
        <div className="glass-panel p-12 md:p-16 rounded-[28px] bg-[#08090d]/60 border-slate-800/60 shadow-lg flex flex-col items-center">
          
          <div className="w-14 h-14 rounded-full bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink mb-6 shadow-sm">
            <BookOpen className="w-6 h-6" />
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-white tracking-wide">
            No Published Articles Yet
          </h2>
          <p className="text-clinic-secondary text-base font-light leading-7 max-w-md mx-auto mt-4">
            Dermatological guides and clinical articles from the Awish admin panel will appear here after administrator approval.
          </p>
          <p className="text-slate-500 text-xs font-light leading-6 max-w-sm mx-auto mt-2">
            As soon as our board-certified dermatologists approve and publish the first guide, it will be displayed in this directory.
          </p>
        </div>
      </section>

      {/* Premium Newsletter Sign-up Section */}
      <section className="py-24 bg-[#08090d]/30 border-t border-slate-900/60 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">Dermal Wellness Circle</span>
          <h2 className="text-3xl font-bold text-white font-serif tracking-wide mt-4">
            Subscribe for expert guidance.
          </h2>
          <p className="mt-4 text-clinic-secondary text-base font-light leading-8 max-w-xl mx-auto">
            Subscribe to receive rare dermatological advice, custom treatment releases, and priority consultation slot notifications directly in your inbox.
          </p>
          
          {/* Email Signup Form */}
          <form className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl mx-auto bg-[#050508]/80 p-2 rounded-2xl border border-slate-800 shadow-lg shadow-black/30">
            <div className="flex items-center gap-2 px-3 w-full">
              <Mail className="w-4 h-4 text-brand-pink shrink-0" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full h-11 border-none bg-transparent outline-none text-white placeholder:text-slate-500 text-sm font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto h-11 shrink-0 px-6 rounded-xl bg-brand-pink hover:bg-rose-700 text-white font-semibold text-xs uppercase tracking-widest transition-colors shadow-md shadow-rose-950/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
