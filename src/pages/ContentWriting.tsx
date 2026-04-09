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
   Layers
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
      desc: "Search Engines like Google and Yahoo have got smarter! They hike up the content that is Relevant, Easy-to-Interpret and Unique! Feeding the spiders, we create Content with fresh ideas and concepts!" 
   },
   { 
      title: "Perfect Catalyst for SEO", 
      icon: TrendingUp, 
      tag: "Ranking Power",
      desc: "Website content plays a vital role in obtaining a leading position. Since the Internet is an influential marketing tool, survival of the business is important. Search engines will crawl your website and help you increase your traffic." 
   },
   { 
      title: "Quality Analysis", 
      icon: BarChart3, 
      tag: "Perspective",
      desc: "We provide you the best content that provides you with the best result. We make the best content according to the market wave demands. Our content is modern and easy-to-relate-to the market perspective." 
   },
   { 
      title: "Interactive Synthesis", 
      icon: MessageSquare, 
      tag: "Communications",
      desc: "We create Content according to the voice of the website and perfectly communication to the masses. We choose better content for look feel easy and provide you promotion regularly." 
   },
   { 
      title: "Professional Copywriting", 
      icon: Edit3, 
      tag: "Business Goals",
      desc: "Copywriting is not just to impress, but also to achieve specific business objectives. Every copywriting project begins with first analyzing the target customers, their needs, and your solution offerings." 
   },
   { 
      title: "Appealing Originality", 
      icon: Sparkles, 
      tag: "Engagement",
      desc: "Originality is the key to attract visitors. Our writers approach every topic with a new angle, creating curiosity for your offerings and services while leaving a long-lasting impression." 
   },
];

const writingMetrics = [
    { label: "Turnaround Velocity", value: "24-48h", sub: "Rapid Deployment", icon: Clock },
    { label: "Narrative Integrity", value: "100%", sub: "Unique & Copyscape", icon: ShieldCheck },
    { label: "Market Tenure", value: "4+ Yrs", sub: "Expert Authors", icon: Users }
];

export default function ContentWriting() {

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
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-6">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Narrative Engineering Elite</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING WRITING DOMINANCE.";
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-2xl leading-relaxed italic"
                  >
                     "On the hunt for captivating content? Your quest concludes right here! Precision narrative architectures designed to leave a long-lasting impression."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK */}
               <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 1.5 }}
                   className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto pt-4"
                >
                   {writingMetrics.map((metric, i) => (
                      <div key={i} className="px-5 py-3 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-4 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                         <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                            <metric.icon size={16} />
                         </div>
                         <div className="flex flex-col items-start">
                            <span className="text-sm font-bold text-[#FF6600] leading-none">{metric.value}</span>
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{metric.label}</span>
                         </div>
                      </div>
                   ))}
                </motion.div>
            </div>
         </div>

         {/* STRATEGIC WRITING INTERFACE */}
         <section className="relative py-16 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-8 space-y-12">
                     <div className="space-y-8">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-12 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Content Ecology</span>
                        </div>

                        <div className="space-y-8">
                           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
                              The Million-Service <span className="text-[#FF6600]">Paradox</span>
                           </h2>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-4">
                                 <p className="text-[14px] font-medium text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-6 py-2">
                                    Why hire us when there are a million similar services? We have over 4 years of content writing experience and we re-do the work until the customer is 100% SATISFIED.
                                 </p>
                                 <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                    Be it articles, blog posts, forum posts, edits, ghostwriting, biographies, or eBooks—we cater to all content requirements. We cover any niche from relationships and health to forex, business, and Internet marketing.
                                 </p>
                              </div>
                              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-100 group/intro h-full min-h-[220px]">
                                 <img 
                                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Creative Authoring"
                                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover/intro:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                 <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Narrative Governance</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* REFINED STRATEGIC NODES */}
                     <div className="pt-10 space-y-8">
                        <div className="flex items-center gap-3">
                            <Layers size={16} className="text-[#FF6600]" />
                            <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">Operational Objectives</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {strategicNodes.map((item, i) => (
                              <div
                                 key={i}
                                 className="flex flex-col gap-4 p-7 rounded bg-white border border-slate-100 group transition-all hover:border-[#FF6600] hover:shadow-soft relative overflow-hidden"
                              >
                                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon size={60} />
                                 </div>
                                 <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-md bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all shadow-sm">
                                       <item.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                       <span className="text-[9px] font-bold text-[#FF6600] uppercase tracking-widest">{item.tag}</span>
                                       <span className="text-[14px] font-bold text-slate-900 transition-colors uppercase tracking-tight">
                                          {item.title}
                                       </span>
                                    </div>
                                 </div>
                                 <p className="text-[12px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 relative z-10">
                                    {item.desc}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* RIGHT SYSTEM SPECS */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-32 flex flex-col gap-8 h-fit">
                     <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-soft-lg space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-16 -mt-16 z-0" />
                        
                        <div className="relative z-10 space-y-8">
                           <div className="flex items-center gap-3 pb-4 border-b border-slate-50">
                               <Monitor size={20} className="text-[#FF6600]" />
                               <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em]">Editorial Protocol</h4>
                           </div>
                           
                           <div className="grid grid-cols-1 gap-4">
                               {[
                                   { label: "Turnaround", val: "24-48 Hours", sub: "Rapid Delivery", icon: Clock },
                                   { label: "Uniqueness", val: "100%", sub: "Copyscape Passed", icon: ShieldCheck },
                                   { label: "Governance", val: "Full Copyright", sub: "Client Ownership", icon: Zap },
                                   { label: "Experience", val: "4+ Years", sub: "Market Tenure", icon: Users }
                               ].map((spec, i) => (
                                   <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100 group/spec hover:bg-white hover:border-orange-200 transition-all">
                                       <div className="flex items-center gap-4">
                                          <div className="p-2 bg-white rounded shadow-sm text-slate-400 group-hover/spec:text-[#FF6600] transition-colors">
                                             <spec.icon size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                              <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">{spec.label}</span>
                                              <span className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">{spec.sub}</span>
                                          </div>
                                       </div>
                                       <span className="text-[10px] items-end font-mono text-[#FF6600] font-bold">{spec.val}</span>
                                   </div>
                               ))}
                           </div>

                           <div className="pt-6 border-t border-slate-50 space-y-4">
                              <p className="text-[13px] text-slate-500 font-medium leading-relaxed italic">
                                 "Originality is the key to attract visitors. Our website content writers create content that really appeals to the reader."
                              </p>
                              <button className="w-full py-4 bg-[#FF6600] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-md shadow-lg shadow-orange-200 hover:bg-[#E65C00] transition-all flex items-center justify-center gap-2 group/btn">
                                 <span>Deploy Narrative</span>
                                 <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 rounded-xl bg-slate-900 text-white space-y-4 overflow-hidden relative">
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FF6600] opacity-20 blur-3xl" />
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Mission Critical</h5>
                        <p className="text-[12px] font-medium leading-relaxed opacity-80">
                           Survival of business depends on attractive and fresh content that search engines will crawl to increase your traffic.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                           <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "90%" }}
                                 transition={{ duration: 2, ease: "easeOut" }}
                                 className="h-full bg-[#FF6600]"
                              />
                           </div>
                           <span className="text-[10px] font-bold">90% Survival</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
