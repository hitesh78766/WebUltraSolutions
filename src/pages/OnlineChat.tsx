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
   MessageSquare,
   Lock,
   Database,
   ChevronRight,
   CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const chatProtocols = [
   {
      tag: "Interpretation",
      title: "ADVANCED ON LINE CHAT INTERFACE SYSTEMS",
      desc: "Online chat is an interpreter between two or more people; it's providing communication through internet and SMS from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. This brevity ensures efficient communication flow, reduces cognitive load, maintains engagement momentum, and allows for rapid information exchange in real-time conversations. The expression online chat comes from the word chat which means 'informal conversation'. Our advanced interface systems support real-time messaging, file sharing, multimedia content, and seamless synchronization across all devices with enterprise-grade security protocols.",
      icon: MessageSquare
   },
   {
      tag: "Connectivity",
      title: "MULTICAST COMMUNICATIONS PROTOCOLS",
      desc: "Online chat may address point-to-point communications as well as multicast communications from one sender to many receivers. Online chat provides a facility one-on-one chat or one-to-many group chat using tools such as instant messengers. This includes web-based applications that allow communication between users in a multi-user environment. Our protocols ensure high-performance data transmission, low-latency connections, scalable architecture, and robust message queuing systems for optimal user experience.",
      icon: Globe
   },
   {
      tag: "Architecture",
      title: "ENTERPRISE SERVICE DEPLOYMENT FRAMEWORK",
      desc: "Web conferencing is a more specific online service that is often sold as a service, hosted on a web server controlled by the vendor. Chat Application is primarily meant to refer to direct one-on-one chat or text based group chat. webultrasolution provide both type of chat application. Our enterprise deployment framework includes cloud hosting, load balancing, automated backups, API integration, and comprehensive monitoring dashboards.",
      icon: Database
   },
   {
      tag: "Specifications",
      title: "ADVANCED CORE FEATURES & CAPABILITIES",
      desc: "Our chat applications are engineered for maximum utility: 1) Fully customizable and rebrandable. 2) Moderated Chat. 3) No additional software is needed. 4) Small, fast, cross-platform. Additional capabilities include emoji support, message encryption, user authentication, conversation history, and advanced moderation tools.",
      icon: CheckCircle2
   },
   {
      tag: "Quality",
      title: "CUSTOMIZED DEVELOPMENT SOLUTIONS",
      desc: "Developing high quality, completely customized chat box with presentation of knowledge, conversational abilities, context sensitivity, and personality traits to ensure a seamless relational footprint. Our solutions feature AI-powered responses, natural language processing, sentiment analysis, multi-language support, and adaptive learning algorithms.",
      icon: Target
   }
];

export default function OnlineChat() {

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
         {/* LIGHT THEME CINEMATIC HERO WITH ORANGE ANIMATION */}
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
               className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-[120px] -mr-40 -mt-40 z-0"
            />
            
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none">
               <ThreeNeuralStorm />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-3">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                     <span className="font-system-caption text-xs text-white capitalize">Chat Intelligence Suite</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const words = [
                           { text: "ONLINE", color: "text-dark" },
                           { text: "CHAT.", color: "text-orange-600" }
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
                  className="max-w-md"
               >
             
               </motion.div>     <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-600 text-xs md:text-sm lg:text-base font-semibold max-w-xl leading-relaxed px-6 md:px-0"
                  >
                     "Chat messages are typically concise to facilitate prompt responses from other participants. This design principle ensures optimal communication efficiency.
                  </motion.p>
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
                        <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase text-slate-950">
                           Interface <span className="text-orange-600">Protocol.</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-600" />
                     </div>
                     <div className="space-y-6 text-slate-600 text-sm lg:text-base font-semibold leading-relaxed">
                        <p>
                           Online chat is an interpreter between two or more people; offering communication through web and SMS protocols. We provide the architectural alignment needed to capture premium engagement for global brands.
                        </p>
                        <p className="text-slate-950 font-bold border-l-4 border-orange-500 pl-8 py-2 capitalize text-xs tracking-wider bg-slate-50">
                           &quot;webultrasolution provide both direct one-on-one and text based group chat applications tailored to your specific connectivity requirements.&quot;
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative aspect-[16/10] md:aspect-[16/6] group"
                  >
                     <div className="absolute -inset-4 bg-orange-600/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                     <div className="relative h-full overflow-hidden shadow-2xl border border-slate-100 bg-white">
                        <img
                           src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                           alt="Institutional Infrastructure"
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-orange-500">
                              <Sparkles size={18} />
                           </div>
                           <span className="text-[10px] font-bold text-black uppercase tracking-widest">Global Interaction Visualization</span>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* INTERACTIVE PROTOCOL LIST (Original Text Restoration) - PEHRA PATTERN */}
               <div className="space-y-32">
                  {chatProtocols.map((protocol, idx) => (
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
                              <div className="text-3xl md:text-4xl font-display font-bold text-slate-100">0{idx + 1}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600">{protocol.tag}</span>
                              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold uppercase tracking-tight leading-none">
                                 {protocol.title.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "text-slate-950" : "text-orange-600"}>
                                       {word}{' '}
                                    </span>
                                 ))}
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
                              <p className="text-sm lg:text-base font-semibold text-slate-700 leading-relaxed lg:pl-0">
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
