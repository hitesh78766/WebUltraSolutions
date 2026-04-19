import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   BarChart3,
   TrendingUp,
   Zap,
   Target,
   ArrowRight,
   Cpu,
   Search,
   Globe,
   Sparkles,
   Layers,
   Monitor,
   Settings,
   LineChart,
   FileText,
   CheckCircle2,
   Database,
   PieChart,
   Activity
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import ParticleNetwork from '../components/ParticleNetwork';
import imgAnalyticsMatrix from '../assets/services/analytics_matrix.png';

gsap.registerPlugin(ScrollTrigger);

export default function WebAnalytics() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const strategicNodes = [
      {
         title: "Tracking & Reporting",
         icon: LineChart,
         desc: "Google Analytics, Site Catalyst, and Web Trends tools offer deeply insightful data. We provide mastery over these systems, identifying the top metrics to monitor for strategic advantage."
      },
      {
         title: "Measurement Objectives",
         icon: Target,
         desc: "Developing analytical health programs requires stakeholder buy-in. We define goals for impact, ensuring sustainability and participation across all enterprise partners."
      },
      {
         title: "Implementation Mapping",
         icon: Layers,
         desc: "Designing perfect digital analytics implementations for any business size. We define code snippets and specific product features to ensure productivity and true ROI."
      },
      {
         title: "Analytics Architecture",
         icon: Settings,
         desc: "Professional Google Analytics setup for beginners and advanced users alike. We build robust architectures that serve as a permanent reference for institutional growth."
      },
      {
         title: "In-depth Technical Analysis",
         icon: Search,
         desc: "Moving beyond skimming tactics to explore the implicit meaning of your data themes. We focus on specific aspects of your narration style to uncover hidden market opportunities."
      },
      {
         title: "Technical Environment",
         icon: Monitor,
         desc: "Documenting server technologies, mobile activity, and responsive architectures. We ensure your technical environment is fully trackable across every digital touchpoint."
      },
      {
         title: "Planned Model Execution",
         icon: Cpu,
         desc: "Implementing strategic planning models tailored to your organization's unique culture and situation. No one perfect model exists—we engineer the one that fits you."
      },
      {
         title: "Audit & Enhancement",
         icon: Activity,
         desc: "The analytical process never stops. We continuously audit your data machine, adding new features and hacking improvements to ensure your performance never plateaus."
      },
      {
         title: "Advanced System Reporting",
         icon: PieChart,
         desc: "Birds-eye views of your customer base and helpdesk. We generate timesheet and satisfaction reports to understand client levels with surgical precision."
      },
      {
         title: "Global Data Dominance",
         icon: Globe,
         desc: "Managing your decision-making through actionable insights. Our team of Google Analytics certified professionals helps organizations globally master every aspect of digital analytics."
      },
   ];

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeSolutionBackground />
            <ParticleNetwork />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-white">Analytics Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-[40px] text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING ANALYTIC DOMINANCE.";
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
                     className="text-slate-600 text-xs lg:text-base font-semibold max-w-xl leading-relaxed"
                  >
                     Moving beyond "average reports" to precision insights. We engineer high-fidelity analytic architectures that drive institutional growth and market dominance.
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
                     { label: 'GA Certified Professional', icon: CheckCircle2 },
                     { label: 'Predictive ROI Modeling', icon: TrendingUp },
                     { label: 'Technical Auditing', icon: Database }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-6 h-6 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={12} />
                        </div>
                        <span className="text-[9px] font-semibold text-slate-700 uppercase tracking-[0.15em]">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* EXPERT ANALYTICAL MATRIX */}
         <section id="operational-matrix" className="relative py-12 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-7 space-y-10">
                     <div className="space-y-6">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Data Science</span>
                        </div>

                        <div className="space-y-6">
                           <h2 className="text-xl lg:text-3xl font-display font-black text-slate-900 tracking-tighter uppercase leading-none">
                              Mastering The <span className="text-[#FF6600]">Insight</span> Flow
                           </h2>

                           <div className="space-y-6">
                              <p className="text-sm lg:text-base font-bold text-slate-800 leading-relaxed tracking-wider border-l-4 border-[#FF6600] pl-5 italic">
                                 Whether you own a small business, a medium enterprise, or a Fortune 500 company—you need a Digital Analytics expert who can help you manage your making right business decisions.
                              </p>
                              <p className="text-sm lg:text-base text-slate-500 font-semibold leading-relaxed">
                                 Many organizations have plenty of valuable insights but few have mastered what's already there. We address this challenge by providing a birds-eye view of your helpdesk and customer base, transforming common "findings" into surgical market dominance.
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* REFINED STRATEGIC NODES */}
                     <div className="pt-6 space-y-6">
                        <div className="flex items-center gap-3">
                           <Layers size={16} className="text-[#FF6600]" />
                           <h3 className="text-[13
                           px] font-bold text-slate-900 uppercase tracking-widest">Operational Nodes</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {strategicNodes.slice(0, 4).map((item, i) => (
                              <div
                                 key={i}
                                 className="flex flex-col gap-3 p-8 rounded-md bg-white border border-slate-100 group transition-all hover:border-[#FF6600] hover:shadow-soft"
                              >
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-sm bg-[#FF6600] text-white transition-all shadow-lg group-hover:scale-110 ">
                                       <item.icon size={16} />
                                    </div>
                                    <span className="text-sm lg:text-lg font-black text-slate-900 transition-colors capitalize tracking-wider">
                                       {item.title}
                                    </span>
                                 </div>
                                 <p className="text-[12px] lg:text-[15px] text-slate-500 font-semibold leading-relaxed group-hover:text-slate-700">
                                    {item.desc}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT SYSTEM SPECS */}
                  <div className="lg:col-span-5 relative lg:sticky lg:top-32 flex flex-col items-center h-fit">
                     <div className="relative w-full max-w-[95%] rounded-md overflow-hidden shadow-2xl border border-slate-100 bg-white group/banner">
                        <img
                           src={imgAnalyticsMatrix}
                           alt="Analytics Ecosystem Matrix"
                           className="w-full h-auto object-cover transition-transform duration-1000 group-hover/banner:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end">
                           <div className="h-0.5 w-10 bg-[#FF6600] mb-2" />
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">Analytical Narrative Matrix</span>
                        </div>
                     </div>

                     <div className="mt-8 w-full space-y-4">
                        <div className="p-6 rounded-md bg-white border border-slate-100 shadow-soft-lg space-y-6">
                           <div className="flex items-center gap-3 pb-4 border-b border-slate-50">
                              <Monitor size={18} className="text-[#FF6600]" />
                              <h4 className="text-[12px] lg:text-sm font-bold text-slate-900 uppercase tracking-widest">Strategy Spectrum</h4>
                           </div>

                           <div className="grid grid-cols-1 gap-2.5">
                              {[
                                 { label: "Google Analytics", val: "Certified", desc: "Expert Measurement" },
                                 { label: "Technical Environment", val: "Documented", desc: "Server & Mobile Audit" },
                                 { label: "Reporting Velocity", icon: Sparkles, val: "Advanced", desc: "Satisfaction & Timesheets" }
                              ].map((spec, i) => (
                                 <div key={i} className="flex items-center justify-between p-4 rounded bg-slate-50 border border-slate-100">
                                    <div className="flex flex-col">
                                       <span className="text-[11px] font-bold text-slate-900 capitalize tracking-widest">{spec.label}</span>
                                       <span className="text-[10px] text-slate-400 font-bold capitalize tracking-widest">{spec.desc}</span>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#FF6600] font-black">{spec.val}</span>
                                 </div>
                              ))}
                           </div>

                           <p className="text-[12px] lg:text-sm text-slate-500 font-semibold leading-relaxed border-t border-slate-50 pt-4">
                              "The Advanced reporting suite enables you to generate timesheet and satisfaction reports to understand client levels with precision."
                           </p>
                        </div>
                     </div>
                  </div>

               </div>

               {/* PEHRA PROTOCOL - FULL WIDTH ELITE SECTION */}
               <div className="mt-24 pt-16 border-t border-slate-100 space-y-16">
                  <div className="flex flex-col items-center text-center space-y-4">
                     <div className="flex items-center gap-3">
                        <Sparkles size={20} className="text-[#FF6600]" />
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.6em]">System Architecture</span>
                     </div>
                     <h3 className="text-2xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-wide">Strategic <span className="text-[#FF6600]">Protocols</span></h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
                     {strategicNodes.slice(4).map((item, i) => (
                        <div key={i} className="group relative space-y-4 hover:translate-x-2 transition-transform duration-500">
                           <div className="flex items-center gap-4">
                              <div className="w-8 h-[2px] bg-[#FF6600]/20 group-hover:w-12 group-hover:bg-[#FF6600] transition-all" />
                              <h4 className="text-base lg:text-lg font-display font-black text-slate-900 uppercase tracking-tight group-hover:text-[#FF6600] transition-colors">
                                 {(() => {
                                    const words = item.title.split(" ");
                                    if (words.length > 1) {
                                       return (
                                          <>
                                             {words.slice(0, -1).join(" ")} <span className="text-[#FF6600]">{words[words.length - 1]}</span>
                                          </>
                                       );
                                    }
                                    return item.title;
                                 })()}
                              </h4>
                           </div>
                           <p className="text-[12px] lg:text-base text-slate-500 font-semibold leading-relaxed max-w-xl">
                              {item.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CONCLUSION PRESTIGE BLOCK - ELITE SYNC */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-12">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative py-10 lg:py-12 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
            >
               {/* Orange Glow Effect */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

               <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  {/* ICON CORE */}
                  <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                     <Activity size={24} />
                  </div>

                  {/* QUOTE CORE */}
                  <div className="relative">
                     <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 mx-auto italic">
                        {(() => {
                           const text = "We transform raw data into a narrative of dominance. Our analytical frameworks are designed to provide the clarity required for high-stakes enterprise decision making.";
                           return text.split(" ").map((word, wordIdx) => (
                              <span key={wordIdx} className="inline-block mr-2 relative">
                                 <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                       duration: 0.8,
                                       delay: 0.3 + (wordIdx * 0.012),
                                       ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className="inline-block"
                                 >
                                    {word}
                                 </motion.span>
                              </span>
                           ));
                        })()}
                     </h3>
                  </div>

                  <div className="flex items-center justify-center gap-8 pt-4">
                     <div className="h-[1px] w-20 bg-white/10" />
                     <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#FF6600]">Elite Intelligence</span>
                     <div className="h-[1px] w-20 bg-white/10" />
                  </div>
               </div>

               {/* Dynamic Background Effects */}
               <motion.div
                  animate={{
                     scale: [1, 1.2, 1],
                     opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF6600] rounded-full blur-[100px]"
               />
            </motion.div>
         </section>
      </div>
   );
}
