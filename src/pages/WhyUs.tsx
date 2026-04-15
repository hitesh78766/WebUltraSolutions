import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, Globe, Users, Target, CheckCircle2, Zap, ArrowRight, ChevronRight, BarChart3, Clock } from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

const strategicPillars = [
   "Better Understanding",
   "Greater Involvement",
   "Honest Delivery",
   "Active Management",
   "Fee for Value",
   "Team Approach",
   "Maximise Opportunities"
];

const impactPillars = [
   {
      title: "Understanding the client base",
      desc: "We attribute special emphasis to the needs and requirements of our clients. The likes and desires of patrons are unique. They want the best of the services and our in-house team of expert web developers spends ample time with the customers - even before starting the project. Once the requirements have been studied and analyzed thoroughly, the work begins.",
      icon: Target
   },
   {
      title: "Cost Effective Solutions",
      desc: "While the competition tries to inflate the costs, we tend to keep it small so that it does not break your account. We provide enterprise-grade quality at a fraction of the investment required by larger agencies.",
      icon: Zap
   },
   {
      title: "Keeping up with the latest 'drifts'",
      desc: "It is a well-known fact that web design and development is a dynamic niche. The intelligent always come up with innovative methods and manners to gain a leading edge over the competition. Only the professed will have the leads to keep in touch with these developments and to implement it on the websites of the patrons.",
      icon: TrendingUp
   }
];

