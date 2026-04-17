import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Sparkles,
   Target,
   Zap,
   TrendingUp,
   Globe,
   ArrowRight,
   Cpu,
   Search,
   Layers,
   Monitor,
   BookOpen,
   BarChart3,
   Share2,
   Settings,
   Users,
   FileText,
   CheckCircle2,
   Activity,
   Heart
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

const strategicNodes = [
   {
      title: "Define Marketing Goals",
      icon: Target,
      tag: "KPI Mapping",
      desc: "Defining objectives closely through clear definitions that show the relationship between marketing goals and KPIs for surgical performance measurement."
   },
   {
      title: "Focused Narrative",
      icon: Zap,
      tag: "Engagement",
      desc: "Sending relevant emails is the only way to rise above the digital noise. We utilize the VENT methodology to ensure every narrative resonates with the recipient."
   },
   {
      title: "Content Publishing",
      icon: BookOpen,
      tag: "Distribution",
      desc: "Choosing a precise ratio: 50% newsworthy, 35% evergreen, and 15% personal. This balance ensures your posts remain valuable and authoritative to your readers."
   },
   {
      title: "Analytical Measurement",
      icon: BarChart3,
      tag: "Intelligence",
      desc: "Tracking user engagement, social sharing, and readability customized to your business needs. We optimize strategy based on high-fidelity performance data."
   },
   {
      title: "Strategy Architecture",
      icon: Settings,
      tag: "Governance",
      desc: "Focusing on the planning, creation, and delivery of content. Ensuring well-structured, useful, and usable content is vital to the institutional user experience."
   },
   {
      title: "SEO Integrated Marketing",
      icon: Search,
      tag: "Synchronization",
      desc: "SEO and content marketing are two personalities of the same person. Bringing them together is the only path to successful authority in the digital marketplace."
   },
];

const contentMetrics = [
   { label: "Narrative Fusion", value: "50/35/15", sub: "Ratio Protocol", icon: Sparkles },
   { label: "Market Resonance", value: "High Status", sub: "User Engagement", icon: Target },
   { label: "Audit Frequency", value: "Real-time", sub: "Performance Tracking", icon: Activity }
];

