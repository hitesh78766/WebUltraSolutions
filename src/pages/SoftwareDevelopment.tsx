import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Workflow, Shield, Monitor, Target, Globe, Code2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import imgBlueprint from '../assets/software_engineering_elite_blueprint_1775316282086.png';

export default function SoftwareDevelopment() {
   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const headingChars = "Software Development".split("");
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
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[280px] flex items-center justify-center bg-[#fafbff] border-b border-indigo-50/50 overflow-hidden">
            <ThreeSolutionBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-slate-900">
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                  className="space-y-4"
               >
                  <h1 className="text-3xl lg:text-5xl font-black leading-[1.1] tracking-[0.06em] uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span key={index} variants={child} className={index >= 9 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 whitespace-pre" : "whitespace-pre"}>
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[13px] font-black text-slate-500 uppercase tracking-[0.25em] max-w-5xl mx-auto leading-relaxed text-center">
                     webultrasolution has evolved as a true professional software company
                  </p>
               </motion.div>
            </div>
         </section>

         {/* SYSTEM CORE CONTENT PORTAL */}
         <section className="relative py-12 lg:py-20 bg-white overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  
                  {/* LEFT COLUMN: SYSTEM ARCHITECTURE (NARRATIVE) */}
                  <div className="lg:col-span-8 space-y-12">
                     <div className="space-y-8">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-[2px] bg-indigo-600" />
                           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Systems Engineering</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                           Bespoke <span className="text-indigo-600">Enterprise Solutions.</span>
                        </h2>
                        
                        <div className="space-y-6">
                           <AnimatedText
                              className="text-[15px] lg:text-[16px] font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-indigo-600 pl-4"
                              text="webultrasolution is the best Software development company in Noida, India offering complete web solutions with a commitment to surpass customer expectations by providing excellent and timely software solutions. webultrasolution utilizes the latest technology to bring fast and consistent results to grow our client brands. We take pride in offering innovative work ideas, Integrity and timely delivery of projects. We offer quality and affordable web solutions and software development solutions to both small size and enterprises to get a better web presence."
                           />
                           <AnimatedText
                              className="text-[13px] text-slate-600 font-bold leading-relaxed"
                              text="Software development and enterprise application Software development at webultrasolution has always been an ultimate panacea for distinct needs of clients' across domains."
                           />
                           
                           <AnimatedText
                              className="text-[12px] text-slate-500 font-bold leading-relaxed opacity-90"
                              text="webultrasolution has evolved as a true professional software company after successfully completing numerous client projects. We develop solutions that best meet the business objectives of our clients and ensure long-term value. Our solutions help you organize business and technology strategies cost effectively without compromising quality. webultrasolution is a leading Software Development and Payroll Software Company with a state of the art development center in Noida, India. webultrasolution is offering Software Development Services to self-regulating Software Vendors worldwide. We at webultrasolution provide affordable and quality services to various clients across the worldwide. Our Software Development Services include developing custom applications in E-Commerce Solutions Development, Offshore Outsourcing Services, Custom Applications Development, Application Integration, Payroll Software, Customer Relationship Management, Supply Chain Management etc. With the scalability and flexibility to support long-term growth, Development India's solutions provide a single point of accountability to promote rapid return on investment and low total cost of ownership. By using an iterative approach, we avoid 'surprises' at the end of the project. We want you and your employees to try out the software as we are developing it so that we can confirm that the business requirements are being met."
                           />
                        </div>
                     </div>
                  </div>

                  {/* RIGHT COLUMN: TECHNICAL HUB (3D BLUEPRINT + METRICS) */}
                  <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 perspective-[2000px]">
                     {/* ARCHITECTURAL BLUEPRINT IMAGE - 3D FLIP ENGINE */}
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
                           src={imgBlueprint} 
                           alt="Software Architecture Blueprint" 
                           className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent opacity-60" />
                        
                        {/* AMBIENT FLOATING DECORATIONS */}
                        <motion.div 
                           animate={{ y: [0, -10, 0] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full"
                        />
                     </motion.div>

                     {/* SYSTEM INTEGRITY SIDEBAR */}
                     <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(79,70,229,0.08)] space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 blur-3xl rounded-full" />
                        <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                           System Integrity
                        </h3>
                        
                        <div className="space-y-3">
                           {[
                              { label: "Accountability", value: "Single Point", icon: Shield },
                              { label: "Methodology", value: "Iterative Flow", icon: Workflow },
                              { label: "Return on Investment", value: "Rapid ROI", icon: Target },
                              { label: "Cost of Ownership", value: "Optimized TCO", icon: Cpu }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 group-hover:bg-white transition-all shadow-sm group-hover:shadow-indigo-500/5">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                       <item.icon size={12} />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">{item.label}</span>
                                 </div>
                                 <span className="text-[10px] font-black text-slate-900">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* CATEGORIZATION GRID: ULTRA COMPACT ELITE DATA HUBS (SINGLE ROW) */}
               <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 border-t border-slate-50 pt-6 pb-20">
                  {/* HUB 1: SOFTWARE ENGINEERING */}
                  <div className="lg:col-span-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 space-y-4 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 group">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                           <Code2 size={18} />
                        </div>
                        <h4 className="text-[12px] font-black text-slate-900 tracking-[0.15em] uppercase">Engineering Core</h4>
                     </div>
                     <ul className="grid grid-cols-1 gap-y-1.5 pl-1">
                        {[
                           "Billing Services", "Security Systems", 
                           "Inventory Core", "CRM Solution", 
                           "eLearning Module", "Academic Platform"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-500 transition-colors group-hover:text-slate-900">
                              <div className="w-1 h-1 rounded-full bg-indigo-400 opacity-30" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* HUB 2: GOVERNMENT SECTOR */}
                  <div className="lg:col-span-4 p-4 rounded-2xl bg-white border border-blue-50 shadow-xl shadow-blue-100/40 space-y-4 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-500 group/govt">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-600 text-white shadow-lg group-hover/govt:scale-110 transition-transform">
                           <Globe size={18} />
                        </div>
                        <h4 className="text-[12px] font-black text-slate-900 tracking-[0.15em] uppercase">Government Sector</h4>
                     </div>
                     <ul className="grid grid-cols-1 gap-y-1.5 pl-1">
                        {[
                           "Tender Management", "Staffing Hub", "Secure Hosting",
                           "Sector Analysis", "Deployment Core", "Public Systems"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-500 transition-colors group-hover/govt:text-slate-900">
                              <div className="w-1 h-1 rounded-full bg-blue-400 opacity-30" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* HUB 3: ENTERPRISE GLOBAL */}
                  <div className="lg:col-span-4 p-4 rounded-2xl bg-white border border-slate-200/40 shadow-xl shadow-slate-200/40 space-y-4 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 group/ent">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-900 text-white shadow-lg group-hover/ent:scale-110 transition-transform">
                           <Monitor size={18} />
                        </div>
                        <h4 className="text-[12px] font-black text-slate-900 tracking-[0.15em] uppercase">Enterprise Hub</h4>
                     </div>
                     <ul className="grid grid-cols-1 gap-y-1.5 pl-1">
                        {[
                           "E-commerce Solutions", "Scalable ERP Systems", "Mass E-mail Engine",
                           "Supply Chain Management", "Cloud Migration", "Architecture Core"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-500 transition-colors group-hover/ent:text-slate-900">
                              <div className="w-1 h-1 rounded-full bg-slate-400 opacity-30" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
