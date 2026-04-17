import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Share2,
   Globe,
   Zap,
   TrendingUp,
   ArrowRight,
   Users,
   MessageSquare,
   Sparkles,
   Target,
   ShieldCheck,
   BarChart3,
   Search,
   Layers,
   Monitor,
   Flag,
   Star,
   Heart,
   Activity,
   CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ForceDirectedGraph from '../components/ForceDirectedGraph';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const strategicNodes = [
   {
      title: "International Recognition",
      icon: Globe,
      tag: "Global Reach",
      desc: "In our competitive world, the pursuit of 'likes' can become an obsession. We work to define the ROI of social media attention and quantify the financial value of fans and followers for your brand. Our protocol ensures that every interaction contributes to institutional brand equity and long-term market authority across global borders. We utilize deep-learning competitive intelligence to forecast market shifts and position your brand as the definitive leader in your sector, ensuring sustained visibility and influence in a crowded digital landscape."
   },
   {
      title: "Amplified Voice Protocol",
      icon: Star,
      tag: "Brand Resonance",
      desc: "Success requires more than just practice; it requires growth. We provide advisor resources, customizable marketing libraries, social media support, and analytic tools to amplify your voice. By integrating high-fidelity narrative libraries and surgical workshop protocols, we ensure your brand message resonates with maximum frequency and technical clarity. Our system synchronizes your voice across all institutional channels, creating a powerful, singular brand presence that cuts through the noise and establishes a dominant market narrative."
   },
   {
      title: "SEO & Content Synergy",
      icon: Layers,
      tag: "Integration",
      desc: "Social media is a mixture of SEO and Content Marketing. Success takes real planning—listening to your audience, sharing relevant messages, and enabling others to share your narrative. This synchronized approach bridges the gap between search discovery and social engagement, creating a unified ecosystem that naturally scales your digital presence. By optimizing your metadata for multi-platform resonance, we transform every social post into a powerful organic growth engine that feeds your broader digital marketing funnel and amplifies your search authority."
   },
   {
      title: "Target Audience Precision",
      icon: Target,
      tag: "Market Fit",
      desc: "Without understanding your audience, there's no sense bothering. We use specialized methods for understanding and reaching your target market with precision and dedication. Through advanced psychographic profiling and behavioral intelligence, we identify high-value conversion pathways that traditional marketing ignores, ensuring a surgical fit for your campaign. Our data-driven insights allow us to predict user behavior and deliver hyper-personalized content that converts passive followers into active brand advocates and long-term institutional partners."
   },
   {
      title: "Reputation Management",
      icon: ShieldCheck,
      tag: "Authority",
      desc: "Reputations are sculpted from achievements, not empty goals. We manage your presence based on facts, counteracting opinion, conjecture, and rumors with surgical precision. Our governance model protects your institutional status by actively monitoring narrative health and intercepting potential risks before they impact your brand sovereignty. We implement proactive narrative defense protocols and real-time sentiment analysis to ensure your reputation remains untarnished, positioning your brand as a pillar of integrity and authority in the global marketplace."
   },
   {
      title: "Focused Lead Generation",
      icon: Users,
      tag: "Results",
      desc: "Scale your leads, clients, and income. Our advanced marketing techniques save you time while delivering high-fidelity results through focused individual attention and workshop protocols. We map every social touchpoint to a measurable financial outcome, ensuring that your social media investment operates as a high-yield institutional capital deployment. Our performance-transparency model provides real-time verification of lead quality and conversion efficiency, allowing you to scale your operations with the confidence of data-backed architectural insights."
   },
];

const socialMetrics = [
   { label: "Account Velocity", value: "50+", sub: "Profiles", icon: Activity },
   { label: "Execution Depth", value: "350+", sub: "Messages", icon: MessageSquare },
   { label: "Network Gravity", value: "Elite", sub: "Global Reach", icon: Globe }
];

