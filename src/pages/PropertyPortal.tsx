import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Home, 
   Search, 
   Globe, 
   Zap, 
   TrendingUp, 
   ArrowRight,
   Monitor,
   Cpu,
   Shield,
   Sparkles,
   Target,
   Layers,
   Settings,
   Activity,
   CheckCircle2,
   Star
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

gsap.registerPlugin(ScrollTrigger);

const propertyPillars = [
   {
      tag: "Intelligence",
      title: "Real Estate Architecture",
      technicalID: "REA-01",
      desc: "We engineer high-fidelity property portal architectures that integrate global real estate data in real-time. Our strategic mapping approach ensures your platform remains the authoritative source for premium property listings.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Clarity",
      title: "Visual Precision",
      technicalID: "VP-02",
      desc: "Synchronizing high-resolution property data into unified enterprise-grade listings. We implement advanced search frameworks that transform complex real estate interactions into authoritative brand consensus.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Excellence",
      title: "Transactional Dominance",
      technicalID: "TD-03",
      desc: "Architected for sustained market excellence through proactive property management protocols. We use precision-engineered listing tracking to ensure your digital footprint remains robust and optimized.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=1000"
   }
];

const portalMetrics = [
    { label: "Data Latency", value: "< 250ms", sub: "Global Sync", icon: Activity },
    { label: "Market Reach", value: "Elastic", sub: "Domain Scaling", icon: Globe },
    { label: "Listing Logic", value: "AI-Driven", sub: "Search Protocol", icon: Cpu }
];

