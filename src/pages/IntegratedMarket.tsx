import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Globe, 
   Target, 
   Zap, 
   TrendingUp, 
   Shield, 
   BarChart3,
   ArrowRight,
   Sparkles,
   Monitor,
   Cpu
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

const marketPillars = [
   {
      tag: "Global Reach",
      title: "STRATEGIC CONNECTIVITY",
      desc: "We provide seamless global connectivity integrated with high-performance digital architecture. Our customized market strategies ensure your brand resonates across international borders while maintaining localized relevance.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Convergence",
      title: "DIGITAL SYNERGY",
      desc: "Integrate all your digital touchpoints into a unified powerhouse. From social media to enterprise search, we synchronize your presence to create a consistent, high-impact brand narrative that drives engagement.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Growth",
      title: "MARKET DOMINANCE",
      desc: "Engineered for rapid scaling and sustained growth. We use advanced predictive analytics and market intelligence to position your business at the forefront of your industry, ensuring long-term institutional success.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Visibility",
      title: "SEO ARCHITECTURE",
      desc: "Precision-engineered search engine optimization built into the very core of your digital assets. Our data-driven approach ensures maximum visibility and authoritative ranking in an increasingly competitive digital landscape.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Excellence",
      title: "CONVERSION FOCUS",
      desc: "We transform passive visitors into loyal brand advocates. By implementing psychological UX triggers and streamlined conversion funnels, we maximize the ROI of every digital interaction.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Security",
      title: "DATA INTEGRITY",
      desc: "Fortified security protocols integrated with real-time market data monitoring. We safeguard your competitive intelligence while ensuring absolute transparency and compliance with global data standards.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function IntegratedMarket() {

   useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary">
         {/* CINEMATIC FULL-BLEED HEADER */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE NETWORK GLOBE BACKDROP */}
            <ThreeNetworkGlobe />
            
            {/* Content Core - Centered Elite Architecture */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Global Strategic Integration</span>
                  </motion.div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "DOMINATING THE INTEGRATED MARKET.";
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
                                    className={`inline-block ${word === "INTEGRATED" ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-sm font-medium max-w-xl leading-relaxed"
                  >
                     High-performance market synergy for global enterprise leaders. We unify your digital footprint through strategic architecture and precision-engineered growth protocols.
                  </motion.p>
               </div>

               {/* REFINED BADGE STACK */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
               >
                  {[
                     { label: 'Market Convergence', icon: Zap },
                     { label: 'Global Strategy', icon: Globe },
                     { label: 'Data Intelligence', icon: BarChart3 }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8 bg-[#FDFBF9]">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">

               {/* MAIN SERVICE BANNERS */}
               <div className="flex flex-col gap-8 lg:gap-12">
                  {marketPillars.map((pillar, idx) => (
                     <div
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-10 items-center`}
                     >
                        {/* BANNER IMAGE SECTION */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           whileHover={{ y: -6, scale: 1.01 }}
                           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                        >
                           <motion.img 
                              src={pillar.image} 
                              alt={pillar.title}
                              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
                           
                           <div className="absolute top-6 right-6">
                              <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                 <span className="text-[10px] font-bold uppercase tracking-wider">Market Excellence</span>
                              </div>
                           </div>

                           <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-[50px] font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                        </motion.div>

                        {/* BANNER CONTENT SECTION */}
                        <motion.div 
                           initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full lg:w-[55%] space-y-6 px-4 lg:px-0"
                        >
                           <div className="space-y-4">
                              <div className="flex items-center gap-5">
                                 <div className="relative">
                                    <div className="absolute -inset-3 bg-[#FF6600]/10 rounded-full blur-lg animate-pulse" />
                                    <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                                       <pillar.icon size={22} />
                                    </div>
                                 </div>
                                 <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                       <div className="w-6 h-[2px] bg-[#FF6600]" />
                                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              
                              <p className="text-[12px] lg:text-[14px] font-medium leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>

                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest group/link">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#FF6600]" />
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  ))}

                  {/* CONCLUSION BLOCK */}
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                     className="relative py-10 lg:py-14 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
                  >
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />
                     
                     <div className="relative z-10 max-w-4xl mx-auto space-y-5">
                        <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                           <Zap size={24} />
                        </div>

                        <div className="relative">
                           <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic">
                              "We specialize in global market integration, providing precision-engineered solutions that unify your digital presence and drive institutional growth through data-driven strategic excellence."
                           </h3>
                        </div>

                        <div className="pt-4">
                           <button className="group/btn flex items-center gap-2.5 px-4 py-2.5 bg-[#FF6600] hover:bg-white hover:text-[#FF6600] text-white text-[10px] font-bold rounded-md transition-all duration-300 shadow-xl shadow-[#FF6600]/20 mx-auto uppercase tracking-[0.15em]">
                              <span>Accelerate Your Market Presence</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                           </button>
                        </div>
                     </div>

                     <motion.div 
                        animate={{ 
                           scale: [1, 1.2, 1],
                           opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF6600] rounded-full blur-[100px]" 
                     />
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
