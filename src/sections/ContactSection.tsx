import { motion } from 'framer-motion';
import { Trophy, ThumbsUp, Users, Star } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-10 lg:py-14 bg-white font-display relative overflow-hidden border-t border-slate-50">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-slate-400 text-[11px] font-bold tracking-tight pt-0.5">
                4.9/5 Average Rating
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] leading-[1.1] tracking-tight">
              Trusted by <span className="text-[#F97316]">Startups</span> and <br />
              <span className="text-[#8B5CF6]">Fortune 500</span> companies
            </h2>

            {/* Value Pods */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#F97316] flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform">
                  <Trophy className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#111827] leading-tight mb-0.5">24+ years of experience</h4>
                  <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                    We handle projects of all complexities with zero friction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#8B5CF6] flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform">
                  <ThumbsUp className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#111827] leading-tight mb-0.5">500+ satisfied customers</h4>
                  <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                    Startups to Fortune 500, we have successfully worked with all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#A855F7] flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/10 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#111827] leading-tight mb-0.5">500+ in-house team</h4>
                  <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                    Top 1% talent to ensure your digital success and scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 lg:p-8 rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.06)] border border-slate-50 relative"
          >
            <h3 className="text-xl font-bold text-[#111827] mb-6">Contact Us</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11.5px] font-semibold text-slate-700 ml-1">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Full Name*" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-md px-4 py-3 text-sm font-medium focus:border-[#F97316] outline-none transition-colors placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11.5px] font-semibold text-slate-700 ml-1">Business Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="Business Email Address*" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-md px-4 py-3 text-sm font-medium focus:border-[#F97316] outline-none transition-colors placeholder:text-slate-400" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11.5px] font-semibold text-slate-700 ml-1">Phone Number *</label>
                  <div className="flex items-center bg-slate-50/50 border border-slate-200 rounded-md focus-within:border-[#F97316] transition-colors overflow-hidden">
                    <div className="flex items-center gap-2 px-3 border-r border-slate-100 bg-slate-50/80 h-full py-2.5">
                      <img src="https://flagcdn.com/in.svg" className="w-4" alt="India" />
                      <span className="text-[10.5px] font-bold text-slate-500 whitespace-nowrap">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number*"
                      className="w-full bg-transparent border-none px-4 py-3 text-sm font-medium outline-none placeholder:text-slate-400" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11.5px] font-semibold text-slate-700 ml-1">Organization *</label>
                  <input 
                    type="text" 
                    placeholder="Organization*" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-md px-4 py-3 text-sm font-medium focus:border-[#F97316] outline-none transition-colors placeholder:text-slate-400" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11.5px] font-semibold text-slate-700 ml-1">Message *</label>
                <textarea 
                  rows={3} 
                  placeholder="Message*" 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-md px-4 py-3 text-sm font-medium focus:border-[#F97316] outline-none transition-colors resize-none placeholder:text-slate-400" 
                />
              </div>

              <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                <span className="font-bold text-[#111827] not-italic">Note:</span> I consent that my personal data will be processed according to Orangemantra's <span className="text-blue-500 underline cursor-pointer">privacy policy</span>
              </p>

              <button className="w-full bg-[#FA5D02] text-white py-3.5 rounded-md font-bold text-sm tracking-tight hover:bg-[#E04B02] hover:shadow-xl hover:shadow-orange-600/20 transition-all active:scale-[0.98] mt-2 shadow-xl shadow-orange-600/10">
                Submit
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
