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

                  <h1 className="text-2xl lg:text-4xl font-display font-black text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
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
                     className="text-slate-600 text-sm lg:text-base font-semibold max-w-2xl leading-relaxed italic"
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
                        <div className="w-8 h-8 rounded bg-[#FF6600] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                           <metric.icon size={16} />
                        </div>
                        <div className="flex flex-col items-start">
                           <span className="text-sm font-black text-[#FF6600] leading-none">{metric.value}</span>
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{metric.label}</span>
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

                  {/* MAIN CONTENT CORE - FULL WIDTH */}
                  <div className="lg:col-span-12 space-y-12">
                     <div className="space-y-8">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-12 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Protocol Overview</span>
                        </div>

                        <div className="space-y-12">
                           <h2 className="text-xl lg:text-4xl font-display font-black text-slate-900 tracking-tighter uppercase leading-none">
                              The <span className="text-[#FF6600]">Reputation</span> Paradox
                           </h2>

                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                              <div className="space-y-6">
                                 <p className="text-base lg:text-xl font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-6 py-2 italic">
                                    Every day, over one billion names are searched on Google. While you may not have Google yourself, it's certain that someone else has - and they are making judgments about you based on what they find.
                                 </p>
                                 <p className="text-sm lg:text-base text-slate-500 font-semibold leading-relaxed">
                                    Ultimately, it's your responsibility to ensure you make a good impression when someone Google's you. Our guide is engineered to help you assess your current online reputation and implement surgical management protocols.
                                 </p>
                              </div>
                              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-100 group/intro h-full min-h-[300px] lg:min-h-[400px]">
                                 <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                    alt="Expert Analysis"
                                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover/intro:scale-110"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                 <div className="absolute bottom-6 left-6">
                                    <span className="text-[11px] font-black text-white uppercase tracking-widest">Institutional Authority</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>


               </div>

               {/* PEHRA PROTOCOL - FULL WIDTH ELITE SECTION */}
               <div className="mt-24 pt-16 border-t border-slate-100 space-y-16">
                  <div className="flex flex-col items-center text-center space-y-4">
                     <div className="flex items-center gap-3">
                        <Monitor size={20} className="text-[#FF6600]" />
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.6em]">Brand Integrity Hub</span>
                     </div>
                     <h3 className="text-2xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tighter">Strategic <span className="text-[#FF6600]">Protocols</span></h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
                     {strategicNodes.map((item, i) => (
                        <div key={i} className="group relative space-y-4 hover:translate-x-2 transition-transform duration-500">
                           <div className="flex items-center gap-4">
                              <div className="w-8 h-[2px] bg-[#FF6600]/20 group-hover:w-12 group-hover:bg-[#FF6600] transition-all" />
                              <h4 className="text-sm lg:text-base font-display font-black text-slate-900 uppercase tracking-tight group-hover:text-[#FF6600] transition-colors">
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
                           <p className="text-[12px] lg:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl">
                              {item.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </section>

         {/* CONCLUSION SIGNATURE BLOCK */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-12">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative py-10 lg:py-12 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

               <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                     <Shield size={24} />
                  </div>

                  <div className="relative">
                     <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 mx-auto italic">
                        {(() => {
                           const text = "Reputation is the currency of the digital age. We engineer surgical defenses to ensure your brand's integrity remains unassailable across every search result.";
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
                     <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#FF6600]">Elite Protection</span>
                     <div className="h-[1px] w-20 bg-white/10" />
                  </div>
               </div>

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
