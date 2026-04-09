import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Search,
   Globe,
   Target,
   Zap,
   BarChart3,
   Shield,
   ArrowRight,
   Cpu,
   Users,
   Activity,
   Sparkles,
   Maximize2,
   TrendingUp,
   ChevronRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSEOIntelligence from '../components/ThreeSEOIntelligence';
import ParticleNetwork from '../components/ParticleNetwork';
import eliteSeoVisual from '../assets/elite-seo.png';

gsap.registerPlugin(ScrollTrigger);

const serviceProtocols = [
   {
      tag: "Diagnostics",
      title: "SITE AUDIT & OPTIMIZATION",
      desc: "Search engine bots are picky - there is a long list of tech and usability standards and best practice which need to be adhered to. Our SEO team has exposure to multiple countries and have equal success on global, multi-lingual websites as well as startup websites. A checklist with over 200+ points is used to audit websites to create a prioritized SEO improvement list for our clients.",
      icon: Search
   },
   {
      tag: "Psychology",
      title: "PERSONA MODELLING",
      desc: "Firstly We research, how we can better our website, and how we give a better think along with your competitor's and the main task their interests and demography & build cutting-edge SEO strategies focused on driving real traffic that have potential to engage & convert. This protocol ensures your digital presence resonates with the specific intent of your target audience.",
      icon: Users
   },
   {
      tag: "Expansion",
      title: "CONTENT MARKETING & OUTREACH",
      desc: "Basically, we need an off-page taping. We manage content production and distribution for scores of SEO clients, and our campaigns often produce double- and triple-digit increases in site traffic, sales, leads, or e-commerce revenue generation. Over time we have learned from our successes (and failures) about how a content marketing department should be put together.",
      icon: Zap
   },
   {
      tag: "Resilience",
      title: "LINK AUDIT & PENGUIN RECOVERY",
      desc: "Thousands of pages are being penalized every day. If Google has penalized your site, you are losing traffic and money every day. You need an SEO recovery plan to save your site and your business. Link Detox® is the industry-leading solution for link risk analysis and link removal, ensuring your domain remains authoritative and secure from algorithmic shifts.",
      icon: Shield
   },
   {
      tag: "Precision",
      title: "KEYWORD & OPPORTUNITY RESEARCH",
      desc: "To kick off this process, think about the topics you want to rank for in terms of generic buckets. You'll come up with about 5-10 topic buckets you think are important to your business, and then you'll use these topic buckets to help come up with some specific keywords later in the process. We provide the architectural alignment needed to capture premium traffic.",
      icon: Target
   },
   {
      tag: "Synergy",
      title: "SEO INTEGRATED MARKETING",
      desc: "If you take a quick look back at Google's history with Search Engine Optimization (SEO), the question 'Is SEO dead?' is a continuing topic of conversation. Because of advanced algorithm updates and Google penalties, webmasters have had to adjust their SEO practices accordingly. SEO is vital to the growth of any company and should be practiced as an integrated marketing strategy.",
      icon: Activity
   },
   {
      tag: "Intelligence",
      title: "IN-DEPTH ANALYTICS",
      desc: "For those of you managing an e-commerce website, the Enhanced Ecommerce reports in Google Analytics (GA) are going to really help you get more insights than you've ever gotten about your shop performance from GA before. It requires Universal Analytics and a few additions on top of what you might have implemented before, but with these few customizations, you suddenly get a lot more data.",
      icon: BarChart3
   },
   {
      tag: "Ops",
      title: "MONITORING & REPORTING",
      desc: "With all the ongoing SEO being conducted, you need to establish an understanding of what changes have been occurring. This may include increases/decreases in rankings, increased traffic to the website, ultimately resulting in increases in inquiries/leads and conversions. You should be tracking the results to ensure activity is effective and gauge what is working and what is not!",
      icon: Cpu
   }
];

