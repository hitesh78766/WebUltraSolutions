import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe, Cpu, Zap, Code2, Server, Database, Layers, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';
import imgWebDev from '../assets/services/web_dev.png';

export default function WebDevelopment() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

   const headingChars = "Web Development.".split("");
   
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
         transition: { staggerChildren: 0.012, delayChildren: 0.1 }
      }
   };

   const listItemVariants: Variants = {
      hidden: { opacity: 0, x: -20, skewX: -10, rotateX: 30 },
      visible: (i: number) => ({
         opacity: 1,
         x: 0,
         skewX: 0,
         rotateX: 0,
         transition: {
            delay: 0.4 + (i * 0.08),
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
         }
      })
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
            viewport={{ once: true, margin: "-50px" }}
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

   const expertiseList = [
      "Web Application Development (Open Source)",
      "PHP Development",
      "Custom Application Development.",
      "Portal Development",
      "Open Sources (WordPress, OSCommerce, Drupal)",
      "E-Commerce Web Development & Shopping cart solution."
   ];

   return (
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[350px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-50/50 overflow-hidden">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="space-y-4"
               >
                  <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span
                           key={index}
                           variants={child}
                           className={index >= 4 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                        >
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <motion.p 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6, duration: 1 }}
                     className="text-[11px] lg:text-[13px] font-bold text-slate-600 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed"
                  >
                     Specialize in developing reliable yet creative <span className="text-indigo-600">Web Development</span> solutions.
                  </motion.p>
               </motion.div>
            </div>
         </section>

         {/* CONTENT SECTION */}
         <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-16 bg-white overflow-hidden">
            <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  
                  {/* LEFT CONTENT */}
                  <div className="lg:col-span-8 space-y-8">
                     <div className="flex items-center gap-3">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: 32 }}
                           viewport={{ once: true }}
                           className="h-[2px] bg-indigo-600" 
                        />
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em]">Development Hub</span>
                     </div>

                     <div className="space-y-6">
                        <motion.h2 
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]"
                        >
                           Website <span className="text-indigo-600">Development</span> Company
                        </motion.h2>

                        <div className="space-y-4">
                           <AnimatedText
                              className="text-[16px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary border-l-4 border-indigo-600 pl-4"
                              text="WebUltraSolution specializes in crafting dependable and creative Web Development solutions. Our solutions are fully scalable, addressing both intricate and straightforward website needs."
                           />
                           
                           <AnimatedText
                              className="text-[14px] text-slate-600 font-medium leading-relaxed"
                              text="Situated in Delhi-Noida, India, our development center minimizes costs while delivering a spectrum of online solutions, including E-commerce, Design and Branding, E-Marketing, Flash Development, and Online Applications. As a Web Development Company in Delhi, India, we focus on web development, custom website development, portal development, and e-commerce development. Website Business Solution, a leading professional website development company, offers affordable website development and web portals worldwide."
                           />
                        </div>
                     </div>

                     {/* TECHNOLOGY EXPERTISE LIST */}
                     <div className="pt-4 space-y-4">
                        <div className="flex items-center gap-2">
                           <Layers size={18} className="text-indigo-600" />
                           <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em]">Technology Expertise</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           {expertiseList.map((item, i) => (
                              <motion.div
                                 key={i}
                                 custom={i}
                                 variants={listItemVariants}
                                 initial="hidden"
                                 whileInView="visible"
                                 viewport={{ once: true }}
                                 className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 border border-slate-100 group cursor-default transition-all hover:bg-white hover:shadow-md"
                              >
                                 <ChevronRight size={14} className="mt-1 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                                 <span className="text-[12px] font-bold text-slate-700 group-hover:text-indigo-600 transition-colors leading-tight">
                                    {item}
                                 </span>
                              </motion.div>
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-6 perspective-[1000px]">
                        {[
                           { label: "Scalable", icon: Cpu },
                           { label: "Intuitive", icon: Zap },
                           { label: "Global", icon: Globe },
                           { label: "Modern", icon: Code2 }
                        ].map((stat, i) => (
                           <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 30, rotateX: 45, rotateY: 90 }}
                              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                              transition={{ 
                                 delay: 0.1 * i, 
                                 duration: 1.2, 
                                 rotateY: { type: "spring", stiffness: 40, damping: 12 }
                              }}
                              whileHover={{ 
                                 y: -8, 
                                 scale: 1.02,
                                 transition: { type: "spring", stiffness: 400, damping: 10 }
                              }}
                              className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white border border-slate-100 shadow-lg shadow-indigo-500/5 transition-all cursor-pointer group transform-gpu transform-style-3d text-center"
                           >
                              <div className="relative">
                                 <motion.div 
                                    whileHover={{ rotate: 90, scale: 1.1, x: [0, -2, 2, 0] }}
                                    className="p-1.5 rounded-lg bg-indigo-500 text-white shadow-lg shadow-indigo-500/15 group-hover:bg-indigo-600 transition-all duration-500 ease-[0.16,1,0.3,1]"
                                 >
                                    <stat.icon size={14} />
                                 </motion.div>
                                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 border border-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="flex items-center gap-1.2">
                                 <motion.div 
                                    animate={{ 
                                       scale: [1, 1.3, 1],
                                       opacity: [0.5, 1, 0.5]
                                    }} 
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-1 h-1 rounded-full bg-indigo-500" 
                                 />
                                 <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{stat.label}</span>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT IMAGE / TECH SPEC */}
                  <div className="lg:col-span-4 relative lg:sticky lg:top-28 perspective-[1000px]">
                     <motion.div
                        initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                        whileHover={{ y: -5 }}
                        transition={{ 
                           duration: 1.2, 
                           ease: [0.16, 1, 0.3, 1],
                           rotateY: { duration: 1.5, type: "spring", stiffness: 50, damping: 15 }
                        }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white backdrop-blur-md group mx-auto max-w-[320px] transform-style-3d cursor-pointer"
                     >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-500/10 group-hover:opacity-0 transition-opacity duration-700" />
                        <img 
                           src={imgWebDev} 
                           alt="Web Development Ecosystem" 
                           className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                        
                        <motion.div 
                           animate={{ y: [0, -6, 0] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute -top-4 -right-4 h-16 w-16 bg-indigo-600 rounded-full blur-2xl opacity-10"
                        />
                     </motion.div>

                     {/* TECH STACK INDICATOR - COMPACTED */}
                     <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="h-px flex-1 bg-slate-100" />
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Core</span>
                           <div className="h-px flex-1 bg-slate-100" />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                           {[
                              { icon: Server, title: "Robust Architecture", desc: "High-availability engineering." },
                              { icon: Database, title: "Data Integrity", desc: "Complex ecosystem management." }
                           ].map((item, i) => (
                              <motion.div
                                 key={i}
                                 initial={{ opacity: 0, x: 10 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ delay: 0.6 + (i * 0.1) }}
                                 viewport={{ once: true }}
                                 className="flex items-center gap-3 group bg-slate-50/50 p-2 rounded-lg border border-slate-100"
                              >
                                 <div className="p-2 rounded-md bg-white border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                                    <item.icon size={16} className="text-indigo-600" />
                                 </div>
                                 <div className="space-y-0.5">
                                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-medium leading-tight">{item.desc}</p>
                                 </div>
                              </motion.div>
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

