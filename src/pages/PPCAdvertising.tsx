import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Target,
   Zap,
   TrendingUp,
   BarChart3,
   ArrowRight,
   Sparkles,
   Globe,
   Cpu,
   ChevronRight,
   Layers,
   Monitor,
   Search,
   MousePointerClick,
   BadgePercent,
   Smartphone,
   Users,
   FileEdit,
   Presentation,
   Activity,
   CheckCircle2,
   Shield
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

const strategicNodes = [
   {
      title: "Campaign Architecture",
      icon: Layers,
      tag: "Setup",
      desc: "Engineering high-fidelity Google Account setups and restructuring existing campaigns for maximum performance density and institutional growth."
   },
   {
      title: "Bid Management ROI",
      icon: BarChart3,
      tag: "Optimization",
      desc: "Surgical PPC bid management and campaign optimization protocols. We focus on maximizing your Google Quality Score to ensure capital efficiency."
   },
   {
      title: "Audience Segmentation",
      icon: Users,
      tag: "Targeting",
      desc: "Advanced remarketing and audience segmentation across age, gender, and location. We ensure your ads reach high-intent prospects with precision."
   },
   {
      title: "Conversion Tracking",
      icon: MousePointerClick,
      tag: "Intelligence",
      desc: "Implementing multi-point conversion tracking and mobile-friendly ad architectures. We capture every interaction to drive actionable account reviews."
   },
   {
      title: "Ad Copy Synthesis",
      icon: FileEdit,
      tag: "Creativity",
      desc: "Split testing and ad copy optimization combined with ad extensions and innovation protocols. We engineer narratives that drive high-clickthrough velocity."
   },
   {
      title: "Executive Reporting",
      icon: Presentation,
      tag: "Visibility",
      desc: "Delivering high-fidelity ROI metrics and executive reporting. We provide a birds-eye view of your capital deployment performance."
   },
];

const ppcMetrics = [
   { label: "Quality Score", value: "10/10 Focus", sub: "Ad Efficiency", icon: Sparkles },
   { label: "Conversion Lift", value: "Adaptive", sub: "Targeted ROI", icon: Target },
   { label: "Market Reach", value: "Global", sub: "Search & Display", icon: Globe }
];

