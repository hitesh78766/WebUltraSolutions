import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ThreeGeometricBackground from '../components/ThreeGeometricBackground';

export default function LogoDesign() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

   // THE BOUNCY LETTER LOGIC
   const headingChars = "Logo Design.".split("");
   const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
         opacity: 1,
         transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
      }),
   };
   const child: Variants = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
         } as any,
      },
      hidden: {
         opacity: 0,
         y: 30,
      },
   };

   // WORD REVEAL LOGIC
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
         transition: { staggerChildren: 0.02, delayChildren: 0.1 }
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);
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
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* THE COMPACT FLAGSHIP HERO - LAYERED ANIMATIONS */}
         <section className="relative h-[250px] lg:h-[300px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-50/50 overflow-hidden">
            <ThreeNeuralStorm />
            <ThreeGeometricBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="space-y-4"
               >
                  <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span
                           key={index}
                           variants={child}
                           className={index >= 5 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                        >
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
                     Crafting Compelling Visual Identities for Global Enterprises.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* THE IDENTITY BLUEPRINT - CONTENT UPGRADE + 3D GEOMETRIC BG ACCROSS BOTH SECTIONS */}
         <section className="relative py-12 lg:py-24 bg-white overflow-hidden border-t border-slate-50">
            <ThreeGeometricBackground />

            <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">

                  <div className="lg:col-span-12 space-y-12">
                     <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-indigo-600" />
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Identity Core</span>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7 space-y-8">
                           <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                              Compelling & <span className="text-indigo-600">Distinctive.</span>
                           </h2>
                           <AnimatedText
                              className="text-[18px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary"
                              text="Are you in need of a logo for your company, website, or event? A compelling logo should always be distinctive and reflect the essence of a company. Our team comprises professional graphic designers and artists who specialize in crafting logos and corporate identity designs for various businesses online."
                           />
                           <div className="h-px w-full bg-slate-100" />
                           <AnimatedText
                              className="text-[15px] text-slate-600 font-medium leading-relaxed"
                              text="We prioritize our clients' objectives, creating logos that help their companies gain a competitive edge through a compelling visual identity. Whether you're a new business owner or a marketing manager for a large corporation, we'll design an original, attractive, and memorable logo that safeguards your company's image, goals, and values. Your logo will be entirely custom, original, and unique, ensuring your company stands out to customers."
                           />
                        </div>

                        <div className="lg:col-span-1" />

                        <div className="relative lg:col-span-4 space-y-12 pl-12">
                           {/* CINEMATIC LUMINOUS AXIS */}
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              whileInView={{ height: "100%", opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute left-0 top-0 w-px bg-gradient-to-b from-indigo-600 via-indigo-400 to-transparent shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                           >
                              <motion.div
                                 animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
                                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                 className="absolute top-0 left-[-1px] w-[3px] h-[30px] bg-white blur-[2px]"
                              />
                           </motion.div>

                           <div className="space-y-5 group">
                              <div className="flex items-center gap-4">
                                 <Lightbulb size={20} className="text-indigo-600 group-hover:scale-125 transition-transform" />
                                 <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Why you need a logo</h3>
                              </div>
                              <AnimatedText
                                 className="text-[14px] text-slate-600 font-medium leading-loose"
                                 text="Logo creates a value of your strong brand recognition and familiarity for a business. It makes people think of your service or product as soon as they sight it. Logos are meant to represent companies what kind of value you have."
                              />
                           </div>

                           <div className="space-y-5 group">
                              <div className="flex items-center gap-4">
                                 <CheckCircle2 size={20} className="text-indigo-600 group-hover:scale-125 transition-transform" />
                                 <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Why choose webultrasolution</h3>
                              </div>
                              <AnimatedText
                                 className="text-[14px] text-slate-600 font-medium leading-loose"
                                 text="webultrasolution have more than 6 years' experience and helped hundreds of companies to establish their brands. We understand the perfect position a logo has in creating a brand identity. And our team always takes up this challenge to give the best creative it."
                              />
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
