import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Zap, Code2, Server, Database, Layers, ChevronRight, Monitor, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';
import imgWebDev from '../assets/services/web_dev.png';

gsap.registerPlugin(ScrollTrigger);

export default function WebDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const expertiseList = [
      "Web Application Development (Open Source)",
      "PHP Development",
      "Custom Application Development.",
      "Portal Development",
      "Open Sources (WordPress, OSCommerce, Drupal)",
      "E-Commerce Web Development & Shopping cart solution."
   ];

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE UPGRADED TYPOGRAPHY */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE NEURAL BACKDROP */}
            <ThreeNeuralStorm />
            <ParticleNetwork />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Development Core</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "WEB DEVELOPMENT.";
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
                     className="text-slate-600 text-xs lg:text-sm font-semibold max-w-xl leading-relaxed"
                  >
                     Specialize in developing reliable yet creative Web Development solutions. Engineering scalable ecosystems for the digital future.
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
                     { label: 'Scalable Architecture', icon: Globe },
                     { label: 'Cloud Precision', icon: Sparkles },
                     { label: 'Market Dominance', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* CONTENT SECTION - RESTORED ORIGINAL LAYOUT WITH ENHANCED FONTS/GAPS */}
         <section className="relative py-12 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  
                  {/* LEFT CONTENT */}
                  <div className="lg:col-span-8 space-y-8">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-[#FF6600]" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Development Hub</span>
                     </div>

                     <div className="space-y-6">
                        <h2 className="text-xl lg:text-3xl font-display font-extrabold text-slate-900 tracking-tight uppercase leading-[1.1]">
                           Website <span className="text-[#FF6600]">Development</span> Company
                        </h2>

                        <div className="space-y-6">
                           <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed tracking-tight font-secondary border-l-4 border-[#FF6600] pl-6 py-1">
                              WebUltraSolution specializes in crafting dependable and creative solutions. Our systems are fully scalable, addressing both intricate and straightforward needs.
                           </p>
                           <p className="text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl">
                              Situated in Delhi-Noida, our development center minimizes costs while delivering a spectrum of online solutions. As a leading professional company, we offer affordable web development and portals worldwide.
                           </p>
                        </div>
                     </div>

                     {/* TECHNOLOGY EXPERTISE LIST */}
                     <div className="pt-6 space-y-6">
                        <div className="flex items-center gap-3">
                           <Layers size={18} className="text-[#FF6600]" />
                           <h3 className="text-[12px] font-extrabold text-slate-900 uppercase tracking-[0.3em]">Technology Expertise</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {expertiseList.map((item, i) => (
                              <div
                                 key={i}
                                 className="flex items-start gap-4 p-4 rounded-md bg-white border border-slate-100 group transition-all duration-500 hover:border-[#FF6600]/30 hover:shadow-[0_10px_30px_rgba(255,102,0,0.05)] hover:-translate-y-1 relative overflow-hidden"
                              >
                                 {/* Background Micro-Detail */}
                                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6600]/[0.02] rounded-full -mr-12 -mt-12 group-hover:bg-[#FF6600]/[0.05] transition-colors duration-500" />
                                 
                                 <div className="relative">
                                    <div className="absolute -inset-1 bg-[#FF6600]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <ChevronRight size={16} className="relative mt-0.5 text-[#FF6600] group-hover:translate-x-1 transition-transform" />
                                 </div>
                                 
                                 <span className="text-[12px] lg:text-[13px] font-semibold text-slate-500 group-hover:text-slate-950 transition-colors leading-tight relative z-10">
                                    {item}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                        {[
                           { label: "Scalable", icon: Cpu },
                           { label: "Intuitive", icon: Zap },
                           { label: "Global", icon: Globe },
                           { label: "Modern", icon: Code2 }
                        ].map((stat, i) => (
                           <div 
                              key={i}
                              className="flex flex-col items-center gap-3 p-6 rounded-md bg-white border border-slate-100 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl text-center group relative overflow-hidden"
                           >
                              {/* Dynamic Glow backdrop */}
                              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#FF6600]/5 rounded-full blur-2xl group-hover:bg-[#FF6600]/10 transition-colors duration-700" />

                              <div className="relative">
                                 <div className="absolute -inset-4 bg-[#FF6600]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" />
                                 <div className="relative p-3 rounded-md bg-[#FF6600] text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                    <stat.icon size={18} />
                                 </div>
                              </div>
                              <span className="text-[10px] font-display font-extrabold text-[#FF6600] uppercase tracking-[0.2em]">{stat.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT IMAGE / TECH SPEC */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-32">
                     <div className="relative rounded-md overflow-hidden shadow-2xl border border-slate-100 bg-white group cursor-crosshair">
                        <img 
                           src={imgWebDev} 
                           alt="Web Development Ecosystem" 
                           className="w-full h-auto object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                           <div className="flex items-center gap-3 mb-3">
                              <div className="h-1 w-12 bg-[#FF6600] rounded-full" />
                              <span className="text-[9px] font-bold text-[#FF6600] uppercase tracking-[0.4em] animate-pulse">Monitoring Active</span>
                           </div>
                           <h4 className="text-lg font-display font-extrabold text-white uppercase tracking-tight">Ecosystem Matrix</h4>
                           <p className="text-[10px] text-slate-300 font-semibold uppercase tracking-widest mt-1">Status: Optimized for Scale</p>
                        </div>
                     </div>

                     {/* TECH STACK INDICATOR */}
                     <div className="mt-8 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                           {[
                              { icon: Server, title: "Robust Architecture", desc: "High-availability engineering." },
                              { icon: Database, title: "Data Integrity", desc: "Complex ecosystem management." }
                           ].map((item, i) => (
                              <div
                                 key={i}
                                 className="flex items-center gap-4 bg-white p-5 rounded-md border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden"
                              >
                                 <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6600] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                 <div className="relative p-3 rounded-md bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                                    <item.icon size={20} />
                                 </div>
                                 <div className="space-y-1">
                                    <h4 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-[#FF6600] transition-colors">{item.title}</h4>
                                    <p className="text-[11px] text-slate-400 font-semibold leading-tight">{item.desc}</p>
                                 </div>
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