export default function ContentMarketing() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Narrative Engineering Core</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "ENGINEERING CONTENT AUTHORITY.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 md:mr-3">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 200,
                                       damping: 10,
                                       delay: 0.1 + (wordIdx * 0.1) + (charIdx * 0.02)
                                    }}
                                    className={`inline-block ${word === "AUTHORITY." ? "text-[#FF6600]" : ""}`}
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
                     transition={{ duration: 1, delay: 0.8 }}
                     className="text-slate-600 text-[10px] md:text-xs lg:text-sm font-semibold max-w-xl leading-relaxed italic px-6 md:px-0"
                  >
                     "High-fidelity narrative engineering. Useful content should be at the core of your architectural marketing strategy to drive institutional growth."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK - COMPACTED */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto pt-4 md:pt-2 px-4"
               >
                  {contentMetrics.map((metric, i) => (
                     <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 md:gap-3 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors text-[10px] md:text-xs">
                           <metric.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <div className="flex flex-col items-start translate-y-0.5">
                           <span className="text-[12px] md:text-sm font-black text-[#FF6600] leading-none tracking-tight">{metric.value}</span>
                           <span className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mt-1">{metric.label}</span>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* COMPACTED INTERFACE - REFINED HIERARCHY */}
         <section className="relative py-8 md:py-16 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12">

               <div className="max-w-5xl mx-auto space-y-16">
                  <div className="space-y-10">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                           <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Content Ecology</span>
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                        </div>
                        <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none max-w-3xl text-center lg:text-center">
                           Dynamic Content <span className="text-[#FF6600]">Marketing</span> Authority
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <div className="bg-white p-5 md:p-6 border-l-[4px] border-[#FF6600] shadow-sm rounded-r-lg">
                               <h3 className="text-sm md:text-base lg:text-lg font-black text-slate-800 leading-tight tracking-tight">
                                  Useful content should be at the core of your institutional marketing strategy.
                               </h3>
                            </div>
                            <div className="space-y-4 text-slate-600 font-semibold leading-relaxed text-[13px] md:text-sm px-2 md:px-0">
                               <p>
                                  Consumers have shut off the traditional world of marketing—ignoring standard banners and skipping traditional advertising. High-fidelity information is the path.
                               </p>
                               <p className="text-slate-950 italic">
                                  "Smart marketers understand that traditional methods are becoming less effective. Narrative authority is the institutional standard."
                               </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-orange-50 rounded-xl z-0" />
                            <div className="relative rounded-xl overflow-hidden shadow-xl border border-white z-10 group/intro h-[220px] md:h-[280px]">
                               <img
                                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                  alt="Expert Analysis"
                                  className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover/intro:scale-110"
                               />
                               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                               <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white space-y-1">
                                  <div className="flex items-center gap-1.5">
                                     <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                     <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6600]">System Verified</span>
                                  </div>
                                  <h4 className="text-base md:text-lg font-black uppercase tracking-tight">Narrative Governance</h4>
                               </div>
                            </div>
                         </div>
                     </div>
                  </div>

                  {/* OPERATIONAL STATUS BAR - ECOSYSTEM METRICS - COMPACTED */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 shadow-md border border-slate-200 rounded-lg overflow-hidden">
                     {[
                        { label: "Newsworthy", val: "50%", sub: "Weekly", icon: Zap },
                        { label: "Evergreen", val: "35%", sub: "Institutional", icon: BookOpen },
                        { label: "Personal", val: "15%", sub: "Engagement", icon: Heart },
                        { label: "Efficiency", val: "95%", sub: "Resonance", icon: Activity }
                     ].map((spec, i) => (
                        <div key={i} className="bg-white p-4 flex flex-col items-center text-center gap-2 lg:gap-3 group/st hover:bg-orange-50 transition-colors">
                           <div className="p-1.5 bg-slate-50 rounded text-slate-300 group-hover/st:text-[#FF6600] group-hover/st:bg-white transition-all">
                              <spec.icon size={16} />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-lg font-black text-slate-950 tracking-tighter group-hover/st:text-[#FF6600] transition-colors">{spec.val}</span>
                              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{spec.label}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* UNIQUE SYNCHRONIZED WORKFLOW LAYOUT - COMPACTED & REFINED HOVERS */}
               <div className="mt-20 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden md:block z-0" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 mb-16">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                        <Layers size={18} />
                     </div>
                     <h3 className="text-[11px] font-black text-slate-950 uppercase tracking-[0.6em]">Operational Objectives</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                     {strategicNodes.slice(0, 3).map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: i * 0.05 }}
                           className="group relative"
                        >
                           {/* COMPACTED ARCHITECTURAL COMPONENT */}
                           <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group/card flex flex-col min-h-[220px]">
                              <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full translate-x-10 -translate-y-10 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700" />

                              <div className="relative z-10 flex justify-between items-start mb-6">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 group-hover/card:text-[#FF6600] transition-colors">{item.tag}</span>
                                    <div className="flex items-center gap-2">
                                       <span className="text-2xl font-display font-black text-slate-100 group-hover/card:text-slate-200 transition-colors italic">0{i + 1}</span>
                                       <div className="h-px w-6 bg-slate-100 group-hover/card:bg-slate-200 transition-colors" />
                                    </div>
                                 </div>
                                 <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-slate-300 group-hover/card:bg-[#FF6600] group-hover/card:text-white transition-all duration-500 border border-orange-100/50">
                                    <item.icon size={16} />
                                 </div>
                              </div>

                              <h4 className="text-lg font-black uppercase tracking-tighter leading-tight italic mb-3 relative z-10">
                                 {(() => {
                                    const words = item.title.split(" ");
                                    return (
                                       <div className="flex flex-wrap gap-x-2">
                                          <span className="text-slate-950 transition-colors duration-300">
                                             {words[0]}
                                          </span>
                                          <span className="text-slate-950 group-hover/card:text-[#FF6600] transition-colors duration-300">
                                             {words.slice(1).join(" ")}
                                          </span>
                                       </div>
                                    );
                                 })()}
                              </h4>

                              <p className="text-[13px] text-slate-500 font-bold leading-relaxed group-hover/card:text-slate-900 transition-colors line-clamp-3">
                                 {item.desc}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* SECOND ROW - STAGGERED OFFSET */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative z-10 md:px-12">
                     {strategicNodes.slice(3, 6).map((item, i) => (
                        <motion.div
                           key={i + 3}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: (i + 3) * 0.05 }}
                           className="group relative"
                        >
                           <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group/card flex flex-col min-h-[220px]">
                              <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full translate-x-10 -translate-y-10 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-700" />

                              <div className="relative z-10 flex justify-between items-start mb-6">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1 group-hover/card:text-[#FF6600] transition-colors">{item.tag}</span>
                                    <div className="flex items-center gap-2">
                                       <span className="text-2xl font-display font-black text-slate-100 group-hover/card:text-slate-200 transition-colors italic">0{i + 4}</span>
                                       <div className="h-px w-6 bg-slate-100 group-hover/card:bg-slate-200 transition-colors" />
                                    </div>
                                 </div>
                                 <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-slate-300 group-hover/card:bg-[#FF6600] group-hover/card:text-white transition-all duration-500 border border-orange-100/50">
                                    <item.icon size={16} />
                                 </div>
                              </div>

                              <h4 className="text-lg font-black uppercase tracking-tighter leading-tight italic mb-3 relative z-10">
                                 {(() => {
                                    const words = item.title.split(" ");
                                    return (
                                       <div className="flex flex-wrap gap-x-2">
                                          <span className="text-slate-950 transition-colors duration-300">
                                             {words[0]}
                                          </span>
                                          <span className="text-slate-950 group-hover/card:text-[#FF6600] transition-colors duration-300">
                                             {words.slice(1).join(" ")}
                                          </span>
                                       </div>
                                    );
                                 })()}
                              </h4>

                              <p className="text-[13px] text-slate-500 font-bold leading-relaxed group-hover/card:text-slate-900 transition-colors line-clamp-3">
                                 {item.desc}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

            </div>
         </section>
      </div>
   );
}
