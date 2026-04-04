import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Smartphone, Layers, Shield, Zap, ChevronRight, Monitor, Tablet, Globe, Terminal, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAppArchitecture from '../components/ThreeAppArchitecture';
import imgArchitecture from '../assets/app_architecture_blueprint.png';

export default function AppDevelopment() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

   const headingChars = "Application Development".split("");
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
         transition: { staggerChildren: 0.012, delayChildren: 0.1 }
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

   return (
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[280px] flex items-center justify-center bg-[#fafbff] border-b border-indigo-50/50 overflow-hidden">
            <ThreeAppArchitecture />
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                  className="space-y-4"
               >
                  <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-[0.06em] uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span key={index} variants={child} className={index >= 12 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 whitespace-pre" : "whitespace-pre"}>
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[13px] font-black text-slate-500 uppercase tracking-[0.25em] max-w-5xl mx-auto leading-relaxed text-center">
                     webultrasolution.com stands out as one of the premier enterprise mobile application development companies in India.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* NEXUS CONTENT PORTAL */}
         <section className="relative py-12 lg:py-20 bg-white overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                  
                  {/* LEFT COLUMN: PRIMARY NARRATIVE */}
                  <div className="lg:col-span-7 space-y-10">
                     <div className="space-y-6">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-[2px] bg-indigo-600" />
                           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">System Architecture</span>
                        </div>
                        <h2 className="text-3xl lg:text-[42px] font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                           Platform Engineering <span className="text-indigo-600">Simplified.</span>
                        </h2>
                        
                        <div className="space-y-6 max-w-2xl">
                           <p className="text-[14px] lg:text-[15px] font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-indigo-600 pl-4 bg-slate-50/50 py-2 rounded-r-lg">
                              webultrasolution.org.in stands as one of the premier enterprise mobile application development companies in India. Our expertise lies in building Android and IOS applications supported by a strong cloud-based backend infrastructure.
                           </p>
                           <p className="text-[12px] text-slate-600 font-bold leading-relaxed">
                              The value a mobile app creates and the ability it gives you to engage customers is really incredible. A mobile app can be a game changer in your business. By investing in mobile engineering, you can outstandingly energize your business performance. With the surge in smartphone usage for shopping and communication, it is a golden time for businesses to jump to the next level.
                           </p>
                           <p className="text-[12px] text-slate-500 font-bold leading-relaxed opacity-80">
                              Since 2007, we have developed over 200 native consumer and enterprise apps for mobile platforms including IOS and Android. As members of the IOS App Developer Program and a registered Google Play Developer, we have access to the latest frameworks and SDKs to develop updated and cutting-edge apps.
                           </p>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                           { name: "IOS Development", icon: Smartphone },
                           { name: "Android Ecosystem", icon: Smartphone },
                           { name: "IoT Integration", icon: Cpu }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 hover:bg-white transition-all shadow-sm">
                              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                 <item.icon size={16} />
                              </div>
                              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-tight">{item.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT COLUMN: ARCHITECTURAL VISUAL (GUARANTEED 3D FLIP) */}
                  <div className="lg:col-span-5 relative group perspective-[2500px]">
                     <motion.div
                        initial={{ rotateY: 90, opacity: 0, x: 50 }}
                        whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                           duration: 1.8, 
                           ease: [0.16, 1, 0.3, 1],
                           rotateY: { type: "spring", stiffness: 35, damping: 15 }
                        }}
                        whileHover={{ 
                           rotateY: -12, 
                           rotateX: 5, 
                           scale: 1.04,
                           transition: { type: "spring", stiffness: 400, damping: 12 }
                        }}
                        className="relative rounded-3xl overflow-hidden bg-white shadow-[0_60px_110px_-25px_rgba(79,70,229,0.3),0_20px_40px_-15px_rgba(79,70,229,0.15)] border border-indigo-100/40 transform-gpu z-10 preserve-3d"
                     >
                        <img 
                           src={imgArchitecture} 
                           alt="App Architecture Blueprint" 
                           className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-white/30 pointer-events-none" />
                        
                        {/* HI-TECH SCANLINE OVERLAY */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     </motion.div>
                  </div>
               </div>

               {/* ROW 2: PLATFORM SPECIALIZATION (3D ENTRANCE GRID) */}
               <div className="pt-20 mt-16 border-t border-slate-100">
                  <div className="mb-10 text-center">
                     <h3 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-2">Platform Specialization</h3>
                     <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Universal <span className="text-indigo-600 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Device Mastery.</span></h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[2000px]">
                     {[
                        { title: "iPhone App Dev", desc: "Building technically polished, gorgeous apps that provide superior user experiences is our core mission for the iOS ecosystem.", icon: Smartphone },
                        { title: "iPad App Dev", desc: "Our developers create proficient, project-managed iPad apps, assisting from inception to App Store submission.", icon: Tablet },
                        { title: "Android App Dev", desc: "With Google Play hosting millions of apps, we help you reach your niche with substantial prospect engagement.", icon: Smartphone },
                        { title: "HTML5 Development", desc: "Dreaming of providing fast, responsive, and secure experiences across all platforms? Our HTML5 solutions deliver it all.", icon: Globe },
                        { title: "Blackberry Integration", desc: "Reliable RIM-based solutions for enterprises that still rely on Blackberry's unique security-first features.", icon: Shield },
                        { title: "Windows Multi-Platform", desc: "Gaining early mover advantage on Windows platforms with increasingly mature and professional functionality.", icon: Monitor }
                     ].map((item, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 50, rotateX: 45, rotateY: 30 }}
                           whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                           transition={{ 
                              delay: 0.1 * i, 
                              duration: 1.2, 
                              rotateY: { type: "spring", stiffness: 45, damping: 15 }
                           }}
                           whileHover={{ 
                              y: -12, 
                              rotateY: -5,
                              rotateX: 5,
                              transition: { type: "spring", stiffness: 400, damping: 10 }
                           }}
                           className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.08)] space-y-5 hover:border-indigo-200/50 hover:shadow-[0_45px_70px_-20px_rgba(79,70,229,0.12)] transition-all group overflow-hidden transform-gpu"
                        >
                           <div className="flex items-center gap-4">
                              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-600/5 group-hover:rotate-[10deg]">
                                 <item.icon size={18} />
                              </div>
                              <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-tight leading-tight">{item.title}</h4>
                           </div>
                           <p className="text-[12px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                           
                           {/* DECORATIVE BACKGROUND LIGHT */}
                           <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
