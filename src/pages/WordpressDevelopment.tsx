import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, BarChart, Settings, Search, FileText, Layers, TrendingUp, CreditCard, Monitor, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeWordpressParticles from '../components/ThreeWordpressParticles';

gsap.registerPlugin(ScrollTrigger);

export default function WordpressDevelopment() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden text-slate-900">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[220px] md:min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE PARTICLES BACKDROP */}
            <ThreeWordpressParticles />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4 mt-5">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-sm shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold capitalize tracking-[0.2em] text-white">CMS Engineering</span>
                  </motion.div>

                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto px-4">
                     {(() => {
                        const title = "WORDPRESS DEVELOPMENT.";
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
                                    className={`inline-block ${word === "DEVELOPMENT." ? "text-[#FF6600]" : ""}`}
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
                     Premier WordPress development firm dedicated to crafting exceptional and resilient websites. Elevating digital presence with advanced plugin architecture.
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
                     { label: 'Responsive Architecture', icon: Globe },
                     { label: 'SEO Precision', icon: Sparkles },
                     { label: 'Market Flow', icon: Monitor }
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

         {/* MAIN CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-6 md:py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  {/* LEFT COLUMN: PRIMARY NARRATIVE */}
                  <div className="lg:col-span-8 space-y-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">Strategic Hub</span>
                        </div>
                        <h2 className="text-[18px] md:text-xl lg:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase leading-[1.1] text-center lg:text-left">
                           Wordpress <span className="text-[#FF6600]">Development.</span>
                        </h2>
                        <div className="space-y-4">
                           <p className="text-sm md:text-base lg:text-lg font-semibold text-slate-500 leading-relaxed max-w-2xl border-l-4 border-[#FF6600] pl-4">
                              Leading company creating stunning and robust websites for businesses of all sizes. 100% results and on-time delivery.
                           </p>
                           <p className="text-[13px] md:text-sm lg:text-base text-slate-600 font-semibold leading-relaxed px-4 lg:px-0">
                              Our WordPress team consists of result-oriented professionals who deliver unique websites custom-made to meet specific business requirements. We specialize in transforming complex digital visions into high-performance CMS solutions that are both scalable and easy to manage, ensuring your team has total control over your digital storefront.
                           </p>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                        <div className="space-y-2">
                           <h3 className="text-sm font-bold text-slate-900 capitalize tracking-tight">Benefits & Utility</h3>
                           <p className="text-xs lg:text-sm text-slate-500 font-semibold leading-relaxed">Word Press is easy-to-use, quite powerful, and flexible. Creating a website is a science and art that has quickly evolved.</p>
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-sm font-bold text-slate-900 capitalize tracking-tight">Business Impact</h3>
                           <p className="text-xs lg:text-sm text-slate-500 font-semibold leading-relaxed">Flood of traffic and huge revenues! These days, businesses require highly responsive websites; text blurbs no longer count.</p>
                        </div>
                     </div>

                     {/* DETAILED BUSINESS PILLARS */}
                     <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                           { id: "1", title: "Ecommerce Plugins", desc: "Broad array of e-commerce plugins including Woo Commerce. Business owners can lead online shoppers directly to their shops.", icon: CreditCard },
                           { id: "2", title: "WordPress SEO Tools", desc: "All In One SEO and Yoast have given a strong boost. When you want to boost your local following, WP’s tools are as quick as it gets.", icon: Search }
                        ].map((pillar, i) => (
                           <div key={i} className="group p-5 rounded-md bg-white border border-slate-100 shadow-sm transition-all hover:border-[#FF6600] space-y-3">
                              <div className="flex items-center gap-4">
                                 <div className="p-2 rounded-md bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                                    <pillar.icon size={16} />
                                 </div>
                                 <h3 className="text-sm lg:text-base font-display font-bold text-slate-900 capitalize tracking-tight leading-none group-hover:text-[#FF6600] transition-colors duration-500">{pillar.title}</h3>
                              </div>
                              <p className="text-xs lg:text-sm text-slate-500 font-semibold leading-relaxed group-hover:text-slate-700 transition-colors">{pillar.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: SPECS & SPECIALIZATION PORTAL */}
                  <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                     <div className="p-6 rounded-md bg-white border border-slate-100 shadow-xl space-y-4">
                        <h3 className="text-[12px] font-bold text-[#FF6600] capitalize tracking-wide flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                           Core Specialization
                        </h3>
                        <div className="space-y-2">
                            {[
                               "WordPress Web Development",
                               "WordPress eCommerce Hub",
                               "PSD to WordPress Conversion",
                               "Migration and Update",
                               "WordPress Customization",
                               "Maintenance and Support",
                               "Performance Optimization",
                               "API & Plugin Integration",
                               "Custom UI/UX Architecture"
                            ].map((item, i) => (
                               <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-md bg-slate-50 border border-slate-100 font-bold text-slate-800 text-[11px] lg:text-[13px] hover:bg-white transition-all cursor-default group">
                                  <div className="w-1 h-1 rounded-full bg-[#FF6600] opacity-40 group-hover:opacity-100" />
                                  {item}
                               </div>
                            ))}
                        </div>
                     </div>

                     <div className="p-6 rounded-md bg-slate-900 text-white space-y-4">
                        <h3 className="text-[12px] font-bold text-[#FF6600] capitalize tracking-wide">Conversion Targets</h3>
                        <div className="space-y-3">
                            {[
                               { icon: Globe, text: "Responsive themes to target global mobile traffic" },
                               { icon: Search, text: "SEO friendly architecture for search engine dominance" },
                               { icon: ShieldCheck, text: "High-end Security with advanced firewall protocols" }
                            ].map((item, i) => (
                               <div key={i} className="flex items-start gap-4 group/item">
                                  <div className="p-2 rounded-md bg-white/10 text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all">
                                     <item.icon size={14} />
                                  </div>
                                  <span className="text-[11px] lg:text-[13px] font-bold text-slate-300 leading-tight">{item.text}</span>
                               </div>
                            ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
