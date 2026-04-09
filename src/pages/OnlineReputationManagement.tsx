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
   Target
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function OnlineReputationManagement() {
   const [rotation, setRotation] = useState(0);

   useEffect(() => {
      window.scrollTo(0, 0);
      
      // GSAP Entrance Sequence
      gsap.fromTo(".orm-content-block", 
         { opacity: 0, x: -100 },
         { 
            opacity: 1, 
            x: 0, 
            duration: 1.5, 
            ease: "expo.out",
            scrollTrigger: {
               trigger: ".orm-section",
               start: "top 80%",
            }
         }
      );

      // Continuous Rotation for the orbital ring
      const interval = setInterval(() => {
         setRotation(prev => (prev + 0.2) % 360);
      }, 30);

      return () => clearInterval(interval);
   }, []);

   return (
      <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
         {/* CINEMATIC HERO */}
         <div className="relative min-h-[450px] lg:min-h-[550px] bg-[#020617] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 z-0" />
               <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
                  alt="Background"
                  className="w-full h-full object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl shadow-2xl"
               >
                  <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">Elite Governance Protocol</span>
               </motion.div>
               
               <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "expo.out" }}
                  className="text-5xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] uppercase"
               >
                  Online <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Reputation</span> <br /> Management.
               </motion.h1>
               
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="text-slate-400 text-sm lg:text-lg font-medium max-w-3xl mx-auto italic leading-relaxed"
               >
                  "Securing the digital footprint of the World's most influential Celebrities, Politicians, and Institutional Leaders."
               </motion.p>
            </div>
         </div>

         {/* HYPER-ATTRACTIVE CONTENT CORE */}
         <section className="orm-section relative py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
                  
                  {/* LEFT COLUMN */}
                  <div className="orm-content-block lg:col-span-6 space-y-12">
                     <div className="space-y-10">
                        <div className="relative pl-10">
                           <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-transparent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                           <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                              The Digital <br /> <span className="text-orange-500">Sovereignty</span> Core.
                           </h2>
                        </div>
                        
                        <div className="space-y-10">
                           <p className="text-[18px] lg:text-[22px] font-medium text-slate-800 leading-snug tracking-tight">
                              Our expertise is architected for **Celebrities, Politicians, and Corporations** who require surgical narrative management to protect their institutional prestige across the global digital landscape.
                           </p>
                           
                           <div className="relative p-10 bg-slate-50 rounded-2xl shadow-inner border border-slate-100 overflow-hidden group hover:bg-white transition-all duration-700">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                              <p className="text-[17px] lg:text-[21px] font-bold text-slate-950 leading-relaxed italic z-10 relative">
                                 "In an era of instant slander, recognizing the crucial importance of your digital presence represents the ultimate competitive advantage."
                              </p>
                              <div className="flex items-center gap-4 mt-6">
                                 <div className="h-1 w-12 bg-orange-500" />
                                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Survival Protocol 01</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* RIGHT COLUMN: REFINED UPRIGHT ORBITAL ENGINE */}
                  <div className="lg:col-span-6 flex flex-col items-center gap-16">
                     <div className="relative flex items-center justify-center p-10 h-[550px] w-full">
                        
                        {/* THE UPRIGHT ORBITAL RING */}
                        <div className="absolute inset-0 flex items-center justify-center">
                           {socialIcons.map((item, i) => {
                              // Calculate individual position based on current rotation state
                              const currentAngle = ((i / socialIcons.length) * 360 + rotation) % 360;
                              const angleRad = (currentAngle * Math.PI) / 180;
                              const radius = 240;
                              const x = Math.cos(angleRad) * radius;
                              const y = Math.sin(angleRad) * radius;
                              
                              return (
                                 <motion.div 
                                    key={i}
                                    className="absolute flex flex-col items-center gap-2 group cursor-pointer"
                                    style={{ 
                                       left: `calc(50% + ${x}px)`,
                                       top: `calc(50% + ${y}px)`,
                                       transform: 'translate(-50%, -50%)' // Keep centered on coordinates
                                    }}
                                 >
                                    <div 
                                       className="w-16 h-16 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-slate-100 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover:-translate-y-2 group-hover:rotate-12"
                                       style={{ color: item.color }}
                                    >
                                       <item.icon size={28} />
                                    </div>
                                    <div className="px-3 py-1 bg-slate-900 rounded-full shadow-lg transition-all duration-300">
                                       {/* Label stays upright ("in line") because parent is not rotated */}
                                       <span className="text-[10px] font-black text-white uppercase tracking-[0.1em] whitespace-nowrap">
                                          {item.label}
                                       </span>
                                    </div>
                                 </motion.div>
                              )
                           })}
                        </div>

                        {/* SPEECH BUBBLES */}
                        <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                           <motion.div 
                              animate={{ 
                                 y: [0, -20, 0],
                                 rotate: [-1, 1, -1]
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                              className="relative w-80 h-48 bg-gradient-to-br from-[#21B5C4] to-[#147B86] rounded-[50%] flex flex-col items-center justify-center p-12 text-center text-white font-bold shadow-2xl border-2 border-white/40 backdrop-blur-3xl overflow-hidden"
                           >
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                              <h3 className="text-[20px] lg:text-[26px] font-black uppercase tracking-tighter leading-[0.9] relative z-10">
                                 Online <br /> Reputation <br /> Management.
                              </h3>
                              <div className="absolute -bottom-8 right-24 w-12 h-16 bg-[#147B86] clip-path-triangle transform rotate-[155deg] border-r-2 border-white/20" />
                              <Shield size={60} className="absolute -right-8 -top-8 text-white/10 rotate-12" />
                           </motion.div>
                           
                           <motion.div 
                              animate={{ 
                                 y: [0, 20, 0],
                                 rotate: [1, -1, 1]
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                              className="relative w-72 h-44 bg-gradient-to-br from-[#FF6600] to-[#E65C00] rounded-[50%] flex items-center justify-center p-10 text-center text-white font-bold shadow-[0_0_50px_rgba(249,115,22,0.3)] skew-x-[1deg] -mt-24 ml-36 border-2 border-white/30"
                           >
                              <div className="absolute -bottom-6 right-20 w-8 h-12 bg-[#E65C00] clip-path-triangle transform rotate-[130deg]" />
                              <Lock size={40} className="text-white opacity-20" />
                           </motion.div>
                        </div>

                        {/* CENTER ATMOSPHERE */}
                        <div className="absolute inset-0 bg-blue-500/5 blur-[150px] rounded-full z-0 animate-pulse" />
                     </div>

                     {/* DATA PERSISTENCE BLOCK */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-center space-y-6 max-w-sm"
                     >
                        <div className="flex items-center justify-center gap-4">
                           <div className="h-[1px] flex-1 bg-slate-200" />
                           <Target size={14} className="text-orange-500" />
                           <div className="h-[1px] flex-1 bg-slate-200" />
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-[14px] font-black text-slate-900 uppercase tracking-[0.3em] font-display">Institutional Defense Grid</h4>
                           <p className="text-[14px] font-bold text-slate-500 leading-relaxed">
                              Real-time cross-platform narrative synchronization for elite personal and corporate identities.
                           </p>
                        </div>
                        <div className="flex items-center justify-center gap-6 pt-4">
                           <div className="flex items-center gap-2">
                              <Activity size={14} className="text-orange-600" />
                              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Active Shield</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Lock size={14} className="text-orange-600" />
                              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Total Discretion</span>
                           </div>
                        </div>
                     </motion.div>
                  </div>

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
