import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, Globe, Target, Cpu, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

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
         <section className="relative min-h-[300px] lg:min-h-[350px] flex items-center justify-center bg-[#f8fafc] border-b border-slate-100 overflow-hidden pt-8">
            <ThreeSolutionBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="flex flex-col items-center gap-6"
               >
                  {/* Elite Identity Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-200/50 bg-white/40 backdrop-blur-md shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Enterprise Excellence</span>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-[1.05] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ABOUT WEBULTRASOLUTION.";
                        return title.split(" ").map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-4">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    variants={child}
                                    className={`inline-block ${word === "WEBULTRASOLUTION." ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600" : ""}`}
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

                  <p className="text-slate-500 text-sm lg:text-lg font-medium max-w-3xl leading-relaxed font-secondary">
                     Webultrasolution stands at the forefront of today's digital landscape, serving as a proficient offshore partner for the USA in realms of digital marketing, software design, and web development.
                  </p>

               </motion.div>
            </div>
         </section>

         {/* COMPANY OVERVIEW SECTION - ELITE IDENTITY (SUPER COMPACT) */}
         <section className="relative py-8 lg:py-12 bg-[#fdfdff] overflow-hidden">
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                  {/* LEFT: WORKSPACE IMAGE - CINEMATIC VIEW (RE-BALANCED) */}
                  <div className="lg:col-span-4 relative" ref={leftImageRef}>
                     <motion.div
                        initial={{ opacity: 0, x: -80, rotate: -3 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(79,70,229,0.2)] border-x-[12px] border-white backdrop-blur-2xl"
                     >
                        <img src={imgWorkspace} alt="Company Workspace" className="w-full h-auto object-cover hover:scale-110 transition-transform duration-[2s] ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-white/5 pointer-events-none" />

                        {/* Elite Indicator */}
                        <div className="absolute top-6 left-6">
                           <div className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none pt-0.5">Primary HQ</span>
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  {/* RIGHT: NARRATIVE - ELITE PRECISION (SUPER COMPACT) */}
                  <div className="lg:col-span-8 space-y-6">
                     <div className="space-y-6">
                        <div className="space-y-3">
                           <div className="flex items-center gap-3">
                              <div className="h-[1px] w-8 bg-indigo-500" />
                              <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.4em] leading-none pt-0.5">Identity Protocol</span>
                           </div>
                           <h2 className="text-3xl lg:text-[40px] font-black text-slate-900 tracking-tighter uppercase leading-[0.95] italic">
                              Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 not-italic">Overview.</span>
                           </h2>
                        </div>

                        <div className="space-y-4">
                           <AnimatedText
                              className="text-[15px] lg:text-[16px] font-bold text-slate-800 leading-relaxed text-left font-secondary border-l-4 border-indigo-600 pl-4 py-1"
                              text="Webultrasolution Services is a proficiency-driven Web Design, Software Development, and IT agency headquartered in Noida. Serving as a comprehensive offshore service provider for the USA, we cater to the diverse design and IT infrastructure needs of both corporate entities and enterprise projects. With a wealth of experience in Custom Software Development, Mobile Apps, and SEO, WebUltraSolution has consistently delivered top-notch digital solutions globally. As a low IT cost structure provider, source commitment to the user, we are committed to providing truly cost-effective, customized IT solutions that meet our client's rigorous technological demands."
                           />
                           <AnimatedText
                              className="text-[15px] lg:text-[16px] text-slate-500 font-medium leading-relaxed text-left"
                              text="Our minimum experience spans various industries, including Retail, enabling us to offer a unique value proposition and expertise that is tailored for our clients. From remote infrastructure management to end-user consulting, data center services, and security and compliance, WebUltraSolution excels in delivering comprehensive and seamless solutions."
                           />
                        </div>

                        {/* 
                        <div className="flex flex-wrap gap-3 pt-4">
                           {[
                              { label: "Company Profile", icon: CheckCircle2, gradient: "from-indigo-600 to-blue-700" },
                              { label: "Website Profile", icon: Globe, gradient: "from-blue-600 to-cyan-700" },
                              { label: "Social Profile", icon: Target, gradient: "from-slate-800 to-slate-950" }
                           ].map((item, idx) => (
                              <motion.button
                                 key={idx}
                                 whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
                                 whileTap={{ scale: 0.95 }}
                                 className={`bg-gradient-to-br ${item.gradient} px-6 py-3 rounded-xl text-white text-[9px] font-black uppercase tracking-[0.15em] shadow-xl shadow-indigo-100 flex items-center gap-2 transition-all`}
                              >
                                 <item.icon size={16} /> View {item.label}
                              </motion.button>
                           ))}
                        </div> 
                        */}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CORE PILLARS SECTION - ELITE ARCHITECTURE (ULTRA COMPACT) */}
         <section className="relative py-8 lg:py-12 bg-[#f8faff] overflow-hidden border-y border-slate-100">
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

                  {/* LEFT: FOUR PILLARS - ELITE GRID (ULTRA COMPACT) */}
                  <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {[
                           {
                              title: "Ensuring Client Contentment",
                              desc: "At the core of our operations lies a commitment to customer satisfaction, which serves as our driving force. Our growth is intricately linked to fulfilling our promises across diverse business vocations.",
                              icon: Target
                           },
                           {
                              title: "Strategic Team Work",
                              desc: "We strongly believe individual achievements collectively form a joint opportunity to collaborate and drive together toward embracing the success of our global clients.",
                              icon: Cpu
                           },
                           {
                              title: "Inclusive Diversity",
                              desc: "We embrace the distinctive blend of qualities and contributions that every individual brings to the workplace, fostering a culture of high-status innovation.",
                              icon: Globe
                           },
                           {
                              title: "Empowering Excellence",
                              desc: "Recognizing and appreciating the distinct combination of qualities that each individual brings, playing a pivotal role in the pursuit of absolute quality.",
                              icon: CheckCircle2
                           }
                        ].map((pillar, idx) => (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: idx * 0.1 }}
                              className="group p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1"
                           >
                              <div className="flex items-center gap-3 mb-4">
                                 <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                    <pillar.icon size={16} />
                                 </div>
                                 <h3 className="text-sm lg:text-[15px] font-black text-slate-900 tracking-[0.15em] uppercase group-hover:text-indigo-600 transition-colors leading-none mt-1">{pillar.title}</h3>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                 {pillar.desc}
                              </p>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* RIGHT: INFOGRAPHIC - ELITE PERSPECTIVE (SUPER COMPACT) */}
                  <div className="lg:col-span-4 relative order-1 lg:order-2" ref={rightImageRef}>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 3 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_50px_120px_-40px_rgba(0,0,0,0.15)] border-[12px] border-white"
                     >
                        <img src={imgNetwork} alt="Responsive Design Infographic" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />
                     </motion.div>

                     {/* Floating Stat Badge (SMALL) */}
                     <div className="absolute -bottom-6 -left-6 p-5 bg-white rounded-2xl shadow-2xl border border-slate-50 hidden lg:block group">
                        <div className="flex flex-col items-center gap-1.5">
                           <TrendingUp className="text-indigo-600 group-hover:scale-110 transition-transform" size={20} />
                           <span className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none italic">Elite</span>
                           <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Standards</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* CALL TO ACTION - ELITE LIGHT (SUPER COMPACT) */}
         {/* <section className="py-10 lg:py-12 relative overflow-hidden bg-white border-t border-slate-100">
            <div className="absolute inset-0 opacity-10">
               <ThreeSolutionBackground />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
               <div className="space-y-2">
                  <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.5em] block">Partner With Us</span>
                  <h2 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                     Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600">Your Vision.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-[12px] lg:text-[13px] max-w-3xl mx-auto leading-relaxed pt-1">
                     Do you have a project and want to discuss with us? We are well-equipped to support you with Website Services, E-commerce solutions, CMS, Mobile Apps, SEO, and GUI & UX Designing.
                  </p>
               </div>

               <div className="flex justify-center pt-1">
                  <motion.button
                     whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.2)' }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-3.5 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-indigo-100 transition-all"
                  >
                     Get Started Now
                  </motion.button>
               </div>
            </div>
         </section> */}
      </div>
   );
}
