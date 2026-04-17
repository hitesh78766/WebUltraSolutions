import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   BarChart3,
   Zap,
   TrendingUp,
   Globe,
   Search,
   ArrowRight,
   Sparkles,
   Cpu,
   Shield,
   Users,
   Activity,
   ChevronRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const servicePillars = [
   {
      tag: "Domination",
      title: "DIGITAL MARKETING",
      desc: "Simply put, digital marketing is the promotion of products or brands using various electronic media. Unlike traditional marketing, digital marketing employs channels and methods that empower organizations to analyze marketing campaigns in real-time, gaining insights into their effectiveness.",
      icon: Zap
   },
   {
      tag: "Visibility",
      title: "SEARCH ENGINE OPTIMIZATION",
      desc: "SEO Search engine optimization is a methodology of strategies, techniques, and tactics used to increase the number of visitors to a website by obtaining a high-ranking placement in the search results page of a search engine (SERP) -- including Google, Bing, Yahoo and other search engines. Simply put, search engine optimization is the process of improving the quality and volume of web traffic to a website by employing a series of proven SEO techniques that help a website achieve a higher ranking with the major search engines when certain keywords and phrases are put in the search field... SEO puts your site on the left side of the page where it gains instant credibility with the very people that you wish to reach.",
      icon: Search
   },
   {
      tag: "Intelligence",
      title: "ANALYTICS & INSIGHTS",
      desc: "Analytics 'Digital analytics' is the analysis of qualitative and quantitative data from your business and the competition to drive a continual improvement of the online experience that your customers and potential customers have which translates to your desired outcomes. With the right skills, processes, and technologies, you can uncover the vital information about how you engage with your customers and take action to improve business results.",
      icon: BarChart3
   },
   {
      tag: "Engagement",
      title: "SOCIAL MEDIA MARKETING",
      desc: "Social networking websites allow individuals to interact with one another and build relationships. When companies join these social channels, consumers can interact with them directly. That interaction can be more personal to users than traditional methods of outbound marketing. Through the use of new Semantic Analysis technologies, marketers can detect buying signals and run micro-targeted campaigns that reach a very narrow target audience.",
      icon: Users
   }
];

export default function DigitalMarketing() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-[#FDFDFD] min-h-screen font-secondary selection:bg-orange-600 selection:text-white">
         {/* ULTRA-COMPACT PROFESSIONAL HERO */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE NETWORK GLOBE BACKDROP */}
            <ThreeNetworkGlobe />

            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Advanced Digital Ecosystems</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-x-2 md:gap-x-3">
                     {(() => {
                        const words = ["Digital", "Marketing."];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block ${word === "Marketing." ? "text-[#FF6600]" : ""}`}>
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{
                                       duration: 0.8,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.04),
                                       ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className="inline-block"
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
                     className="text-slate-600 text-[10px] md:text-xs lg:text-sm font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     Scaling global digital footprints through precision architectures and real-time synchronization. We engineer high-performance market presence.
                  </motion.p>
               </div>
            </div>
         </div>

         {/* ULTRA-COMPACT PILLARS - 2 COLUMN HIGH DENSITY */}
         <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
               {servicePillars.map((pillar, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                     className="group relative"
                  >
                     <div className="h-full bg-white border border-slate-50 p-5 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col items-start gap-5 md:gap-6 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="flex items-start justify-between w-full">
                           <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                              <pillar.icon size={22} />
                           </div>
                           <span className="text-4xl font-display font-extrabold text-slate-100 group-hover:text-orange-100 transition-colors relative z-10">0{idx + 1}</span>
                        </div>

                        <div className="relative z-10 space-y-4">
                           <div className="space-y-2">
                              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600">{pillar.tag}</span>
                              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-slate-800 transition-colors">
                                 {pillar.title.split(' ').map((word, i, arr) => (
                                    <span key={i} className={i === arr.length - 1 ? "text-[#FF6600]" : ""}>
                                       {word}{i !== arr.length - 1 ? ' ' : ''}
                                    </span>
                                 ))}
                              </h3>
                           </div>
                           <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-800 transition-colors">
                              {pillar.desc}
                           </p>
                        </div>

                        <div className="pt-2 w-full flex justify-end relative z-10">
                           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-all">
                              <span>Deploy Strategic Hub</span>
                              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* PEHRA NARRATIVE SECTION - HIGH DENSITY TECHNICAL BLOCKS */}
         <section className="py-20 bg-white">
            <div className="max-w-[1300px] mx-auto px-8 lg:px-16 space-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className="space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Omni-Channel <span className="text-[#FF6600]">Synchronization</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Our strategic approach to digital marketing centers on absolute omni-channel synchronization. We ensure that your brand's core messaging and visual identity are unified across every touchpoint, from search engines to social ecosystems. This cohesive strategy eliminates fragmentation and builds institutional authority, allowing your business to dominate the digital landscape through consistency and precision.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Architectural <span className="text-[#FF6600]">Market Domination</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        We leverage high-fidelity data to drive architectural market domination. By analyzing real-time user behavior and market shifts, we engineer marketing environments that proactively capture demand. This data-driven philosophy ensures that every campaign is backed by technical intelligence, transforming standard interactions into high-status conversions that scale with your enterprise's global ambitions.
                     </p>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-100">
                  <div className="max-w-4xl space-y-4">
                     <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        Precision <span className="text-[#FF6600]">Data Intelligence</span>
                     </h3>
                     <p className="text-base font-semibold text-slate-500 leading-relaxed">
                        Integrity is the backbone of our digital analytics. We implement sophisticated intelligence matrices that go beyond standard metrics. Through predictive modeling and deep-funnel synchronization, we uncover the vital insights necessary to optimize your online experience. This commitment to precision data ensures that your marketing infrastructure remains agile, secure, and future-proof.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* PRESTIGE BANNER - CINEMATIC CONCLUSION */}
         <section className="relative py-24 bg-slate-950 overflow-hidden">
            {/* RADIAL GLOW EFFECT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6600]/10 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
               <div className="space-y-4">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/5 text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.3em]"
                  >
                     <Sparkles size={12} />
                     Future Intelligence
                  </motion.div>
                  <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
                     Digital <span className="text-[#FF6600]">Dominance.</span>
                  </h2>
               </div>
               
               <p className="text-base md:text-lg lg:text-xl font-semibold text-slate-400 leading-relaxed max-w-2xl mx-auto px-4">
                  We don't just execute marketing; we engineer the high-performance digital presence that defines industry leaders.
               </p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
               >
                  <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,102,0,0.3)] mx-auto">
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                     <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-2 text-[10px] md:text-sm">
                        Initiate Strategic Consultation
                        <ChevronRight size={16} />
                     </span>
                  </button>
               </motion.div>
            </div>
         </section>

      </div>
   );
}
