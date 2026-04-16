import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Shield, Globe, Users, Target, ArrowRight, ChevronRight, Code, Layout, Network, Activity, Fingerprint } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

const teamMembers = [
   { name: "R Sachin Kumar", role: "Managing Director", image: "/images/team/professional_team_avatar_3_1775241301225.png" },
   { name: "Dharmbir Prabhakar", role: "Managing Mentor", image: "/images/team/professional_team_avatar_2_1775241280154.png" },
   { name: "Abhishek Singh", role: "HR Manager (Business partner)", image: "/images/team/professional_team_avatar_1_1775241265516.png" },
   { name: "Cheshta Kumari", role: "HR Generalist", image: "/images/team/professional_team_avatar_5_1775241346010.png" },
   { name: "Anish Kumar", role: "Assistant Manager - Marketing Department", image: "/images/team/professional_team_avatar_4_1775241326213.png" },
   { name: "Akhilesh Singh", role: "Finance Department", image: "/images/team/professional_team_avatar_1_1775241265516.png" },
   { name: "Atendra Kumar", role: "Website Developer", image: "/images/team/professional_team_avatar_2_1775241280154.png" },
   { name: "Harsh Dubey", role: "Graphic Designer", image: "/images/team/professional_team_avatar_3_1775241301225.png" },
   { name: "Aman Verma", role: "Social Media Executive", image: "/images/team/professional_team_avatar_4_1775241326213.png" },
   { name: "Paulose Kumar", role: "Operation Manager", image: "/images/team/professional_team_avatar_5_1775241346010.png" }
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
      <div className="flex flex-col gap-1 mb-6 text-left">
         <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">{label}</span>
         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-snug text-slate-950">
            {title}
         </h2>
      </div>
   );

   return (
      <div ref={containerRef} className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
         {/* HERO SECTION - ELITE TYPOGRAPHY REFINEMENT */}
         <section className="relative h-[320px] sm:h-[350px] md:h-[380px] lg:h-[380px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 bg-[#FDFBF9]">
            <ThreeNeuralStorm />

            <div className="absolute inset-0 opacity-[0.03] z-[1] select-none pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(rgba(255,102,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95 z-[2] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-12 md:px-16 lg:px-20 w-full flex flex-col items-center justify-center">
               <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-4xl">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="px-3.5 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-slate-950 rounded-full border border-[#FF6600]/40 shadow-2xl flex items-center gap-2 lg:gap-3"
                  >
                     <Fingerprint className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#FF6600] animate-pulse" />
                     <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white">Verified Talent Identity</span>
                  </motion.div>

                  <div className="space-y-5">
                     <div className="flex flex-col items-center">
                        <motion.span
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           className="block text-[11px] font-semibold text-[#FF6600] uppercase tracking-[0.8em] mb-3"
                        >
                           Technical Core
                        </motion.span>

                         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.1] uppercase flex flex-wrap items-center justify-center gap-[0.2em]">
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
                                       className={`inline-block ${word === 'ELITE' ? 'text-[#FF6600]' : ''}`}
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
                        <motion.p className="text-slate-600 text-[11px] sm:text-xs md:text-sm lg:text-[16px] font-semibold max-w-2xl leading-relaxed italic">
                           Accelerating digital dominance through a centralized pool of high-status technical architects and creative visionary talent.
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 pt-2">
                           {[
                              { icon: Target, label: 'Strategic' },
                              { icon: Cpu, label: 'Technical' },
                              { icon: Globe, label: 'Global' }
                           ].map((item, i) => (
                              <div key={i} className="flex items-center gap-2 group">
                                 <item.icon size={14} className="text-[#FF6600] group-hover:scale-125 transition-transform" />
                                 <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">{item.label}</span>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         {/* CIRCULAR NETWORK - ELITE CENTRALIZED HIERARCHY (DESKTOP) / GRID (MOBILE) */}
         <section className="py-16 md:py-24 lg:py-32 relative bg-white overflow-hidden min-h-[500px] lg:min-h-[750px] flex flex-col items-center justify-center border-b border-slate-100">
            <motion.div style={{ x: textX, y: textY }} className="absolute inset-0 opacity-[0.03] lg:opacity-[0.05] pointer-events-none select-none flex items-center justify-center">
               <h2 className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-black uppercase text-[#FF6600] leading-none tracking-tighter text-center">ELITE<br />CORE</h2>
            </motion.div>

            {/* MOBILE & TABLET GRID VIEW */}
            <div className="lg:hidden relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-10">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10">
                  {teamMembers.map((member, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center group"
                     >
                        <div className={`relative w-24 h-24 sm:w-28 sm:h-28 p-1 bg-white rounded-full shadow-lg transition-all border ${i === 0 ? 'border-amber-400 border-2' : 'border-slate-100'}`}>
                           <div className="w-full h-full rounded-full overflow-hidden relative">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                              {i === 0 && <div className="absolute inset-0 bg-amber-400/10" />}
                           </div>
                           <div className={`absolute top-0 right-0 w-7 h-7 ${i === 0 ? 'bg-amber-400' : 'bg-slate-950'} rounded-full border-2 border-white flex items-center justify-center shadow-lg`}>
                              {i === 0 ? <Target size={12} className="text-white" /> : <Zap size={12} className="text-white" />}
                           </div>
                        </div>
                        <div className="mt-4 text-center">
                           <h4 className="text-[11px] sm:text-[12px] font-bold text-slate-950 tracking-tight uppercase leading-none">{member.name}</h4>
                           <p className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mt-2 leading-none ${i === 0 ? 'text-amber-500' : 'text-[#FF6600]'}`}>{member.role}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* DESKTOP CIRCULAR VIEW - HIDDEN ON SM/MD */}
            <div className="hidden lg:flex relative w-full max-w-4xl mx-auto items-center justify-center p-4">
               <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="relative z-20 w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-amber-400/20 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-[25%] bg-amber-400/15 rounded-full blur-2xl" />

                  {/* COMPACT CENTRAL MANAGING DIRECTOR NODE */}
                  <div className="relative w-32 h-32 lg:w-36 lg:h-36 bg-white shadow-[0_20px_50px_-15px_rgba(255,102,0,0.25)] rounded-full border-4 border-amber-400 flex flex-col items-center justify-center p-0.5 group overflow-hidden z-20 transition-all duration-500">
                     <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                           <p className="text-[10px] font-black text-white tracking-widest uppercase leading-none">{teamMembers[0].name}</p>
                           <p className="text-[7px] font-bold text-amber-400 uppercase tracking-widest mt-1 leading-none">Director</p>
                        </div>
                     </div>
                  </div>

                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 1000" style={{ overflow: 'visible' }}>
                     {teamMembers.slice(1).map((_, i) => {
                        const angle = (i * 360) / (teamMembers.length - 1);
                        const r = 280; // Compacted radius
                        const x = 500 + Math.cos((angle * Math.PI) / 180) * r;
                        const y = 500 + Math.sin((angle * Math.PI) / 180) * r * 0.95;
                        const realIdx = i + 1;
                        const isHovered = hoveredMember === realIdx;

                        return (
                           <g key={realIdx}>
                              <motion.line initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: isHovered ? 1 : 0.3 }} transition={{ duration: 1.2, delay: i * 0.05 }}
                                 x1="500" y1="500" x2={x} y2={y} stroke={isHovered ? "#FF6600" : "#E2E8F0"} strokeWidth={isHovered ? 3 : 1} strokeDasharray={isHovered ? "none" : "4 8"} />
                           </g>
                        );
                     })}
                  </svg>
               </motion.div>

               <div className="absolute inset-0 flex items-center justify-center">
                  {teamMembers.slice(1).map((member, i) => {
                     const realIdx = i + 1;
                     const angle = (i * 360) / (teamMembers.length - 1);
                     const r = 260; // Compacted radius
                     const x = Math.cos((angle * Math.PI) / 180) * r;
                     const y = Math.sin((angle * Math.PI) / 180) * r * 0.95;
                     const isHovered = hoveredMember === realIdx;

                     return (
                        <div key={realIdx} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                           <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.04 }}
                              onMouseEnter={() => setHoveredMember(realIdx)} onMouseLeave={() => setHoveredMember(null)}
                              className="flex flex-col items-center group cursor-pointer relative"
                           >
                              <div className={`relative w-20 h-20 lg:w-22 lg:h-22 p-1 bg-white rounded-full shadow-xl transition-all duration-500 ${isHovered ? 'scale-110 -translate-y-2 shadow-[#FF6600]/20' : ''}`}>
                                 <div className={`w-full h-full rounded-full overflow-hidden relative border ${isHovered ? 'border-[#FF6600]' : 'border-slate-100'}`}>
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[10%]" />
                                 </div>
                                 <div className="absolute top-0 right-0 w-6 h-6 lg:w-7 lg:h-7 bg-slate-950 rounded-full border border-white flex items-center justify-center shadow-lg group-hover:bg-[#FF6600] transition-colors duration-300">
                                    <Zap size={11} className="text-white" />
                                 </div>
                              </div>
                              <motion.div animate={{ opacity: isHovered ? 1 : 0.8 }} className="mt-4 text-center px-1">
                                 <h4 className="text-[11px] font-bold text-slate-950 tracking-tight uppercase leading-none">{member.name}</h4>
                                 <p className="text-[8px] font-semibold text-[#FF6600] uppercase tracking-widest mt-2 leading-none whitespace-nowrap">{member.role}</p>
                              </motion.div>
                           </motion.div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* ETHOS GRID - ELITE TYPOGRAPHY REFINEMENT */}
         <section className="py-14 sm:py-20 lg:py-32 bg-[#FDFBF9] border-y border-slate-100">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-12 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-2">
                  <SectionHeader label="Institutional Axis" title="Elite Collaboration" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     {pillars.map((pillar, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-md shadow-sm hover:border-[#FF6600] transition-all group hover:shadow-2xl">
                           <div className="flex items-center gap-4 mb-5">
                              <div className="w-8 h-8 bg-slate-950 flex items-center justify-center text-white group-hover:bg-[#FF6600] transition-all rounded-sm shadow-xl shrink-0">
                                 <pillar.icon size={16} />
                              </div>
                              <h4 className="text-[14px] font-bold text-slate-950 capitalize tracking-[0.1em] border-l-4 border-[#FF6600] pl-4">{pillar.title}</h4>
                           </div>
                           <p className="text-sm text-slate-500 font-semibold leading-relaxed group-hover:text-slate-800 transition-colors">{pillar.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-6 lg:pl-12 border-l-0 lg:border-l-2 border-slate-200 py-2 mt-10 lg:mt-0">
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-slate-950 uppercase tracking-tighter leading-[1.1]">
                     Synergy At <span className="text-[#FF6600]">Every Node.</span>
                  </h3>
                  <p className="text-sm lg:text-[16px] text-slate-950 font-semibold lg:pl-6 py-2 leading-relaxed bg-white/40 rounded-r-sm">
                     "Innovative infrastructure meets institutional reliability. We prioritize high-status technical solutions over standard corporate protocols."
                  </p>
                  <div className="space-y-3">
                     {["Noida Technical Centers of Excellence", "US-Compliant Security Protocols", "24/7 Global Delivery Pipeline"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-[11px] font-bold text-slate-950 uppercase tracking-[0.2em] leading-none group cursor-default">
                           <ChevronRight size={14} className="text-[#FF6600] group-hover:translate-x-1 transition-transform" /> {item}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Team;
