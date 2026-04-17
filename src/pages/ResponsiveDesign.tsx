import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Target,
   Monitor,
   Sparkles,
   Globe,
   ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeResponsiveVortex from '../components/ThreeResponsiveVortex';
import teamExcellence from '../assets/team_excellence.png';

gsap.registerPlugin(ScrollTrigger);

export default function ResponsivePage() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary">

         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE VORTEX BACKDROP */}
            <ThreeResponsiveVortex />

            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Adaptive Intelligence</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "RESPONSIVE EXCELLENCE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 md:mr-4">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 200,
                                       damping: 10,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                                    }}
                                    className={`inline-block ${word === "EXCELLENCE." ? "text-[#FF6600]" : ""}`}
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-600 text-[10px] md:text-xs lg:text-base font-semibold max-w-2xl leading-relaxed px-6 md:px-0"
                  >
                     Providing services and products to over 2.8 million smartphone users in the global market. Engineering fluid digital experiences across every resolution.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4 mb-8 sm:mb-10 lg:mb-0 pb-4 md:pb-0"
               >
                  {[
                     { label: 'Multi-Device RWD', icon: Globe },
                     { label: 'Fluid Motion UX', icon: Sparkles },
                     { label: 'Market Precision', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 md:gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-semibold text-slate-700 uppercase tracking-widest whitespace-nowrap">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* FULL NARRATIVE SECTION - COMPACT SCALE */}
         <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-20 py-6 md:py-8 relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-start">

               <div className="space-y-10">
                  {/* FULL INTRODUCTORY NARRATIVE - SOFT TONES */}
                  <div className="space-y-4">
                     <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600] flex items-center gap-3">
                        <div className="w-4 md:w-6 h-[1px] bg-[#FF6600]/20" /> Responsive Mobile Website
                     </span>
                     <div className="space-y-4 text-slate-500 text-sm md:text-base lg:text-base font-semibold leading-relaxed max-w-3xl">
                        <p>
                           In the present era, the accessibility of the internet is not only limited to desktops. According to the reports, there would be more than 2.8 million Smartphone users by the end of 2019. With the rapidly increasing Smartphone users in the market, businesses are moving to provide their services and products to mobile users.
                        </p>
                        <p className="p-4 md:p-5 bg-white border-l-4 border-[#FF6600] shadow-sm rounded-md">
                           Yes, more than 65% of internet searches now come from mobile devices. So, with these facts, we can know the importance of having a web presence on mobile devices. In the old days, responsive design was not so popular... designers made separate versions, but these were not suitable for high-efficiency.
                        </p>
                     </div>
                  </div>

                  {/* HOW CAN WE MAKE RWD SECTION */}
                  <div className="space-y-4">
                     <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-slate-900 tracking-tight">How Can we Make Responsive Web Design For Your Business</h3>
                     <p className="text-slate-500 text-sm md:text-base lg:text-base font-semibold leading-relaxed italic border-l-2 border-[#FF6600] pl-4">
                        Many people, especially small businesses, are wary of investing in a separate mobile website. Having a mobile responsive style is the excellent option because it adjusts automatically on any good device and you do not get to get a separate website designed for mobile use.
                     </p>
                  </div>

                  {/* HIGH-DENSITY 1:1 GRID - ELITE CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                     {[
                        {
                           h: "A Smooth Experience",
                           p: "Responsive Web Design creates a smooth experience for those who visit your site. The flexible design will automatically change layouts to meet their needs.",
                           t: "UX Logic"
                        },
                        {
                           h: "Access For All",
                           p: "The last thing you want is a site essentially off-limits to people using smartphones or other particular devices. RWD will automatically adapt.",
                           t: "Utility"
                        },
                        {
                           h: "Save Time and Money",
                           p: "When you use Responsive Web Design you do not need to maintain multiple platforms—one site fits all screen sizes with ease.",
                           t: "Efficiency"
                        },
                        {
                           h: "Business Success",
                           p: "As a responsible development service company we know how to make your business successful. Forget old days and come with new trends.",
                           t: "ROI Core"
                        }
                     ].map((card, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{
                              delay: i * 0.1,
                              duration: 1.2,
                              ease: [0.16, 1, 0.3, 1]
                           }}
                           whileHover={{
                              y: -8,
                              scale: 1.01,
                              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                           }}
                           className="group relative p-4 md:p-5 lg:p-6 rounded-md bg-white border border-slate-100 hover:border-[#FF6600]/30 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,102,0,0.12)] transition-all duration-700 cursor-pointer overflow-hidden"
                        >
                           {/* LARGE FLOATING INDEX - ELITE STYLE */}
                           <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                              <span className="text-4xl font-display font-bold text-slate-900 select-none italic tracking-tighter">0{i + 1}</span>
                           </div>

                           <div className="relative z-10 space-y-3">
                              {/* STATUS BADGE COHESION */}
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{card.t}</span>
                              </div>

                              <div className="space-y-1">
                                 <h4 className="text-base md:text-lg lg:text-xl font-display font-bold tracking-tight text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                    {card.h}
                                 </h4>
                                 <div className="w-10 h-0.5 bg-slate-100 group-hover:w-20 group-hover:bg-[#FF6600] transition-all duration-700" />
                                 <p className="text-[13px] md:text-sm lg:text-base font-semibold text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-500 max-w-sm">
                                    {card.p}
                                 </p>
                              </div>

                              <div className="pt-1 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                                 <span>Specification 1.0</span>
                                 <div className="flex-1 h-[1px] bg-slate-100 group-hover:bg-slate-200" />
                                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FF6600]" />
                              </div>
                           </div>

                           {/* GLOW ACCENT AT BOTTOM */}
                           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6600]/0 to-transparent group-hover:via-[#FF6600] transition-all duration-700" />
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* COMPACT STICKY PROOF POD */}
               <div className="relative sticky md:top-28 w-[92%] mx-auto lg:w-full">
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     whileHover={{ y: -5 }}
                     className="bg-white p-2 text-center rounded-md shadow-xl border border-slate-50"
                  >
                     <div className="rounded-md overflow-hidden relative">
                        <img
                           src={teamExcellence}
                           alt="Professional"
                           className="w-full aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white text-left">
                           <div className="space-y-4">
                              <div className="h-0.5 w-10 bg-[#FF6600] rounded-full" />
                              <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed italic">
                                 "If you fail to offer a mobile version of your website then it is a great possibility to lose a big customer base."
                              </p>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="text-[8px] md:text-[9px] font-bold text-slate-200 uppercase tracking-widest leading-none">Market Validation</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