const WhyUs: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const SectionHeader = ({ label, title }: { label: string, title: React.ReactNode }) => (
      <div className="flex flex-col gap-1 mb-6 text-left">
         <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">{label}</span>
         <h2 className="text-lg lg:text-2xl font-display font-bold tracking-tight uppercase leading-snug text-slate-950">
            {title}
         </h2>
      </div>
   );

   return (
      <div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[80px]">
         {/* HERO SECTION - REFINED WITH SOLUTION BACKGROUND */}
         <section className="relative h-[280px] lg:h-[350px] flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeSolutionBackground />

            {/* Soft Contrast Mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95 z-[1] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  {/* Differentiation Badge */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="px-4 py-1.5 bg-slate-950 rounded-full border border-[#FF6600]/40 shadow-2xl flex items-center gap-3"
                  >
                     <CheckCircle2 size={12} className="text-[#FF6600]" />
                     <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">Differentiator Core</span>
                  </motion.div>

                  <div className="space-y-4">
                     <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-1">
                        <span className="block text-[11px] font-bold text-[#FF6600] uppercase tracking-[0.6em] mb-1">Choosing Excellence</span>
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-950 tracking-tighter leading-[1] uppercase flex items-center justify-center gap-3">
                           Why <span className="text-[#FF6600]">Choose Us.</span>
                        </h1>
                     </motion.div>

                     <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-slate-600 text-base font-semibold max-w-2xl leading-relaxed"
                     >
                        Basic service delivery isn't enough to differentiate any firm in today's competitive marketplace. We propel clients beyond satisfaction to absolute loyalty.
                     </motion.p>
                  </div>
               </div>
            </div>
         </section>

         {/* STRATEGIC NARRATIVE & PILLARS GRID */}
         <section className="py-16 lg:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

               {/* Main Narrative Column */}
               <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-8">
                     <SectionHeader label="Strategic Core" title={<>Corporate <span className="text-[#FF6600]">Reputation</span></>} />
                     <div className="space-y-6">
                        <p className="text-base lg:text-[16px] text-slate-950 font-semibold border-l-4 border-[#FF6600] pl-10 py-3 leading-relaxed bg-[#FDFBF9] rounded-r-md shadow-sm">
                           "Understanding not only our client's web needs but their business needs have propelled webultrasolution beyond customer satisfaction."
                        </p>
                        <p className="text-sm lg:text-base text-slate-500 font-semibold leading-relaxed border-l-2 border-slate-100 pl-10">
                           We have established a reputation for consistently delivering mission-critical, technically challenging projects under tight timelines, while also providing exceptional customer service and support to our clientele. This, in turn, has led to extremely positive long-term working relationships with both clients and solution partners alike.
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                     {impactPillars.map((pillar, i) => (
                        <motion.div
                           key={i}
                           whileHover={{ x: 10 }}
                           className="p-5 bg-[#FDFBF9] border border-slate-100 rounded-md hover:border-[#FF6600] transition-all group shadow-sm flex gap-5 items-center"
                        >
                           <div className="w-10 h-10 bg-white flex items-center justify-center text-[#FF6600] shadow-xl rounded-sm shrink-0 border border-slate-50 group-hover:bg-[#FF6600] group-hover:text-white transition-all transform group-hover:rotate-6">
                              <pillar.icon size={16} />
                           </div>
                           <div className="space-y-1.5">
                              <h4 className="text-[14px] font-bold text-slate-950 capitalize tracking-[0.2em]">
                                 {i === 0 ? (
                                    <>Understanding The <span className="text-[#FF6600]">Client Base</span></>
                                 ) : i === 1 ? (
                                    <>Cost Effective <span className="text-[#FF6600]">Solutions</span></>
                                 ) : (
                                    <>Keeping Up With The <span className="text-[#FF6600]">Latest 'Drifts'</span></>
                                 )}
                              </h4>
                              <p className="text-sm text-slate-500 font-semibold leading-relaxed group-hover:text-slate-800 transition-colors">{pillar.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* The "Why Choose Us?" Callout Column */}
               <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
                  <div className="bg-[#FDFBF9] p-6 lg:p-10 rounded-md border border-slate-100 shadow-2xl relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[#FF6600]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="relative z-10 space-y-8">
                        <div className="space-y-3 text-center lg:text-left">
                           <h3 className="text-xl lg:text-2xl font-display font-bold text-slate-950 uppercase tracking-tighter leading-none">
                              Why Choose <span className="text-[#FF6600]">Us?</span>
                           </h3>
                           <div className="h-[3px] w-14 bg-[#FF6600] mx-auto lg:mx-0" />
                        </div>

                        <div className="space-y-4">
                           {strategicPillars.map((pillar, i) => (
                              <motion.div
                                 key={i}
                                 initial={{ opacity: 0, x: 20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ delay: i * 0.1 }}
                                 className="flex items-center gap-5 group/item cursor-default"
                              >
                                 <span className="text-xl font-display font-bold text-[#FF6600] opacity-40 group-hover/item:opacity-100 transition-all">0{i + 1}</span>
                                 <span className="text-[14px] font-bold text-slate-950 capitalize tracking-[0.05em] group-hover/item:translate-x-3 transition-transform">{pillar}</span>
                              </motion.div>
                           ))}
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                           <p className="text-sm text-slate-500 font-semibold leading-relaxed mb-0">
                              Ensuring 100% time-to-market success through elite Noida technical hubs and institutional precision.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Sub-Metric Callout */}
                  <div className="mt-8 grid grid-cols-2 gap-5">
                     <div className="p-4 bg-white border border-slate-100 rounded-md text-center shadow-sm group hover:border-[#FF6600] transition-all">
                        <BarChart3 className="text-[#FF6600] mx-auto mb-2 group-hover:scale-110 transition-transform" size={18} />
                        <p className="text-[20px] font-bold text-slate-950 leading-none tracking-tighter">100%</p>
                        <p className="text-[11px] font-bold text-slate-400 capitalize tracking-[0.05em] mt-1">Client Loyalty</p>
                     </div>
                     <div className="p-4 bg-white border border-slate-100 rounded-md text-center shadow-sm group hover:border-[#FF6600] transition-all">
                        <Clock className="text-[#FF6600] mx-auto mb-2 group-hover:scale-110 transition-transform" size={18} />
                        <p className="text-[20px] font-bold text-slate-950 leading-none tracking-tighter">24/7</p>
                        <p className="text-[11px] font-bold text-slate-400 capitalize tracking-[0.05em] mt-1">Mission Support</p>
                     </div>
                  </div>
               </div>

            </div>
         </section>
      </div>
   );
};

export default WhyUs;