export default function SocialMediaMarketing() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ForceDirectedGraph />
            <ThreeNetworkGlobe />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6">
               <div className="flex flex-col items-center gap-5">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6600]/10 border border-[#FF6600]/20 rounded-md shadow-sm"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6600]">Global Connectivity Engine</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold tracking-tight leading-[1] uppercase max-w-5xl mx-auto px-4">
                     <span className="text-slate-950 block lg:inline">Engineering Social</span>
                     <span className="text-[#FF6600] block lg:inline lg:ml-4">Synergy.</span>
                  </h1>

                  <motion.p
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1, delay: 0.5 }}
                     className="text-slate-600 text-[10px] md:text-xs lg:text-base font-semibold max-w-2xl leading-relaxed italic px-6 md:px-0"
                  >
                     "Capturing the birds-eye view of your global brand resonance through precision engagement architectures and narrative scale."
                  </motion.p>
               </div>

               {/* REFINED METRIC STACK - COMPACTED */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto pt-4 md:pt-2 px-4"
               >
                  {socialMetrics.map((metric, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-3 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <metric.icon size={14} />
                        </div>
                        <div className="flex flex-col items-start translate-y-0.5">
                           <span className="text-sm font-black text-[#FF6600] leading-none tracking-tight">{metric.value}</span>
                           <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mt-1">{metric.label}</span>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* COMPACTED INTERFACE - REFINED HIERARCHY */}
         <section className="relative py-8 md:py-16 bg-[#FDFBF9] border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12">
               
               <div className="max-w-6xl mx-auto space-y-16">
                  <div className="space-y-10">
                     <div className="flex flex-col items-center text-center space-y-3">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                           <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Engagement Ecology</span>
                           <div className="h-[2px] w-10 bg-[#FF6600]" />
                        </div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none max-w-3xl text-center lg:text-center">
                           High-Fidelity <span className="text-[#FF6600]">Engagement</span> ROI
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                           <div className="bg-white p-5 md:p-6 border-l-[4px] border-[#FF6600] shadow-sm rounded-r-lg">
                              <h3 className="text-sm md:text-base lg:text-lg font-black text-slate-800 leading-tight tracking-tight">
                                 Monitor your brand, competitors, and market at a glance with Elite precision.
                              </h3>
                           </div>
                           <div className="space-y-4 text-slate-600 font-semibold leading-relaxed text-[13px]">
                              <p>
                                 Create, plan, and schedule batch messages to all your networks with surgical precision. Our proprietary suggested content engine curates relevant narratives based on real-time market sentiment, ensuring your brand maximizes its architectural timeline and maintains a dominant digital footprint.
                              </p>
                              <p>
                                 We implement advanced cross-platform algorithmic synchronization to ensure your voice resonates across the entire digital ecology. By optimizing for high-frequency engagement and technical reach, we transform standard social interactions into powerful organic growth engines that feed your broader institutional funnel.
                              </p>
                              <p className="text-slate-950 italic font-black border-l-2 border-[#FF6600] pl-4">
                                 "Social media architecture is not about viral noise; it is about engineering permanent narrative authority. We focus on true institutional results and financial ROI through technical precision, identifying high-value conversion pathways that traditional marketing simply ignores."
                              </p>
                           </div>
                        </div>

                        <div className="relative">
                           <div className="absolute -inset-2 bg-orange-50 rounded-xl z-0" />
                           <div className="relative rounded-xl overflow-hidden shadow-xl border border-white z-10 group/intro h-[220px] md:h-[250px]">
                              <img
                                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                                 alt="Expert Analysis"
                                 className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover/intro:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white space-y-0.5">
                                 <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-[8px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#FF6600]">System Verified</span>
                                 </div>
                                 <h4 className="text-base md:text-base font-black uppercase tracking-tight">Social Governance</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* PEHRA PROTOCOL - FULL WIDTH & MAXIMUM CONTENT DEPTH */}
               <div className="mt-20 max-w-6xl mx-auto">
                  <div className="relative z-10 flex flex-col items-center text-center space-y-2 mb-16">
                     <span className="text-[9px] font-black text-[#FF6600] uppercase tracking-[0.3em]">Operational Core</span>
                     <h3 className="text-[12px] font-black text-slate-950 uppercase tracking-[0.6em]">Deployment Protocol</h3>
                  </div>

                  <div className="space-y-12 relative">
                     {/* PERSISTENT CONNECTING LINE */}
                     <div className="absolute left-[20px] md:left-[24px] top-4 bottom-4 w-px bg-slate-200 z-0" />

                     {strategicNodes.map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6 }}
                           className="group relative"
                        >
                           <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-8 items-start relative z-10">
                              {/* PERSISTENT INDEX MARKER */}
                              <div className="flex flex-col items-center pt-1">
                                 <div className="w-10 h-10 rounded-full bg-white border-2 border-[#FF6600] flex items-center justify-center text-[11px] font-black text-slate-950 shadow-md group-hover:scale-110 transition-all duration-500">
                                    0{i + 1}
                                 </div>
                                 <div className="mt-3 w-6 h-6 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] border border-orange-100 shadow-sm group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                                    <item.icon size={12} />
                                 </div>
                              </div>

                              {/* CONTENT PEHRA - MAXIMUM WIDTH & DEPTH */}
                              <div className="space-y-3 pt-1">
                                 <div className="space-y-1">
                                    <span className="text-[8px] font-black text-[#FF6600] uppercase tracking-[0.3em] mb-1 block">{item.tag}</span>
                                    <h4 className="text-lg font-black uppercase tracking-tighter leading-tight italic">
                                       {(() => {
                                          const words = item.title.split(" ");
                                          return (
                                             <>
                                                <span className="text-slate-950">{words[0]}</span>
                                                <span className="text-[#FF6600] ml-1.5">{words.slice(1).join(" ")}</span>
                                             </>
                                          );
                                       })()}
                                    </h4>
                                 </div>

                                 <p className="text-sm text-slate-500 font-bold leading-relaxed max-w-5xl group-hover:text-slate-950 group-hover:font-black transition-all duration-300">
                                    {item.desc}
                                 </p>

                                 <div className="pt-2">
                                    <div className="h-[2px] w-12 bg-slate-200 group-hover:w-24 group-hover:bg-[#FF6600] transition-all duration-700" />
                                 </div>
                              </div>
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
