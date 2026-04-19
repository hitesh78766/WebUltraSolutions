import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Edit3,
   Zap,
   Sparkles,
   Globe,
   TrendingUp,
   ArrowRight,
   Cpu,
   Target,
   Search,
   ShieldCheck,
   BarChart3,
   Activity,
   CheckCircle2,
   Clock,
   Users,
   MessageSquare,
   Monitor,
   Layers,
   HelpCircle,
   Command,
   Hash,
   Terminal
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

const strategicNodes = [
   {
      title: "The Spider Logic",
      icon: Search,
      tag: "Search Algorithm",
      desc: "Search Engines like Google and Yahoo have got smarter! They hike up the content that is Relevant, Easy-to-Interpret and Unique! Feeding the spiders, we create Content with fresh ideas and concepts!",
      specs: ["Neural Keywords", "Semantic Mapping", "Crawler Engagement"]
   },
   {
      title: "Perfect Catalyst for SEO",
      icon: TrendingUp,
      tag: "Ranking Power",
      desc: "Website content plays a vital role in obtaining a leading position. Since the Internet is an influential marketing tool, survival of the business is important. Search engines will crawl your website and help you increase your traffic.",
      specs: ["Index Optimization", "Traffic Sourcing", "Global Visibility"]
   },
   {
      title: "Quality Analysis",
      icon: BarChart3,
      tag: "Perspective",
      desc: "We provide you the best content that provides you with the best result. We make the best content according to the market wave demands. Our content is modern and easy-to-relate-to the market perspective.",
      specs: ["Market Sync", "Demand Mapping", "Trend Recognition"]
   },
   {
      title: "Interactive Synthesis",
      icon: MessageSquare,
      tag: "Communications",
      desc: "We create Content according to the voice of the website and perfectly communication to the masses. We choose better content for look feel easy and provide you promotion regularly.",
      specs: ["Voice Alignment", "Mass Outreach", "Active Promotion"]
   },
   {
      title: "Professional Copywriting",
      icon: Edit3,
      tag: "Business Goals",
      desc: "Copywriting is not just to impress, but also to achieve specific business objectives. Every copywriting project begins with first analyzing the target customers, their needs, and your solution offerings.",
      specs: ["Persona Analysis", "Offer Logic", "Conversion Hooks"]
   },
   {
      title: "Appealing Originality",
      icon: Sparkles,
      tag: "Engagement",
      desc: "Originality is the key to attract visitors. Our writers approach every topic with a new angle, creating curiosity for your offerings and services while leaving a long-lasting impression.",
      specs: ["Angle Innovation", "Retention Mechanics", "Brand Authority"]
   },
];