export default function SEOConsulting() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary selection:bg-orange-600 selection:text-white overflow-x-hidden">         {/* ULTRA-COMPACT PROFESSIONAL HERO */}
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* MULTI-LAYER ELITE NETWORK (2D + 3D) */}
            <ParticleNetwork />
            <ThreeSEOIntelligence />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elite SEO Intelligence</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "SEARCH AUTHORITY SYSTEMS.";
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
                                    className={`inline-block ${word === "AUTHORITY" ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-sm font-semibold max-w-xl leading-relaxed"
                  >
                     Engineering high-performance SEO foundations through precision architectures and real-time synchronization. We dominate search results.
                  </motion.p>
               </div>
            </div>
         </div>

         {/* THE PERIPHERY: HIGH-FIDELITY PROTOCOL SECTIONS */}
         <section className="bg-white relative py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-8 lg:px-12 space-y-32">

               {/* INTRO BLOCK with IMAGE */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 uppercase tracking-tight leading-none">
                           The Core <span className="text-[#FF6600]">Protocol.</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#FF6600]" />
                     </div>
                     <div className="space-y-6 text-slate-500 text-base lg:text-lg font-semibold leading-relaxed">
                        <p className="border-l-4 border-[#FF6600] pl-6">
                           Our strategic planning begins by considering your business goals, strengths, and challenges. We get to know your company inside and out to create a plan that exceeds expectations.
                        </p>
                        <p className="text-slate-900 font-extrabold p-8 bg-slate-50 uppercase text-sm tracking-tight italic border border-slate-100 rounded-md shadow-sm">
                           &quot;I have helped scores of companies redefine what they are doing online. Whether you need help refining your current strategy or need to start from scratch, I can help you create a plan that works.&quot;
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative aspect-[16/10] group"
                  >
                     <div className="absolute -inset-4 bg-orange-600/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                     <div className="relative h-full overflow-hidden shadow-2xl border border-slate-100 bg-white">
                        <img
                           src={eliteSeoVisual}
                           alt="Institutional Infrastructure"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                              <Sparkles size={18} />
                           </div>
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Asset Visualization</span>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST (Full Paragraphs) */}
               {/* INTERACTIVE PROTOCOL LIST (Full Paragraphs) */}
               <div className="space-y-32 pt-20">
                  {serviceProtocols.map((protocol, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-start`}
                     >
                        <div className="lg:w-1/3 space-y-6 sticky top-32">
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-white flex items-center justify-center text-[#FF6600] border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                                 <protocol.icon size={32} />
                              </div>
                              <div className="text-4xl font-display font-extrabold text-slate-300">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF6600]">{protocol.tag}</span>
                              <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-slate-900 uppercase tracking-tight leading-none">
                                 {protocol.title.split(' ').map((word, i, arr) => (
                                    <span key={i} className={i === arr.length - 1 ? "text-[#FF6600]" : ""}>
                                       {word}{i !== arr.length - 1 ? ' ' : ''}
                                    </span>
                                 ))}
                              </h3>
                           </div>
                           <div className="pt-4 flex items-center gap-3">
                              <div className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
                                 Ref: PRO-SEO-0{idx + 1}
                              </div>
                              <div className="px-2 py-0.5 bg-orange-50 border border-orange-100 rounded text-[8px] font-mono font-bold text-[#FF6600] uppercase tracking-tighter">
                                 Sync: Active
                              </div>
                           </div>
                        </div>

                        <div className="lg:w-2/3 lg:pl-12 border-l border-slate-100 relative">
                           <div className="absolute -left-[1px] top-0 h-12 w-[2px] bg-[#FF6600]" />
                           <div className="mb-6 opacity-40">
                              <protocol.icon size={60} className="text-slate-100 -ml-2" strokeWidth={1} />
                           </div>
                           <motion.p 
                              initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="text-base lg:text-lg font-semibold text-slate-600 leading-relaxed lg:pl-0"
                           >
                              {protocol.desc}
                           </motion.p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* THE EFFICIENCY BLUEPRINT (Footer CTA) */}
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
                     Performance Optimization
                  </motion.div>
                  <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white tracking-tighter uppercase leading-[0.9]">
                     Digital <span className="text-[#FF6600]">Dominance.</span>
                  </h2>
               </div>
               
               <p className="text-lg lg:text-xl font-semibold text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  We don't just optimize rankings; we engineer the high-performance search strategies that define industry leaders.
               </p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
               >
                  <button className="group relative px-8 py-4 bg-[#FF6600] text-white overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,102,0,0.3)]">
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                     <span className="relative z-10 font-bold uppercase tracking-widest flex items-center gap-2">
                        Initialize Strategic Consultation
                        <ChevronRight size={18} />
                     </span>
                  </button>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
