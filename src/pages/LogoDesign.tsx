import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Monitor, Sparkles, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

export default function LogoDesign() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNetworkGlobe />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Identity Core</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "LOGO DESIGN.";
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
                                    className={`inline-block ${word === "DESIGN." ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-[10px] md:text-xs lg:text-sm font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     Crafting Compelling Visual Identities for Global Enterprises. Memorable, distinctive, and professionally engineered for dominance.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-0 pb-4 md:pb-0"
               >
                  {[
                     { label: 'Brand Recognition', icon: Globe },
                     { label: 'Market Visibility', icon: Sparkles },
                     { label: 'Strategic Identity', icon: Monitor }
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

         {/* THE IDENTITY BLUEPRINT - COMPACT SCALE */}
         <section className="relative py-6 md:py-8 bg-white overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                  <div className="lg:col-span-12 space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Identity Core</span>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                        <div className="lg:col-span-7 space-y-6">
                           <h2 className="text-[18px] md:text-xl lg:text-2xl font-display font-bold text-slate-900 uppercase tracking-tight">
                              Compelling & <span className="text-[#FF6600]">Distinctive.</span>
                           </h2>
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              A compelling logo should always be distinctive and reflect the essence of a company. Our professional designers specialize in crafting logos for high-growth enterprises.
                           </p>
                           <div className="h-px w-full bg-slate-100" />
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              We prioritize our clients' objectives, creating logos that help their companies gain a competitive edge through a compelling visual identity. Memory-engineered for brand endurance.
                           </p>
                           <div className="h-px w-full bg-slate-100" />
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-[#FF6600] leading-relaxed italic">
                              Deliverables include Master Vector Assets (AI/EPS), High-Fidelity Chromatic Systems (Pantone/CMYK), and Custom Typographic Protocols.
                           </p>
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              We bridge the gap between pure strategic intent and visual impact. Every design is built to exceed institutional standards and sustain market dominance.
                           </p>
                        </div>

                        <div className="lg:col-span-1" />

                        <div className="relative lg:col-span-4 space-y-6 md:space-y-8 pl-0 lg:pl-10">
                           {/* CINEMATIC LUMINOUS AXIS */}
                           <div className="hidden lg:block absolute left-0 top-0 w-px h-[100%] bg-gradient-to-b from-[#FF6600] via-[#FF6600]/40 to-transparent" />

                           <div className="space-y-3 group/sidebar hover:translate-x-1 transition-transform duration-500 p-4 rounded-md hover:bg-orange-50/30">
                              <div className="flex items-center gap-3">
                                 <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover/sidebar:bg-[#FF6600] group-hover/sidebar:text-white transition-all duration-500 shadow-sm">
                                    <Lightbulb size={16} />
                                 </div>
                                 <h3 className="text-[11px] md:text-xs lg:text-sm font-display font-extrabold text-slate-900 tracking-tight">Why You Need a Logo</h3>
                              </div>
                              <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed pl-10 md:pl-11">
                                 Logo creates a value of your strong brand recognition and familiarity. It makes people think of your service or product instantly.
                              </p>
                           </div>

                           <div className="space-y-3 group/sidebar hover:translate-x-1 transition-transform duration-500 p-4 rounded-md hover:bg-orange-50/30">
                              <div className="flex items-center gap-3">
                                 <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover/sidebar:bg-[#FF6600] group-hover/sidebar:text-white transition-all duration-500 shadow-sm">
                                    <CheckCircle2 size={16} />
                                 </div>
                                 <h3 className="text-[11px] md:text-xs lg:text-sm font-display font-extrabold text-slate-900 tracking-tight">Why WebUltraSolution</h3>
                              </div>
                              <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed pl-10 md:pl-11">
                                 We have helped hundreds of companies to establish their brands. We understand the perfect position a logo has in creating brand identity.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
