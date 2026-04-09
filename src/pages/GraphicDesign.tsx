import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Layout,
   Compass,
   UserCheck,
   Mail,
   Box,
   FileText,
   PenTool,
   Grid,
   Disc,
   Type,
   CreditCard,
   Files,
   Monitor,
   Sparkles,
   Globe
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeGeometricBackground from '../components/ThreeGeometricBackground';

gsap.registerPlugin(ScrollTrigger);

export default function GraphicPage() {
   
   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE GEOMETRIC BACKDROP */}
            <ThreeGeometricBackground />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Strategic Visuals</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "GRAPHIC DESIGN.";
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
                                    className={`inline-block ${word === "DESIGN." ? "text-[#FF6600]" : ""}`}
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
                     Our Graphics developed for use on the web are specifically formatted for the internet and designed for maximum visual impact.
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
                     { label: 'Brand Foundation', icon: Globe },
                     { label: 'Visual Impact', icon: Sparkles },
                     { label: 'Strategic Intent', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* THE ARCHITECTURAL NARRATIVE - COMPACT SCALE */}
         <section className="py-8 bg-white flex items-center overflow-hidden border-t border-slate-50">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
               
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Philosophy Segment */}
                  <div className="lg:col-span-12 space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 bg-[#FF6600]/30" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Strategic Intent</span>
                     </div>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                        <div className="space-y-4">
                           <h2 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                              Unbound Imagination & <span className="text-[#FF6600]">Expertise.</span>
                           </h2>
                           <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              Our expert designers deliver graphic solutions <span className="italic text-[#FF6600]/80">scalable to your core message.</span>
                           </p>
                           <div className="h-px w-full bg-slate-100" />
                           <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              Each requirement is an individual challenge where we create something distinct. We employ universally recognized visual principles.
                           </p>
                        </div>

                        <div className="space-y-4">
                           <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              These graphics may include photos, animations, and other media. We can also reconsider your existing print logos for web use.
                           </p>
                           <div className="pl-4 border-l-2 border-orange-50">
                              <p className="text-[11px] font-medium text-slate-600 leading-relaxed italic">
                                 "We ensure graphics are fast loading, easy to navigate and enhance your web solutions overall ranking."
                              </p>
                           </div>
                           <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed">
                              Fresh, innovative conceptual designs that stand out. We bridge the gap between technology and pure creativity.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* CAPABILITY INDEX - COMPACT GRID */}
                  <div className="lg:col-span-12 pt-8 border-t border-slate-100">
                     <div className="flex items-center gap-6 mb-8 group">
                        <div className="px-4 py-2 bg-[#FF6600] rounded-md text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
                           01 CAPABILITY INVENTORY
                        </div>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF6600]/20 to-transparent" />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                        {[
                           { t: "Brand Foundation", i: Compass },
                           { t: "Corporate Style", i: Layout },
                           { t: "Visiting Card", i: UserCheck },
                           { t: "Envelopes", i: Mail },
                           { t: "Package Design", i: Box },
                           { t: "Letterhead Design", i: FileText },
                           { t: "Logo & Icon Design", i: PenTool },
                           { t: "Stationery Design", i: Grid },
                           { t: "CD Cover Design", i: Disc },
                           { t: "Naming & Tagline", i: Type },
                           { t: "Business Card Design", i: CreditCard },
                           { t: "Flyers & Catalogs", i: Files }
                        ].map((item, i) => (
                           <motion.div
                              key={i}
                              whileHover={{ y: -3, scale: 1.01 }}
                              className="group relative p-4 rounded-md bg-white border border-slate-100 hover:border-[#FF6600]/30 shadow-sm hover:shadow-[0_15px_40px_rgba(255,102,0,0.08)] transition-all duration-500 cursor-pointer overflow-hidden"
                           >
                              {/* FLOATING INDEX ACCENT */}
                              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                 <span className="text-3xl font-display font-bold text-slate-900 select-none italic tracking-tighter">
                                    {(i + 1).toString().padStart(2, '0')}
                                 </span>
                              </div>

                              <div className="relative z-10 space-y-2">
                                 <div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500 shadow-sm">
                                    <item.i size={16} />
                                 </div>
                                 <div className="space-y-0.5">
                                    <h4 className="text-sm lg:text-base font-display font-bold text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500 tracking-tight leading-tight">
                                       {item.t}
                                    </h4>
                                    <div className="w-5 h-0.5 bg-slate-100 group-hover:w-12 group-hover:bg-[#FF6600] transition-all duration-700" />
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
