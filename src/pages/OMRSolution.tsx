import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Scan,
   Database,
   ClipboardCheck,
   Users,
   FileText,
   BarChart3,
   Edit3,
   CheckCircle2,
   Zap,
   Globe,
   Sparkles,
   Monitor
} from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

export default function OMRSolution() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">

         {/* COMPACT ELITE HERO - SYNCED WITH FLAGSHIP SCALE */}
         <section className="relative min-h-[250px] lg:min-h-[350px] flex items-center justify-center bg-white overflow-hidden border-b border-orange-100/50">
            <div className="absolute inset-0 z-0">
               <ThreeNeuralStorm />
               <div className="absolute inset-0 bg-[#FFFBF0]/10" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4">
               <div className="flex flex-col items-center gap-3">
                  <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF6600] rounded-sm shadow-lg leading-none"
                  >
                     <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Elite Architecture v4.0</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "OMR SOLUTION PRECISION ARCHITECTURE.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-4">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 200,
                                       damping: 10,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                                    }}
                                    className={`inline-block ${word === "OMR" || word === "PRECISION" ? "text-[#FF6600]" : ""}`}
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: 1 }}
                     className="text-slate-500 text-[10px] lg:text-xs font-bold max-w-lg leading-relaxed mx-auto uppercase tracking-wider"
                  >
                     Institutional data capture and surgical OMR processing.
                  </motion.p>
               </div>

               {/* COMPACT BADGE STACK */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto"
               >
                  {[
                     { label: 'Data Ingestion', icon: Globe },
                     { label: 'Optic Clarity', icon: Sparkles },
                     { label: 'Verified Matrix', icon: Monitor }
                  ].map((feature, i) => (
                     <div key={i} className="px-3 py-1.5 bg-white border border-slate-100 shadow-sm rounded-sm flex items-center gap-2 transition-all hover:bg-slate-50">
                        <div className="w-5 h-5 rounded-sm bg-orange-50 flex items-center justify-center text-[#FF6600]">
                           <feature.icon size={11} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* VERBATIM CONTENT SECTIONS - WEB DESIGN STYLE */}
         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 space-y-16 lg:space-y-24">

            {/* SECTION 1: OMR SHEET */}
            <section className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-slate-100 group/img"
               >
                  <img
                     src="/omr_sheet_detail.png"
                     alt="OMR Sheet"
                     className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover/img:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                     <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Elite Standard</span>
                     </div>
                  </div>
                  <span className="absolute bottom-6 right-6 text-4xl font-display font-bold text-white/40 group-hover:text-[#FF6600] group-hover:opacity-100 transition-all duration-700 tracking-tighter italic">01</span>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-full lg:w-[55%] space-y-6"
               >
                  <div className="space-y-4">
                     <div className="flex items-center gap-5">
                        <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg">
                           <Database size={22} />
                        </div>
                        <div className="space-y-1">
                           <div className="flex items-center gap-2">
                              <div className="w-6 h-[2px] bg-[#FF6600]" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">Institutional Ingestion</span>
                           </div>
                           <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-slate-950">OMR <span className="text-[#FF6600]">Sheet</span></h3>
                        </div>
                     </div>
                     <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-500 max-w-xl">
                        The OMR sheets will then be scanned and processed by us and the results will be prepared as per your requirements. Special reports if any can also be prepared by us meeting all your requirements. We also offer pre-exam solutions like OMR based registration forms, preparation of admit cards etc. urea, a variety of analysis can be done on the data since all data is available in electronic form which is not possible otherwise.
                     </p>
                  </div>
               </motion.div>
            </section>

            {/* SECTION 2: OCR FORMS */}
            <section className="group relative flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-slate-100 group/img"
               >
                  <img
                     src="/ocr_data_extraction.png"
                     alt="OCR Forms"
                     className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover/img:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                     <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Elite Standard</span>
                     </div>
                  </div>
                  <span className="absolute bottom-6 left-6 text-4xl font-display font-bold text-white/40 group-hover:text-[#FF6600] group-hover:opacity-100 transition-all duration-700 tracking-tighter italic">02</span>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-full lg:w-[55%] space-y-6 text-right lg:text-left flex flex-col items-end lg:items-start"
               >
                  <div className="space-y-4">
                     <div className="flex items-center gap-5 flex-row-reverse lg:flex-row">
                        <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg">
                           <FileText size={22} />
                        </div>
                        <div className="space-y-1 text-right lg:text-left">
                           <div className="flex items-center gap-2 flex-row-reverse lg:flex-row">
                              <div className="w-6 h-[2px] bg-[#FF6600]" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">Digital Extraction</span>
                           </div>
                           <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-slate-950">OCR <span className="text-[#FF6600]">Forms</span></h3>
                        </div>
                     </div>
                     <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-500 max-w-xl">
                        Forms are required to be filled almost everywhere these days. All organization is sometimes required to store and process thousands of forms in a single day. Manually processing these forms is not only time consuming but can also lead to errors due to human mistakes. Also, it becomes difficult to search for particular data in paper forms. And Our Organization provides that type of facilities.
                     </p>
                  </div>
               </motion.div>
            </section>

            {/* SECTION 3: OMR ANSWER SHEET */}
            <section className="relative py-14 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />
               <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                  <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                     <Scan size={24} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-white">OMR Answer <span className="text-[#FF6600]">Sheet.</span></h3>
                  <p className="text-sm lg:text-base font-medium text-slate-300 leading-relaxed italic max-w-3xl mx-auto">
                     "Some OMR devices use forms which are preprinted onto trans optic paper and measure the amount of light which passes through the paper, thus a mark on either side of the paper will reduce the amount of light passing through the paper. In contrast to the dedicated OMR device, desktop OMR software allows a user to create their own forms in a word processor and print them on a laser printer."
                  </p>
                  <div className="flex items-center justify-center gap-8 pt-4">
                     <div className="h-[1px] w-24 bg-white/10" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-orange-500">Luminosity Analysis</span>
                     <div className="h-[1px] w-24 bg-white/10" />
                  </div>
               </div>
            </section>
         </div>

         {/* INTEGRATED LOGIC ECOSYSTEM - COMPACT DENSE ARCHITECTURE */}
         <section className="py-16 bg-[#FBFBFC] border-t border-slate-100 relative overflow-hidden">
            {/* BACKGROUND ACCENT LINE */}
            <div className="absolute top-[45%] left-0 right-0 h-[1px] bg-slate-200/50 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
               <div className="flex flex-col items-center text-center space-y-2 mb-12">
                  <span className="text-[#FF6600] text-[9px] font-black uppercase tracking-[0.6em]">Integrated Flow</span>
                  <h3 className="text-xl lg:text-3xl font-display font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Logic <span className="text-[#FF6600]">Ecosystem.</span></h3>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                  {[
                     { title: "Registration", icon: Database },
                     { title: "Design", icon: Edit3 },
                     { title: "Permits", icon: ClipboardCheck },
                     { title: "Matrix", icon: Users },
                     { title: "Analysis", icon: FileText },
                     { title: "Results", icon: BarChart3 }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className="flex flex-col items-center text-center group"
                     >
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#FF6600] mb-3 group-hover:border-[#FF6600] group-hover:shadow-lg transition-all duration-500 relative bg-gradient-to-br from-white to-slate-50">
                           <item.icon size={20} />
                           <span className="absolute top-1 right-2 text-[9px] font-mono font-black text-slate-200 group-hover:text-[#FF6600] transition-colors leading-none">0{i + 1}</span>
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-950 leading-none group-hover:text-[#FF6600] transition-colors">{item.title}</span>
                     </motion.div>
                  ))}
               </div>

               {/* HIGH-DENSITY VERBATIM DATA STRIPS */}
               <div className="pt-10 border-t border-slate-200/60">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                        "Preparation of Merit List.",
                        "Mark sheets and Certificates.",
                        "Preparation of special reports.",
                        "OMR Sheet Printing.",
                        "OMR Sheet Checking.",
                        "OMR Checking Software.",
                        "OMR Completes Solution."
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/50 border border-slate-100 rounded-lg hover:border-[#FF6600]/30 transition-all group cursor-default">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] group-hover:animate-ping" />
                           <span className="text-[10px] font-bold uppercase tracking-tight text-slate-600 leading-none group-hover:text-slate-900 transition-colors">{item}</span>
                        </div>
                     ))}
                     {/* DUMMY STATUS STRIP */}
                     <div className="flex items-center justify-center p-3 bg-orange-50/50 border border-orange-100 rounded-lg">
                        <span className="text-[8px] font-mono font-black text-[#FF6600] uppercase tracking-widest tracking-tighter">System Output: Verified</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
}