export default function PPCAdvertising() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] lg:min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 lg:space-y-7">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF6600] rounded-md shadow-[0_10px_30px_rgba(255,102,0,0.3)]"
                  >
                     <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-white">PPC Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-6xl">
                     {(() => {
                        const title = "ENGINEERING PPC DOMINANCE.";
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
                     transition={{ duration: 1.2, delay: 1 }}
                     className="font-system-body text-slate-600 font-bold max-w-2xl leading-relaxed italic px-2"
                  >
                     "Precision-engineered ad architectures designed to drive high-fidelity traffic. PPC is more than a model—it's your institutional growth engine."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto pt-4"
               >
                  {ppcMetrics.map((metric, i) => (
                     <div key={i} className="px-3 sm:px-5 py-2 sm:py-3 bg-white border border-slate-100 shadow-md rounded-md flex items-center gap-2 sm:gap-4 transition-all hover:shadow-2xl hover:-translate-y-1 group">
                        <div className="w-6 h-6 sm:w-9 sm:h-9 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <metric.icon size={14} className="sm:size-[18px]" />
                        </div>
                        <div className="flex flex-col items-start translate-y-0.5">
                           <span className="text-xs sm:text-base font-black text-[#FF6600] leading-none tracking-tight">{metric.value}</span>
                           <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mt-1">{metric.label}</span>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* EXPERT OPERATIONAL MATRIX */}
         <section className="relative py-20 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24 items-start">

                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-8 space-y-16">
                     <div className="space-y-10">
                        <div className="flex items-center gap-2 sm:gap-4">
                           <div className="h-[3px] w-8 sm:w-14 bg-[#FF6600]" />
                           <span className="text-[#FF6600] text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em]">Search Deployment</span>
                        </div>

                        <div className="space-y-10">
                           <h2 className="text-lg sm:text-xl lg:text-4xl font-bold text-slate-900 tracking-wider capitalize leading-[1.05]">
                              Paid Search <span className="text-[#FF6600]">Marketing</span> ROI
                           </h2>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                              <div className="space-y-4 sm:space-y-6">
                                 <p className="font-system-body text-slate-800 font-bold leading-tight tracking-wide border-l-4 border-[#FF6600] pl-4 sm:pl-8 py-2 sm:py-3">
                                    Paid search marketing include PPC Ads via Google and Bing plus ads on the display network—a third of Google's global revenue stream.
                                 </p>
                                 <p className="font-system-body text-slate-500 font-bold leading-relaxed">
                                    The cost of search can be high. We focus on maximizing your Quality Score to ensure institutional efficiency. While many prefer natural listings, specialized ads drive the highest fidelity traffic.
                                 </p>
                              </div>
                              <div className="relative rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 group/intro h-[200px] sm:h-[280px]">
                                 <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Expert Analysis"
                                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover/intro:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                                 <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white space-y-1">
                                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6600]">System Verified</span>
                                    <h4 className="text-sm sm:text-lg text-white capitalize tracking-wide">Performance Governance</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* STRATEGIC SPECIALTY PROTOCOL - PEHRA LAYOUT */}
                     <div className="pt-8 sm:pt-16 space-y-8 sm:space-y-16">
                        <div className="flex items-center gap-4 sm:gap-6">
                           <div className="h-[1px] flex-1 bg-slate-100" />
                           <h3 className="text-[10px] sm:text-[12px] font-black text-slate-950 uppercase tracking-[0.3em] sm:tracking-[0.5em] flex items-center gap-2 sm:gap-4">
                              <Layers size={14} className="sm:size-[18px] text-[#FF6600]" />
                              Operational Specialties
                           </h3>
                           <div className="h-[1px] flex-1 bg-slate-100" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-20 gap-x-8 sm:gap-x-16">
                           {strategicNodes.map((item, i) => (
                              <motion.div
                                 key={i}
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{ delay: i * 0.1 }}
                                 className="group relative flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-slate-300/60 bg-white/50 backdrop-blur-sm hover:border-orange-300/60 hover:bg-white/70 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500"
                              >
                                 {/* ARCHITECTURAL ANCHOR */}
                                 <div className="flex items-baseline gap-2 sm:gap-4">
                                    <span className="text-2xl sm:text-4xl font-display font-black text-slate-100 group-hover:text-orange-100 transition-colors duration-500 italic">0{i + 1}</span>
                                    <div className="h-[2px] w-6 sm:w-8 bg-[#FF6600] origin-left group-hover:scale-x-150 transition-transform duration-700" />
                                 </div>

                                 <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                       <span className="text-[10px] font-black font-bold text-green-700 uppercase tracking-widest">Live Protocol</span>
                                       <h4 className="text-lg sm:text-2xl font-black capitalize tracking-wide leading-loose italic">
                                          {(() => {
                                             const words = item.title.split(" ");
                                             return (
                                                <>
                                                   <span className="text-slate-950 mr-2">{words[0]}</span>
                                                   <span className="text-[#FF6600]">{words.slice(1).join(" ")}</span>
                                                </>
                                             );
                                          })()}
                                       </h4>
                                    </div>

                                    <p className="font-system-body text-slate-700 font-bold leading-relaxed max-w-md group-hover:text-slate-950 transition-colors">
                                       {item.desc}
                                    </p>

                                    <div className="pt-2">
                                       <div className="flex items-center gap-2 sm:gap-3 group/link cursor-pointer">
                                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover/link:bg-[#FF6600] group-hover/link:text-white transition-all">
                                             <item.icon size={12} className="sm:size-[14px]" />
                                          </div>
                                          <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover/link:text-slate-950 transition-all">Deployment Protocol</span>
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT SYSTEM SPECS */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 sm:space-y-8">
                     <div className="p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-white via-white to-orange-50/30 border border-slate-300/60 shadow-[0_50px_120px_-40px_rgba(255,102,0,0.15)] space-y-6 sm:space-y-8 relative overflow-visible backdrop-blur-sm min-h-fit">
                        {/* Enhanced Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-3xl -mr-16 sm:-mr-32 -mt-16 sm:-mt-32 z-0" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-2xl -ml-12 sm:-ml-24 -mb-12 sm:-mb-24 z-0" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-orange-50/20 z-0" />

                        <div className="relative z-10">
                           {/* Enhanced Header */}
                           <div className="pb-3 sm:pb-4 border-b border-slate-300/60">
                              <div className="flex items-center gap-2">
                                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gradient-to-br from-[#FF6600] to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                                    <Shield size={14} className="sm:size-[18px]" />
                                 </div>
                                 <div className="flex items-center gap-2 sm:gap-3">
                                    <h3 className="text-[12px] sm:text-[15px] font-black font-bold text-dark uppercase tracking-wider">The PPC Model</h3>
                                 </div>
                              </div>
                           </div>

                           {/* Enhanced Specs Grid */}
                           <div className="grid grid-cols-1 gap-2">
                              {[
                                 { label: "Bid Latency", val: "Real-time", sub: "Market Speed", icon: Activity, color: "blue" },
                                 { label: "Deployment", val: "Global", sub: "Search & Display", icon: Globe, color: "purple" },
                                 { label: "Optimization", val: "Continuous", sub: "Split Testing", icon: FileEdit, color: "green" },
                                 { label: "Tracking", val: "Multi-point", sub: "Conversion ROI", icon: MousePointerClick, color: "red" }
                              ].map((spec, i) => (
                                 <div key={i} className="group/spec relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover/spec:opacity-100 transition-opacity duration-700" />
                                    <div className="relative flex items-center justify-between p-3 sm:p-4 rounded-md bg-white/80 backdrop-blur-sm border border-slate-300/60 hover:border-orange-300/60 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-500">
                                       <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#FF6600] to-transparent scale-y-0 group-hover/spec:scale-y-100 transition-transform origin-top duration-700" />
                                       <div className="flex items-center gap-3">
                                          <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${
                                             spec.color === 'blue' ? 'from-blue-50 to-blue-100 text-blue-600 group-hover/spec:from-blue-600 group-hover/spec:to-blue-700 group-hover/spec:text-white' :
                                             spec.color === 'purple' ? 'from-purple-50 to-purple-100 text-purple-600 group-hover/spec:from-purple-600 group-hover/spec:to-purple-700 group-hover/spec:text-white' :
                                             spec.color === 'green' ? 'from-green-50 to-green-100 text-green-600 group-hover/spec:from-green-600 group-hover/spec:to-green-700 group-hover/spec:text-white' :
                                             'from-red-50 to-red-100 text-red-600 group-hover/spec:from-red-600 group-hover/spec:to-red-700 group-hover/spec:text-white'
                                          } shadow-sm group-hover/spec:shadow-lg transition-all duration-500`}>
                                             <spec.icon size={14} className="sm:size-[18px]" />
                                          </div>
                                          <div className="flex flex-col gap-0.5">
                                             <span className="text-[9px] sm:text-[11px] font-black font-bold text-dark uppercase tracking-tight">{spec.label}</span>
                                             <span className="text-[8px] sm:text-[9px] font-bold text-orange-600 uppercase tracking-wider">{spec.sub}</span>
                                          </div>
                                       </div>
                                       <div className="flex flex-col items-end gap-1">
                                          <span className="text-[9px] sm:text-[11px] font-mono text-primary font-black font-bold uppercase tracking-tighter bg-orange-50 px-1.5 sm:px-2 py-0.5 rounded-full">{spec.val}</span>
                                          <div className="w-1.5 h-1.5 rounded-full bg-orange-200 group-hover/spec:bg-orange-500 transition-colors duration-500" />
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           <div className="pt-4 sm:pt-8 border-t border-orange-100/50 space-y-4 sm:space-y-6">
                              <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50/50 to-orange-100/30 border border-orange-200/30">
                                 <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-200/20 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse" />
                                 </div>
                                 <p className="font-system-body text-dark font-bold leading-relaxed italic">
                                    "Pay per click represents an online advertising model designed to drive traffic where advertisers compensate for every target click."
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#0D0D12] text-white space-y-5 sm:space-y-7 overflow-hidden relative border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                        <div className="absolute -right-4 sm:-right-8 -bottom-4 sm:-bottom-8 w-20 h-20 sm:w-40 sm:h-40 bg-[#FF6600] opacity-30 blur-[40px] sm:blur-[70px]" />
                        <div className="absolute -left-4 sm:-left-8 -top-4 sm:-top-8 w-12 h-12 sm:w-24 sm:h-24 bg-orange-500/10 blur-[20px] sm:blur-[40px]" />

                        <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
                           <div className="flex items-center gap-2">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-500 animate-pulse" />
                              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-orange-500">Mission Critical</span>
                           </div>
                           <h5 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider leading-none text-slate-50 group-hover:text-[#FF6600] transition-colors duration-500">
                              Market ROI Lift
                           </h5>
                        </div>

                        <p className="relative z-10 font-system-body text-slate-300 font-black leading-relaxed">
                           Display network accounts for a third of Google revenue. Precision banner focus is essential for institutional ROI.
                        </p>

                        <div className="relative z-10 flex flex-col gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
                           <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                              <span className="text-slate-500">ROI Velocity</span>
                              <span className="text-[#FF6600] drop-shadow-[0_0_6px] sm:drop-shadow-[0_0_8px_rgba(255,102,0,0.4)]">75% Efficient</span>
                           </div>
                           <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                              <motion.div
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "75%" }}
                                 transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                                 className="h-full bg-gradient-to-r from-[#FF6600] via-orange-400 to-[#FF6600] rounded-full shadow-[0_0_15px_rgba(255,102,0,0.5)] relative"
                              >
                                 <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer" />
                              </motion.div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
