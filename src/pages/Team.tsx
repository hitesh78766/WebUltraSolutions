import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Shield, Globe, Users, Target, ArrowRight, ChevronRight, Code, Layout, Network, Activity, Fingerprint } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

const teamMembers = [
  { name: "Hitesh", role: "Elite Architect", skill: "System Core", image: "/images/team/professional_team_avatar_3_1775241301225.png" },
  { name: "Rahul", role: "UI/UX Lead", skill: "Visual Design", image: "/images/team/professional_team_avatar_2_1775241280154.png" },
  { name: "Nikhil", role: "Full Stack", skill: "Backend Master", image: "/images/team/professional_team_avatar_1_1775241265516.png" },
  { name: "Sagar", role: "App Dev", skill: "Mobile Specialist", image: "/images/team/professional_team_avatar_5_1775241346010.png" },
  { name: "Vikram", role: "Creative Director", skill: "Brand Strategy", image: "/images/team/professional_team_avatar_4_1775241326213.png" },
  { name: "Arpit", role: "Lead Developer", skill: "Cloud Architecture", image: "/images/team/professional_team_avatar_1_1775241265516.png" },
  { name: "Rohan", role: "Frontend Dev", skill: "Interactive UI", image: "/images/team/professional_team_avatar_2_1775241280154.png" },
  { name: "Amit", role: "QA Lead", skill: "Precision Testing", image: "/images/team/professional_team_avatar_3_1775241301225.png" },
  { name: "Deepak", role: "SEO Lead", skill: "Growth Meta", image: "/images/team/professional_team_avatar_4_1775241326213.png" }
];

const pillars = [
  { title: "Technical Rigor", icon: Code, desc: "We maintain a 1:1 ratio of senior architects to junior developers, ensuring absolute code precision and reliability." },
  { title: "Global Delivery", icon: Globe, desc: "Seamless cross-continental operations bridging US standards with Noida's elite talent." },
  { title: "Strategic Vision", icon: Layout, desc: "Leadership that engineers high-status digital identities that dominate their respective markets." },
  { title: "Security Protocols", icon: Shield, desc: "Uncompromising data integrity through advanced encryption and enterprise-grade architecture." }
];

