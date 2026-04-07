import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Shield, Monitor, Target, Globe, Code2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import imgBlueprint from '../assets/software_engineering_elite_blueprint_1775316282086.png';

gsap.registerPlugin(ScrollTrigger);

export default function SoftwareDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

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
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Systems Engineering</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "SOFTWARE DEVELOPMENT.";
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
                     Evolutionized enterprise software solutions. Engineering bespoke digital foundations with absolute integrity and technical precision.
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
                     { label: 'Engineering Core', icon: Globe },
                     { label: 'System Integrity', icon: Sparkles },
                     { label: 'Global Dominance', icon: Monitor }
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

         {/* SYSTEM CORE CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  {/* LEFT COLUMN: SYSTEM ARCHITECTURE */}
                  <div className="lg:col-span-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Systems Engineering</span>
                     </div>
                     <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
                        Bespoke <span className="text-[#FF6600]">Enterprise Solutions.</span>
                     </h2>
                     
                     <div className="space-y-4">
                        <p className="text-[14px] font-medium text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-4">
                           Complete web solutions with a commitment to surpass expectations through excellent and timely software engineering.
                        </p>
                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                           We utilize latest technology to bring fast and consistent results. Our solutions help you organize business and technology strategies cost-effectively without compromising quality.
                        </p>
                        <p className="text-[11px] text-slate-400 font-bold leading-relaxed opacity-80 uppercase tracking-widest">
                           Leading payroll and software company with state-of-the-art development centers. Iterative approach avoiding surprises.
                        </p>
                     </div>

                     {/* HUB CATEGORIES */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                        {[
                           { title: "Engineering Core", icon: Code2, items: ["Billing", "Security", "Inventory"] },
                           { title: "Government Sector", icon: Globe, items: ["Tenders", "Staffing", "Hosting"] },
                           { title: "Enterprise Hub", icon: Monitor, items: ["Ecommerce", "ERP Systems", "SCM"] }
                        ].map((hub, hubIdx) => (
                           <div key={hubIdx} className="p-4 rounded-md bg-white border border-slate-100 shadow-sm transition-all hover:border-[#FF6600]">
                              <div className="flex items-center gap-2 mb-3">
                                 <hub.icon size={14} className="text-[#FF6600]" />
                                 <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{hub.title}</h4>
                              </div>
                              <ul className="space-y-1">
                                 {hub.items.map((item, i) => (
                                    <li key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-tight flex items-center gap-2">
                                       <div className="w-1 h-1 rounded-full bg-[#FF6600] opacity-40" />
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: TECHNICAL HUB */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-28 space-y-6">
                     <div className="relative rounded-md overflow-hidden bg-white shadow-2xl border border-slate-100">
                        <img 
                           src={imgBlueprint} 
                           alt="Software Architecture Blueprint" 
                           className="w-full h-auto object-cover" 
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Architectural Matrix v4.0</span>
                        </div>
                     </div>

                     <div className="p-6 rounded-md bg-white border border-slate-100 shadow-xl space-y-3">
                        <h3 className="text-[9px] font-bold text-[#FF6600] uppercase tracking-[0.3em] flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                           System Integrity
                        </h3>
                        <div className="space-y-2">
                           {[
                              { label: "Accountability", value: "Single Point", icon: Shield },
                              { label: "Methodology", value: "Iterative Flow", icon: Workflow }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-3 rounded-md bg-slate-50 border border-slate-100 transition-all hover:bg-white">
                                 <div className="flex items-center gap-2">
                                    <item.icon size={12} className="text-[#FF6600]" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">{item.label}</span>
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-900 uppercase">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
