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
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
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

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "RESPONSIVE EXCELLENCE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-4">
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-xl leading-relaxed"
                  >
                     Providing services and products to over 2.8 million smartphone users in the global market. Engineering fluid digital experiences across every resolution.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
               >
                  {[
                     { label: 'Multi-Device RWD', icon: Globe },
                     { label: 'Fluid Motion UX', icon: Sparkles },
                     { label: 'Market Precision', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* FULL NARRATIVE SECTION - COMPACT SCALE */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-8 bg-[#FDFBF9] relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-start">

               <div className="space-y-10">
                  {/* FULL INTRODUCTORY NARRATIVE - SOFT TONES */}
                  <div className="space-y-4">
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF6600] flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-[#FF6600]/20" /> Responsive Mobile Website
                     </span>
                     <div className="space-y-4 text-slate-800 text-[12px] lg:text-[14px] font-bold leading-relaxed max-w-3xl">
                        <p>
                           In the present era, the accessibility of the internet is not only limited to desktops. According to the reports, there would be more than 2.8 million Smartphone users by the end of 2019. With the rapidly increasing Smartphone users in the market, businesses are moving to provide their services and products to mobile users.
                        </p>
                        <p className="p-5 bg-white border-l-4 border-[#FF6600] shadow-sm rounded-md">
                           Yes, more than 65% of internet searches now come from mobile devices. So, with these facts, we can know the importance of having a web presence on mobile devices. In the old days, responsive design was not so popular... designers made separate versions, but these were not suitable for high-efficiency.
                        </p>
                     </div>
                  </div>

                  {/* HOW CAN WE MAKE RWD SECTION */}
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">How Can we Make Responsive Web Design For Your Business</h3>
                     <p className="text-slate-500 text-[12px] font-bold leading-relaxed italic border-l-2 border-[#FF6600] pl-4">
                        Many people, especially small businesses, are wary of investing in a separate mobile website. Having a mobile responsive style is the excellent option because it adjusts automatically on any good device and you do not get to get a separate website designed for mobile use.
                     </p>
                  </div>

                  {/* HIGH-DENSITY 1:1 GRID - ELITE CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{
                              delay: i * 0.1,
                              duration: 0.8
                           }}
                           whileHover={{
                              y: -4,
                              scale: 1.01,
                              transition: { duration: 0.3, ease: "easeOut" }
                           }}
                           className="group relative p-6 rounded-md bg-white border border-slate-100 hover:border-[#FF6600] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 shrink-0 rounded-md bg-orange-50 flex items-center justify-center text-[12px] font-bold text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 shadow-sm">
                                 0{i + 1}
                              </div>
                              <div className="space-y-1">
                                 <h4 className="text-[12px] lg:text-[14px] font-bold uppercase tracking-tight text-slate-900 group-hover:text-[#FF6600]">
                                    {card.h}
                                 </h4>
                                 <p className="text-[11px] lg:text-[12px] font-bold text-slate-500 leading-snug group-hover:text-slate-700">
                                    {card.p}
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* ULTRA-COMPACT 3-COLUMN PILL */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.98 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="p-4 rounded-md bg-white border border-slate-100 shadow-sm max-w-5xl"
                  >
                     <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
                        {/* PART 1 */}
                        <div className="flex items-center gap-3 flex-1">
                           <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] shrink-0">
                              <Target size={12} />
                           </div>
                           <p className="text-slate-800 text-[10px] font-bold leading-tight">
                              Achieve targeted goals, <br className="hidden lg:block" />
                              necessary for every business.
                           </p>
                        </div>

                        {/* PART 2 - ACCENT */}
                        <div className="px-6 border-x border-slate-100 flex flex-col items-center justify-center min-w-[160px] py-1">
                           <span className="text-[11px] font-bold uppercase tracking-tighter text-[#FF6600] leading-none">responsive</span>
                           <span className="text-[11px] font-bold uppercase tracking-tighter text-slate-800 leading-none">web design</span>
                        </div>

                        {/* PART 3 */}
                        <div className="flex-1">
                           <p className="text-slate-800 text-[10px] font-bold leading-tight">
                              Professionals working at <br className="hidden lg:block" />
                              <span className="text-[#FF6600]">WebUltraSolution</span>
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* COMPACT STICKY PROOF POD */}
               <div className="relative sticky top-28">
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
                           className="w-full aspect-[4/5] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white text-left">
                           <div className="space-y-4">
                              <div className="h-0.5 w-10 bg-[#FF6600] rounded-full" />
                              <p className="text-[11px] lg:text-[13px] font-bold leading-relaxed italic">
                                 "If you fail to offer a mobile version of your website then it is a great possibility to lose a big customer base."
                              </p>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="text-[9px] font-bold text-slate-200 uppercase tracking-widest leading-none">Market Validation</span>
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