const Team: React.FC = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const [hoveredMember, setHoveredMember] = React.useState<number | null>(null);
   
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);
   const textX = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), { stiffness: 50, damping: 20 });
   const textY = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), { stiffness: 50, damping: 20 });

   useEffect(() => {
 	window.scrollTo(0, 0);
     const handleMouseMove = (e: MouseEvent) => {
         const { innerWidth, innerHeight } = window;
         mouseX.set(e.clientX - innerWidth / 2);
         mouseY.set(e.clientY - innerHeight / 2);
     };
     window.addEventListener('mousemove', handleMouseMove);
     return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   const SectionHeader = ({ label, title }: { label: string, title: string }) => (
 		<div className="flex flex-col gap-1 mb-6">
 			<div className="flex items-center justify-center gap-2">
 				<div className="h-[2px] w-8 bg-[#FF6600]" />
 				<span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">{label}</span>
                 <div className="h-[2px] w-8 bg-[#FF6600]" />
 			</div>
 			<h2 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-slate-950 italic">
 				{title}
 			</h2>
 		</div>
 	);

   return (
 	<div ref={containerRef} className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
 	   {/* HERO SECTION - ELITE TYPOGRAPHY REFINEMENT */}
 	   <section className="relative h-[300px] lg:h-[380px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 bg-[#FDFBF9]">
   		<ThreeNeuralStorm />
         
         <div className="absolute inset-0 opacity-[0.03] z-[1] select-none pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,102,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

         <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95 z-[2] pointer-events-none" />

   		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center justify-center">
   		   <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
   			<motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-5 py-2 bg-slate-950 rounded-full border border-[#FF6600]/40 shadow-2xl flex items-center gap-3"
              >
   			   <Fingerprint size={14} className="text-[#FF6600] animate-pulse" />
   			   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Verified Talent Identity</span>
   			</motion.div>

   			<div className="space-y-5">
                <div className="flex flex-col items-center">
                  <motion.span 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="block text-[11px] font-black text-[#FF6600] uppercase tracking-[0.8em] mb-3"
                  >
                     Technical Core
                  </motion.span>
                  
                  <h1 className="text-3xl lg:text-5xl font-black text-slate-950 tracking-tighter leading-[0.8] uppercase flex flex-wrap items-center justify-center gap-[0.2em]">
                     {['OUR', 'ELITE', 'NETWORK.'].map((word, wordIdx) => (
                        <span key={wordIdx} className="flex overflow-hidden pb-1">
                           {word.split('').map((char, charIdx) => (
                              <motion.span
                                 key={charIdx}
                                 initial={{ rotateX: -90, y: "100%", opacity: 0 }}
                                 animate={{ rotateX: 0, y: 0, opacity: 1 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15,
                                    delay: 0.3 + (wordIdx * 0.1) + (charIdx * 0.04)
                                 }}
                                 className={`inline-block ${word === 'ELITE' ? 'text-[#FF6600] italic' : ''}`}
                              >
                                 {char}
                              </motion.span>
                           ))}
                        </span>
                     ))}
                  </h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col items-center gap-6"
                >
                  <motion.p className="text-slate-600 text-[10px] lg:text-[13px] font-medium max-w-2xl leading-relaxed italic">
                    Accelerating digital dominance through a centralized pool of high-status technical architects and creative visionary talent.
                  </motion.p>
                  
                  <div className="flex items-center gap-10 pt-2">
                     {[
                        { icon: Target, label: 'Strategic' },
                        { icon: Cpu, label: 'Technical' },
                        { icon: Globe, label: 'Global' }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 group">
                           <item.icon size={15} className="text-[#FF6600] group-hover:scale-125 transition-transform" />
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{item.label}</span>
                        </div>
                     ))}
                  </div>
                </motion.div>
              </div>
   		   </div>
   		</div>
 	   </section>

 	   {/* CIRCULAR NETWORK - ELITE TYPOGRAPHY REFINEMENT */}
 	   <section className="py-20 relative bg-white overflow-hidden min-h-[750px] lg:min-h-[850px] flex items-center justify-center border-b border-slate-100">
           <motion.div style={{ x: textX, y: textY }} className="absolute inset-0 opacity-[0.05] pointer-events-none select-none flex items-center justify-center">
              <h2 className="text-[120px] lg:text-[200px] font-black uppercase text-[#FF6600] leading-none tracking-tighter text-center">ELITE<br/>CORE</h2>
           </motion.div>

           <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center p-8">
              <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="relative z-20 w-48 h-48 lg:w-60 lg:h-60 flex items-center justify-center">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-[#FF6600]/20 rounded-full" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-[-10%] border-4 border-double border-[#FF6600]/10 rounded-full" />
                 <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-[20%] bg-[#FF6600]/15 rounded-full blur-3xl" />
                 
                 <div className="relative w-36 h-36 lg:w-44 lg:h-44 bg-white shadow-[0_20px_60px_-15px_rgba(255,102,0,0.25)] rounded-full border-2 border-[#FF6600]/40 flex flex-col items-center justify-center p-6 group overflow-hidden z-10 transition-all duration-500 hover:scale-105">
                    <div className="w-14 h-14 bg-slate-950 rounded-full flex items-center justify-center text-white mb-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] group-hover:bg-[#FF6600] transition-colors duration-500 relative">
                       <Network size={26} className="relative z-10" />
                       <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0, 0.4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-[#FF6600] rounded-full blur-lg" />
                    </div>
                    <p className="text-[11px] font-black text-slate-950 tracking-[0.4em] uppercase italic leading-none">NOIDA HUB</p>
                    <p className="text-[8px] font-black text-[#FF6600] uppercase tracking-widest mt-1.5 leading-none">Established Elite Node</p>
                 </div>

                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 1000" style={{ overflow: 'visible' }}>
                    {teamMembers.map((_, i) => {
                       const angle = (i * 360) / teamMembers.length;
                       const r = 400;
                       const x = 500 + Math.cos((angle * Math.PI) / 180) * r;
                       const y = 500 + Math.sin((angle * Math.PI) / 180) * r * 0.92;
                       const isHovered = hoveredMember === i;
                       
                       return (
                          <g key={i}>
                             <motion.line initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: isHovered ? 1 : 0.4 }} transition={{ duration: 1.2, delay: i * 0.08 }}
                                x1="500" y1="500" x2={x} y2={y} stroke={isHovered ? "#FF6600" : "#E2E8F0"} strokeWidth={isHovered ? 4 : 1.5} strokeDasharray={isHovered ? "none" : "5 10"} />
                             {isHovered && <motion.circle r="4" fill="#FF6600"><animateMotion path={`M 500 500 L ${x} ${y}`} dur="0.6s" repeatCount="indefinite" /></motion.circle>}
                          </g>
                       );
                    })}
                 </svg>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                 {teamMembers.map((member, i) => {
                    const angle = (i * 360) / teamMembers.length;
                    const r = 300;
                    const x = Math.cos((angle * Math.PI) / 180) * r;
                    const y = Math.sin((angle * Math.PI) / 180) * r * 0.92;
                    const isHovered = hoveredMember === i;
                    
                    return (
                       <div key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }}
                             onMouseEnter={() => setHoveredMember(i)} onMouseLeave={() => setHoveredMember(null)}
                             className="flex flex-col items-center group cursor-pointer relative"
                          >
                             <div className={`relative w-20 h-20 lg:w-24 lg:h-24 p-2 bg-white rounded-full shadow-2xl border-2 transition-all duration-700 ${isHovered ? 'border-[#FF6600] scale-125 -translate-y-8 shadow-[#FF6600]/30' : 'border-slate-100'}`}>
                                <div className="w-full h-full bg-slate-50 rounded-full overflow-hidden relative shadow-inner">
                                   <motion.img animate={{ scale: isHovered ? 1.2 : 1 }} transition={{ duration: 0.4 }} src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-0" />
                                   <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-20'}`} />
                                </div>
                                {isHovered && <motion.div animate={{ scale: [1, 1.3], opacity: [0.6, 0] }} transition={{ duration: 1.2, repeat: Infinity }} className="absolute -inset-2 border-2 border-[#FF6600] rounded-full" />}
                                <div className="absolute top-0 right-0 w-7 h-7 bg-slate-950 rounded-full border-2 border-white flex items-center justify-center shadow-xl group-hover:bg-[#FF6600] group-hover:rotate-[360deg] transition-all duration-700">
                                   <Zap size={12} className="text-white" />
                                </div>
                             </div>
                             <motion.div animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 4 }} className="mt-5 text-center px-4">
                                <h4 className="text-[12px] font-black text-slate-950 tracking-tight uppercase leading-none">{member.name}</h4>
                                <p className="text-[9px] font-black text-[#FF6600] uppercase tracking-widest mt-2 leading-none whitespace-nowrap">{member.role}</p>
                             </motion.div>
                          </motion.div>
                       </div>
                    );
                 })}
              </div>
           </div>
 	   </section>

        {/* ETHOS GRID - ELITE TYPOGRAPHY REFINEMENT */}
        <section className="py-20 lg:py-32 bg-[#FDFBF9] border-y border-slate-100">
           <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 items-center">
              <div className="space-y-10">
                 <SectionHeader label="Institutional Axis" title="Elite Collaboration" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {pillars.map((pillar, i) => (
                       <div key={i} className="p-8 bg-white border border-slate-100 rounded-md shadow-sm hover:border-[#FF6600] transition-all group hover:shadow-2xl">
                          <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-white mb-5 group-hover:bg-[#FF6600] transition-all rounded-sm shadow-xl">
                             <pillar.icon size={24} />
                          </div>
                          <h4 className="text-[12px] font-black text-slate-950 uppercase tracking-[0.2em] mb-3 border-l-4 border-[#FF6600] pl-4">{pillar.title}</h4>
                          <p className="text-sm lg:text-base text-slate-500 font-bold italic leading-relaxed group-hover:text-slate-800 transition-colors">{pillar.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-10 lg:pl-12 border-l-4 border-slate-200 py-4">
                 <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-950 uppercase tracking-tighter italic leading-[0.9]">
                    Synergy At <br /> <span className="text-[#FF6600] not-italic">Every Node.</span>
                 </h3>
                 <p className="text-base text-slate-950 font-bold border-l-[6px] border-[#FF6600] pl-10 py-3 italic leading-relaxed shadow-sm bg-white/50 rounded-r-md">
                    "Innovative infrastructure meets institutional reliability. We prioritize high-status technical solutions over standard corporate protocols."
                 </p>
                 <div className="space-y-4">
                    {["Noida Technical Centers of Excellence", "US-Compliant Security Protocols", "24/7 Global Delivery Pipeline"].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] leading-none group cursor-default">
                          <ChevronRight size={16} className="text-[#FF6600] group-hover:translate-x-1 transition-transform" /> {item}
                       </div>
                    ))}
                 </div>
                 <div className="pt-8">
                    <button className="px-12 py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl hover:bg-[#FF6600] transition-all flex items-center gap-6 group rounded-sm shadow-[#FF6600]/20">
                       Join Our Elite Circle <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </section>
 	</div>
    );
 };

 export default Team;
