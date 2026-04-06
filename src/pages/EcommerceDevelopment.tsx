import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, BarChart, Globe, Monitor, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeEcommercePearls from '../components/ThreeEcommercePearls';
import imgEcommerce from '../assets/services/ecommerce_dev.png';

gsap.registerPlugin(ScrollTrigger);

export default function EcommerceDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE PEARLS BACKDROP */}
            <ThreeEcommercePearls />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Market Ecosystem</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ECOMMERCE SOLUTIONS.";
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
                                    className={`inline-block ${word === "SOLUTIONS." ? "text-[#FF6600]" : ""}`}
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
                     Optimized digital commerce for high conversion. Engineering powerful transactional architectures that dominate the global marketplace.
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
                     { label: 'Market Conversion', icon: Globe },
                     { label: 'Secure Protocols', icon: Sparkles },
                     { label: 'Trade Precision', icon: Monitor }
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
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

                  {/* LEFT CONTENT */}
                  <div className="lg:col-span-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Development Hub</span>
                     </div>

                     <div className="space-y-4">
                        <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                           Elite Ecommerce <span className="text-[#FF6600]">Architectures</span>
                        </h2>

                        <div className="space-y-4">
                           <p className="text-[14px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary border-l-4 border-[#FF6600] pl-4">
                              eCommerce is growing globally for both B2B and B2C segments. We deliver powerful solutions allowing your business to stand out with authority.
                           </p>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                              WebUltraSolution provides specialized development plans tailored to your unique requirements. Our efforts assist clients in creating a dominant web presence backed with robust software.
                           </p>
                           <p className="text-[11px] text-slate-700 font-bold leading-relaxed italic opacity-80">
                              Now trends are changing—people want everything at their doorstep and e-commerce made it possible with just a few clicks.
                           </p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
                        {[
                           { icon: Globe, label: "User Friendly" },
                           { icon: CreditCard, label: "Reasonable Price" },
                           { icon: ShieldCheck, label: "On Time Delivery" },
                           { icon: BarChart, label: "Quality Assurance" }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-md bg-white border border-slate-100 shadow-sm transition-all hover:-translate-y-1 text-center">
                              <div className="p-2 rounded-md bg-[#FF6600] text-white shrink-0">
                                 <item.icon size={14} />
                              </div>
                              <span className="text-[9px] font-black text-[#FF6600] uppercase tracking-widest leading-none">
                                 {item.label}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT SIDE VISUAL ELEMENT */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-28">
                     <div className="relative rounded-md overflow-hidden shadow-2xl border border-slate-100 bg-white">
                        <img src={imgEcommerce} alt="Global Trade Hub" className="w-full h-auto object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[10px] font-black text-white uppercase tracking-widest">Global scaling engine</span>
                        </div>
                     </div>

                     <div className="mt-8 p-6 rounded-md bg-slate-900 text-white space-y-3">
                        <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-400">Optimization</h5>
                        <p className="text-[11px] font-medium text-slate-300 leading-relaxed">
                           We turn complex selling ideas into simple e-commerce models that make shopping fun for customers. System v4.0 Active.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
