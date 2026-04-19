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
   Database,
   CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const financialProtocols = [
   {
      tag: "Definition",
      title: "DEFINITION OF 'FINANCIAL PORTAL'",
      desc: "This particular website provides a variety of financial data and information about market economics, acting as an information hub for clients who are individual investors requiring timely financial news and data to make their investment decisions. Our platform delivers real-time market analysis, portfolio tracking tools, risk assessment algorithms, and personalized investment recommendations based on advanced machine learning models.",
      icon: Search
   },
   {
      tag: "Analysis",
      title: "INVESTOPEDIA EXPLAINS",
      desc: "Financial portals are giving information to all clients the finance-related they need. Often, the portals themselves will provide visitors, research, articles, and analyst recommendations. Financial portals may also provide links to various relevant sites that offer this kind of information. In addition, many financial portals provide email accounts, chat rooms, and web forums. Our comprehensive platform includes advanced charting tools, economic indicators dashboard, sector-specific analysis, and automated trading signals.",
      icon: BarChart3
   },
   {
      tag: "Vocabulary",
      title: "REFINE YOUR FINANCIAL VOCABULARY",
      desc: "Increase the Financial Knowledge You Need to Succeed. the website of the Day helps you gain a better understanding of all things financial with technical and easy-to-understand explanations. Our educational resources cover investment strategies, market fundamentals, technical analysis tutorials, risk management principles, and wealth building methodologies for all experience levels.",
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
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* LIGHT THEME CINEMATIC HERO WITH SUBTLE ORANGE ANIMATION */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
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
            
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none">
               <ThreeNetworkGlobe />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-3">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize">Financial Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const words = [
                           { text: "FINANCIAL", color: "text-dark" },
                           { text: "PORTAL.", color: "text-orange-600" }
                        ];
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className={`inline-block mr-2 md:mr-4 ${word.color}`}>
                              {word.text.split("").map((char, charIdx) => (
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
                  className="max-w-md px-6 md:px-0"
               >
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-600 text-xs md:text-sm lg:text-base font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     "Financial portals are giving information to all clients the finance-related they need."
                  </motion.p>
               </motion.div>
            </div>
         </div>

         {/* THE PERIPHERY: PROTOCOLS - STRICT CONTENT ONLY */}
         <section className="bg-white relative py-12 md:py-20 lg:py-32 protocol-section">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-20 md:space-y-32">

               {/* INTRO BLOCK with IMAGE */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -40 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-lg md:text-xl lg:text-3xl font-display font-bold text-slate-955 uppercase tracking-tight leading-[0.9] text-center lg:text-left">
                           Information <span className="text-orange-600">Hub.</span>
                        </h2>
                        <div className="w-16 md:w-20 h-1 bg-orange-600 mx-auto lg:mx-0" />
                     </div>
                     <div className="space-y-6 text-slate-600 text-sm lg:text-base font-semibold leading-relaxed px-2 md:px-0">
                        <p>
                           Financial portals are giving information to all clients the finance-related they need. Often, the portals themselves will provide visitors, research, articles, and analyst recommendations.
                        </p>
                        <p className="text-slate-955 font-bold border-l-4 border-orange-500 pl-4 md:pl-8 py-2 capitalize text-[11px] md:text-xs tracking-wide  bg-slate-50">
                           &quot;Financial portals provide email accounts, chat rooms, and web forums to ensure a comprehensive investment ecosystem.&quot;
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
                           src="/images/financial_hub.png"
                           alt="Financial Hub"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                         <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Financial Architecture</span>
                            <h4 className="text-xl font-bold text-white uppercase tracking-tight">Market Analytics Matrix</h4>
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
                        className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 md:gap-12 lg:gap-24 items-start protocol-node`}
                     >
                        <div className="lg:w-1/3 space-y-3 sm:space-y-4 md:space-y-6 lg:sticky lg:top-32 w-full">
                           <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                              <div className="relative group">
                                 <div className="absolute -inset-2 bg-orange-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                 <div className="relative w-8 h-8 sm:w-10 md:w-12 md:h-12 bg-slate-50 flex items-center justify-center text-orange-600 border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                                    <protocol.icon size={20} className="sm:size-[24px] md:size-[28px]" />
                                 </div>
                              </div>
                              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-100">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600 text-center lg:text-left block">{protocol.tag}</span>
                              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold uppercase tracking-tight leading-none text-center lg:text-left">
                                 {protocol.title.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "text-slate-950" : "text-orange-600"}>
                                       {word}{' '}
                                    </span>
                                 ))}
                              </h3>
                           </div>
                           <div className="pt-2 sm:pt-3 md:pt-4 flex items-center justify-center lg:justify-start gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              <ChevronRight size={10} className="sm:size-[12px] text-orange-600" />
                              Active Protocol
                           </div>
                        </div>

                        <div className="lg:w-2/3 w-full">
                           <div className="relative">
                              <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-slate-100 hidden lg:block overflow-hidden">
                                 <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-full bg-orange-600"
                                 />
                              </div>
                              <p className="text-[11px] sm:text-[12px] md:text-sm lg:text-base font-semibold text-slate-700 leading-relaxed lg:pl-0 text-center lg:text-left px-2 sm:px-0">
                                 {protocol.desc}
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* CONCLUSION BLOCK - SYNCED WITH PRESTIGE BANNER STYLE */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative py-8 md:py-16 lg:py-20 px-6 md:px-8 rounded-sm bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default mx-4 md:mx-0"
               >
                  {/* Orange Glow Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

                  <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-sm bg-orange-600/10 border border-orange-600/20 flex items-center justify-center text-orange-600 shadow-xl group-hover:scale-110 transition-transform duration-700">
                        <Zap size={22} className="md:w-[24px] md:h-[24px]" />
                     </div>

                     <div className="relative">
                        <h3 className="text-[12px] md:text-base lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic px-4">
                           "Our financial portals are engineered to provide visitors with the research, articles, and analyst recommendations necessary to navigate complex market economies with precision and clarity."
                        </h3>
                     </div>

                     <div className="flex items-center justify-center gap-6 md:gap-8 pt-6">
                        <div className="h-[1px] w-16 md:w-24 bg-white/10" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-orange-500">Industry Leader</span>
                        <div className="h-[1px] w-16 md:w-24 bg-white/10" />
                     </div>
                  </div>

                  {/* Dynamic Background Effects */}
                  <motion.div
                     animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                     }}
                     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px]"
                  />
               </motion.div>
            </div>
         </section>
      </div>
   );
}
