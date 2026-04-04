 import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Star, Cpu, Terminal, Zap, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

export default function PhpDevelopment() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

   const headingChars = "PHP Development".split("");
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

   const features = [
      "Web Application Development",
      "Open Source Web Development",
      "SEO Web Development",
      "PHP Web Development",
      "Custom CMS Development",
      "Custom eCommerce Web Development",
      "End-to-end PHP development solutions, tailored made to suit the requirements of the individual projects",
      "100% unique and quality rich custom PHP web development solutions & proven development process that is cost efficient and real-time value",
      "24/7 customer support, strong technical support with unified communication",
      "Dashboard to Manage Your Backend Management"
   ];

   return (
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
         {/* HERO SECTION - Specialized "Wavy Grid" Persona */}
         <section className="relative h-[200px] lg:h-[300px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-50/30 overflow-hidden shadow-sm">
            <ThreeSolutionBackground />

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
                     className="text-[11px] lg:text-[13px] font-bold text-slate-600 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed italic"
                  >
                     "Crafting PHP websites and applications that yield results for your unique development requirements."
                  </motion.p>
               </motion.div>
            </div>
         </section>

         {/* CONTENT BLOCK 1 - Matched Typography */}
         <section className="relative py-12 lg:py-20 bg-white overflow-hidden border-b border-slate-50">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-8 lg:pr-12 space-y-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="h-[2px] w-8 bg-indigo-600" />
                           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em]">Development Hub</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-orange-500 tracking-tighter uppercase leading-[0.95] italic">
                           PHP Web Development
                        </h2>
                     </div>

                     <div className="space-y-6">
                        <div className="p-6 bg-slate-50 border-l-4 border-indigo-600 rounded-r-xl shadow-sm">
                           <AnimatedText
                              className="text-[16px] font-bold text-slate-800 leading-relaxed tracking-tight"
                              text="Result-driven PHP websites & applications for your custom development needs."
                           />
                        </div>
                        <AnimatedText
                           className="text-[14px] text-slate-600 font-medium leading-relaxed"
                           text="Our efforts are directed towards assisting our clients in creating a dominant web presence backed with robust software. Websites that we develop are the right blend of creativity, modern design, latest web standards, secure codes and Search Engine friendly web-pages."
                        />
                     </div>

                     {/* Features Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {features.map((feature, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.02 }}
                              className={`group flex items-start gap-4 ${i >= 6 ? 'md:col-span-2' : ''}`}
                           >
                              <div className="mt-1 flex-shrink-0">
                                 <Star size={14} className="text-indigo-600 fill-indigo-600" strokeWidth={2.5} />
                              </div>
                              <span className="text-[12px] font-bold text-slate-700 group-hover:text-indigo-600 transition-colors leading-tight">
                                 {feature}
                              </span>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  <div className="lg:col-span-4 flex items-center justify-center lg:sticky lg:top-40">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-[350px] lg:max-w-none"
                     >
                        <div className="absolute -inset-10 bg-indigo-50/40 blur-3xl rounded-full opacity-40" />
                        <img 
                           src="/php_development_illustration.png" 
                           alt="PHP Development Ecosystem" 
                           className="relative z-10 w-full transform hover:translate-y-[-10px] transition-transform duration-500 rounded-2xl shadow-xl"
                        />
                     </motion.div>
                  </div>

               </div>
            </div>
         </section>

         {/* TECHNOLOGY EXPERTISE SECTION - Refined Elite "Folded Light" UI */}
         <section className="relative pt-10 lg:pt-12 pb-10 lg:pb-14 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
                   <div className="space-y-4">
                       <div className="flex items-center gap-2">
                           <Layers size={18} className="text-indigo-600" />
                           <h2 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.3em]">Technical Specialization</h2>
                       </div>
                       <h3 className="text-3xl lg:text-5xl font-black text-indigo-900 tracking-tighter uppercase">
                          Technology <span className="text-indigo-600">Expertise</span>
                       </h3>
                   </div>
                   <p className="text-indigo-950 text-[11px] font-black uppercase tracking-[0.4em] max-w-xs md:text-right leading-relaxed opacity-80">
                       Elevating backend efficiency through proven server-side engineering.
                   </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 relative font-primary">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                     viewport={{ once: true }}
                     className="group bg-gradient-to-br from-white via-white to-slate-50/80 p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.06)] hover:shadow-[0_50px_90px_-20px_rgba(79,70,229,0.12)] transition-all duration-700 cursor-default relative overflow-hidden"
                  >
                     {/* Folded Corner Effect - Static Light Version with Kinetic Flip */}
                     <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 group-hover:bg-indigo-50 transition-all duration-700 origin-top scale-[1.01] group-hover:scale-y-[-1] z-20">
                        <div className="absolute bottom-0 left-0 w-[145%] h-[2.5px] bg-slate-200 rotate-[135deg] origin-left shadow-[0_1px_2px_rgba(0,0,0,0.05)]" />
                     </div>
                     
                     <div className="relative z-10 space-y-5">
                        <div className="flex items-center gap-3">
                           <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl text-white shadow-2xl shadow-indigo-100 group-hover:rotate-[15deg] transition-transform duration-500">
                              <Terminal size={18} />
                           </div>
                           <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-indigo-50 pb-1">Logic Integration</h4>
                        </div>
                        <AnimatedText
                           className="text-[12px] text-slate-600 font-medium leading-[1.8]"
                           text="PHP code offers seamless integration with HTML or can be utilized alongside various templating engines and web frameworks. Typically processed by a PHP interpreter, implemented as a web server's native module or a Common Gateway Interface (CGI) executable, the interpreted and executed PHP code results in the web server sending output to its client."
                        />
                     </div>
                  </motion.div>
                  
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="group bg-gradient-to-br from-white via-white to-slate-50/80 p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.06)] hover:shadow-[0_50px_90px_-20px_rgba(79,70,229,0.12)] transition-all duration-700 cursor-default relative overflow-hidden"
                  >
                     {/* Folded Corner Effect - Static Light Version with Kinetic Flip */}
                     <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 group-hover:bg-indigo-50 transition-all duration-700 origin-top scale-[1.01] group-hover:scale-y-[-1] z-20">
                        <div className="absolute bottom-0 left-0 w-[145%] h-[2.5px] bg-slate-200 rotate-[135deg] origin-left shadow-[0_1px_2px_rgba(0,0,0,0.05)]" />
                     </div>

                     <div className="relative z-10 space-y-5">
                        <div className="flex items-center gap-3">
                           <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl text-white shadow-2xl shadow-indigo-100 group-hover:rotate-[15deg] transition-transform duration-500">
                              <Cpu size={18} />
                           </div>
                           <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-indigo-50 pb-1">Runtime Execution</h4>
                        </div>
                        <div className="space-y-6">
                           <AnimatedText
                              className="text-[12px] text-slate-600 font-medium leading-[1.8]"
                              text="This output may take the form of a portion of the generated web page, such as HTML code, an image, or other data. PHP has expanded its capabilities to include a command-line interface (CLI) and can be employed in standalone graphical applications."
                           />
                           <div className="p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border-l-[6px] border-indigo-600 shadow-sm">
                              <AnimatedText
                                 className="text-indigo-900 text-[11px] leading-relaxed font-bold italic relative z-10"
                                 text="As an open-source scripting language with versatile applications, PHP plays a crucial role in web development, facilitating the creation of dynamic web pages."
                              />
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="group bg-gradient-to-br from-white via-white to-slate-50/80 p-6 lg:p-8 rounded-2xl border border-slate-100 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.06)] hover:shadow-[0_50px_90px_-20px_rgba(79,70,229,0.12)] transition-all duration-700 cursor-default relative overflow-hidden"
                  >
                     {/* Folded Corner Effect - Static Light Version with Kinetic Flip */}
                     <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 group-hover:bg-indigo-50 transition-all duration-700 origin-top scale-[1.01] group-hover:scale-y-[-1] z-20">
                        <div className="absolute bottom-0 left-0 w-[145%] h-[2.5px] bg-slate-200 rotate-[135deg] origin-left shadow-[0_1px_2px_rgba(0,0,0,0.05)]" />
                     </div>

                     <div className="relative z-10 space-y-5">
                        <div className="flex items-center gap-3">
                           <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl text-white shadow-2xl shadow-indigo-100 group-hover:rotate-[15deg] transition-transform duration-500">
                              <Zap size={18} />
                           </div>
                           <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-indigo-50 pb-1">Global Scale</h4>
                        </div>
                        <div className="space-y-6">
                           <AnimatedText
                              className="text-[12px] text-slate-600 font-medium leading-[1.8]"
                              text="Testament to its popularity, over 20 million sites have been developed using PHP, installed on more than a million servers dedicated to web technology. Given the imperative need for businesses to have reliable and fast solutions."
                           />
                           <div className="pt-6 border-t border-slate-100 relative group/quote">
                              <div className="absolute top-0 left-0 w-12 h-[2px] bg-indigo-600 group-hover/quote:w-24 transition-all duration-700" />
                              <AnimatedText
                                 className="text-indigo-900 text-[12px] font-black capitalize tracking-[0.05em] leading-relaxed"
                                 text="The expertise of a Website Development Company is essential for crafting quality solutions through PHP techniques."
                              />
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






