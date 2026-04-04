import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, Globe, Target, Cpu, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

// Import Assets
import imgWorkspace from '../assets/overview/overview_workspace.png';
import imgNetwork from '../assets/overview/overview_network.png';
import imgHero from '../assets/overview/company_overview.png';

export default function CompanyOverview() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

   const leftImageRef = useRef(null);
   const rightImageRef = useRef(null);

   const headingChars = "Company Overview.".split("");
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
         transition: { staggerChildren: 0.015, delayChildren: 0.05 }
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);

      // Floating animation for images
      gsap.to(leftImageRef.current, {
         y: -20,
         duration: 3,
         repeat: -1,
         yoyo: true,
         ease: "power1.inOut"
      });

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
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[350px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
            <ThreeNeuralStorm />
            <ParticleNetwork />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="space-y-3"
               >
                  <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span
                           key={index}
                           variants={child}
                           className={index >= 8 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                        >
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
                     Engineering Global Digital Success Since 2018.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* AGENCY OVERVIEW */}
         <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                  {/* LEFT: WORKSPACE IMAGE */}
                  <div className="lg:col-span-5 relative" ref={leftImageRef}>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(79,70,229,0.15)] border-8 border-white/80 backdrop-blur-md"
                     >
                        <img src={imgWorkspace} alt="Agency Workspace" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent" />
                     </motion.div>
                  </div>

                  {/* RIGHT: NARRATIVE */}
                  <div className="lg:col-span-7 space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-indigo-600" />
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Enterprise Identity</span>
                     </div>

                     <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight italic">
                           Agency <span className="text-indigo-600 not-italic">Overview.</span>
                        </h2>
                        <AnimatedText
                           className="text-[16px] lg:text-[18px] font-bold text-slate-800 leading-relaxed tracking-tight font-secondary max-w-4xl"
                           text="WebUltraSolution Services is a proficiency-driven Web Design, Software Development, and IT agency headquartered in Noida. Serving as a comprehensive offshore service provider for the USA, we cater to the diverse design and IT infrastructure needs of both corporate entities and enterprise projects."
                        />
                        <AnimatedText
                           className="text-[13px] lg:text-[14px] text-slate-600 font-medium leading-relaxed max-w-2xl"
                           text="With a wealth of experience in Custom Software Development, Mobile Apps, and SEO, WebUltraSolution has consistently delivered top-notch digital solutions globally. We excel in remote infrastructure management, data center services, and security compliance."
                        />

                        {/* Profile Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                           {[
                              { name: "Company Profile", color: "bg-indigo-600" },
                              { name: "Website Profile", color: "bg-blue-600" },
                              { name: "Social Profile", color: "bg-slate-900" }
                           ].map((btn, i) => (
                              <motion.button
                                 key={i}
                                 whileHover={{ scale: 1.05, y: -2 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={`${btn.color} px-6 py-3 rounded-xl text-white text-[9px] font-black uppercase tracking-[0.25em] shadow-lg transition-all`}
                              >
                                 View {btn.name}
                              </motion.button>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* COMMITMENT & NETWORK */}
         <section className="relative py-10 lg:py-20 bg-slate-50/50 overflow-hidden border-y border-slate-100">
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                  {/* LEFT: PHILOSOPHY */}
                  <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="h-[2px] w-8 bg-indigo-600" />
                           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em]">Core Philosophy</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none flex flex-wrap gap-x-3">
                           Ensuring <span className="text-indigo-600 not-italic">Client Contentment</span>
                        </h3>
                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-xl">
                           At the core of our operations lies a commitment to customer satisfaction, which serves as our driving force. Our growth is intricately tied to meeting your needs at the highest level of rigorous technological demand.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 gap-4">
                        {[
                           { title: "Strategic Team Work", icon: Target, desc: "Collaborating with our team members to enhance the elite success of our global clients." },
                           { title: "Embracing Diversity", icon: Globe, desc: "Appreciating the distinctive blend of qualities and contributions of every individual." },
                           { title: "Emphasizing Excellence", icon: CheckCircle2, desc: "Placing a premium on the pursuit of quality in every single pixel and line of code." }
                        ].map((item, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: i * 0.1 }}
                              className="group flex gap-6 items-start p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                           >
                              <div className="w-10 h-10 rounded-2xl bg-indigo-50/50 flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                 <item.icon size={20} className="group-hover:rotate-12 transition-transform" />
                              </div>
                              <div className="space-y-1">
                                 <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item.title}</h4>
                                 <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT: INFOGRAPHIC */}
                  <div className="lg:col-span-6 relative order-1 lg:order-2" ref={rightImageRef}>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] border-8 border-white/90"
                     >
                        <img src={imgNetwork} alt="Digital Infrastructure" className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                     </motion.div>

                     {/* Stats Overlay */}
                     <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl border border-slate-100 z-10 flex flex-col items-center gap-1 group scale-90">
                        <TrendingUp size={24} className="text-indigo-600 mb-1 group-hover:scale-125 transition-transform" />
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">100%</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Reliability Rate</span>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* CALL TO ACTION */}
         <section className="py-16 relative overflow-hidden bg-slate-900 border-t border-white/5">
            <div className="absolute inset-0 opacity-20">
               <ThreeNeuralStorm />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
               <div className="space-y-3">
                  <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.6em] block">Partner With Us</span>
                  <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                     Discuss <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400">Your Vision.</span>
                  </h2>
                  <p className="text-slate-400 font-medium text-[14px] lg:text-[15px] max-w-3xl mx-auto leading-relaxed pt-1">
                     Do you have a project and want to discuss with us? We are well-equipped to support you with Website Services, E-commerce solutions, CMS, Mobile Apps, SEO, and GUI & UX Designing.
                  </p>
               </div>

               <div className="flex justify-center">
                  <motion.button
                     whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
                     whileTap={{ scale: 0.95 }}
                     className="px-10 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
                  >
                     Get Started Now
                  </motion.button>
               </div>
            </div>
         </section>
      </div>
   );
}
