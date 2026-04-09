import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Globe, Quote } from 'lucide-react';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

const Mission: React.FC = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end end"]
   });

   useEffect(() => {
 	window.scrollTo(0, 0);
   }, []);

   const SectionHeader = ({ label, title }: { label: string, title: string }) => (
 		<div className="flex flex-col gap-1 mb-8">
 			<div className="flex items-center gap-2">
 				<div className="h-[2px] w-8 bg-[#FF6600]" />
 				<span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">{label}</span>
 			</div>
 			<h2 className="text-xl lg:text-3xl font-display font-black tracking-tighter uppercase leading-none text-slate-950 italic">
 				{title}
 			</h2>
 		</div>
 	);

   return (
 	<div ref={containerRef} className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
 	   {/* HERO SECTION - ELITE TYPOGRAPHY REFINEMENT */}
 	   <section className="relative h-[280px] lg:h-[350px] flex items-center justify-center overflow-hidden border-b border-orange-100/50">
   		<ThreeNetworkGlobe />
         <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-white/95 z-[1]" />

   		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center justify-center">
   		   <div className="flex flex-col items-center text-center gap-5 max-w-4xl">
   			<motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 rounded-md shadow-2xl border border-white/10"
             >
   			   <span className="flex h-1.5 w-1.5 items-center justify-center">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#FF6600] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6600]"></span>
                </span>
   			   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Institutional Mission</span>
   			</motion.div>

   			<div className="space-y-4">
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-1">
                  <span className="block text-[11px] font-black text-[#FF6600] uppercase tracking-[0.6em] mb-1">Elite Global Strategy</span>
                  <h1 className="text-3xl lg:text-5xl font-black text-slate-950 tracking-tighter leading-[1] uppercase whitespace-nowrap">
                    Our Mission <span className="text-[#FF6600] italic">& Vision.</span>
                  </h1>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 text-xs lg:text-base font-medium max-w-3xl border-x-[2px] border-[#FF6600] px-8 py-1.5 leading-relaxed italic"
                >
                  Webultrasolution is providing customized services to specific <span className="text-slate-950 font-black">web designing</span> and <span className="text-slate-950 font-black">web programming</span> needs with absolute technical authority.
                </motion.p>
              </div>
   		   </div>
   		</div>
 	   </section>

 	   {/* MISSION SECTION - ELITE TYPOGRAPHY REFINEMENT */}
 	   <section className="pt-12 pb-16 lg:pt-20 lg:pb-32 bg-white">
 		<div className="max-w-[1400px] mx-auto px-8 lg:px-20">
 		   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-8">
                <SectionHeader label="Strategic Core" title="Our Mission" />
                <div className="space-y-10 mt-6">
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 bg-[#FDFBF9] border-r-[6px] border-[#FF6600] rounded-sm relative group shadow-sm transition-all hover:shadow-xl">
                    <p className="text-base text-slate-950 font-black italic leading-tight tracking-tight">
                      "To fulfill all needs and exceed all expectations of our client's is the <span className="text-[#FF6600]">main mantra</span> that we passionately follow at webultrasolution."
                    </p>
                  </motion.div>
                  <div className="space-y-6 text-sm lg:text-base text-slate-500 font-bold leading-relaxed">
                     <p>Webultrasolution is provided customized services to specific web designing and web programming needs of the clients. Our approach is <span className="text-slate-950 font-black underline decoration-[#FF6600] decoration-2 underline-offset-4 uppercase italic">customer-oriented</span>, business-minded and cost-efficient.</p>
                     <p className="text-slate-950 font-black italic border-l-4 border-[#FF6600] pl-6 py-1 leading-relaxed">
                       It's about doing the right thing, not just anything. We work to perceive the entire scope of a business so that we can implement them consistently across <span className="text-[#FF6600]">all mediums.</span>
                     </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:pt-14">
                <p className="text-xs lg:text-sm text-slate-600 font-bold leading-relaxed italic p-6 bg-[#FDFBF9] border border-slate-100 shadow-sm">
                  We use <span className="text-slate-950 font-black">strategic data</span> and relevant insights to enlighten the creative process and technical fulfilment. By taking a strategic approach we're able to boost businesses: see the <span className="text-[#FF6600] font-black uppercase tracking-widest">whole forest</span> before picking the right trees.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Customer Oriented", "Business Minded", "Cost Efficient"].map((pill, i) => (
                    <div key={i} className="px-5 py-1.5 bg-white border-2 border-[#FF6600]/20 text-[10px] font-black text-[#FF6600] uppercase tracking-[0.2em] rounded-full flex items-center gap-2 transition-all hover:bg-[#FF6600] hover:text-white group hover:border-[#FF6600] cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] group-hover:bg-white animate-pulse" />
                      {pill}
                    </div>
                  ))}
                </div>
                
                <div className="relative aspect-[21/9] lg:max-h-[250px] rounded-md overflow-hidden shadow-2xl w-full border border-slate-100 mt-6 group">
                  <img src="/mission_hero.png" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                     <div className="w-10 h-[1px] bg-[#FF6600]" />
                     <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Visual Intelligence</span>
                  </div>
                </div>
              </div>
 		   </div>
 		</div>
 	   </section>

        {/* VISION SECTION - COMPACTED & REBALANCED TYPOGRAPHY */}
        <section className="py-10 lg:py-16 bg-[#FDFBF9] border-y border-slate-100 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
             <div className="space-y-8">
               <SectionHeader label="Future Axis" title="Prosperity & Connection" />
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { t: "Global Vision", d: "Prosperity, meaning, and connection for all." },
                    { t: "Measurable Impact", d: "Results for clients and business owners." },
                    { t: "WOW Factor", d: "Deliver the WOW factor through our services." }
                  ].map((box, i) => (
                    <div key={i} className="p-5 bg-white border border-slate-100 rounded-md shadow-sm hover:border-[#FF6600] hover:shadow-xl transition-all duration-500 group">
                       <h4 className="text-[10px] font-bold text-[#FF6600] uppercase tracking-[0.2em] mb-2 group-hover:tracking-[0.3em] transition-all">{box.t}</h4>
                       <p className="text-sm lg:text-base font-semibold text-slate-500 italic leading-snug group-hover:text-slate-900 transition-colors">{box.d}</p>
                    </div>
                  ))}
               </div>
             </div>
             <div className="space-y-6 lg:pl-12 border-l-2 border-[#FF6600]/20 py-2">
               <p className="text-base text-slate-600 font-semibold leading-relaxed italic">
                 Leverage expertise and <span className="text-slate-950 font-bold border-b-2 border-[#FF6600]">marginal understanding</span> of business areas to create tailored-fit solutions for individual models.
               </p>
               <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Relationships", "Disciplined", "Quality"].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-[#FF6600] uppercase tracking-[0.2em] group cursor-default">
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" /> {item}
                     </div>
                  ))}
               </div>
               <p className="text-sm text-slate-950 font-bold uppercase tracking-tight pt-6 border-t border-slate-200 italic leading-none">
                 "Prime performer in <span className="text-[#FF6600]">quality Web</span>, Print and Software solutions."
               </p>
             </div>
          </div>
        </section>

 	   {/* COMMITMENT & CREDENTIALS - ELITE TYPOGRAPHY REFINEMENT */}
 	   <section className="py-20 lg:py-32 bg-white">
 		<div className="max-w-[1400px] mx-auto px-8 lg:px-20">
 		   <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7 space-y-10">
                <SectionHeader label="The Promise" title="Our Commitment" />
                <div className="space-y-8 text-sm lg:text-base text-slate-500 font-bold leading-relaxed">
                   <p className="text-base lg:text-lg text-slate-950 font-black italic border-l-[6px] border-[#FF6600] pl-8 py-2 shadow-sm rounded-r-md">
                     Pride in <span className="text-[#FF6600]">on-time delivery</span> and quick turn around while exceeding quality demands.
                   </p>
                   <p>Customer Satisfaction continues to be of <span className="text-slate-950 font-black uppercase italic tracking-tighter">utmost importance</span> to CWS, as do Consistent quality and Constant innovation.</p>
                   <div className="p-8 bg-[#FDFBF9] border border-slate-100 italic rounded-md shadow-sm border-l-4 border-slate-950">
                     <p className="text-slate-600">
                        Synergy in operations realized through <span className="text-[#FF6600] font-black">collaborative approach</span> and emphasis on economical solutions.
                     </p>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <SectionHeader label="Background" title="Credentials" />
                  <p className="text-xs lg:text-sm text-slate-500 font-bold leading-relaxed italic text-right border-r-[3px] border-[#FF6600] pr-8">
                    Innovative ideas and <span className="text-slate-950 font-black">cost-effective</span> completions strengthen our relations and build trust for valuable clients worldwide.
                  </p>
                </div>

                <motion.div whileHover={{ y: -5 }} className="p-8 bg-slate-950 border border-white/10 text-white relative rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6600]/10 rounded-bl-full pointer-events-none group-hover:bg-[#FF6600]/20 transition-all duration-700" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={24} className="text-[#FF6600] group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl lg:text-2xl font-display font-black uppercase italic tracking-tighter text-[#FF6600]">Integrity.</h3>
                    </div>
                    <p className="text-sm lg:text-base font-bold text-slate-300 leading-tight italic border-l-2 border-[#FF6600] pl-6 py-1">
                      "Doing the right thing, no matter the cost. <span className="text-[#FF6600] font-black">Fairness and honesty</span>—without it, we have nothing."
                    </p>
                  </div>
                </motion.div>
              </div>
 		   </div>
 		</div>
 	   </section>
 	</div>
    );
 };

 export default Mission;
