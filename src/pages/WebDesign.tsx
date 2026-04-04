import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Palette, 
   Smartphone, 
   Rocket, 
   Eye, 
   Cpu, 
   Shield,
   Zap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const servicePillars = [
   {
      tag: "Connectivity",
      title: "CUSTOMIZED",
      desc: "Company give you a good connectivity and as well as good performance. We give you a Unique design. With a custom web design it is created just for your business. Your website will be different from anyone else's. By hiring the right web team, it will be constructed so it is search engine friendly.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Multi-Device",
      title: "RESPONSIVE",
      desc: "User friendly and effective websites for multiple device. More than 90% of your website visitor or follower are now using mobile and tablets. Our team develops fully responsive websites with an intelligent user interface that adapts to varied screen resolutions.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Conversion",
      title: "EFFECTIVE",
      desc: "If you have an effective website then the website spot of all your marketing efforts. Our web design team visualizes the site with a marketing perspective to Build a website that not just looks great but can convert visitors into customers.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Excellence",
      title: "BEAUTIFUL",
      desc: "In web design and development, our creativity and innovation shine through. Our main emphasis is on introducing new features that contribute to the success of your online business. We take the time to thoroughly understand your business objectives.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Growth",
      title: "SCALABLE",
      desc: "Architected for future expansion. Our systems grow with your business, ensuring that your digital infrastructure remains robust and fast during rapid scale-up periods.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Armor",
      title: "SECURE",
      desc: "Fortified security for peace of mind. We implement the latest encryption and protection protocols to safeguard your and your clients' sensitive data against any threat.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function WebDesign() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen">
         {/* CINEMATIC FULL-BLEED HEADER - SYNCED WITH HOME HERO (COMPACT) */}
         <div className="relative min-h-[400px] lg:min-h-[450px] bg-[#f8fafc] flex items-center justify-center overflow-hidden border-b border-slate-100">
            {/* INTERACTIVE NETWORK GLOBE BACKDROP */}
            <ThreeNeuralStorm />

            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
               <div className="flex flex-col items-center gap-6">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-200/50 bg-white/40 backdrop-blur-md shadow-sm"
                  >
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Established Global Leader</span>
                  </motion.div>

                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-[1.05] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ENGINEERING LEGACY DIGITAL EMPIRES.";
                        const words = title.split(" ");
                        return words.map((word, wordIdx) => (
                           <span key={wordIdx} className="inline-block mr-4">
                              {word.split("").map((char, charIdx) => (
                                 <motion.span
                                    key={`${wordIdx}-${charIdx}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                       duration: 0.8,
                                       delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02),
                                       ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className={`inline-block ${word === "LEGACY" ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600" : ""}`}
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </span>
                        ));
                     })()}
                  </h1>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="text-slate-500 text-sm lg:text-xl font-medium max-w-3xl leading-relaxed font-secondary"
                  >
                     High-status UX/UI architecture for global enterprise leaders. Precision-engineered solutions refined across two decades of dominant industry innovation.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK - HOME HERO STYLE */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
               >
                  {['Custom Architecture', 'Responsive Excellence', 'Data Driven UX'].map((feature, i) => (
                     <div key={i} className="px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 transition-all hover:translate-y--1">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{feature}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-10 lg:py-12 bg-[#fdfdff]">
            <div className="grid grid-cols-1 gap-12 lg:gap-16">

               {/* MAIN SERVICE BANNERS - ALTERNATING ELITE ARCHITECTURE (EXTREME COMPACT) */}
               <div className="flex flex-col gap-8 lg:gap-10">
                  {servicePillars.map((pillar, idx) => (
                     <div
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                     >
                        {/* BANNER IMAGE SECTION: CINEMATIC 3D PERSPECTIVE (COMPACT) */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           whileHover={{ y: -6, scale: 1.02 }}
                           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[38%] relative h-[180px] lg:h-[230px] rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(79,70,229,0.12)] border border-slate-100 group/img cursor-pointer"
                        >
                           <motion.img 
                              src={pillar.image} 
                              alt={pillar.title}
                              className="w-full h-full object-cover transition-transform duration-2000 ease-out group-hover/img:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-white/10" />
                           
                           {/* ESTABLISHED EXCELLENCE BADGE - GLASSMIST (COMPACT) */}
                           <div className="absolute top-5 right-5">
                              <div className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-slate-900 shadow-xl flex items-center gap-1.5 transition-all">
                                 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-900">Elite Standard</span>
                              </div>
                           </div>

                           {/* ARCHITECTURAL FLOATING NUMBER - REFINED (COMPACT) */}
                           <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-10" : "left-10"} text-[50px] font-black text-white/20 select-none tracking-tighter italic`}>0{idx + 1}</span>
                        </motion.div>

                        {/* BANNER CONTENT SECTION: COORDINATED ENTRANCE (COMPACT) */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[62%] space-y-6 px-6 lg:px-0"
                        >
                           <div className="space-y-4">
                              <div className="flex items-center gap-5">
                                 <div className="relative">
                                    <div className="absolute -inset-3 bg-indigo-500/10 rounded-full blur-lg animate-pulse" />
                                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                       <pillar.icon size={18} />
                                    </div>
                                 </div>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-6 h-[1px] bg-indigo-500" />
                                       <span className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-500">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black tracking-tight uppercase leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-1000">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              
                              <p className="text-[13px] lg:text-[14px] font-medium leading-relaxed text-slate-500 group-hover:text-slate-800 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>
                           </div>


                        </motion.div>
                     </div>
                  ))}

                  {/* CONCLUSION BLOCK - COMPACT ELITE GLASS (FULL WIDTH) */}
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                     className="py-12 lg:py-14 px-8 rounded-2xl bg-white border border-slate-100 text-slate-900 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(79,70,229,0.06)] flex items-center justify-center text-center group/panel cursor-default"
                  >
                     <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        {/* ICON CORE: FLOATING ELITE ENTRANCE WITH LIGHTNING PULSE */}
                        <motion.div 
                           animate={{ 
                              y: [0, -8, 0],
                              rotate: [0, -5, 5, 0],
                           }}
                           transition={{ 
                              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                           }}
                           className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-indigo-200 transform group-hover/panel:scale-110 group-hover/panel:rotate-12 transition-all duration-700 relative overflow-hidden"
                        >
                           <motion.div
                              animate={{ 
                                 scale: [1, 1.2, 0.9, 1.1, 1],
                                 opacity: [1, 0.8, 1, 0.7, 1],
                                 rotate: [0, 10, -10, 5, 0]
                              }}
                              transition={{ 
                                 duration: 2.5, 
                                 repeat: Infinity, 
                                 ease: "easeInOut" 
                              }}
                           >
                              <Zap size={24} fill="currentColor" />
                           </motion.div>

                           {/* INTERNAL ENERGY CORE GLOW */}
                           <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>

                        {/* QUOTE CORE: PRECISION CHARACTER REVEAL */}
                        <div className="relative">
                           <h3 className="text-[13px] lg:text-sm font-bold tracking-tight leading-relaxed text-slate-800 uppercase italic max-w-3xl mx-auto">
                              {(() => {
                                 const text = "We specialize in creative and innovative approaches to web design and development. Our primary goal is to integrate new features that pave the way for the success of your online business. Before embarking on the design process, our dedicated team takes the time to thoroughly understand your business objectives and target audience.";
                                 return text.split(" ").map((word, wordIdx) => (
                                    <span key={wordIdx} className="inline-block mr-1.5 overflow-hidden py-0.5">
                                       <motion.span
                                          initial={{ y: "100%" }}
                                          whileInView={{ y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ 
                                             duration: 0.8, 
                                             delay: 0.3 + (wordIdx * 0.012), 
                                             ease: [0.16, 1, 0.3, 1] 
                                          }}
                                          className="inline-block"
                                       >
                                          {word}
                                       </motion.span>
                                    </span>
                                 ));
                              })()}
                           </h3>
                        </div>

                        {/* BADGE CORE: ALIGNED PRECISION */}
                        <div className="flex items-center justify-center gap-8">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: 64 }}
                              transition={{ duration: 1, delay: 1 }}
                              className="h-[1px] bg-indigo-100 group-hover/panel:bg-indigo-300 group-hover/panel:w-24 transition-all duration-700" 
                           />
                           <motion.span 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 1.2 }}
                              className="text-[9px] font-black uppercase tracking-[0.6em] text-indigo-400 group-hover/panel:text-indigo-600 transition-colors"
                           >
                              Industry Leader
                           </motion.span>
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: 64 }}
                              transition={{ duration: 1, delay: 1 }}
                              className="h-[1px] bg-indigo-100 group-hover/panel:bg-indigo-300 group-hover/panel:w-24 transition-all duration-700" 
                           />
                        </div>
                     </div>

                     {/* Dynamic Background Effects: INTERACTIVE ATMOSPHERE */}
                     <motion.div 
                        animate={{ 
                           scale: [1, 1.2, 1],
                           opacity: [0.05, 0.08, 0.05]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px]" 
                     />
                     <motion.div 
                        animate={{ 
                           scale: [1.2, 1, 1.2],
                           opacity: [0.05, 0.08, 0.05]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]" 
                     />
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
