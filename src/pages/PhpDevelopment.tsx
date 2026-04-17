import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Cpu, Terminal, Zap, Layers, Monitor, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

gsap.registerPlugin(ScrollTrigger);

export default function PhpDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const features = [
      "Web Application Development",
      "Open Source Web Development",
      "SEO Web Development",
      "PHP Web Development",
      "Custom CMS Development",
      "Custom eCommerce Web Development",
      "End-to-end PHP development solutions",
      "Quality rich custom PHP development",
      "24/7 technical support",
      "Advanced Backend Management"
   ];

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE TYPOGRAPHY SCALE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE SOLUTION BACKDROP */}
            <ThreeSolutionBackground />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-5">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-sm shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold capitalize tracking-[0.2em] text-white">Backend Logic</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "PHP DEVELOPMENT SOLUTIONS.";
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
                                    className={`inline-block ${word === "DEVELOPMENT" || word === "SOLUTIONS." ? "text-[#FF6600]" : ""}`}
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
                     Crafting result-driven PHP applications that yield measurable results. Engineering scalable server-side dominance for global brands.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-0 pb-4 md:pb-0 px-4"
               >
                  {[
                     { label: 'Logic Integration', icon: Globe },
                     { label: 'Runtime Precision', icon: Sparkles },
                     { label: 'Server Dominance', icon: Monitor }
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

         {/* CONTENT SECTION - ENHANCED SCALE & POLISH */}
         <section className="relative py-8 md:py-12 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  
                  <div className="lg:col-span-8 space-y-8">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-[#FF6600]" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Engineering Hub</span>
                     </div>

                     <div className="space-y-6">
                        <h2 className="text-[18px] md:text-xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase leading-[1.1]">
                           PHP Web <span className="text-[#FF6600]">Development</span> Authority
                        </h2>
                        
                        <div className="space-y-6">
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed tracking-tight font-secondary border-l-4 border-[#FF6600] pl-4 md:pl-6 py-1">
                              Result-driven PHP websites & applications for your custom development needs. Engineering robust software for the digital frontier.
                           </p>
                           <p className="text-sm md:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl">
                              Our efforts assist clients in creating a dominant web presence. We blend creativity with latest web standards, secure codes, and search engine friendly logic.
                           </p>
                        </div>
                     </div>

                     {/* Features Grid - Elite Industrial Spec Upgrade (3-Column Density) */}
                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 pt-6">
                        {features.map((feature, i) => (
                           <div 
                              key={i} 
                              className="group relative flex flex-col p-3 md:p-3.5 bg-white border border-slate-100 rounded-md transition-all duration-500 hover:border-[#FF6600]/20 hover:shadow-[0_20px_40px_rgba(255,102,0,0.05)] hover:-translate-y-1 overflow-hidden"
                           >
                              {/* NEURAL BACKGROUND GLOW */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                              {/* MONOSPACED METADATA */}
                              <div className="flex justify-between items-start mb-2 relative z-10">
                                 <span className="text-[10px] md:text-[13px] font-mono font-bold text-slate-900 uppercase tracking-tighter group-hover:text-[#FF6600] transition-colors">PHP-SPEC_{String(i + 1).padStart(2, '0')}</span>
                                 <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                    <span className="text-[7px] md:text-[8px] font-bold text-[#FF6600] uppercase tracking-widest">Active</span>
                                 </div>
                              </div>

                              <div className="flex items-start gap-3">
                                 <div className="mt-1 relative">
                                    <div className="absolute -inset-1 bg-[#FF6600]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Star size={12} className="relative text-[#FF6600] fill-[#FF6600]/10 group-hover:fill-[#FF6600] group-hover:scale-110 transition-all duration-500" />
                                 </div>
                                 <span className="text-[10px] md:text-[11px] lg:text-[13px] font-semibold text-slate-500 group-hover:text-slate-950 transition-colors leading-tight relative z-10">
                                    {feature}
                                 </span>
                              </div>

                              {/* INDUSTRIAL OVERLAY DETAIL */}
                              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FF6600]/[0.01] rounded-tl-3xl translate-y-1/2 translate-x-1/2 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN - ELITE TECHNICAL SPEC */}
                  <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                     <div className="p-8 bg-white border border-slate-100 rounded-md shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6600] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50/50 rounded-bl-3xl group-hover:bg-orange-100 transition-colors duration-500" />
                        
                        <div className="space-y-6 relative z-10">
                           <div className="flex items-center gap-3">
                              <div className="p-2.5 rounded-md bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                                 <Terminal size={20} />
                              </div>
                              <h4 className="text-[13px] font-bold text-slate-900 capitalize tracking-wide group-hover:text-[#FF6600] transition-colors">Global Scale</h4>
                           </div>
                           <p className="text-[13px] md:text-[14px] text-slate-500 font-semibold leading-relaxed">
                              Over 20 million sites have been developed using PHP. We provide the expertise essential for crafting quality solutions through advanced techniques.
                           </p>
                           <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="p-4 bg-slate-50/50 rounded-md text-center group/stat transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                                 <div className="text-[#FF6600] text-[16px] font-bold font-display">20M+</div>
                                 <div className="text-[12px] font-bold text-slate-400 capitalize  tracking-tighter">Installations</div>
                              </div>
                              <div className="p-4 bg-slate-50/50 rounded-md text-center group/stat transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                                 <div className="text-[#FF6600] text-[16px] font-bold font-display">Secure</div>
                                 <div className="text-[12px] font-bold text-slate-400 capitalize tracking-tighter">Architecture</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="group flex items-center gap-4 p-5 bg-orange-50/50 rounded-md border border-orange-100/50 hover:bg-[#FF6600] transition-all duration-500 shadow-sm hover:shadow-xl">
                        <div className="p-2 rounded-md bg-white text-[#FF6600] group-hover:scale-110 transition-transform duration-500 shadow-sm">
                           <Cpu size={18} />
                        </div>
                        <span className="text-[11px] font-bold text-[#FF6600] group-hover:text-white capitalize tracking-tight leading-tight transition-colors">Runtime Execution Engineering</span>
                     </div>
                     
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