export default function PropertyPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      
      // GSAP Entrance
      gsap.fromTo(".property-content-node", 
         { opacity: 0, y: 30 },
         { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".property-section",
               start: "top 80%",
            }
         }
      );

      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[350px] lg:min-h-[450px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeSolutionBackground />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6 lg:space-y-8">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6600] rounded-md shadow-xl"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Elite Property Architectures</span>
                  </motion.div>

                  <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 tracking-tighter leading-[1] uppercase max-w-5xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING PROPERTY DOMINANCE.";
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
                                    className={`inline-block ${word === "DOMINANCE." ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-base font-medium max-w-2xl leading-relaxed italic"
                  >
                     "High-performance property portal architectures for global real estate leaders. We unify your digital footprint through strategic listing distribution and growth protocols."
                  </motion.p>
               </div>

               {/* TECHNICAL METRIC STACK */}
               <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 1.5 }}
                   className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto pt-4"
                >
                   {portalMetrics.map((metric, i) => (
                      <div key={i} className="px-6 py-4 bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm rounded-md flex items-center gap-4 transition-all hover:shadow-2xl hover:-translate-y-1 group cursor-default">
                         <div className="w-10 h-10 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                            <metric.icon size={18} />
                         </div>
                         <div className="flex flex-col items-start text-left">
                            <span className="text-lg font-bold text-[#FF6600] leading-none uppercase tracking-tighter">{metric.value}</span>
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{metric.label}</span>
                         </div>
                      </div>
                   ))}
                </motion.div>
            </div>
         </div>

         {/* PROPERTY STRATEGY INTERFACE */}
         <section className="property-section relative py-20 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                  
                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-8 space-y-16">
                     <div className="space-y-10">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-16 bg-[#FF6600]/40" />
                           <span className="text-[#FF6600] text-[11px] font-bold uppercase tracking-[0.5em]">System Governance</span>
                        </div>

                        <div className="space-y-10">
                           <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                              Architecting the <br /> <span className="text-[#FF6600]">Future</span> of Real Estate.
                           </h2>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                              <div className="space-y-6">
                                 <p className="text-[17px] font-medium text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-8 py-2">
                                    Our methodology focuses on the architectural planning and delivery of high-fidelity property content. We ensure that every listing interaction is optimized for institutional growth.
                                 </p>
                                 <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                                    Smart real estate leaders understand that standard portals are no longer enough. High-performance data synchronization and visual precision are the only paths to market dominance.
                                 </p>
                              </div>
                              <div className="relative group/vis h-full min-h-[250px] overflow-hidden rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100">
                                 <img 
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Modern Architecture"
                                    className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover/vis:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                 <div className="absolute bottom-6 left-6 text-white space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-4 h-[1px] bg-orange-500" />
                                       <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-400">Secure Protocol</span>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-tight">Institutional Safeguard</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* STRATEGIC PROPERTY NODES */}
                     <div className="pt-12 space-y-10">
                        <div className="flex items-center gap-4">
                            <Layers size={18} className="text-[#FF6600]" />
                            <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.3em]">Operational Pillars</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {propertyPillars.map((pillar, i) => (
                              <motion.div
                                 key={i}
                                 className="property-content-node flex flex-col gap-6 p-8 rounded-lg bg-white border border-slate-100 group transition-all duration-500 hover:border-[#FF6600]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
                              >
                                 <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-150 rotate-12">
                                    <pillar.icon size={120} />
                                 </div>
                                 
                                 <div className="flex items-center justify-between relative z-10">
                                    <div className="p-4 rounded-lg bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all shadow-sm">
                                       <pillar.icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-orange-200 transition-colors uppercase tracking-[0.2em]">{pillar.technicalID}</span>
                                 </div>

                                 <div className="space-y-3 relative z-10">
                                    <div className="flex flex-col">
                                       <span className="text-[9px] font-bold text-[#FF6600] uppercase tracking-widest leading-none mb-1">{pillar.tag}</span>
                                       <h4 className="text-xl font-bold text-slate-950 transition-colors uppercase tracking-tight">
                                          {pillar.title}
                                       </h4>
                                    </div>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
                                       {pillar.desc}
                                    </p>
                                 </div>

                                 <div className="pt-4 mt-auto relative z-10 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 group-hover:text-[#FF6600] transition-colors uppercase tracking-widest cursor-pointer group/link">
                                       <span>Configure Node</span>
                                       <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT COMMAND CENTER */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-32 flex flex-col gap-10">
                     <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] space-y-10 relative overflow-hidden group/card">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -mr-20 -mt-20 z-0 transition-transform duration-[4000ms] group-hover/card:scale-125" />
                        
                        <div className="relative z-10 space-y-10">
                           <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                               <Monitor size={22} className="text-[#FF6600]" />
                               <h4 className="text-[13px] font-bold text-slate-900 uppercase tracking-[0.3em]">Platform Specs</h4>
                           </div>
                           
                           {/* TECHNICAL RATIO MAP */}
                           <div className="space-y-6">
                               <div className="space-y-3">
                                   <div className="flex justify-between items-end">
                                       <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">Operational Logic</span>
                                       <span className="text-[12px] font-mono text-[#FF6600] font-bold">99.9% Fidelity</span>
                                   </div>
                                   <div className="h-2 w-full flex rounded-full overflow-hidden bg-slate-100 p-0.5 border border-slate-200 shadow-inner">
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          whileInView={{ width: '60%' }}
                                          transition={{ duration: 1.5, ease: "easeOut" }}
                                          className="h-full bg-[#FF6600] rounded-full" 
                                       />
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          whileInView={{ width: '30%' }}
                                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                          className="h-full bg-[#FF6600]/50 mx-0.5 rounded-full" 
                                       />
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          whileInView={{ width: '10%' }}
                                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                          className="h-full bg-[#FF6600]/20 rounded-full" 
                                       />
                                   </div>
                               </div>

                               <div className="grid grid-cols-1 gap-3">
                                   {[
                                       { label: "Data Integrity", val: "High", sub: "Enterprise Grid", icon: Shield },
                                       { label: "Sync Velocity", val: "Real-time", sub: "Dynamic Logic", icon: Zap },
                                       { label: "UI Scalability", val: "Elite", sub: "UX Architecture", icon: Star }
                                   ].map((spec, i) => (
                                       <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-slate-50/50 border border-slate-100 group/spec hover:bg-white hover:border-[#FF6600]/20 hover:shadow-xl transition-all duration-500">
                                           <div className="flex items-center gap-4">
                                              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-400 group-hover/spec:text-[#FF6600] group-hover/spec:bg-orange-50 transition-all duration-500">
                                                 <spec.icon size={18} />
                                              </div>
                                              <div className="flex flex-col">
                                                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">{spec.label}</span>
                                                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{spec.sub}</span>
                                              </div>
                                           </div>
                                           <span className="text-[11px] font-mono text-[#FF6600] font-bold">{spec.val}</span>
                                       </div>
                                   ))}
                               </div>
                           </div>

                           <div className="pt-10 border-t border-slate-100 space-y-6">
                              <p className="text-[14px] text-slate-500 font-medium leading-relaxed italic text-center">
                                 "Precision-engineered property frameworks are the foundation of institutional real estate success."
                              </p>
                              <button className="w-full py-5 bg-[#FF6600] text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-lg shadow-2xl shadow-orange-200 hover:bg-slate-900 hover:shadow-slate-200 transition-all duration-500 flex items-center justify-center gap-3 group/btn">
                                 <span>Initialize Deployment</span>
                                 <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="p-8 rounded-2xl bg-[#020617] text-white space-y-5 overflow-hidden relative shadow-2xl">
                        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#FF6600] opacity-20 blur-3xl animate-pulse" />
                        <div className="flex items-center gap-3">
                           <Activity size={16} className="text-orange-500" />
                           <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-400">System Vitality</h5>
                        </div>
                        <p className="text-[13px] font-medium leading-relaxed opacity-70 italic">
                           Active monitoring of global property data streams and listing performance metrics.
                        </p>
                        <div className="flex items-center gap-3 pt-3">
                           <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "98.8%" }}
                                 transition={{ duration: 2.5, ease: "circOut" }}
                                 className="h-full bg-[#FF6600]"
                              />
                           </div>
                           <span className="text-[10px] font-mono font-bold text-orange-500 tracking-tighter">98.8% SYNC</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* IMAGE SHOWCASE GRID - Unique Placement of i pas */}
         <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.2 }}
                     className="md:col-span-1 space-y-8"
                  >
                     <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tighter">Visual <br /> Archetypes.</h3>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium">
                           Unique spatial placement of property visualizers designed to maximize engagement and clarity for institutional investors.
                        </p>
                     </div>
                     <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-crosshair">
                        <img 
                           src={propertyPillars[0].image} 
                           className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
                           alt="Property Vision"
                        />
                     </div>
                  </motion.div>

                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.5, delay: 0.2 }}
                     className="md:col-span-1"
                  >
                     <div className="h-[600px] rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group relative cursor-crosshair">
                        <img 
                           src={propertyPillars[1].image} 
                           className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" 
                           alt="Property Vision"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                           <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Metadata Integration</span>
                           <h4 className="text-xl font-bold text-white uppercase tracking-tight">High-Fidelity Listings</h4>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.2, delay: 0.4 }}
                     className="md:col-span-1 space-y-8 mt-12 md:mt-0"
                  >
                     <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-crosshair">
                        <img 
                           src={propertyPillars[2].image} 
                           className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
                           alt="Property Vision"
                        />
                     </div>
                     <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                        <CheckCircle2 size={32} className="text-[#FF6600] mb-4" />
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">Validated Logic</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                           Every pixel and data point is validated through our core property consensus protocol to ensure absolute market precision.
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