export default function ContentWriting() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 lg:space-y-6">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5  rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-white">Content Writing Intelligence</span>
                  </motion.div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-system-hero font-display text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-2 sm:px-4">
                     {(() => {
                        const title = "ENGINEERING WRITING DOMINANCE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 sm:mr-3 md:mr-4">
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
                     className="text-xs sm:text-sm md:text-base font-system-body text-slate-600 font-semibold max-w-2xl leading-relaxed px-2 sm:px-0 mx-auto"
                  >
                     "On the hunt for captivating content? Your quest concludes right here! Precision narrative architectures designed to leave a long-lasting impression."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto pt-3 sm:pt-2 px-2 sm:px-4"
               >
               </motion.div>
            </div>
         </div>

         {/* COMPACT NARRATIVE PIPELINE ARCHITECTURE */}
         <section className="relative py-8 sm:py-10 md:py-12 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 space-y-10 sm:space-y-12 md:space-y-20">

               <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                     <Layers size={14} className="sm:size-[18px] text-orange-500" />
                     <span className="font-system-caption text-orange-500">Process Intelligence</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-system-title text-slate-900 uppercase tracking-wide">Narrative <span className="text-orange-500">Governance</span></h3>
               </div>

               <div className="relative max-w-6xl mx-auto">
                  {/* Vertical Pipeline Thread */}
                  <div className="absolute left-[20px] sm:left-[23px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 -translate-x-1/2 hidden md:block" />

                  <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                     {/* INTEGRATED PARADOX NODE */}
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16"
                     >
                        <div className="absolute lg:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#FF6600] z-10 hidden md:block" />

                        <div className="flex-1 w-full space-y-4 text-center md:text-right">
                           <div className="space-y-4">
                              <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-slate-400">
                                 <span className="font-system-caption text-slate-400 text-xs">Paradox Protocol</span>
                                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                                    <HelpCircle size={12} className="sm:size-[16px]" />
                                 </div>
                              </div>
                              <h4 className="text-lg sm:text-xl md:text-2xl font-system-title text-slate-900 uppercase tracking-wide">
                                 The Million-Service <span className="text-[#FF6600]">Paradox</span>
                              </h4>
                           </div>
                        </div>

                        <div className="hidden md:block w-px h-1 bg-transparent" />

                        <div className="flex-1 w-full space-y-4 text-center md:text-left">
                           <div className="space-y-4">
                              <p className="text-sm sm:text-base font-system-body text-slate-800 font-semibold leading-relaxed tracking-wide border-l-4 border-orange-100 pl-4 sm:pl-6 py-1 mx-auto md:mx-0">
                                 Why hire us when there are a million similar services? We have over 4 years of experience and we re-do the work until the customer is 100% Satisfied.
                              </p>
                              <div className="flex flex-wrap gap-2 pt-2">
                                 {["Articles", "Blogs", "Edits", "eBooks", "Ghostwriting"].map((tag, i) => (
                                    <span key={i} className="font-system-caption text-slate-500 px-2 py-1 bg-slate-100 rounded border border-slate-200 capitalize">
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>

                     {/* DATA NODES */}
                     {strategicNodes.map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-16"
                        >
                           <div className="absolute lg:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#FF6600] z-10 hidden md:block" />

                           <div className="flex-1 w-full space-y-4 text-center md:text-right">
                              {i % 2 !== 0 ? (
                                 <div className="space-y-4">
                                    <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4">
                                       <h4 className="text-base sm:text-lg lg:text-xl font-display text-slate-900 uppercase tracking-tight">
                                          {(() => {
                                             const words = item.title.split(" ");
                                             return (<>{words.slice(0, -1).join(" ")} <span className="text-[#FF6600]">{words[words.length - 1]}</span></>);
                                          })()}
                                       </h4>
                                       <div className="w-7 h-7 lg:w-10 lg:h-10 rounded bg-[#FF6600] flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                                          <item.icon size={12} className="lg:size-18" />
                                       </div>
                                    </div>
                                    <p className="text-[13px] sm:text-sm font-system-body text-slate-500 font-semibold leading-relaxed max-w-lg ml-auto">
                                       {item.desc}
                                    </p>
                                    <div className="flex justify-center md:justify-end gap-2 sm:gap-3 pt-2">
                                       {item.specs.map((spec, si) => (
                                          <div key={si} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded shadow-sm">
                                             <div className="w-1 h-1 rounded-full bg-[#FF6600]" />
                                             <span className="text-[10px] font-bold text-slate-600 capitalize tracking-tighter">{spec}</span>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              ) : (
                                 <div className="hidden md:block" />
                              )}
                           </div>

                           <div className="hidden md:block w-px h-1 bg-transparent" />

                           <div className="flex-1 w-full space-y-4 text-center md:text-left">
                              {i % 2 === 0 ? (
                                 <div className="space-y-4">
                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                       <div className="w-7 h-7 lg:w-10 lg:h-10 rounded bg-[#FF6600] flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                                          <item.icon size={12} className="lg:size-18" />
                                       </div>
                                       <h4 className="text-base sm:text-lg lg:text-xl font-display text-slate-900 uppercase tracking-tight">
                                          {(() => {
                                             const words = item.title.split(" ");
                                             return (<>{words.slice(0, -1).join(" ")} <span className="text-[#FF6600]">{words[words.length - 1]}</span></>);
                                          })()}
                                       </h4>
                                    </div>
                                    <p className="text-[13px] sm:text-sm lg:text-base font-system-body text-slate-500 font-semibold leading-relaxed max-w-lg mr-auto">
                                       {item.desc}
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-2 sm:gap-3 pt-2">
                                       {item.specs.map((spec, si) => (
                                          <div key={si} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded shadow-sm">
                                             <div className="w-1 h-1 rounded-full bg-[#FF6600]" />
                                             <span className="text-[10px] font-black text-slate-600 capitalize tracking-tighter">{spec}</span>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              ) : (
                                 <div className="hidden md:block" />
                              )}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CONCLUSION PRESTIGE BLOCK */}
         <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-10 sm:py-12">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

               <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-md bg-orange/10 border border-white/5 flex items-center justify-center text-orange-500 shadow-xl group-hover:scale-110 transition-transform duration-700">
                     <Edit3 size={20} className="sm:size-[24px]" />
                  </div>

                  <div className="relative px-2">
                     <h3 className="text-sm sm:text-base md:text-lg font-system-body text-slate-200 font-medium tracking-tight leading-relaxed mx-auto">
                        {(() => {
                           const text = "Originality is the currency of influence. We engineer surgical narratives that don't just fill space—they command attention and drive 100% market satisfaction.";
                           return text.split(" ").map((word, wordIdx) => (
                              <span key={wordIdx} className="inline-block mr-1 sm:mr-2 relative">
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

                  <div className="flex items-center justify-center gap-6 sm:gap-8 pt-4">
                     <div className="h-[1px] w-20 bg-white/10" />
                     <span className="font-system-caption text-orange-500 capitalize tracking-wider">Elite Narrative</span>
                     <div className="h-[1px] w-20 bg-white/10" />
                  </div>
               </div>

               <motion.div
                  animate={{
                     scale: [1, 1.2, 1],
                     opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-primary rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"
               />
            </motion.div>
         </section>
      </div>
   );
}
