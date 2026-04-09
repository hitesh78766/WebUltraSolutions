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
   Heart,
   Lock,
   Database,
   ChevronRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const matrimonialProtocols = [
   {
      tag: "Diagnostics",
      title: "MATRIMONIAL DATA ARCHITECTURE",
      desc: "Our data architecture bots are picky - there is a long list of tech and usability standards and best practice which need to be adhered to within relational databases. Our team has exposure to multiple countries and have equal success on global, multi-lingual portals. A checklist with over 200+ points is used to audit user profiles to create a prioritized success path for our clients.",
      icon: Database
   },
   {
      tag: "Psychology",
      title: "CORE PERSONALITY PROFILING",
      desc: "Firstly We research, how we can better our matching logic, and how we give a better think along with your competitor's and the main task their interests and demography & build cutting-edge Relational strategies focused on driving real matches that have potential to engage & convert. This protocol ensures your digital presence resonates with the specific intent of your target audience.",
      icon: Users
   },
   {
      tag: "Security",
      title: "PRIVATE CONNECTIVITY INTERFACE",
      desc: "Synchronizing high-fidelity user interactions into unified enterprise-grade private environments. We manage content production and distribution for scores of clients, and our campaigns often produce double- and triple-digit increases in site traffic and engagement. We implement advanced encryption frameworks that transform complex relational data into authoritative privacy consensus.",
      icon: Lock
   },
   {
      tag: "Expansion",
      title: "GLOBAL RELATIONAL LOGISTICS",
      desc: "Basically, we need an off-page taping for matrimonial success. We manage profile production and distribution for scores of clients, and our campaigns often produce double- and triple-digit increases in matches and engagement. Over time we have learned from our successes (and failures) about how a matrimonial portal department should be put together for global scaling.",
      icon: Globe
   },
   {
      tag: "Resilience",
      title: "BIO-DATA VERIFICATION PROTOCOL",
      desc: "Thousands of profiles are being penalized every day for lack of authenticity. If the system has penalized your site, you are losing traffic and trust. You need a verification recovery plan. Our Bio-Data verification is the industry-leading solution for profile risk analysis and authentication, ensuring your domain remains authoritative and secure.",
      icon: Shield
   },
   {
      tag: "Precision",
      title: "MATCHING DOMINANCE ARCHITECTURE",
      desc: "To kick off this process, think about the compatibility buckets you want to rank for in terms of generic relational buckets. You'll come up with about 5-10 topic buckets you think are important to your business, and then you'll use these buckets to help come up with some specific matching logic later. We provide the architectural alignment needed to capture premium matches.",
      icon: Target
   },
   {
      tag: "Synergy",
      title: "PORTAL INTEGRATED SYNC",
      desc: "If you take a quick look back at Matrimonial history, the question 'Is matching dead?' is a continuing topic of conversation. Because of advanced algorithm updates and privacy penalties, webmasters have had to adjust their practices accordingly. Dynamic sync is vital to the growth of any company and should be practiced as an integrated matrimonial strategy.",
      icon: Zap
   },
   {
      tag: "Intelligence",
      title: "RELATIONAL ANALYTICS HUB",
      desc: "For those of you managing a large scale portal, the Enhanced Analytics reports are going to really help you get more insights than you've ever gotten about your user performance. It requires Universal Analytics and a few additions on top of what you might have implemented before, but with these few customizations, you suddenly get a lot more data about relational success.",
      icon: BarChart3
   }
];

const portalMetrics = [
    { label: "Match Latency", value: "< 500ms", sub: "Global Sync", icon: Activity },
    { label: "Profile Reach", value: "Elastic", sub: "Domain Scaling", icon: Globe },
    { label: "Logic Fidelity", value: "99.9%", sub: "Search Protocol", icon: Cpu }
];

export default function MatrimonialPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      
      // GSAP Entrance
      gsap.fromTo(".protocol-node", 
         { opacity: 0, y: 30 },
         { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".protocol-section",
               start: "top 80%",
            }
         }
      );

      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary selection:bg-orange-600 selection:text-white overflow-x-hidden">
         {/* ULTRA-COMPACT PROFESSIONAL HERO */}
         <div className="relative h-[250px] lg:h-[320px] bg-slate-950 flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-60">
               <ThreeNetworkGlobe />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
               <div className="space-y-4 text-center lg:text-left">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-sm"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elite Matrimonial Hub</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-black text-white tracking-tighter uppercase leading-none flex flex-wrap justify-center lg:justify-start gap-x-3">
                     {(() => {
                        const words = ["Relational", "Dominance."];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block ${word === "Dominance." ? "text-orange-600 italic" : ""}`}>
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
               </div>

               <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="max-w-md"
               >
                  <p className="text-[12px] lg:text-[14px] font-semibold text-slate-300 leading-relaxed border-l-4 border-orange-600 pl-6 lg:pl-8 py-1 uppercase tracking-tight italic">
                     "Engineering high-performance matrimonial foundations through precision architectures and real-time relational synchronization."
                  </p>
               </motion.div>
            </div>
         </div>

         {/* THE PERIPHERY: HIGH-FIDELITY PROTOCOL SECTIONS */}
         <section className="bg-white relative py-20 lg:py-32 protocol-section">
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
                        <h2 className="text-3xl lg:text-5xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">
                           System <span className="text-orange-600">Architecture.</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-600" />
                     </div>
                     <div className="space-y-6 text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                        <p>
                           Our strategic planning begins by considering your matrimonial platform goals, strengths, and relational challenges. We get to know your user ecosystem inside and out to create an architecture that exceeds expectations for institutional growth.
                        </p>
                        <p className="text-slate-900 font-bold border-l-4 border-slate-900 pl-8 py-2 uppercase text-sm tracking-tight italic bg-slate-50">
                           &quot;We have helped scores of platforms redefine what they are doing online. Whether you need help refining your current matching strategy or need to start from scratch, we can help you create a plan that works.&quot;
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
                           src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
                           alt="Institutional Infrastructure"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                              <Sparkles size={18} />
                           </div>
                           <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Relational Sync</span>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST (Full Paragraphs) - PEHRA PATTERN */}
               <div className="space-y-32">
                  {matrimonialProtocols.map((protocol, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-start protocol-node`}
                     >
                        <div className="lg:w-1/3 space-y-6 sticky top-32">
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-orange-600 border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                                 <protocol.icon size={32} />
                              </div>
                              <div className="text-4xl font-display font-black text-slate-100">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600">{protocol.tag}</span>
                              <h3 className="text-2xl lg:text-3xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none">
                                 {protocol.title}
                              </h3>
                           </div>
                           <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              <ChevronRight size={12} className="text-orange-600" />
                              Active Protocol
                           </div>
                        </div>

                        <div className="lg:w-2/3">
                           <div className="relative">
                              <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-slate-100 hidden lg:block overflow-hidden">
                                 <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-full bg-orange-600"
                                 />
                              </div>
                              <p className="text-lg lg:text-xl font-medium text-slate-700 leading-relaxed lg:pl-0">
                                 {protocol.desc}
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
}
