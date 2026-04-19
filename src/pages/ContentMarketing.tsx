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
         <div className="relative min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-4 sm:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-3 sm:px-2 py-1.5 bg-orange-600 rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-white">Content Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
                     {(() => {
                        const title = "ENGINEERING CONTENT AUTHORITY.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 sm:mr-3 md:mr-4">
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
                     className="font-system-body text-xs md:text-sm  lg:text-base text-slate-600 font-semibold max-w-xl leading-relaxed px-2 sm:px-0 md:px-4"
                  >
                     "High-fidelity narrative engineering. Useful content should be at the core of your architectural marketing strategy to drive institutional growth."
                  </motion.p>
               </div>

            </div>
         </div>

         {/* COMPACTED INTERFACE - REFINED HIERARCHY */}
         <section className="relative py-8 sm:py-12 md:py-16 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

               <div className="max-w-5xl mx-auto space-y-16">
                  <div className="space-y-10">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                           <span className="font-system-caption text-primary">Content Ecology</span>
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                        </div>
                        <h2 className="font-system-title font-bold text-slate-900 tracking-wide uppercase leading-none max-w-3xl text-center sm:text-center md:text-center lg:text-center">
                           Dynamic Content <span className="text-[#FF6600]">Marketing</span> Authority
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <div className="space-y-6">
                            <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 border-l-[4px] border-primary shadow-sm rounded-r-lg">
                               <h3 className="font-system-body text-slate-800 font-black leading-tight tracking-wide">
                                  Useful content should be at the core of your institutional marketing strategy.
                               </h3>
                            </div>
                            <div className="space-y-4 font-system-body text-slate-600 leading-relaxed px-2 sm:px-0 md:px-2">
                               <p className="font-system-body font-semibold">
                                  Consumers have shut off the traditional world of marketing—ignoring standard banners and skipping traditional advertising. High-fidelity information is the path.
                               </p>
                               <p className="font-system-body text-slate-950 italic font-semibold">
                                  "Smart marketers understand that traditional methods are becoming less effective. Narrative authority is the institutional standard."
                               </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-orange-50 rounded-xl z-0" />
                            <div className="relative rounded-xl overflow-hidden shadow-xl border border-white z-10 group/intro h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px]">
                               <img
                                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                  alt="Expert Analysis"
                                  className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover/intro:scale-110"
                               />
                               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                               <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-6 lg:left-6 text-white space-y-1">
                                  <div className="flex items-center gap-1.5">
                                     <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                     <span className="font-system-caption text-primary">System Verified</span>
                                  </div>
                                  <h3 className="font-system-title text-white uppercase tracking-wide capitalize">Narrative Governance</h3>
                               </div>
                            </div>
                         </div>
                     </div>
                  </div>

                  {/* OPERATIONAL STATUS BAR - ECOSYSTEM METRICS - COMPACTED */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 shadow-md border border-slate-200 rounded-lg overflow-hidden">
                     {[
                        { label: "Newsworthy", val: "50%", sub: "Weekly", icon: Zap },
                        { label: "Evergreen", val: "35%", sub: "Institutional", icon: BookOpen },
                        { label: "Personal", val: "15%", sub: "Engagement", icon: Heart },
                        { label: "Efficiency", val: "95%", sub: "Resonance", icon: Activity }
                     ].map((spec, i) => (
                        <div key={i} className="bg-white p-2 sm:p-3 md:p-4 flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 group/st hover:bg-orange-50 transition-colors">
                           <div className="p-1.5 bg-primary rounded text-white group-hover/st:bg-orange-600 group-hover/st:text-white transition-all">
                              <spec.icon size={16} />
                           </div>
                           <div className="flex flex-col">
                              <span className="font-system-title text-slate-950 tracking-tighter group-hover/st:text-primary transition-colors font-bold">{spec.val}</span>
                              <span className="font-system-caption text-slate-400 capitalize tracking-widest mt-0.5 font-bold group-hover/st:text-slate-600 transition-colors">{spec.label}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* UNIQUE SYNCHRONIZED WORKFLOW LAYOUT - COMPACTED & REFINED HOVERS */}
               <div className="mt-20 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden md:block z-0" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 mb-12 sm:mb-14 md:mb-16">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center border border-primary/20">
                        <Layers size={14} className="sm:size-[18px]" />
                     </div>
                     <h3 className="font-system-title font-semibold text-slate-950 uppercase tracking-wider">Operational Objectives</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
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
                                    <span className="font-system-caption text-slate-400 uppercase tracking-wider mb-1 group-hover/card:text-primary transition-colors">{item.tag}</span>
                                    <div className="flex items-center gap-2">
                                       <span className="text-xl sm:text-2xl font-display font-black text-slate-100 group-hover/card:text-slate-200 transition-colors italic">0{i + 1}</span>
                                       <div className="h-px w-6 bg-slate-100 group-hover/card:bg-primary transition-colors" />
                                    </div>
                                 </div>
                                 <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500 border border-primary/20">
                                    <item.icon size={16} />
                                 </div>
                              </div>

                              <h4 className="font-system-title font-black capitalize tracking-tighter leading-tight  mb-3 relative z-10">
                                 {(() => {
                                    const words = item.title.split(" ");
                                    return (
                                       <div className="flex flex-wrap gap-x-2 text-2xl">
                                          <span className="text-slate-950 font-bold">
                                             {words[0]}
                                          </span>
                                          <span className="text-[#FF6600] font-bold">
                                             {words.slice(1).join(" ")}
                                          </span>
                                       </div>
                                    );
                                 })()}
                              </h4>

                              <p className="font-system-body text-slate-500 font-bold leading-relaxed group-hover/card:text-slate-900 transition-colors line-clamp-3">
                                 {item.desc}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* SECOND ROW - STAGGERED OFFSET */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 relative z-10 md:px-12">
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
                                    <span className="font-system-caption text-slate-400 uppercase tracking-wider mb-1 group-hover/card:text-primary transition-colors">{item.tag}</span>
                                    <div className="flex items-center gap-2">
                                       <span className="text-xl sm:text-2xl font-display font-black text-slate-100 group-hover/card:text-slate-200 transition-colors italic">0{i + 4}</span>
                                       <div className="h-px w-6 bg-slate-100 group-hover/card:bg-primary transition-colors" />
                                    </div>
                                 </div>
                                 <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500 border border-primary/20">
                                    <item.icon size={16} />
                                 </div>
                              </div>

                              <h4 className="font-system-title font-black capitalize tracking-tighter leading-tight  mb-3 relative z-10">
                                 {(() => {
                                    const words = item.title.split(" ");
                                    return (
                                       <div className="flex flex-wrap gap-x-2 text-2xl">
                                          <span className="text-slate-950 font-bold">
                                             {words[0]}
                                          </span>
                                          <span className="text-[#FF6600] font-bold">
                                             {words.slice(1).join(" ")}
                                          </span>
                                       </div>
                                    );
                                 })()}
                              </h4>

                              <p className="font-system-body text-slate-500 font-bold leading-relaxed group-hover/card:text-slate-900 transition-colors line-clamp-3">
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
