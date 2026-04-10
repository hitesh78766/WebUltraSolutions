import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { 
   Facebook, 
   Twitter, 
   Linkedin, 
   Youtube, 
   Instagram, 
   Globe, 
   MessageCircle, 
   Share2,
   Shield,
   Activity,
   ExternalLink,
   Sparkles,
   Lock,
   Target,
   Zap,
   ArrowRight,
   Monitor
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
   {
      tag: "Sovereignty",
      title: "DIGITAL CORE",
      desc: "Our expertise is architected for Celebrities, Politicians, and Corporations who require surgical narrative management to protect their institutional prestige across the global digital landscape. In an era of instant slander, recognizing the crucial importance of your digital presence represents the ultimate competitive advantage.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
   },
   {
      tag: "Intelligence",
      title: "PRESTIGE SHIELD",
      desc: "Real-time cross-platform narrative synchronization for elite personal and corporate identities. We implement surgical defense protocols to neutralize character assassination and ensure your message remains dominant and untarnished.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
   }
];

export default function OnlineReputationManagement() {
   const [rotation, setRotation] = useState(0);

   useEffect(() => {
      window.scrollTo(0, 0);
      
      // Continuous Rotation for the orbital ring
      const interval = setInterval(() => {
         setRotation(prev => (prev + 0.2) % 360);
      }, 30);

      return () => clearInterval(interval);
   }, []);

   const socialIcons = [
      { icon: Facebook, color: "#1877F2", label: "Facebook" },
      { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
      { icon: Linkedin, color: "#0A66C2", label: "Linkedin" },
      { icon: Youtube, color: "#FF0000", label: "YouTube" },
      { icon: Instagram, color: "#E4405F", label: "Instagram" },
      { icon: MessageCircle, color: "#25D366", label: "Chat" },
      { icon: Globe, color: "#21B5C4", label: "Web Presence" },
      { icon: Share2, color: "#FF6600", label: "Network" }
   ];

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC HERO */}
         <div className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
            {/* INTERACTIVE PARTICLES BACKDROP */}
            <ThreeNeuralStorm />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
               <div className="flex flex-col items-center gap-4">
                  <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Elite Governance Protocol</span>
                  </motion.div>
                  
                  <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
                     {(() => {
                        const title = "ONLINE REPUTATION MANAGEMENT.";
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
                                    className={`inline-block ${word === "REPUTATION" ? "text-[#FF6600]" : ""}`}
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
                     className="text-slate-600 text-xs lg:text-sm font-semibold max-w-xl leading-relaxed"
                  >
                     "Securing the digital footprint of the World's most influential Celebrities, Politicians, and Institutional Leaders."
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
                     { label: 'Active Shield', icon: Shield },
                     { label: 'Total Discretion', icon: Lock },
                     { label: 'Narrative Sync', icon: Target }
                  ].map((feature, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                           <feature.icon size={14} />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-widest">{feature.label}</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* HYPER-ATTRACTIVE CONTENT CORE */}
         <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 gap-6 lg:gap-10">
               
               <div className="flex flex-col gap-8 lg:gap-12">
                  {pillars.map((pillar, idx) => (
                     <div 
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-10 items-center`}
                     >
                        {/* RIGHT COLUMN: REFINED UPRIGHT ORBITAL ENGINE - Integrated into first banner */}
                        {idx === 0 ? (
                           <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[550px] flex items-center justify-center p-10 overflow-hidden bg-slate-50 rounded-md border border-slate-100 shadow-sm">
                              <div className="absolute inset-0 flex items-center justify-center scale-75 lg:scale-90">
                                 {socialIcons.map((item, i) => {
                                    const currentAngle = ((i / socialIcons.length) * 360 + rotation) % 360;
                                    const angleRad = (currentAngle * Math.PI) / 180;
                                    const radius = 220;
                                    const x = Math.cos(angleRad) * radius;
                                    const y = Math.sin(angleRad) * radius;
                                    
                                    return (
                                       <motion.div 
                                          key={i}
                                          className="absolute flex flex-col items-center gap-2 group cursor-pointer"
                                          style={{ 
                                             left: `calc(50% + ${x}px)`,
                                             top: `calc(50% + ${y}px)`,
                                             transform: 'translate(-50%, -50%)'
                                          }}
                                       >
                                          <div 
                                             className="w-14 h-14 rounded-2xl bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-100 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] group-hover:-translate-y-1 group-hover:rotate-6"
                                             style={{ color: item.color }}
                                          >
                                             <item.icon size={24} />
                                          </div>
                                          <div className="px-2 py-0.5 bg-slate-900 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                                             <span className="text-[8px] font-black text-white uppercase tracking-[0.1em] whitespace-nowrap">
                                                {item.label}
                                             </span>
                                          </div>
                                       </motion.div>
                                    )
                                 })}
                              </div>

                              <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] scale-75 lg:scale-90">
                                 <motion.div 
                                    animate={{ 
                                       y: [0, -15, 0],
                                       rotate: [-1, 1, -1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-64 h-40 bg-gradient-to-br from-[#21B5C4] to-[#147B86] rounded-[50%] flex flex-col items-center justify-center p-8 text-center text-white font-bold shadow-2xl border-2 border-white/40 backdrop-blur-3xl overflow-hidden"
                                 >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                                    <h3 className="text-[16px] lg:text-[20px] font-black uppercase tracking-tighter leading-[0.9] relative z-10">
                                       Protect <br /> Your <br /> Legend.
                                    </h3>
                                    <div className="absolute -bottom-6 right-20 w-10 h-14 bg-[#147B86] clip-path-triangle transform rotate-[155deg] border-r-2 border-white/20" />
                                    <Shield size={50} className="absolute -right-6 -top-6 text-white/10 rotate-12" />
                                 </motion.div>
                                 
                                 <motion.div 
                                    animate={{ 
                                       y: [0, 15, 0],
                                       rotate: [1, -1, 1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="relative w-56 h-36 bg-gradient-to-br from-[#FF6600] to-[#E65C00] rounded-[50%] flex items-center justify-center p-8 text-center text-white font-bold shadow-[0_0_40px_rgba(249,115,22,0.2)] skew-x-[1deg] -mt-20 ml-28 border-2 border-white/30"
                                 >
                                    <div className="absolute -bottom-5 right-16 w-6 h-10 bg-[#E65C00] clip-path-triangle transform rotate-[130deg]" />
                                    <Lock size={30} className="text-white opacity-20" />
                                 </motion.div>
                              </div>
                              <div className="absolute inset-0 bg-orange-500/5 blur-[120px] rounded-full z-0 animate-pulse" />
                           </div>
                        ) : (
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
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Elite Standard</span>
                                 </div>
                              </div>
                              <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-4xl font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                           </motion.div>
                        )}

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
                                    <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                                       {pillar.title}
                                    </h3>
                                 </div>
                              </div>
                              
                              <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors max-w-xl">
                                 {pillar.desc}
                              </p>

                              <div className="pt-2">
                                 <button className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-900 uppercase tracking-widest group/link">
                                    <span>Initiate Protocol</span>
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
                              "In an era of instant global communication, your digital reputation is your most valuable asset. We provide the surgical precision required to maintain your legacy and protect your status against any threat."
                           </h3>
                        </div>


                        <div className="flex items-center justify-center gap-8 pt-4">
                           <div className="h-[1px] w-24 bg-white/10" />
                           <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-orange-500">Elite Governance</span>
                           <div className="h-[1px] w-24 bg-white/10" />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         <style>{`
            .clip-path-triangle {
               clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
         `}</style>
      </div>
   );
}
