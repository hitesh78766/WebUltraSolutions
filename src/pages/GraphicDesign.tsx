import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
   Layout,
   Compass,
   UserCheck,
   Mail,
   Box,
   FileText,
   PenTool,
   Grid,
   Disc,
   Type,
   CreditCard,
   Files
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

export default function GraphicPage() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

   // THE BOUNCY LETTER LOGIC
   const headingChars = "Graphic Design.".split("");
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
   
   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* THE COMPACT FLAGSHIP HERO */}
         <section className="relative h-[250px] lg:h-[300px] flex items-center justify-center bg-[#f8fafc] border-b border-slate-100 overflow-hidden">
            <ThreeNeuralStorm />
            
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
                           className={index >= 7 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                        >
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
                     Our Graphics developed for use on the web are specifically formatted for the internet and designed for visual impact.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* THE ARCHITECTURAL WHITE PAPER - COMPACT REFINEMENT */}
         <section className="py-12 lg:py-16 bg-[#fcfdfe] flex items-center overflow-hidden border-t border-slate-50">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
               
               {/* PRIMARY NARRATIVE - TYYOGRAPHY FIRST */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
                  
                  {/* Philosophy Segment */}
                  <div className="lg:col-span-12 space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-indigo-600" />
                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Strategic Intent</span>
                     </div>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        <div className="space-y-6">
                           <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                              Unbound Imagination & <span className="text-indigo-600">Expertise.</span>
                           </h2>
                           <p className="text-[17px] font-bold text-slate-700 leading-snug tracking-tight font-secondary">
                              Our expert Graphic designers at webultrasolution have unbound imagination and professional expertise to deliver a graphic design solution <span className="italic text-slate-400">scalable to your message.</span>
                           </p>
                           <div className="h-px w-full bg-slate-100" />
                           <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                              Our each and every graphics requirement comes as an individual challenge and we push ourselves to the limits to create something distinct which belongs to only you. We employ universally recognized and established visual principles and elements.
                           </p>
                        </div>

                        <div className="space-y-8 lg:pt-2">
                           <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                              These graphics for the web may include photos, Flash animation services, illustration, and other forms of media. If needed, webultrasolution can also reconsider your existing print logos for use on the web.
                           </p>
                           <div className="pl-6 border-l-2 border-indigo-50">
                              <p className="text-[13px] font-bold text-slate-600 leading-relaxed italic">
                                 "We ensure that graphics created for the web are fast loading, easy to navigate and enhance your web solutions overall ranking in search engine and directories."
                              </p>
                           </div>
                           <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                              We employ technology bundled with creativity to create fresh, innovative and conceptual designs that are bound to stand out. We can also design new graphics to be used in print from existing logos used on the web.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* CAPABILITY INDEX - COMPACT GRID WITH COLORED ICONS */}
                  <div className="lg:col-span-12 pt-10 border-t border-slate-50">
                     <div className="flex items-center gap-6 mb-12 group">
                        <div className="px-4 py-2 bg-indigo-600 rounded-lg text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20">
                           01 CAPABILITY INVENTORY
                        </div>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-indigo-600/20 to-transparent" />
                     </div>

                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12">
                        {[
                           { t: "Brand Foundation", i: Compass },
                           { t: "Corporate Presentation", i: Layout },
                           { t: "Visiting Card", i: UserCheck },
                           { t: "Envelopes", i: Mail },
                           { t: "Package Design", i: Box },
                           { t: "Letterhead Design", i: FileText },
                           { t: "Logo & Icon Design", i: PenTool },
                           { t: "Stationery Design", i: Grid },
                           { t: "CD Cover Design", i: Disc },
                           { t: "Naming & Tagline", i: Type },
                           { t: "Business Card Design", i: CreditCard },
                           { t: "Flyers & Catalogs", i: Files }
                        ].map((item, i) => (
                           <div key={i} className="group/item flex flex-col gap-3">
                              <div className="flex items-start gap-4">
                                 <span className="text-[10px] font-black text-indigo-600 tracking-tighter pt-1 pb-1 px-1.5 rounded-md bg-indigo-50 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                                    {(i + 1).toString().padStart(2, '0')}
                                 </span>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                       <item.i size={16} className="text-indigo-600 group-hover/item:scale-125 transition-transform" />
                                       <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-widest group-hover/item:text-indigo-600 transition-colors">{item.t}</h4>
                                    </div>
                                    <div className="h-[2px] w-4 bg-indigo-100 group-hover/item:w-full group-hover/item:bg-indigo-600 transition-all duration-700" />
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </div>
   );
}
