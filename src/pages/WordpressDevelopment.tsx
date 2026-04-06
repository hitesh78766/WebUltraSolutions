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
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden text-slate-900">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE PARTICLES BACKDROP */}
            <ThreeWordpressParticles />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">CMS Engineering</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "WORDPRESS DEVELOPMENT.";
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-xl leading-relaxed"
                  >
                     Premier WordPress development firm dedicated to crafting exceptional and resilient websites. Elevating digital presence with advanced plugin architecture.
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
                     { label: 'Responsive Architecture', icon: Globe },
                     { label: 'SEO Precision', icon: Sparkles },
                     { label: 'Market Flow', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* MAIN CONTENT PORTAL - COMPACT SCALE */}
         <section className="relative py-8 bg-[#FDFBF9] overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  
                  {/* LEFT COLUMN: PRIMARY NARRATIVE */}
                  <div className="lg:col-span-8 space-y-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                           <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">Strategic Hub</span>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                           Wordpress <span className="text-[#FF6600]">Development.</span>
                        </h2>
                        <div className="space-y-4">
                           <p className="text-[14px] font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-4">
                              Leading company creating stunning and robust websites for businesses of all sizes. 100% results and on-time delivery.
                           </p>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                              Our WordPress team consists of result-oriented professionals who deliver unique websites custom-made to meet specific business requirements.
                           </p>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                        <div className="space-y-3">
                           <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Benefits & Utility</h3>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">Word Press is easy-to-use, quite powerful, and flexible. Creating a website is a science and art that has quickly evolved.</p>
                        </div>
                        <div className="space-y-3">
                           <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Business Impact</h3>
                           <p className="text-[12px] text-slate-600 font-medium leading-relaxed">Flood of traffic and huge revenues! These days, businesses require highly responsive websites; text blurbs no longer count.</p>
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
                                 <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-tight leading-none">{pillar.title}</h3>
                              </div>
                              <p className="text-[12px] text-slate-600 font-medium leading-relaxed">{pillar.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: SPECS & SPECIALIZATION PORTAL */}
                  <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                     <div className="p-6 rounded-md bg-white border border-slate-100 shadow-xl space-y-4">
                        <h3 className="text-[9px] font-black text-[#FF6600] uppercase tracking-[0.3em] flex items-center gap-2">
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
                              "Maintenance and Support"
                           ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-md bg-slate-50 border border-slate-100 font-bold text-slate-800 text-[10px] hover:bg-white transition-all cursor-default group">
                                 <div className="w-1 h-1 rounded-full bg-[#FF6600] opacity-40 group-hover:opacity-100" />
                                 {item}
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="p-6 rounded-md bg-slate-900 text-white space-y-4">
                        <h3 className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em]">Conversion Targets</h3>
                        <div className="space-y-3">
                           {[
                              { icon: Globe, text: "Responsive themes to target mobile traffic" },
                              { icon: Search, text: "SEO friendly architecture" },
                              { icon: ShieldCheck, text: "High-end Security Implementation" }
                           ].map((item, i) => (
                              <div key={i} className="flex items-start gap-3 group/item">
                                 <div className="p-1.5 rounded-md bg-white/10 text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all">
                                    <item.icon size={12} />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-300 leading-tight">{item.text}</span>
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
