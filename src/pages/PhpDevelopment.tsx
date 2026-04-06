import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Cpu, Terminal, Zap, Layers, Monitor, Sparkles, Globe } from 'lucide-react';
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
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE SOLUTION BACKDROP */}
            <ThreeSolutionBackground />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Backend Logic</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "PHP DEVELOPMENT.";
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
                                    className={`inline-block ${word === "DEVELOPMENT." ? "text-[#FF6600]" : ""}`}
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
                     Crafting result-driven PHP applications that yield measurable results. Engineering scalable server-side dominance for global brands.
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
                     { label: 'Logic Integration', icon: Globe },
                     { label: 'Runtime Precision', icon: Sparkles },
                     { label: 'Server Dominance', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* CONTENT SECTION - COMPACT SCALE */}
         <section className="relative py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  <div className="lg:col-span-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Development Hub</span>
                     </div>

                     <div className="space-y-4">
                        <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                           PHP Web <span className="text-[#FF6600]">Development</span>
                        </h2>
                        
                        <div className="space-y-4">
                           <p className="text-[14px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary border-l-4 border-[#FF6600] pl-4">
                              Result-driven PHP websites & applications for your custom development needs. Engineering robust software for the digital frontier.
                           </p>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                              Our efforts assist clients in creating a dominant web presence. We blend creativity with latest web standards, secure codes, and search engine friendly logic.
                           </p>
                        </div>
                     </div>

                     {/* Features Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                        {features.map((feature, i) => (
                           <div key={i} className="group flex items-start gap-4 p-3 bg-white border border-slate-100 rounded-md transition-all hover:border-[#FF6600]">
                              <div className="mt-1">
                                 <Star size={12} className="text-[#FF6600] fill-[#FF6600]" />
                              </div>
                              <span className="text-[11px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                 {feature}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN - TECHNICAL HIGHLIGHTS */}
                  <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
                     <div className="p-6 bg-white border border-slate-100 rounded-md shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-orange-50 rounded-bl-3xl" />
                        <div className="space-y-6">
                           <div className="flex items-center gap-3">
                              <Terminal size={18} className="text-[#FF6600]" />
                              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Global Scale</h4>
                           </div>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                              Over 20 million sites have been developed using PHP. We provide the expertise essential for crafting quality solutions through advanced techniques.
                           </p>
                           <div className="grid grid-cols-2 gap-3 pt-2">
                              <div className="p-3 bg-slate-50 rounded-md text-center">
                                 <div className="text-[#FF6600] text-[14px] font-black">20M+</div>
                                 <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Installations</div>
                              </div>
                              <div className="p-3 bg-slate-50 rounded-md text-center">
                                 <div className="text-[#FF6600] text-[14px] font-black">Secure</div>
                                 <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Architecture</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-md border border-orange-100">
                        <Cpu size={16} className="text-[#FF6600]" />
                        <span className="text-[10px] font-black text-[#FF6600] uppercase tracking-widest leading-tight">Runtime Execution Engineering</span>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
