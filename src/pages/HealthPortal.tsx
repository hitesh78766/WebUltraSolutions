import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

export default function HealthPortal() {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary selection:bg-orange-600 selection:text-white overflow-x-hidden">
         
         {/* LIGHT THEME CINEMATIC HERO */}
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
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">Elite Health Systems</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-black text-slate-950 tracking-tighter uppercase leading-none flex flex-wrap justify-center lg:justify-start gap-x-3">
                     {(() => {
                        const words = ["Health", "Portal."];
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
                     "Health portal permutes the Health organization, in India and globally."
                  </p>
               </motion.div>
            </div>
         </div>

         {/* MAIN CONTENT AREA */}
         <section className="max-w-7xl mx-auto px-8 lg:px-12 py-12 lg:py-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
               
               {/* LEFT CONTENT */}
               <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-2xl lg:text-3xl font-bold text-[#FF6600]">
                        Health Portal
                     </h2>
                     <p className="text-slate-700 text-sm lg:text-base leading-relaxed font-medium">
                        The Health Portal plays a pivotal role in transforming health organizations, both in India and globally. Health promotion, as defined in the World Health Organization's India Charter for Health Promotion in a Globalized World, involves "enabling people to increase control over their health and its determinants, thereby improving their health." The principal avenue for health promotion lies in the development of healthy public policies that address essential health prerequisites, including income, housing, food security, employment, and the quality of working conditions. Recent efforts have adopted the concept of "Health in All Policies," emphasizing actions that integrate health considerations into all public policies.
                     </p>
                  </div>

                  <div className="space-y-4 pt-4">
                     <p className="text-slate-700 text-sm lg:text-base leading-relaxed font-medium italic border-l-2 border-orange-100 pl-4">
                        This lesson delves into the health promotion model, exploring its impact on health behaviors. It provides insights into the underlying theory of the health promotion model and how this theoretical framework influences the outcomes of health promotion initiatives.
                     </p>
                  </div>
               </div>

               {/* RIGHT CONTENT - IMAGE */}
               <div className="lg:col-span-5 flex justify-center">
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative w-full max-w-md"
                  >
                     <img 
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                        alt="Digital Health Interface" 
                        className="w-full h-auto rounded-lg shadow-2xl"
                     />
                     <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl z-0" />
                  </motion.div>
               </div>

            </div>
         </section>
      </div>
   );
}
