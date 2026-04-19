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
   // {
   //    tag: "Validation",
   //    title: "Data Integrity",
   //    technicalID: "DI-03",
   //    desc: "Implementing robust validation protocols for property data accuracy and market compliance. Our systems ensure every listing meets institutional standards and regulatory requirements.",
   //    icon: Shield,
   //    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
   // }
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
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeSolutionBackground />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-3 lg:space-y-4">
               <div className="flex flex-col items-center gap-3 mt-2">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize tracking-wider">Property Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-3xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING PROPERTY DOMINANCE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 md:mr-3">
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
                     className="text-slate-600 text-xs md:text-sm lg:text-base font-semibold max-w-lg leading-relaxed px-6 md:px-0"
                  >
                     "High-performance property portal architectures for global real estate leaders. We unify your digital footprint through strategic listing distribution and growth protocols."
                  </motion.p>
               </div>

               {/* TECHNICAL METRIC STACK */}
               {/* <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto px-4"
               >
                  {portalMetrics.map((metric, i) => (
                     <div key={i} className="px-3 md:px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 md:gap-2.5 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                        <div className="w-4 h-4 md:w-7 md:h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <metric.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                           <span className="text-[8px] md:text-[10px] font-semibold text-slate-700 capitalize tracking-widest leading-none">{metric.label}</span>
                           <span className="text-[8px] font-bold text-white uppercase tracking-[0.1em] whitespace-nowrap">{metric.value}</span>
                        </div>
                     </div>
                  ))}
               </motion.div> */}
            </div>
         </div>

         {/* PROPERTY STRATEGY INTERFACE */}
         <section className="property-section relative py-8 md:py-12 bg-gradient-to-b from-white to-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-8 space-y-12">
                     <div className="space-y-10">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-16 bg-[#FF6600]/40" />
                           <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.3em]">System Governance</span>
                        </div>

                        <div className="space-y-8">
                           <h2 className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-tight uppercase text-slate-950">
                              Architecting the <br /> <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Future</span> of Real Estate.
                           </h2>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                 <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                    Our methodology focuses on the architectural planning and delivery of high-fidelity property content. We ensure that every listing interaction is optimized for institutional growth.
                                 </p>
                              </div>
                              <div className="relative group/vis h-full min-h-[220px] overflow-hidden rounded-xl shadow-lg border border-slate-100">
                                 <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern Architecture"
                                    className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover/vis:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                 <div className="absolute bottom-4 left-4 text-white space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-4 h-[1px] bg-orange-500" />
                                       <span className="text-[8px] font-bold text-white uppercase tracking-[0.1em]">Secure Protocol</span>
                                    </div>
                                    <p className="text-[8px] md:text-[10px] font-semibold text-white/80 capitalize tracking-widest leading-none">Institutional Safeguard</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* STRATEGIC PROPERTY NODES */}
                     <div className="pt-8 space-y-8">
                        <div className="flex items-center gap-4">
                           <Layers size={18} className="text-[#FF6600]" />
                           <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase text-slate-950">Operational Pillars</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {propertyPillars.map((pillar, i) => (
                              <motion.div
                                 key={i}
                                 className="property-content-node flex flex-col gap-5 p-6 rounded-xl bg-white border border-slate-100 group transition-all duration-500 hover:border-[#FF6600]/30 hover:shadow-lg relative overflow-hidden"
                              >
                                 <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-150 rotate-12">
                                    <pillar.icon size={120} />
                                 </div>

                                 <div className="flex items-center justify-between relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                                       <pillar.icon size={16} className="md:size-[22px]" />
                                    </div>
                                    <span className="text-[8px] font-bold text-white uppercase tracking-[0.1em]">{pillar.technicalID}</span>
                                 </div>

                                 <div className="space-y-3 relative z-10">
                                    <div className="flex flex-col">
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                       <h4 className="text-base md:text-lg lg:text-xl font-display font-bold tracking-tight capitalize text-slate-950">
                                          {pillar.title}
                                       </h4>
                                    </div>
                                    <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                       {pillar.desc}
                                    </p>
                                 </div>

                                 <div className="pt-4 mt-auto relative z-10 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 capitalize tracking-widest group/link">
                                       <span>Configure Node</span>
                                       <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT COMMAND CENTER */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-32 flex flex-col gap-8">
                     <div className="p-4 pt-0 rounded-2xl bg-white border border-slate-100 shadow-lg space-y-8 relative overflow-hidden group/card">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-16 -mt-16 z-0 transition-transform duration-[4000ms] group-hover/card:scale-125" />

                        <div className="relative z-10 space-y-8">
                           <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                              <Monitor size={22} className="text-[#FF6600]" />
                              <h4 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight capitalize">
                                 <span className="text-slate-950">Platform</span> <span className="text-orange-600">Specs</span>
                              </h4>
                           </div>

                           {/* TECHNICAL RATIO MAP */}
                           <div className="space-y-6">
                              <div className="space-y-3">
                                 <div className="flex justify-between items-end">
                                    <span className="text-xs font-bold capitalize tracking-[0.3em] text-[#FF6600]">Operational Logic</span>
                                    <span className="text-[8px] font-bold text-white uppercase tracking-[0.1em]">99.9% Fidelity</span>
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

                              <div className="grid grid-cols-1 gap-2">
                                 {[
                                    { label: "Data Integrity", val: "High", sub: "Enterprise Grid", icon: Shield },
                                    { label: "Sync Velocity", val: "Real-time", sub: "Dynamic Logic", icon: Zap },
                                    { label: "UI Scalability", val: "Elite", sub: "UX Architecture", icon: Star }
                                 ].map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-md bg-slate-50/50 border border-slate-100 group/spec hover:bg-white hover:border-[#FF6600]/30 hover:shadow-sm transition-all duration-500">
                                       <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 flex items-center justify-center bg-orange-50 rounded-md shadow-sm text-[#FF6600] group-hover/spec:bg-[#FF6600] group-hover/spec:text-white transition-all duration-500">
                                             <spec.icon size={14} />
                                          </div>
                                          <div className="flex flex-col flex-1">
                                             <span className="text-[8px] md:text-[9px] font-bold text-slate-700 capitalize tracking-widest leading-none text-center px-2 py-0.5 rounded">{spec.label}</span>
                                             <span className="text-[7px] md:text-[8px] font-bold text-slate/400 capitalize tracking-[0.1em] text-center px-2 py-0.5 rounded">{spec.sub}</span>
                                          </div>
                                       </div>
                                       <span className="text-[7px] md:text-[8px] font-black text-white uppercase tracking-[0.1em] bg-[#FF6600] px-2 py-0.5 rounded">{spec.val}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           <div className="pt-4 border-t border-slate-100 space-y-2">
                              <p className="text-[13px] md:text-sm lg:text-sm font-semibold leading-relaxed text-slate-500 max-w-xl mx-auto px-2 mb-3">
                                 "Precision-engineered property frameworks are the foundation of institutional real estate success."
                              </p>
                              <button className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 mt-4 capitalize tracking-widest group/link">
                                 <span>Initiate Protocol</span>
                                 <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 rounded-2xl bg-[#020617] text-white space-y-4 overflow-hidden relative shadow-xl">
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FF6600] opacity-20 blur-3xl animate-pulse" />
                        <div className="flex items-center gap-3">
                           <Activity size={16} className="text-orange-500" />
                           <h5 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight capitalize text-white">System Vitality</h5>
                        </div>
                        <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 max-w-xl">
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
                           <span className="text-[8px] font-bold text-white uppercase tracking-[0.1em]">98.8% SYNC</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* IMAGE SHOWCASE GRID - Unique Placement of i pas */}
         <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.2 }}
                     className="md:col-span-1 space-y-6"
                  >
                     <div className="space-y-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight capitalize text-slate-950">Visual Archetypes</h3>
                        <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 max-w-xl">
                           Unique spatial placement of property visualizers designed to maximize engagement and clarity for institutional investors.
                        </p>
                     </div>
                     <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-crosshair relative">
                        <img
                           src={propertyPillars[0]?.image}
                           className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                           alt="Property Vision"
                        />
                        {/* ELITE BADGE */}
                        <div className="absolute top-6 right-6">
                           <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-[8px] md:text-[10px] font-bold capitalize tracking-wider">Elite Standard</span>
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.5, delay: 0.2 }}
                     className="md:col-span-1"
                  >
                     <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl group relative cursor-crosshair">
                        <img
                           src={propertyPillars[1]?.image}
                           className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110"
                           alt="Property Vision"
                        />
                        {/* ELITE BADGE */}
                        <div className="absolute top-6 right-6">
                           <div className="px-3 py-1.5 rounded-md bg-white text-[#FF6600] shadow-xl flex items-center gap-2 border border-orange-100">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                              <span className="text-[8px] md:text-[10px] font-bold capitalize tracking-wider">High Fidelity</span>
                           </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">Metadata Integration</span>
                           <h4 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight capitalize text-white">High-Fidelity Listings</h4>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.2, delay: 0.4 }}
                     className="md:col-span-1 space-y-6 mt-8 md:mt-0"
                  >
                     <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-crosshair relative">
                        <img
                           src={propertyPillars[2]?.image}
                           className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                           alt="Property Vision"
                        />
                        {/* ELITE BADGE */}
                        <div className="absolute top-6 right-6">
                           <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-[8px] md:text-[10px] font-bold capitalize tracking-wider">Validated Logic</span>
                           </div>
                        </div>
                     </div>
                     <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-orange-200 transition-colors">
                        <CheckCircle2 size={28} className="text-[#FF6600] mb-3" />
                        <h4 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight capitalize text-slate-950">Validated Logic</h4>
                        <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 max-w-xl">
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
