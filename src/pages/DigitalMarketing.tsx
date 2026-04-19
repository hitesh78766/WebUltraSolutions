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
import marketingImage from '../assets/services/marketing.png';

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
         {/* CINEMATIC FULL-BLEED HEADER - RESPONSIVE DESIGN STYLE */}
         <div className="relative min-h-[300px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeNetworkGlobe />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="font-system-caption text-white">Advanced Digital Ecosystems</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "DIGITAL MARKETING.";
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
                                    className={`inline-block ${word === "MARKETING." ? "text-[#FF6600]" : ""}`}
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
                     className="font-system-body text-slate-600 font-semibold max-w-4xl leading-relaxed"
                  >
                     Scaling global digital footprints through precision architectures and real-time synchronization. We engineer high-performance market presence.
                  </motion.p>
               </div>
            </div>
         </div>

         {/* SERVICE PILLARS - RESPONSIVE DESIGN STYLE */}
         <section className="max-w-[1400px] mx-auto px-4 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5">
               {servicePillars.map((pillar, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{
                        delay: idx * 0.1,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                     }}
                     whileHover={{
                        y: -8,
                        scale: 1.01,
                     }}
                     className="group relative p-4 sm:p-5 lg:p-6 rounded-md bg-white border border-slate-100 hover:border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,102,0,0.12)] transition-all duration-700 cursor-pointer overflow-hidden"
                  >
                     {/* LARGE FLOATING INDEX */}
                     <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="text-3xl sm:text-4xl font-display font-bold text-slate-950 select-none italic tracking-tighter">0{idx + 1}</span>
                     </div>

                     <div className="relative z-10 space-y-4">
                        {/* STATUS BADGE COHESION */}
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                           <span className="font-system-caption text-primary">{pillar.tag}</span>
                        </div>

                        <div className="space-y-2">
                           <h4 className="font-system-title font-bold tracking-tight text-slate-950 group-hover:text-primary transition-colors duration-500">
                              {pillar.title.split(' ').map((word, i, arr) => (
                                 <span key={i} className={i === arr.length - 1 ? "text-primary" : ""}>
                                    {word}{i !== arr.length - 1 ? ' ' : ''}
                                 </span>
                              ))}
                           </h4>
                           <div className="w-10 h-0.5 bg-slate-100 group-hover:w-20 group-hover:bg-primary transition-all duration-700" />
                           <p className="font-system-body text-slate-600 font-semibold leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                              {pillar.desc}
                           </p>
                        </div>

                        <div className="pt-2 flex items-center gap-2 sm:gap-3 font-system-caption text-slate-400 group-hover:text-slate-950 transition-colors">
                           <span>Deploy Strategic Hub</span>
                           <div className="flex-1 h-[1px] bg-slate-100 group-hover:bg-slate-200" />
                           <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-primary" />
                        </div>
                     </div>

                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700" />
                  </motion.div>
               ))}
            </div>
         </section>

         {/* NARRATIVE SECTION - RESPONSIVE DESIGN STYLE (GREY TEXT) */}
         <section className="max-w-[1400px] mx-auto px-4 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16 relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-12 md:gap-16 lg:gap-20 items-start">

               <div className="space-y-12">
                  <div className="space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-[#FF6600]/20" />
                        <span className="font-system-caption text-primary">Digital Strategy</span>
                     </div>
                     <div className="space-y-6">
                        <div className="space-y-4">
                           <h3 className="text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight">
                              OMNI-CHANNEL <span className="text-primary">SYNCHRONIZATION</span>
                           </h3>
                           <p className="text-slate-500 text-sm md:text-base lg:text-base font-semibold leading-relaxed max-w-3xl">
                              Our strategic approach to digital marketing centers on absolute omni-channel synchronization. We ensure that your brand's core messaging and visual identity are unified across every touchpoint, from search engines to social ecosystems. This cohesive strategy eliminates fragmentation and builds institutional authority, allowing your business to dominate the digital landscape through consistency and precision.
                           </p>
                        </div>
                        <div className="space-y-4">
                           <h3 className="text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight">
                              ARCHITECTURAL <span className="text-primary">MARKET DOMINATION</span>
                           </h3>
                           <p className="text-slate-500 text-sm md:text-base lg:text-base font-semibold leading-relaxed max-w-3xl">
                              We leverage high-fidelity data to drive architectural market domination. By analyzing real-time user behavior and market shifts, we engineer marketing environments that proactively capture demand. This data-driven philosophy ensures that every campaign is backed by technical intelligence, transforming standard interactions into high-status conversions that scale with your enterprise's global ambitions.
                           </p>
                        </div>
                        <div className="pt-8 border-t border-slate-100">
                           <div className="space-y-4">
                              <h3 className="font-system-title font-bold text-slate-950 uppercase tracking-tight">
                                 PRECISION <span className="text-primary">DATA INTELLIGENCE</span>
                              </h3>
                              <p className="text-slate-500 text-sm md:text-base lg:text-base font-semibold leading-relaxed max-w-3xl">
                                 Integrity is the backbone of our digital analytics. We implement sophisticated intelligence matrices that go beyond standard metrics. Through predictive modeling and deep-funnel synchronization, we uncover the vital insights necessary to optimize your online experience. This commitment to precision data ensures that your marketing infrastructure remains agile, secure, and future-proof.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* STICKY VISUAL POD - RESPONSIVE DESIGN STYLE */}
               <div className="relative sticky top-28 mt-10 md:mt-16 lg:mt-0">
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="bg-white p-2 rounded-md shadow-xl border border-slate-50 overflow-hidden group"
                  >
                     <div className="rounded-md overflow-hidden relative aspect-[16/10] md:aspect-video lg:aspect-[4/5]">
                        <img src={marketingImage} alt="Digital Marketing Excellence" className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white text-left">
                           <div className="space-y-4">
                              <div className="h-0.5 w-10 bg-primary rounded-full" />
                              <p className="font-system-body font-semibold leading-relaxed italic">
                                 "Dominating the digital landscape requires technical precision and creative mastery through strategic synchronization."
                              </p>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="font-system-caption text-slate-200 uppercase tracking-wider leading-none">Digital Excellence</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

            </div>
         </section>

         {/* PRESTIGE BANNER - CINEMATIC CONCLUSION */}
         <section className="relative py-20 md:py-24 bg-slate-950 overflow-hidden">
            {/* RADIAL GLOW EFFECT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
               <div className="space-y-4">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-system-caption uppercase tracking-wider"
                  >
                     <Sparkles size={12} />
                     Future Intelligence
                  </motion.div>
                  <h2 className="font-system-hero font-display font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
                     Digital <span className="text-primary">Dominance.</span>
                  </h2>
               </div>
               
               <p className="font-system-body text-slate-400 font-semibold leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
                  We don't just execute marketing; we engineer the high-performance digital presence that defines industry leaders.
               </p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
               >
                  <button className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-primary text-white overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,102,0,0.3)] mx-auto">
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                     <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-2 font-system-caption sm:text-sm">
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
