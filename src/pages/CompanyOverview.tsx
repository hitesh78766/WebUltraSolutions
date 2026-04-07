import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, Globe, Target, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

// Import Assets
import imgNetwork from '../assets/overview/overview_network.png';

export default function CompanyOverview() {
   const { scrollYProgress } = useScroll();

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
      gsap.registerPlugin(ScrollTrigger);



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
         {/* CINEMATIC FULL-BLEED HEADER - ELITE COMPACT STYLE */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE SOLUTION BACKDROP */}
            <ThreeSolutionBackground />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Agency Intelligence</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-medium text-slate-800 tracking-tight leading-[1.1] uppercase max-w-2xl mx-auto">
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
                     className="text-slate-600 text-xs lg:text-base font-medium max-w-xl leading-relaxed"
                  >
                     Standing at the forefront of the global digital landscape. Engineering powerful offshore solutions with technical precision and market-leading expertise.
                  </motion.p>
               </div>
            </div>
         </div>

         {/* CONTENT NARRATIVE - ELITE COMPACT */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-8 bg-[#FDFBF9] relative z-20 border-t border-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-start">
               
               <div className="space-y-10">
                  <div className="space-y-4">
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF6600] flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-[#FF6600]/20" /> Identity Protocol
                     </span>
                     <div className="space-y-4">
                        <AnimatedText 
                           className="text-slate-800 text-[12px] lg:text-[14px] font-medium leading-relaxed max-w-3xl"
                           text="Webultrasolution Services is a proficiency-driven Web Design, Software Development, and IT agency headquartered in Noida. Serving as a comprehensive offshore service provider, we cater to the diverse design and IT infrastructure needs of both corporate entities and enterprise projects. With a wealth of experience in Custom Software Development, Mobile Apps, and SEO, WebUltraSolution has consistently delivered top-notch digital solutions globally."
                        />
                        <p className="p-5 bg-white border-l-4 border-[#FF6600] shadow-sm rounded-md text-slate-800 text-[12px] lg:text-[14px] font-medium">
                           As a low IT cost structure provider, we are committed to providing truly cost-effective, customized IT solutions that meet our client's rigorous technological demands. From remote infrastructure management to security and compliance, we excel in delivering comprehensive and seamless solutions.
                        </p>
                     </div>
                  </div>

                  {/* 2X2 PILLAR GRID - ELITE COMPACT */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                     {[
                        {
                           h: "Client Contentment",
                           p: "At the core of our operations lies a commitment to customer satisfaction, which serves as our driving force and growth catalyst.",
                           icon: Target
                        },
                        {
                           h: "Strategic Teamwork",
                           p: "Individual achievements collectively form a joint opportunity to collaborate and drive toward embracing global client success.",
                           icon: Cpu
                        },
                        {
                           h: "Inclusive Diversity",
                           p: "We embrace the distinctive blend of qualities each individual brings, fostering a culture of high-status innovation.",
                           icon: Globe
                        },
                        {
                           h: "Empowering Excellence",
                           p: "Playing a pivotal role in the pursuit of absolute quality through iterative performance engineering and accountability.",
                           icon: CheckCircle2
                        }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           whileHover={{ y: -4, scale: 1.01 }}
                           className="group p-6 rounded-md bg-white border border-slate-100 hover:border-[#FF6600] shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 shrink-0 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 shadow-sm">
                                 <item.icon size={16} />
                              </div>
                              <div className="space-y-1">
                                 <h4 className="text-[12px] lg:text-[14px] font-bold uppercase tracking-tight text-slate-800 group-hover:text-[#FF6600]">
                                    {item.h}
                                 </h4>
                                 <p className="text-[11px] lg:text-[12px] font-medium text-slate-500 leading-snug group-hover:text-slate-700">
                                    {item.p}
                                 </p>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* STICKY VISUAL POD */}
               <div className="relative sticky top-28" ref={rightImageRef}>
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="bg-white p-2 rounded-md shadow-xl border border-slate-50"
                  >
                     <div className="rounded-md overflow-hidden relative group">
                        <img src={imgNetwork} alt="Global Network" className="w-full h-auto object-cover transition-transform duration-[3s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                           <div className="space-y-3">
                              <div className="h-0.5 w-10 bg-[#FF6600]" />
                              <p className="text-[11px] lg:text-[13px] font-bold leading-relaxed italic">
                                 "Dominating the web requires technical precision and creative mastery."
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
