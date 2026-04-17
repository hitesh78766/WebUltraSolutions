import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Shield, Monitor, Target, Globe, Code2, Sparkles, ChevronRight } from 'lucide-react';
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
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
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
                     <span className="text-[10px] font-bold capitalize tracking-[0.2em] text-white">Systems Engineering</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "SOFTWARE DEVELOPMENT.";
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
                     className="text-slate-600 text-[10px] md:text-xs lg:text-sm font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     Evolutionized enterprise software solutions. Engineering bespoke digital foundations with absolute integrity and technical precision.
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
                     { label: 'Engineering Core', icon: Globe },
                     { label: 'System Integrity', icon: Sparkles },
                     { label: 'Global Dominance', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 md:gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-medium text-slate-700 uppercase tracking-widest whitespace-nowrap">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* SYSTEM CORE CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-6 md:py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

                  {/* LEFT COLUMN: SYSTEM ARCHITECTURE */}
                  <div className="lg:col-span-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Systems Engineering</span>
                     </div>
                     <h2 className="text-[18px] md:text-xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase leading-[1.1] text-center lg:text-left">
                        Bespoke <span className="text-[#FF6600]">Enterprise Solutions.</span>
                     </h2>

                     <div className="space-y-4">
                        <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed max-w-2xl border-l-4 border-[#FF6600] pl-4">
                           Our engineering philosophy centers on the surgical delivery of enterprise-grade software, surpassing market expectations through excellence in full-stack architecture and timely execution.
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed px-2 md:px-0">
                           We utilize state-of-the-art technology to bring fast, consistent, and secure results. Our bespoke solutions are engineered to help you organize business and technology strategies cost-effectively without compromising on quality or performance.
                        </p>
                        <p className="text-[10px] md:text-[11px] text-slate-400 font-bold leading-relaxed opacity-80 uppercase tracking-widest px-2 md:px-0">
                           Leading payroll and software company with state-of-the-art development centers. Iterative approach avoiding surprises.
                        </p>
                     </div>

                     {/* HUB CATEGORIES */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pt-8 border-t border-slate-100">
                        {[
                           { title: "Engineering Core", icon: Code2, items: ["Billing Architecture", "Security Protocols", "Inventory Systems"] },
                           { title: "Government Sector", icon: Globe, items: ["Tenders & Compliance", "Staffing Solutions", "Dedicated Hosting"] },
                           { title: "Enterprise Hub", icon: Monitor, items: ["Ecommerce Matrix", "ERP Ecosystems", "SCM Orchestration"] }
                        ].map((hub, hubIdx) => (
                           <div key={hubIdx} className="group p-5 md:p-6 rounded-xl bg-white border border-slate-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-orange-100/50 hover:-translate-y-1.5 flex flex-col items-start gap-4">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 text-[#FF6600] flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 shadow-sm">
                                 <hub.icon size={16} className="md:w-[18px] md:h-[18px]" />
                              </div>
                              <div className="space-y-3 md:space-y-4">
                                 <h4 className="text-[12px] md:text-[13px] font-display font-bold text-slate-900 capitalize tracking-tight leading-none">{hub.title}</h4>
                                 <ul className="space-y-2.5 md:space-y-3">
                                    {hub.items.map((item, i) => (
                                       <li key={i} className="text-[13px] md:text-sm font-semibold text-slate-500 tracking-tight flex items-center gap-2.5 group/item">
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                          {item}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: TECHNICAL HUB */}
                  <div className="lg:col-span-5 relative lg:mt-0 mt-8">
                     <div className="relative rounded-md overflow-hidden bg-white shadow-2xl border border-slate-100 mx-auto max-w-[400px] lg:max-w-none">
                        <img
                           src={imgBlueprint}
                           alt="Software Architecture Blueprint"
                           className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-widest">Architectural Matrix v4.0</span>
                        </div>
                     </div>

                     <div className="p-6 rounded-xl bg-white border border-slate-50 shadow-xl space-y-4 overflow-hidden relative mt-6">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/30 rounded-full blur-3xl -mr-12 -mt-12" />
                        <h3 className="text-[12px] font-bold text-[#FF6600] capitalize tracking-wide flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                           System Integrity
                        </h3>
                        <div className="relative z-10 space-y-3">
                           {[
                              { label: "Accountability", value: "Single Point", icon: Shield },
                              { label: "Methodology", value: "Iterative Flow", icon: Workflow }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between px-3 md:px-4 py-3 md:py-4 rounded-lg bg-slate-50/50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-orange-100/30 group/status">
                                 <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover/status:text-[#FF6600] transition-colors">
                                       <item.icon size={13} className="md:w-[14px] md:h-[14px]" />
                                    </div>
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover/status:text-slate-600 transition-colors">{item.label}</span>
                                 </div>
                                 <span className="text-[11px] md:text-xs font-display font-bold text-slate-900 capitalize tracking-tight">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* PEHRA NARRATIVE SECTION - HIGH DENSITY TECHNICAL BLOCKS */}
         <section className="py-20 bg-white">
            <div className="max-w-[1300px] mx-auto px-8 lg:px-16 space-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className="space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Legacy <span className="text-[#FF6600]">Modernization</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Our approach to legacy modernization involves a surgical refactoring of monolithic systems into agile, cloud-native microservices. We ensure that mission-critical business logic is preserved while upgrading the underlying infrastructure to modern standards, enabling your enterprise to achieve greater scalability and operational resilience.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Full-Stack <span className="text-[#FF6600]">Orchestration</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        We excel in full-stack orchestration, engineering cohesive digital environments where frontend responsiveness meets backend power. By utilizing state-of-the-art technologies such as React, Node.js, and high-performance database architectures, we build bespoke software solutions that are as intuitive as they are technically robust.
                     </p>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-100">
                  <div className="max-w-4xl space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Rigorous <span className="text-[#FF6600]">Quality Assurance</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Integrity is at the heart of our engineering process, manifested through absolute quality assurance. Every line of code undergoes a rigorous development matrix, including automated security audits, unit testing, and continuous integration pipelines. This commitment ensures that your software ecosystem remains stable, secure, and future-proof.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
