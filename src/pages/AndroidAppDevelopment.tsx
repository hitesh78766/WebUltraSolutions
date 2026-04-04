import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Smartphone, Zap, Shield, Cpu, Target, Layers, Globe, Monitor, Code2, Smartphone as PhoneIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAndroidArchitecture from '../components/ThreeAndroidArchitecture';
import imgArchitecture from '../assets/android_architecture_elite_blueprint_1775317450948.png';

export default function AndroidAppDevelopment() {
   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const headingChars = "Android App Development".split("");
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
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden text-slate-900">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[280px] flex items-center justify-center bg-[#fafbff] border-b border-indigo-50/50 overflow-hidden text-center">
            <ThreeAndroidArchitecture />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                  className="space-y-4"
               >
                  <h1 className="text-3xl lg:text-5xl font-black leading-[1.1] tracking-tighter uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span key={index} variants={child} className={index >= 12 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 whitespace-pre" : "whitespace-pre"}>
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[13px] font-black text-slate-500 uppercase tracking-[0.25em] max-w-2xl mx-auto leading-relaxed">
                     webultrasolution.org.in offers end-to-end solutions for custom mobile app development.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* CONTENT PORTAL: ROW 1 (TEXT L + IMAGE R) */}
         <section className="relative py-12 lg:py-20 bg-white overflow-hidden border-t border-slate-50 px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start max-w-[1300px] mx-auto">
               
               {/* LEFT CONTENT: TECHNICAL NARRATIVE */}
               <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-8">
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-[2px] bg-indigo-600" />
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Mobile Engineering</span>
                     </div>
                     <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
                        Premier <span className="text-indigo-600">Android Ecosystems.</span>
                     </h2>
                     
                     <div className="space-y-6">
                        <AnimatedText
                           className="text-[15px] lg:text-[16px] font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-indigo-600 pl-4"
                           text="webultrasolution.org.in offers end-to-end solutions for custom mobile app development and support, from solutions, design and development, through the launch and maintenance of custom mobile apps. We Plan, Design & Develop Mobile Apps - employing platform functionalities to build high quality custom apps. We understand devices, leverage its functionalities, screen sizes and technical features to the full extent."
                        />
                        <AnimatedText
                           className="text-[13px] text-slate-600 font-bold leading-relaxed"
                           text="Android has broken the ice in the OS industry and has enabled its user to explore the world of ease. Android is everywhere, and it has enhanced the use of Mobiles device. the factors which put Android an outstanding Operating system is its light weight and compatibility will the hardware devices. It has enabled developers to create more user-friendly applications and the user experience is awesome."
                        />
                        
                        <AnimatedText
                           className="text-[12px] text-slate-500 font-bold leading-relaxed opacity-90"
                           text="Android is now being used by Billions of users across the world and it has substantially impacted the business across the Mobile Market. Our developers have studied the impact which has positively helped the business to grow and develop their business utilities. Our developers are assisting our clients to develop the lightweight application to handle the traffic coming from the web. Our development center in Noida, India minimizes costs while delivering a spectrum of online solutions including E-Commerce, Design, Branding and Online Applications."
                        />
                     </div>
                  </div>
               </div>

               {/* RIGHT CONTENT: 3D BLUEPRINT IMAGE */}
               <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 perspective-[1500px]">
                  <motion.div 
                     initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                     whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                     whileHover={{ 
                        rotateY: -10, 
                        rotateX: 5,
                        y: -10,
                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                     }}
                     transition={{ 
                        duration: 1.5, 
                        ease: [0.16, 1, 0.3, 1],
                        rotateY: { type: "spring", stiffness: 40, damping: 12 }
                     }}
                     className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white backdrop-blur-3xl transform-style-3d group cursor-pointer"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 group-hover:opacity-0 transition-opacity duration-700" />
                     <img 
                        src={imgArchitecture} 
                        alt="Android App Architecture Blueprint" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent opacity-60" />
                  </motion.div>
               </div>
            </div>

            {/* ROW 2: STRATEGIC HUBS (ULTRA-COMPACT ELITE PILLARS) */}
            <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-[1300px] mx-auto border-t border-slate-50 mt-10 pb-16">
               
               {/* HUB 1: STRATEGIC PILLAR (INVESTING IN MOBILE) */}
               <div className="lg:col-span-4 group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.06)] space-y-4 hover:translate-y-[-8px] hover:shadow-[0_35px_60px_-15px_rgba(79,70,229,0.1)] hover:border-indigo-100 transition-all duration-500 overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50/50 rounded-bl-[2rem] rotate-45 translate-x-10 -translate-y-10 transition-transform group-hover:translate-x-8 group-hover:-translate-y-8" />
                     
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:rotate-[10deg] transition-transform">
                           <Zap size={20} />
                        </div>
                        <div className="space-y-0.5">
                           <h4 className="text-[12px] font-black text-slate-900 tracking-[0.15em] uppercase">Investing In Mobile</h4>
                           <p className="text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Growth Vector</p>
                        </div>
                     </div>

                     <div className="space-y-1.5 pt-1">
                        {[
                           "Access anywhere, anytime",
                           "Real-time engagement",
                           "Fast & Intuitive Interface",
                           "Seamless Mobile Payments",
                           "Loyalty Integration",
                           "Real-time Pulse Alerts"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50/50 border border-slate-100 group-hover:bg-white transition-all">
                              <span className="text-[11px] font-bold text-slate-600 group-hover:text-slate-900 leading-tight">{item}</span>
                              <div className="w-1 h-1 rounded-full bg-indigo-600 opacity-60" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* HUB 2: TECHNICAL PILLAR (ADVANTAGE) */}
               <div className="lg:col-span-4 group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.06)] space-y-4 hover:translate-y-[-8px] hover:shadow-[0_35px_60px_-15px_rgba(59,130,246,0.1)] hover:border-blue-100 transition-all duration-500 overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-[2rem] rotate-45 translate-x-10 -translate-y-10 transition-transform group-hover:translate-x-8 group-hover:-translate-y-8" />
                     
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:rotate-[-10deg] transition-transform">
                           <Shield size={20} />
                        </div>
                        <div className="space-y-0.5">
                           <h4 className="text-[12px] font-black text-slate-900 tracking-[0.15em] uppercase">Technical Advantage</h4>
                           <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">Platform Core</p>
                        </div>
                     </div>

                     <div className="space-y-1.5 pt-1">
                        {[
                           "Elite Customer Support",
                           "Social Standby Modules",
                           "Market Edge Positioning",
                           "Lightweight Architecture",
                           "Hardware Optimization",
                           "Premier User Experience"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50/50 border border-slate-100 group-hover:bg-white transition-all">
                              <span className="text-[11px] font-bold text-slate-600 group-hover:text-slate-900 leading-tight">{item}</span>
                              <div className="w-1 h-1 rounded-full bg-blue-600 opacity-60" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* HUB 3: SYSTEM READOUT (EVOLUTION) */}
               <div className="lg:col-span-4 group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="relative p-5 rounded-[1.5rem] bg-white border border-indigo-50 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.06)] space-y-4 hover:translate-y-[-8px] hover:shadow-[0_35px_60px_-15px_rgba(79,70,229,0.1)] hover:border-indigo-200 transition-all duration-700 overflow-hidden h-full flex flex-col justify-between">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500" />
                     <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-50/50 blur-2xl rounded-full" />
                     
                     <div className="space-y-4">
                        <div className="space-y-1">
                           <h3 className="text-lg font-black tracking-tight uppercase leading-tight text-slate-900">Android <span className="text-indigo-600">Evolution.</span></h3>
                           <p className="text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-[0.2em]">Executing High-Status Mobile Architectures.</p>
                        </div>

                        <div className="space-y-1.5">
                           {[
                              { label: "Design Flow", icon: Layers, val: "Optimal" },
                              { label: "Functionality", icon: Cpu, val: "Validated" },
                              { label: "Screen Sizes", icon: Monitor, val: "Adaptive" },
                              { label: "Presence", icon: Target, val: "Certified" }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50/50 border border-slate-100 group-hover:bg-white transition-all">
                                 <div className="flex items-center gap-2.5">
                                    <item.icon size={14} className="text-indigo-600" />
                                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{item.label}</span>
                                 </div>
                                 <span className="text-[8px] font-black py-0.5 px-1.5 bg-indigo-50 text-indigo-600 rounded uppercase">{item.val}</span>
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
