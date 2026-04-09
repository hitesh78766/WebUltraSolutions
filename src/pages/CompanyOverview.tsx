import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, Globe, Target, Cpu, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeResponsiveVortex from '../components/ThreeResponsiveVortex';

// Import Assets
import imgNetwork from '../assets/overview/overview_network.png';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyOverview() {
   const rightImageRef = useRef(null);

   const wordAnimation: Variants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      }
   };

   const paragraphContainer: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.015, delayChildren: 0.05 }
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.to(rightImageRef.current, {
         y: 20,
         duration: 4,
         repeat: -1,
         yoyo: true,
         ease: "power1.inOut"
      });
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
      const words = text.split(" ");
      return (
         <motion.p
            variants={paragraphContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
         >
            {words.map((word, i) => (
               <motion.span key={i} variants={wordAnimation} className="inline-block mr-[0.25em]">
                  {word}
               </motion.span>
            ))}
         </motion.p>
      );
   };

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC FULL-BLEED HEADER - RESPONSIVE DESIGN STYLE */}
         <div className="relative min-h-[250px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            <ThreeResponsiveVortex />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Agency Intelligence</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ABOUT WEBULTRASOLUTION.";
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
                                    className={`inline-block ${word === "WEBULTRASOLUTION." ? "text-[#FF6600]" : ""}`}
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
                     Standing at the forefront of the global digital landscape. Engineering powerful offshore solutions with technical precision and market-leading expertise.
                  </motion.p>
               </div>
            </div>
         </div>

         {/* NARRATIVE SECTION - RESPONSIVE DESIGN STYLE (GREY TEXT) */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-16 relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-20 items-start">
               
               <div className="space-y-12">
                  <div className="space-y-6">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-[#FF6600]/20" />
                        <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.3em]">Identity Protocol</span>
                     </div>
                     <div className="space-y-6">
                        <AnimatedText 
                           className="text-slate-500 text-base lg:text-lg font-semibold leading-relaxed max-w-3xl"
                           text="Webultrasolution Services is a proficiency-driven Web Design, Software Development, and IT agency headquartered in Noida. Serving as a comprehensive offshore service provider, we cater to the diverse design and IT infrastructure needs of both corporate entities and enterprise projects. With a wealth of experience in Custom Software Development, Mobile Apps, and SEO, WebUltraSolution has consistently delivered top-notch digital solutions globally."
                        />
                        <p className="p-5 bg-white border-l-4 border-[#FF6600] shadow-sm rounded-md text-slate-500 text-base lg:text-lg font-semibold leading-relaxed">
                           As a low IT cost structure provider, we are committed to providing truly cost-effective, customized IT solutions that meet our client's rigorous technological demands. From remote infrastructure management to security and compliance, we excel in delivering comprehensive and seamless solutions.
                        </p>
                     </div>
                  </div>

                  {/* PILLAR GRID - RESPONSIVE DESIGN CARD STYLE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                     {[
                        {
                           h: "Client Contentment",
                           p: "At the core of our operations lies a commitment to customer satisfaction, which serves as our driving force and growth catalyst.",
                           t: "Growth Logic",
                           icon: Target
                        },
                        {
                           h: "Strategic Teamwork",
                           p: "Individual achievements collectively form a joint opportunity to collaborate and drive toward embracing global client success.",
                           t: "Synergy",
                           icon: Cpu
                        },
                        {
                           h: "Inclusive Diversity",
                           p: "We embrace the distinctive blend of qualities each individual brings, fostering a culture of high-status innovation.",
                           t: "Culture",
                           icon: Globe
                        },
                        {
                           h: "Empowering Excellence",
                           p: "Playing a pivotal role in the pursuit of absolute quality through iterative performance engineering and accountability.",
                           t: "QA Core",
                           icon: CheckCircle2
                        }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{
                              delay: i * 0.1,
                              duration: 1.2,
                              ease: [0.16, 1, 0.3, 1]
                           }}
                           whileHover={{
                              y: -8,
                              scale: 1.01,
                           }}
                           className="group relative p-5 lg:p-6 rounded-md bg-white border border-slate-100 hover:border-[#FF6600]/30 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,102,0,0.12)] transition-all duration-700 cursor-pointer overflow-hidden"
                        >
                           {/* LARGE FLOATING INDEX */}
                           <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                              <span className="text-4xl font-display font-bold text-slate-950 select-none italic tracking-tighter">0{i + 1}</span>
                           </div>

                           <div className="relative z-10 space-y-3">
                              {/* STATUS BADGE COHESION */}
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{item.t}</span>
                              </div>

                              <div className="space-y-1">
                                 <h4 className="text-lg lg:text-xl font-display font-bold tracking-tight text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                    {item.h}
                                 </h4>
                                 <div className="w-10 h-0.5 bg-slate-100 group-hover:w-20 group-hover:bg-[#FF6600] transition-all duration-700" />
                                 <p className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                                    {item.p}
                                 </p>
                              </div>

                              <div className="pt-1 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-950 transition-colors">
                                 <span>Metric 2.0</span>
                                 <div className="flex-1 h-[1px] bg-slate-100 group-hover:bg-slate-200" />
                                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FF6600]" />
                              </div>
                           </div>
                           
                           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6600]/0 to-transparent group-hover:via-[#FF6600] transition-all duration-700" />
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* STICKY VISUAL POD - RESPONSIVE DESIGN STYLE */}
               <div className="relative sticky top-28" ref={rightImageRef}>
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="bg-white p-2 rounded-md shadow-xl border border-slate-50 overflow-hidden group"
                  >
                     <div className="rounded-md overflow-hidden relative aspect-[4/5]">
                        <img src={imgNetwork} alt="Global Network" className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white text-left">
                           <div className="space-y-4">
                              <div className="h-0.5 w-10 bg-[#FF6600] rounded-full" />
                              <p className="text-sm lg:text-base font-semibold leading-relaxed italic">
                                 "Dominating the web requires technical precision and creative mastery through global trade axis synchronization."
                              </p>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                                 <span className="text-[9px] font-bold text-slate-200 uppercase tracking-widest leading-none">Global Trade Axis</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

            </div>
         </section>
      </div>
   );
}
