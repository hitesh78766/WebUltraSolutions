import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ShieldCheck, CreditCard, BarChart, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeEcommercePearls from '../components/ThreeEcommercePearls';
import imgEcommerce from '../assets/services/ecommerce_dev.png';

export default function EcommerceDevelopment() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

   const headingChars = "Ecommerce Solutions.".split("");
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
      hidden: { opacity: 0, y: 30 },
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
         {/* HERO SECTION - REFINED WITH SMALL PEARLS AESTHETIC */}
         <section className="relative h-[320px] lg:h-[400px] flex items-center justify-center bg-white border-b border-indigo-50/20 overflow-hidden">
            <ThreeEcommercePearls />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="space-y-6"
               >
                  <div className="flex flex-col items-center gap-2 mb-4">
                     <div className="w-10 h-[2px] bg-indigo-600" />
                     <span className="text-indigo-600 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.6em]">Transaction Ecosystem</span>
                  </div>

                  <h1 className="text-3xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-[0.06em] uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span
                           key={index}
                           variants={child}
                           className={index >= 9 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-700 whitespace-pre" : "whitespace-pre"}
                        >
                           {char}
                        </motion.span>
                     ))}
                  </h1>

                  <div className="flex flex-col items-center gap-4">
                     <p className="text-[10px] lg:text-[12px] font-black text-slate-500 uppercase tracking-[0.45em] max-w-3xl mx-auto leading-relaxed">
                        Optimized Digital Commerce for High Conversion.
                     </p>

                     {/* Sub-indicator of the "Pearls" Trade Flow */}
                     <div className="flex items-center gap-4 opacity-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Absolute Bottom Left / Right Floating Text for High status */}
            <div className="absolute bottom-12 left-12 hidden lg:block overflow-hidden">
               <span className="block text-[11px] lg:text-[12px] font-black text-slate-500 uppercase tracking-[0.45em] rotate-180 [writing-mode:vertical-rl] opacity-40">Direct Conversion</span>
            </div>
            <div className="absolute top-12 right-12 hidden lg:block overflow-hidden text-right">
               <span className="block text-[11px] lg:text-[12px] font-black text-slate-500 uppercase tracking-[0.45em] opacity-40">Secure Protocol v4.0</span>
            </div>
         </section>

         <section className="relative py-12 lg:py-16 bg-white overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                  {/* MAIN CONTENT AREA */}
                  <div className="lg:col-span-8 space-y-10">
                     <div className="space-y-4 text-left">
                        <div className="flex items-center gap-2">
                           <div className="h-[2px] w-8 bg-indigo-600" />
                           <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.4em]">Development Hub</span>
                        </div>

                        <h2 className="text-3xl lg:text-[2.8rem] font-black text-slate-900 tracking-[0.06em] uppercase leading-[0.9] max-w-2xl flex flex-wrap gap-x-[0.2em] relative">
                           {["Elite", "Ecommerce"].map((word, i) => (
                              <motion.span
                                 key={i}
                                 initial={{ opacity: 0, y: 15 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                              >
                                 {word}
                              </motion.span>
                           ))}
                           <div className="w-full" />
                           <motion.span
                              initial={{ opacity: 0, scale: 0.95, x: -10 }}
                              whileInView={{ opacity: 1, scale: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 drop-shadow-sm"
                           >
                              Architectures.
                           </motion.span>

                           {/* Subtle background glow for high status */}
                           <div className="absolute -left-12 -top-12 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -z-10 animate-pulse" />
                        </h2>

                        <div className="space-y-4">
                           <AnimatedText
                              className="text-[15px] lg:text-[16px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary border-l-4 border-indigo-600 pl-4"
                              text="eCommerce is growing globally for both B2B and B2C market segments. We deliver powerful ecommerce solutions allowing your business to stand out in a crowd."
                           />

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                              <AnimatedText
                                 className="text-[12px] lg:text-[13px] text-slate-600 font-medium leading-relaxed"
                                 text="WebUltraSolution provides eCommerce development solutions to the clients with the best software and development plans for their unique requirements. We have a dedicated team of expert consultants, developers and project managers to ensure that our customers not only receive a successful development process but also a collaborative strategic partner."
                              />
                              <AnimatedText
                                 className="text-[12px] lg:text-[13px] text-slate-600 font-medium leading-relaxed"
                                 text="Our efforts are directed towards assisting our clients in creating a dominant web presence backed with robust software. Websites that we develop are the right blend of creativity, modern design, latest web standards, secure codes and Search Engine friendly web-pages."
                              />
                           </div>

                           <AnimatedText
                              className="text-[12px] lg:text-[13px] text-slate-600 font-medium leading-relaxed"
                              text="E-commerce is the latest trend for selling your products and services across the web. With the availability of online payment gateway, online integration with shipping companies like UPS etc., inventory management, online support, global reach. Therefore setting up an e-commerce website is the most convenient and most cost effective way of buying/selling products/services."
                           />

                           <AnimatedText
                              className="text-[12px] lg:text-[13px] text-slate-700 font-bold leading-relaxed italic border-t border-slate-100 pt-4"
                              text="Earlier nobody can think of about e-commerce or web shopping. Now trends are changing—people want everything at their doorstep and e-commerce made it possible. In today's environment, everyone is so busy that they want products to be delivered to them just by making a few clicks."
                           />
                        </div>
                     </div>

                     {/* COMPACT EXPERTISE TAGS */}
                     <div className="pt-2 space-y-3">
                        <h3 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                           <div className="w-4 h-px bg-slate-100" />
                           Core Specialization
                        </h3>

                        <div className="flex flex-wrap gap-2">
                           {[
                              "Shaping Cart",
                              "Shopping Carts",
                              "E-commerce Portals"
                           ].map((item, i) => (
                              <motion.div
                                 key={i}
                                 initial={{ opacity: 0, x: -5 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ delay: i * 0.05 }}
                                 viewport={{ once: true }}
                                 className="flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-slate-50 border border-slate-100 font-black text-slate-800 text-[10px] hover:bg-white hover:border-indigo-100 transition-all cursor-default"
                              >
                                 <div className="w-1 h-1 rounded-full bg-indigo-500" />
                                 {item}
                              </motion.div>
                           ))}
                        </div>
                     </div>

                     {/* ULTRA-COMPACT VALUE MARKERS */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-4">
                        {[
                           { icon: Globe, label: "User Friendly" },
                           { icon: CreditCard, label: "Reasonable Price" },
                           { icon: ShieldCheck, label: "On Time Delivery" },
                           { icon: BarChart, label: "Quality Assurance" }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-50 hover:border-indigo-50 transition-all shadow-sm shadow-indigo-500/[0.02]">
                              <div className="p-1.5 rounded-lg bg-indigo-50/50 text-indigo-600 shrink-0">
                                 <item.icon size={14} />
                              </div>
                              <span className="text-[9px] font-black text-slate-800 uppercase tracking-widest leading-none">
                                 {item.label}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT SIDE VISUAL ELEMENT */}
                  <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                     <motion.div
                        initial={{ opacity: 0, rotateY: 15 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 1.2 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-xl border-2 border-white"
                     >
                        <img src={imgEcommerce} alt="Global Trade Hub" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                           <span className="text-white text-[9px] font-black uppercase tracking-[0.4em] opacity-80">Market Analytics</span>
                           <h4 className="text-white text-lg font-bold">Global Scaling Engine</h4>
                        </div>
                     </motion.div>

                     <div className="p-6 rounded-[2rem] bg-slate-900 text-white space-y-4">
                        <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">Optimization</h5>
                        <p className="text-[12px] font-medium text-slate-300 leading-relaxed">
                           We turn complex selling ideas of merchants worldwide into simple e-commerce models that make shopping fun for customers.
                        </p>
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                           <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">System v4.0</span>
                           <div className="flex gap-1">
                              {[0, 1, 2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-indigo-500" />)}
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
