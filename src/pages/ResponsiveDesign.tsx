import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Target
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
      <div className="bg-white min-h-screen">

         {/* SEPARATE COMPACT HERO HEADER - LIGHT CHROMATIC */}
         <div className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 px-8 lg:px-20 overflow-hidden bg-white">
            <ThreeResponsiveVortex />
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-10">
               <div className="space-y-4">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600">Adaptive Intelligence</span>
                  </motion.div>
                  <h1 className="text-4xl lg:text-[72px] font-black tracking-tighter leading-[0.9] uppercase text-slate-900">
                     Responsive <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Excellence.</span>
                  </h1>
               </div>
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-sm border-l-2 border-indigo-100 pl-6"
               >
                  <p className="text-slate-500 text-[11px] font-bold leading-relaxed uppercase tracking-tight">
                     Providing services and products to over 2.8 million smartphone users in the global market.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* FULL NARRATIVE SECTION - ULTRA-LIGHT CHROMATIC */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-12 lg:py-16 bg-white relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-16 items-start">

               <div className="space-y-12">
                  {/* FULL INTRODUCTORY NARRATIVE - SOFT TONES */}
                  <div className="space-y-6">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-indigo-500/20" /> Responsive Mobile Website
                     </span>
                     <div className="space-y-4 text-slate-800 text-[14px] font-bold leading-relaxed max-w-3xl">
                        <p>
                           In the present era, the accessibility of the internet is not only limited to desktops. According to the reports, there would be more than 2.8 million Smartphone users by the end of 2019. With the rapidly increasing Smartphone users in the market, businesses are moving to provide their services and products to mobile users.
                        </p>
                        <p className="p-5 bg-slate-50/50 border-l-4 border-indigo-300 rounded-r-[1.2rem]">
                           Yes, more than 65% of internet searches now come from mobile devices. So, with these facts, we can know the importance of having a web presence on mobile devices. In the old days, responsive design was not so popular... designers made separate versions, but these were not suitable for high-efficiency.
                        </p>
                     </div>
                  </div>

                  {/* HOW CAN WE MAKE RWD SECTION */}
                  <div className="space-y-6">
                     <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">How Can we Make Responsive Web Design For Your Business</h3>
                     <p className="text-slate-500 text-[13px] font-bold leading-relaxed italic border-l-2 border-slate-100 pl-4">
                        Many people, especially small businesses, are wary of investing in a separate mobile website. Having a mobile responsive style is the excellent option because it adjusts automatically on any good device and you do not get to get a separate website designed for mobile use.
                     </p>
                  </div>

                  {/* HIGH-DENSITY 1:1 GRID - ELEVATION ANIMATIONS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        {
                           h: "A Smooth Experience",
                           p: "Responsive Web Design creates a smooth experience for those who visit your site. The flexible design will automatically change layouts to meet their needs, allowing for easy surfing. Even those on smartphones will find simple navigation.",
                           t: "UX Logic"
                        },
                        {
                           h: "Access For All",
                           p: "The last thing you want is a site essentially off-limits to people using smartphones or other particular devices. RWD will automatically adapt to whatever device they use to access your site, as well as all screen sizes.",
                           t: "Utility"
                        },
                        {
                           h: "Save Time and Money",
                           p: "Millions of companies today are creating multiple sites for smartphones, tablets, and devices. When you use Responsive Web Design you do not need to maintain multiple platforms—one site fits all.",
                           t: "Efficiency"
                        },
                        {
                           h: "Business Success",
                           p: "As a responsible development service company we know how to make your business successful. Forget old days and come with new trends in order to keep your business for a long time with the competition.",
                           t: "ROI Core"
                        }
                     ].map((card, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{
                              delay: i * 0.15,
                              type: "spring",
                              stiffness: 70,
                              damping: 20
                           }}
                           whileHover={{
                              y: -8,
                              scale: 1.01,
                              transition: { duration: 0.3, ease: "easeOut" }
                           }}
                           className="group relative p-7 rounded-[1.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:from-white hover:to-indigo-50/30 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                           <div className="flex items-start gap-5">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-[12px] font-black text-white shadow-lg shadow-indigo-100 shrink-0 group-hover:shadow-indigo-500/40 transition-all duration-300">
                                 0{i + 1}
                              </div>
                              <div className="space-y-2">
                                 <h4 className="text-[14px] font-black uppercase tracking-tight text-slate-900 transition-all duration-300 group-hover:text-indigo-600">
                                    {card.h}
                                 </h4>
                                 <p className="text-[12px] font-bold text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">
                                    {card.p}
                                 </p>
                              </div>
                           </div>

                           {/* SUBTLE GLOW OVERLAY */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:to-indigo-500/5 transition-all duration-500" />
                        </motion.div>
                     ))}
                  </div>

                  {/* ULTRA-COMPACT 3-COLUMN PILL */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.98 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="p-4 rounded-[1.2rem] bg-white border border-slate-100 shadow-sm max-w-5xl"
                  >
                     <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
                        {/* PART 1 */}
                        <div className="flex items-center gap-3 flex-1">
                           <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                              <Target size={12} />
                           </div>
                           <p className="text-slate-800 text-[12px] font-black leading-tight">
                              Achieve targeted goals, <br className="hidden lg:block" />
                              necessary for every business.
                           </p>
                        </div>

                        {/* PART 2 - ACCENT */}
                        <div className="px-6 border-x border-slate-50 flex flex-col items-center justify-center min-w-[160px] py-1">
                           <span className="text-[12px] font-black uppercase tracking-tighter text-indigo-600 leading-none">responsive</span>
                           <span className="text-[12px] font-black uppercase tracking-tighter text-slate-800 leading-none">web design</span>
                        </div>

                        {/* PART 3 */}
                        <div className="flex-1">
                           <p className="text-slate-800 text-[12px] font-black leading-tight">
                              Professionals working at <br className="hidden lg:block" />
                              <span className="text-indigo-600">WebUltraSolution</span>
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* COMPACT STICKY PROOF POD - FLOATING ANIMATION */}
               <div className="relative sticky top-32">
                  <motion.div
                     initial={{ opacity: 0, x: 40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     animate={{
                        y: [0, -15, 0],
                     }}
                     transition={{
                        y: {
                           duration: 6,
                           repeat: Infinity,
                           ease: "easeInOut"
                        },
                        opacity: { duration: 0.8 },
                        x: { duration: 0.8 }
                     }}
                     whileHover={{ rotateY: -8, rotateX: 4, y: -5 }}
                     className="bg-white p-2.5 rounded-[2rem] shadow-xl border border-slate-50"
                  >
                     <div className="rounded-[1.8rem] overflow-hidden relative">
                        <img
                           src={teamExcellence}
                           alt="Professional"
                           className="w-full aspect-[4/6] object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-white/95 backdrop-blur-md border-t border-slate-50/50">
                           <div className="space-y-4">
                              <div className="h-0.5 w-12 bg-indigo-600 rounded-full" />
                              <p className="text-[12px] font-black text-slate-900 leading-relaxed">
                                 "If you fail to offer a mobile version of your website then it is a great possibility to lose a big customer base."
                              </p>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Market Validation</span>
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
