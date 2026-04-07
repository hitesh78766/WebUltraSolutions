import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Shield, Zap, ChevronRight, Monitor, Tablet, Globe, Terminal, Cpu, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAppArchitecture from '../components/ThreeAppArchitecture';
import imgArchitecture from '../assets/app_architecture_blueprint.png';

gsap.registerPlugin(ScrollTrigger);

export default function AppDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE APP ARCHITECTURE BACKDROP */}
            <ThreeAppArchitecture />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">System Architecture</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "APPLICATION DEVELOPMENT.";
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
                     Premier enterprise mobile application development firm in India. Building native Android and iOS experiences supported by robust cloud infrastructure.
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
                     { label: 'Mobile Excellence', icon: Globe },
                     { label: 'Cloud Precision', icon: Sparkles },
                     { label: 'System Dominance', icon: Monitor }
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

         {/* NEXUS CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* LEFT COLUMN: PRIMARY NARRATIVE */}
                  <div className="lg:col-span-7 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">System Architecture</span>
                     </div>
                     <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
                        Platform Engineering <span className="text-[#FF6600]">Simplified.</span>
                     </h2>
                     
                     <div className="space-y-4">
                        <p className="text-[14px] font-medium text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-4">
                           Our expertise lies in building Android and iOS applications supported by a strong cloud-based backend infrastructure. Engineered for scale.
                        </p>
                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                           A mobile app can be a game changer in your business. By investing in mobile engineering, you can outstandingly energize your business performance and engagement.
                        </p>
                        <p className="text-[11px] text-slate-400 font-bold leading-relaxed opacity-80 uppercase tracking-widest">
                           Developed over  native consumer and enterprise apps since 2007. Access to latest frameworks and SDKs.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                           { name: "iOS Development", icon: Smartphone },
                           { name: "Android Ecosystem", icon: Smartphone },
                           { name: "IoT Integration", icon: Cpu }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 rounded-md bg-white border border-slate-100 group hover:border-[#FF6600] transition-all shadow-sm">
                              <div className="w-8 h-8 rounded-md bg-orange-50 text-[#FF6600] flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                                 <item.icon size={14} />
                              </div>
                              <span className="text-[10px] font-medium text-slate-800 uppercase tracking-widest leading-none">{item.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: ARCHITECTURAL VISUAL */}
                  <div className="lg:col-span-5 relative">
                     <div className="relative rounded-md overflow-hidden bg-white shadow-2xl border border-slate-100">
                        <img 
                           src={imgArchitecture} 
                           alt="App Architecture Blueprint" 
                           className="w-full h-auto object-cover" 
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Matrix Architecture v4.0</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
