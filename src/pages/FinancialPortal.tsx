import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   BarChart3,
   Globe,
   Target,
   Zap,
   Shield,
   ArrowRight,
   Cpu,
   Search,
   Monitor,
   Activity,
   Sparkles,
   ChevronRight,
   TrendingUp,
   Database
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const financialProtocols = [
   {
      tag: "Definition",
      title: "DEFINITION OF 'FINANCIAL PORTAL'",
      desc: "This particular website provides a variety of financial data and information about market economics, acting as an information hub for clients who are individual investors requiring timely financial news and data to make their investment decisions.",
      icon: Search
   },
   {
      tag: "Analysis",
      title: "INVESTOPEDIA EXPLAINS",
      desc: "Financial portals are giving information to all clients the finance-related they need. Often, the portals themselves will provide visitors, research, articles, and analyst recommendations. Financial portals may also provide links to various relevant sites that offer this kind of information. In addition, many financial portals provide email accounts, chat rooms, and web forums.",
      icon: BarChart3
   },
   {
      tag: "Vocabulary",
      title: "REFINE YOUR FINANCIAL VOCABULARY",
      desc: "Increase the Financial Knowledge You Need to Succeed. the website of the Day helps you gain a better understanding of all things financial with technical and easy-to-understand explanations.",
      icon: Target
   }
];

export default function FinancialPortal() {

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
         {/* LIGHT THEME CINEMATIC HERO WITH SUBTLE ORANGE ANIMATION */}
         <div className="relative h-[250px] lg:h-[320px] bg-[#FDFBF9] flex items-center overflow-hidden border-b border-orange-100/30">
            {/* Subtle Orange Glow Animation */}
            <motion.div 
               animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
               }}
               transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
               }}
               className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -mr-40 -mt-40 z-0"
            />
            
            <div className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none">
               <ThreeNetworkGlobe />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
               <div className="space-y-4 text-center lg:text-left">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100 rounded-sm shadow-sm"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">Elite Financial Hub</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-black text-slate-950 tracking-tighter uppercase leading-none flex flex-wrap justify-center lg:justify-start gap-x-3">
                     {(() => {
                        const words = ["Financial", "Portal."];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block ${word === "Portal." ? "text-orange-600 italic" : ""}`}>
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
                  <p className="text-[12px] lg:text-[14px] font-semibold text-slate-600 leading-relaxed border-l-4 border-orange-600 pl-6 lg:pl-8 py-1 uppercase tracking-tight italic">
                     "Financial portals are giving information to all clients the finance-related they need."
                  </p>
               </motion.div>
            </div>
         </div>

         {/* THE PERIPHERY: PROTOCOLS - STRICT CONTENT ONLY */}
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
                           Information <span className="text-orange-600">Hub.</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-600" />
                     </div>
                     <div className="space-y-6 text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
                        <p>
                           Financial portals are giving information to all clients the finance-related they need. Often, the portals themselves will provide visitors, research, articles, and analyst recommendations.
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
                           src="https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1000"
                           alt="Financial Hub"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                         <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Financial Portal</span>
                            <h4 className="text-xl font-bold text-white uppercase tracking-tight">Market Analytics Hub</h4>
                         </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST (Exact Text Restoration) - PEHRA PATTERN */}
               <div className="space-y-32">
                  {financialProtocols.map((protocol, idx) => (
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
