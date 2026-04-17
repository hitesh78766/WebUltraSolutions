import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Cpu, Target, Layers, Globe, Monitor, Code2, Sparkles, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAndroidArchitecture from '../components/ThreeAndroidArchitecture';
import imgArchitecture from '../assets/android_architecture_vibrant_elite_1775760813364.png';

gsap.registerPlugin(ScrollTrigger);

export default function AndroidAppDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE ANDROID ARCHITECTURE BACKDROP */}
            <ThreeAndroidArchitecture />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-5">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-sm shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold capitalize tracking-[0.2em] text-white">Android Engineering</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "ANDROID APP DEVELOPMENT.";
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
                     End-to-end solutions for custom mobile app development. Leveraging platform functionalities to build high-quality, high-status custom Android apps.
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
                     { label: 'Ecosystem Mastery', icon: Globe },
                     { label: 'Platform Precision', icon: Sparkles },
                     { label: 'Market Presence', icon: Monitor }
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

         {/* CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-6 md:py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  {/* LEFT CONTENT: TECHNICAL NARRATIVE */}
                  <div className="lg:col-span-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Mobile Engineering</span>
                     </div>
                     <h2 className="text-[18px] md:text-xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase leading-[1.1] text-center lg:text-left">
                        Premier <span className="text-[#FF6600]">Android Ecosystems.</span>
                     </h2>
                     
                     <div className="space-y-4">
                        <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed max-w-2xl border-l-4 border-[#FF6600] pl-4">
                           From design and development through launch and maintenance. We plan, design & develop employing platform functionalities to full extent.
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed px-2 md:px-0">
                           Android has enabled its users to explore the world of ease. Its lightweight and compatibility with hardware makes it an outstanding operating system.
                        </p>
                        <p className="text-[10px] md:text-[11px] font-bold text-slate-400 leading-relaxed opacity-80 uppercase tracking-widest px-2 md:px-0">
                           Used by billions globally, substantially impacting the mobile market. Our center in Noida minimizes costs while delivering a spectrum of online solutions.
                        </p>
                     </div>

                     {/* HUBS */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8 border-t border-slate-100">
                        {[
                           { title: "Investing In Mobile", icon: Zap, items: ["Real-time engagement", "Intuitive Interface", "Loyalty Integration", "Pulse Alerts"] },
                           { title: "Technical Advantage", icon: Shield, items: ["Hardware Optimization", "Market Edge", "Lightweight Arch", "Elite Support"] }
                        ].map((hub, hubIdx) => (
                           <div key={hubIdx} className="group p-6 rounded-xl bg-white border border-slate-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-orange-100/50 hover:-translate-y-1.5 flex flex-col items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF6600] flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 shadow-sm">
                                 <hub.icon size={18} />
                              </div>
                              <div className="space-y-4">
                                 <h4 className="text-[13px] font-display font-bold text-slate-900 capitalize tracking-tight leading-none">{hub.title}</h4>
                                 <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                                    {hub.items.map((item, i) => (
                                       <li key={i} className="text-[11px] font-bold text-slate-500 uppercase tracking-tight flex items-center gap-2 group/item">
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

                  {/* RIGHT CONTENT: VISUAL BLUEPRINT */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-28">
                     <div className="relative rounded-md overflow-hidden bg-white shadow-2xl border border-slate-100 mx-auto max-w-[400px] lg:max-w-none">
                        <img 
                           src={imgArchitecture} 
                           alt="Android Architecture Blueprint" 
                           className="w-full h-auto object-cover" 
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[9px] lg:text-[10px] font-bold text-white uppercase tracking-widest">Platform Matrix v4.0</span>
                        </div>
                     </div>
                     
                     <div className="mt-8 p-6 rounded-md bg-slate-900 text-white space-y-3">
                        <div className="flex items-center gap-3">
                           <Layers size={14} className="text-orange-400" />
                           <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Platform Evolution</h3>
                        </div>
                        <p className="text-[11px] font-medium text-slate-300 leading-relaxed">Leveraging screen sizes and technical features to full extent. Optimizing light-weight applications for mass traffic.</p>
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
                        Hardware Mastery <span className="text-[#FF6600]">& SDK Orchestration</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Our engineering philosophy for the Android ecosystem focuses on absolute hardware mastery. By leveraging the latest NDK and SDK protocols, we optimize application performance for a diverse range of devices—from high-end flagships to resource-constrained hardware. We ensure low-latency responsiveness and efficient memory management, delivering a high-fidelity experience that utilizes the vertical power of the Android platform.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Market Scalability <span className="text-[#FF6600]">& Distribution</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        We navigate the complex dynamics of the global Android market with institutional authority. Our deployment strategies go beyond standard Play Store submissions; we engineer applications for massive traffic, utilizing localized CDN distributions and versioning matrices that ensure compatibility across fragmented OS versions. This enables your brand to dominate mobile markets with absolute scalability.
                     </p>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-100">
                  <div className="max-w-4xl space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Security-First <span className="text-[#FF6600]">Enterprise Protocols</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Integrity is the core of our Android development matrix. We implement enterprise-grade security protocols, including biometric authentication, sophisticated data encryption, and sandboxed storage environments. Our applications undergo rigorous penetration testing to ensure that your corporate and user data remains impenetrable within the increasingly complex digital landscape.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* PRESTIGE BANNER - CINEMATIC CONCLUSION */}
         <section className="relative py-24 bg-slate-950 overflow-hidden">
            {/* RADIAL GLOW EFFECT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6600]/10 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
               <div className="space-y-4">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/5 text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.3em]"
                  >
                     <Sparkles size={12} />
                     Future Intelligence
                  </motion.div>
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                     Digital <span className="text-[#FF6600]">Dominance.</span>
                  </h2>
               </div>
               
               <p className="text-base md:text-lg lg:text-xl font-semibold text-slate-400 leading-relaxed max-w-2xl mx-auto px-4">
                  We don't just build Android apps; we engineer the high-performance digital ecosystems that define market leaders.
               </p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
               >
                  <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,102,0,0.3)] mx-auto">
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                     <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-2 text-[10px] md:text-sm">
                        Initiate Strategic Consultation
                        <ChevronRight size={16} />
                     </span>
                  </button>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
