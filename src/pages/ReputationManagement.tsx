import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Shield, 
   Search, 
   Globe, 
   Zap, 
   TrendingUp, 
   ArrowRight,
   Cpu,
   Sparkles,
   Target,
   Monitor,
   Activity,
   CheckCircle2,
   MessageSquare,
   ShieldAlert,
   BarChart3,
   Users,
   Star
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeTechnicalLattice from '../components/ThreeTechnicalLattice';

gsap.registerPlugin(ScrollTrigger);

const strategicNodes = [
   { 
      title: "Counter-Propaganda Strategy", 
      icon: ShieldAlert, 
      tag: "Defense",
      desc: "Tactical measures to portray opposing propaganda as false. We instruct target audiences to act in a manner that counters original misinformation, targetting the same demographics with high-fidelity, reactionary messaging." 
   },
   { 
      title: "SEO & Brand Protection", 
      icon: Search, 
      tag: "Prevention",
      desc: "Reputation management is most effective when proactive. We implement SEO interventions to prevent negative publicity attacks before they occur, protecting your brand image through strategic curative protocols." 
   },
   { 
      title: "Testimonial Architecture", 
      icon: MessageSquare, 
      tag: "Social Proof",
      desc: "Aggregating feedback from loyal customers across Facebook, Twitter, and other social channels. We publish these reviews to your wall and website, creating a robust shield of authentic positive consensus." 
   },
   { 
      title: "Positive Variable Highlight", 
      icon: Star, 
      tag: "Amplification",
      desc: "Extracting and amplifying positive reviews and comments from across the internet. We ensure these high-status variables affect your business perspective positively through advanced social media marketing techniques." 
   },
   { 
      title: "Review Aggregation", 
      icon: Globe, 
      tag: "Network",
      desc: "A unified connection to Yellow Pages, LinkedIn, Google, Yelp, Yahoo, and Angie's List. We target and neutralize across-the-board negative listings while uploading fresh, positive reviews for a small business boost." 
   },
   { 
      title: "Reputation Monitoring", 
      icon: Activity, 
      tag: "Intelligence",
      desc: "Complete SEO-driven command of your small or large business. We provide daily updates, alerts, and detailed weekly/monthly reports, ensuring you have total visibility over your digital footprint." 
   },
];

const reputationMetrics = [
    { label: "Search Volume", value: "1B+", sub: "Daily Name Searches", icon: Search },
    { label: "Recruiter Standard", value: "77%", sub: "Require Google Screening", icon: Users },
    { label: "Business Impact", value: "45%", sub: "Rejected via Search", icon: ShieldAlert }
];

export default function ReputationManagement() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] lg:min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeTechnicalLattice />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-6">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elite Brand Custodians</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING REPUTATION DOMINANCE.";
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
                     "When seeking information, our initial destination is the Internet, and Google stands out as the leading search engine for this purpose."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK */}
               <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 1.5 }}
                   className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto pt-4"
                >
                   {reputationMetrics.map((metric, i) => (
                      <div key={i} className="px-5 py-3 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-4 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                         <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                            <metric.icon size={16} />
                         </div>
                         <div className="flex flex-col items-start">
                            <span className="text-sm font-bold text-[#FF6600] leading-none">{metric.value}</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{metric.label}</span>
                         </div>
                      </div>
                   ))}
                </motion.div>
            </div>
         </div>

         {/* CORE OPERATIONAL MATRIX */}
         <section className="relative py-16 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
                  {/* LEFT CONTENT CORE */}
                  <div className="lg:col-span-8 space-y-12">
                     <div className="space-y-8">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-12 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Protocol Overview</span>
                        </div>

                        <div className="space-y-8">
                           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
                              The <span className="text-[#FF6600]">Reputation</span> Paradox
                           </h2>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-4">
                                 <p className="text-[15px] font-medium text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-6 py-2">
                                    Every day, over one billion names are searched on Google. While you may not have Google yourself, it's certain that someone else has - and they are making judgments about you based on what they find.
                                 </p>
                                 <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                                    Ultimately, it's your responsibility to ensure you make a good impression when someone Google's you. Our guide is engineered to help you assess your current online reputation and implement surgical management protocols.
                                 </p>
                              </div>
                              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-100 group/intro h-full min-h-[200px]">
                                 <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Expert Analysis"
                                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover/intro:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                 <div className="absolute bottom-4 left-4">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Institutional Authority</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* REFINED STRATEGIC NODES */}
                     <div className="pt-10 space-y-8">
                        <div className="flex items-center gap-3">
                            <Monitor size={16} className="text-[#FF6600]" />
                            <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em]">Deployment Nodes</h3>
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
                                       <span className="text-[10px] font-bold text-[#FF6600] uppercase tracking-widest">{item.tag}</span>
                                       <span className="text-[14px] font-bold text-slate-900 transition-colors uppercase tracking-tight">
                                          {item.title}
                                       </span>
                                    </div>
                                 </div>
                                 <p className="text-[13px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 relative z-10">
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
                               <Shield size={20} className="text-[#FF6600]" />
                               <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em]">Service Protocol</h4>
                           </div>
                           
                           <div className="grid grid-cols-1 gap-4">
                               {[
                                   { label: "Reporting Velocity", val: "Weekly/Monthly", sub: "Detailed Analysis", icon: Activity },
                                   { label: "Network Coverage", val: "15+ Platforms", sub: "Yelp, LinkedIn, Google", icon: Globe },
                                   { label: "Alert Latency", val: "< 2 Hours", sub: "Real-time Defenses", icon: Zap },
                                   { label: "Asset Neutralization", val: "Surgical", sub: "Negative Site Listings", icon: ShieldAlert }
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
                                 "Prevention is better than cure. We connect all main platforms to ensure your institutional image remains uncompromised."
                              </p>
                              <button className="w-full py-4 bg-[#FF6600] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-md shadow-lg shadow-orange-200 hover:bg-[#E65C00] transition-all flex items-center justify-center gap-2 group/btn">
                                 <span>Initialize Defense</span>
                                 <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 rounded-xl bg-slate-900 text-white space-y-4 overflow-hidden relative">
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FF6600] opacity-20 blur-3xl" />
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Mission Critical</h5>
                        <p className="text-[12px] font-medium leading-relaxed opacity-80">
                           45% of potential clients have decided NOT to do business after a single negative Google search result.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                           <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "45%" }}
                                 transition={{ duration: 2, ease: "easeOut" }}
                                 className="h-full bg-[#FF6600]"
                              />
                           </div>
                           <span className="text-[10px] font-bold">45% Loss</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
