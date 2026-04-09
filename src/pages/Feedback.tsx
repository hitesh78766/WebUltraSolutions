import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Star, Quote, Terminal, Fingerprint } from 'lucide-react';
import ThreeFeedbackEcho from '../components/ThreeFeedbackEcho';

const reviews = [
  { name: "John Davis", role: "CEO, TechSphere USA", text: "WebUltraSolution has been our definitive offshore partner for over 4 years. Their technical rigor and architectural precision are unmatched.", rating: 5, accent: 'orange' },
  { name: "Maria Garcia", role: "Product Head, RetailFlow", text: "The UI/UX expertise they bring to the table transformed our user engagement metrics. Truly a world-class team with high-status solutions.", rating: 5, accent: 'orange' },
  { name: "Robert Wilson", role: "CTO, GlobalTrade Hub", text: "Scaling our infrastructure was seamless. Their 24/7 reliability and expert coordination helped us achieve 100% time-to-market success.", rating: 5, accent: 'orange' },
  { name: "Elena Petrova", role: "Founder, LuxeIdentity", text: "The most trusted partner we've ever worked with. Every pixel and line of code resonates with excellence. I highly recommend them.", rating: 5, accent: 'orange' },
  { name: "Satoshi Tanaka", role: "Marketing Director, DigitalCore", text: "Strategic SEO and global engagement success. They don't just build, they ensure impact across every geographical boundary.", rating: 5, accent: 'orange' },
  { name: "Sarah Miller", role: "Lead Designer, VisionaryCo", text: "Crafting digital identities with meticulous attention to detail. WebUltraSolution's commitment to our vision was unwavering.", rating: 5, accent: 'orange' }
];

const Feedback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const SectionHeader = ({ label, title }: { label: string, title: string }) => (
    <div className="flex flex-col gap-1 mb-10">
      <div className="flex items-center gap-2">
        <div className="h-[2px] w-8 bg-[#FF6600]" />
        <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">{label}</span>
      </div>
      <h2 className="text-xl lg:text-3xl font-display font-extrabold tracking-tighter uppercase leading-none text-slate-950 italic">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
      {/* HERO SECTION - REFINED ELITE TYPOGRAPHY */}
      <section className="relative h-[220px] lg:h-[280px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 bg-[#FDFBF9]">
        <ThreeFeedbackEcho />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 z-[1]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center text-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="px-4 py-1.5 bg-slate-950 rounded-full flex items-center gap-3 shadow-2xl border border-[#FF6600]/30"
          >
            <Fingerprint size={12} className="text-[#FF6600] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Trust Registry Active</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-[0.8] flex items-center justify-center gap-4">
                CLIENT <span className="text-[#FF6600] italic">FEEDBACK.</span>
            </h1>
            <p className="text-slate-500 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.6em]">Resonating Global Excellence • Noida Hub</p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID - MODERNIZED HIERARCHY */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="space-y-12">

            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#FF6600]" />
                <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.5em]">Voice of Partners</span>
              </div>
              <h2 className="text-xl lg:text-3xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                Delivering <span className="text-[#FF6600] not-italic inline-block ml-3">Proven Results.</span>
              </h2>
              <p className="text-base lg:text-lg font-bold text-slate-500 border-l-4 border-[#FF6600] pl-10 py-2 italic leading-relaxed bg-[#FDFBF9] shadow-sm rounded-r-md">
                The success of WebUltraSolution is intricately tied to the achievements of our global corporate clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white rounded-md border border-slate-100 flex flex-col justify-between shadow-sm hover:border-[#FF6600]/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all h-[360px] group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 px-4 py-1.5 bg-orange-50 border-r border-b border-orange-100 rounded-br-md">
                    <span className="text-[9px] font-black text-[#FF6600] uppercase tracking-[0.2em]">{`REV-${(i + 1).toString().padStart(3, '0')}`}</span>
                  </div>

                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Quote size={80} className="text-[#FF6600] rotate-12" />
                  </div>

                  <div className="space-y-6 relative z-10 pt-6">
                    <div className="flex gap-1.5 text-[#FF6600]">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                    </div>
                    {/* TESTIMONIAL TEXT - PRESERVED PER USER REQUEST BUT SYNCED TO INSTITUTIONAL GREY */}
                    <p className="text-[12px] lg:text-[14px] text-slate-700 font-bold leading-relaxed italic group-hover:text-slate-950 transition-colors">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="space-y-2">
                      <h4 className="text-[12px] font-black text-slate-950 uppercase tracking-tighter leading-none italic">{review.name}</h4>
                      <p className="text-[10px] font-black text-[#FF6600] uppercase tracking-widest leading-none">{review.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6600] shadow-sm transform group-hover:bg-[#FF6600] group-hover:text-white transition-all group-hover:rotate-[360deg] duration-700">
                      <ShieldCheck size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
