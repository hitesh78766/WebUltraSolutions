import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Cpu, 
   Shield, 
   Users, 
   Layout, 
   Link2, 
   RefreshCw,
   ArrowRight,
   Sparkles,
   Monitor,
   Target,
   Zap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeTechnicalLattice from '../components/ThreeTechnicalLattice';

gsap.registerPlugin(ScrollTrigger);

const portalPillars = [
   {
      tag: "Gateway",
      title: "ENTERPRISE PORTAL",
      desc: "Centralize your enterprise operations with a secure, high-performance gateway. Our portal solutions provide a single point of truth for your data, users, and applications, ensuring operational efficiency at scale.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Collaboration",
      title: "ECOSYSTEM SYNERGY",
      desc: "Foster a culture of seamless collaboration with integrated project management and communication tools. Our ecosystems are designed to remove silos and accelerate collective productivity across all departments.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Infrastructure",
      title: "SCALABLE CORE",
      desc: "Built on a foundation of robust, modern architecture. Our portals are engineered to handle massive concurrent user loads while maintaining lightning-fast performance and absolute system stability.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Armor",
      title: "SECURE ACCESS",
      desc: "Advanced encryption and multi-factor authentication integrated into every layer. We provide a fortified environment that protects your sensitive corporate assets against all internal and external threats.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Connectivity",
      title: "CROSS-PLATFORM",
      desc: "Seamless integration with your existing legacy systems and third-party APIs. Our portals act as a bridge, unifying disparate technologies into a cohesive and manageable digital ecosystem.",
      icon: Link2,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Real-time",
      title: "DYNAMIC SYNC",
      desc: "Instant data synchronization across all devices and platforms. Our real-time engine ensures that every user has access to the most up-to-date information, enabling rapid and informed decision making.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function WebPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE TECHNICAL LATTICE BACKDROP */}
            <ThreeTechnicalLattice />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Advanced Enterprise Solutions</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING THE NEXT-GEN WEB PORTAL.";
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
                                    className={`inline-block ${word === "PORTAL" ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-xl leading-relaxed"
                  >
                     Sophisticated digital gateways for modern organizations. We architect collaborative ecosystems that unify your workforce and empower your operations through precision technology.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
               >
                  {[
                     { label: 'Enterprise Security', icon: Shield },
                     { label: 'Collaborative UX', icon: Users },
                     { label: 'Dynamic Sync', icon: RefreshCw }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8 bg-[#FDFBF9]">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">

               {/* MAIN SERVICE BANNERS */}
               <div className="flex flex-col gap-8 lg:gap-12">
                  {portalPillars.map((pillar, idx) => (
                     <div
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-10 items-center`}
                     >
                        {/* BANNER IMAGE SECTION */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           whileHover={{ y: -6, scale: 1.01 }}
                           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                        >
                           <motion.img 
                              src={pillar.image} 
                              alt={pillar.title}
                              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
                           
                           <div className="absolute top-6 right-6">
                              <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                 <span className="text-[10px] font-bold uppercase tracking-wider">Portal Standard</span>
                              </div>
                           </div>

                           <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-[50px] font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                        </motion.div>

                        {/* BANNER CONTENT SECTION */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[55%] space-y-6 px-4 lg:px-0"
                        >
                           <div className="space-y-4">
                              <div className="flex items-center gap-5">
                                 <div className="relative">
                                    <div className="absolute -inset-3 bg-[#FF6600]/10 rounded-full blur-lg animate-pulse" />
                                    <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                                       <pillar.icon size={22} />
                                    </div>
                                 </div>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-6 h-[2px] bg-[#FF6600]" />
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              
                              <p className="text-[12px] lg:text-[14px] font-medium leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>

                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest group/link">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  ))}

                  {/* CONCLUSION BLOCK */}
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                     className="relative py-10 lg:py-14 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
                  >
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />
                     
                     <div className="relative z-10 max-w-4xl mx-auto space-y-5">
                        <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                           <Zap size={24} />
                        </div>

                        <div className="relative">
                           <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic">
                              "Our portals are designed to be more than just interfaces; they are intelligent ecosystems that empower your organization through unparalleled security, collaboration, and real-time connectivity."
                           </h3>
                        </div>

                        <div className="pt-4">
                           <button className="group/btn flex items-center gap-2.5 px-4 py-2.5 bg-[#FF6600] hover:bg-white hover:text-[#FF6600] text-white text-[10px] font-bold rounded-md transition-all duration-300 shadow-xl shadow-[#FF6600]/20 mx-auto uppercase tracking-[0.15em]">
                              <span>Deploy Your Enterprise Portal</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                           </button>
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
               </div>
            </div>
         </section>
      </div>
   );
}
