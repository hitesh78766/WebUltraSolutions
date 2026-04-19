import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   ShieldCheck, 
   CreditCard, 
   BarChart, 
   Globe, 
   Monitor, 
   Sparkles, 
   ShoppingBag, 
   Zap, 
   ArrowRight,
   Layers,
   Database,
   Smartphone
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeEcommercePearls from '../components/ThreeEcommercePearls';
import imgEcommerce from '../assets/services/ecommerce_dev.png';

gsap.registerPlugin(ScrollTrigger);

const ecommercePillars = [
   {
      tag: "Bespoke",
      title: "CUSTOM STOREFRONTS",
      desc: "Engineering bespoke digital identities that resonate with your audience on a global scale. We build custom-themed storefronts that prioritize brand storytelling alongside conversion-centric navigation and high-fidelity product visualization. Our architectures are designed to convert casual visitors into loyal brand advocates through immersive interactive experiences.",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Security",
      title: "UNIFIED PAYMENTS",
      desc: "Integrating secure, frictionless payment ecosystems tailored for international commerce. From Stripe to crypto-wallets, we ensure a globalized, PCI-compliant transactional flow that builds customer trust and reduces cart abandonment. Every gateway is fortified with multi-layer encryption and fraud detection protocols to safeguard your enterprise revenue.",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Control",
      title: "INVENTORY INTELLIGENCE",
      desc: "Sophisticated backend systems for real-time inventory synchronization across diverse multi-channel marketplaces. Automate your supply chain with our robust API integration layer and AI-driven stock insights that predict demand patterns. We provide a single source of truth for your stock levels, orders, and fulfillment cycles across all digital platforms.",
      icon: BarChart,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Speed",
      title: "MOBILE-FIRST ECONOMY",
      desc: "Optimizing for a mobile-dominant world where performance defines success. Our PWA and responsive architectures ensure your store performs flawlessly on every device, capturing the high-value mobile shopping segment with sub-second load times. We focus on lightweight assets and lightning-fast edge delivery to keep your bounce rates at an absolute minimum.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function EcommerceDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE PEARLS BACKDROP */}
            <ThreeEcommercePearls />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-5">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-sm shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold capitalize tracking-[0.2em] text-white">Market Ecosystem</span>
                  </motion.div>

                  <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-2xl md:text-3xl lg:text-5xl px-4">
                     {(() => {
                        const title = "ECOMMERCE SOLUTIONS.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-2 md:mr-4">
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
                                    className={`inline-block ${word === "SOLUTIONS." ? "text-[#FF6600]" : ""}`}
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
                     className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed max-w-xl px-6 md:px-0"
                  >
                     Optimized digital commerce for high conversion. Engineering powerful transactional architectures that dominate the global marketplace with surgical precision.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-0 pb-4 md:pb-0 px-4"
               >
                  {[
                     { label: 'Market Conversion', icon: Globe },
                     { label: 'Secure Protocols', icon: ShieldCheck },
                     { label: 'Trade Precision', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2 md:gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-semibold text-slate-700 uppercase tracking-widest whitespace-nowrap">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">
               
               {/* INTRODUCTORY HUB SECTION */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-8">
                  <div className="lg:col-span-7 space-y-4 md:space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Development Hub</span>
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-[18px] md:text-xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase leading-[1.1]">
                           Elite Ecommerce <span className="text-[#FF6600]">Architectures</span>
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed max-w-2xl px-2 md:px-0">
                           eCommerce is growing globally for both B2B and B2C segments. We deliver powerful solutions allowing your business to stand out with authority and massive operational scale.
                        </p>
                     </div>
                  </div>
                  <div className="lg:col-span-5">
                     <div className="grid grid-cols-2 gap-3">
                        {[
                           { icon: Globe, label: "User Friendly" },
                           { icon: CreditCard, label: "Secure Payments" },
                           { icon: ShieldCheck, label: "On Time Delivery" },
                           { icon: BarChart, label: "Growth Tracking" }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-md bg-white border border-slate-100 shadow-sm transition-all hover:-translate-y-1 text-center group">
                              <div className="p-2.5 rounded-md bg-[#FF6600] text-white transition-transform group-hover:scale-110">
                                 <item.icon size={16} />
                              </div>
                              <span className="text-[10px] font-semibold text-[#FF6600] uppercase tracking-widest leading-none">
                                 {item.label}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* MAIN SERVICE BANNERS - ALTERNATING ELITE ARCHITECTURE */}
               <div className="flex flex-col gap-8 lg:gap-12 pt-8">
                  {ecommercePillars.map((pillar, idx) => (
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
                           className="w-[92%] mx-auto md:w-[45%] lg:w-[45%] relative h-[180px] md:h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
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
                                 <span className="text-[10px] font-bold uppercase tracking-wider">Elite Tech</span>
                              </div>
                           </div>
                           <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-4xl font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                        </motion.div>

                        {/* BANNER CONTENT SECTION */}
                        <motion.div
                           initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full md:w-[55%] lg:w-[55%] space-y-6 px-4 lg:px-0"
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

                               <p className="text-sm md:text-base lg:text-lg font-semibold leading-relaxed text-slate-500 group-hover:text-[#FF6600] transition-colors max-w-xl">
                                  {pillar.desc}
                               </p>

                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 uppercase tracking-widest group/link">
                                    <span>Initiate Project</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  ))}

                  {/* CONCLUSION BLOCK - SYNCED WITH PRESTIGE BANNER STYLE */}
                   <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="relative py-8 md:py-14 px-6 md:px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default mt-12"
                   >
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />
                     
                     <div className="relative z-10 max-w-4xl mx-auto space-y-5">
                        <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                           <Zap size={24} />
                        </div>

                        <div className="relative">
                           <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic overflow-visible px-4">
                              {(() => {
                                 const text = "We specialize in creative and innovative approaches to e-commerce development. Our primary goal is to integrate powerful transactional features that pave the way for the global scaling of your online empire.";
                                 return text.split(" ").map((word, wordIdx) => (
                                    <span key={wordIdx} className="inline-block mr-1.5 overflow-hidden py-0.5">
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
                           <div className="h-[1px] w-24 bg-white/10" />
                           <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-orange-500">Industry Leader</span>
                           <div className="h-[1px] w-24 bg-white/10" />
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
