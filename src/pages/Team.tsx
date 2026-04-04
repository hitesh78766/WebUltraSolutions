import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const teamMembers = [
  { name: "Hitesh", role: "Elite Architect", skill: "System Core", image: "/images/team/professional_team_avatar_3_1775241301225.png", angle: -90 },
  { name: "Rahul", role: "UI/UX Lead", skill: "Visual Design", image: "/images/team/professional_team_avatar_2_1775241280154.png", angle: -18 },
  { name: "Nikhil", role: "Full Stack", skill: "Backend Master", image: "/images/team/professional_team_avatar_1_1775241265516.png", angle: 54 },
  { name: "Sagar", role: "App Dev", skill: "Mobile Specialist", image: "/images/team/professional_team_avatar_5_1775241346010.png", angle: 126 },
  { name: "Deepak", role: "SEO Lead", skill: "Growth Meta", image: "/images/team/professional_team_avatar_4_1775241326213.png", angle: 198 }
];

const Team: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "OUR ELITE TEAM.".split("");

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[250px] lg:h-[300px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
        <ThreeNeuralStorm />
        <ParticleNetwork />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
              {headingChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={index >= 10 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
               Connecting Human Talent with Technical Precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HUB AND SPOKE TEAM NETWORK */}
      <section className="py-20 relative bg-white overflow-hidden min-h-[800px] flex items-center justify-center">
         {/* Background Grid Lines */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#5e6ad2_1px,transparent_1px)] [background-size:40px_40px]" />
         </div>

         <div className="relative w-full max-w-5xl mx-auto aspect-square lg:aspect-video flex items-center justify-center py-20 px-8">
            
            {/* CENTRAL HUB: GLASSMORPHIC CORE */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative z-20 w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center"
            >
               {/* Multi-layered Glows */}
               <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[80px] animate-pulse" />
               <div className="absolute inset-[-20%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
               
               {/* Dual Ring System */}
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-2 border-dashed border-indigo-200/50 rounded-full" 
               />
               <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-indigo-100/30 rounded-full" 
               />

               {/* Central Glass Capsule */}
               <div className="relative w-40 h-40 lg:w-48 lg:h-48 bg-white/80 backdrop-blur-3xl rounded-full border border-white shadow-[0_30px_60px_-15px_rgba(94,106,210,0.3)] flex flex-col items-center justify-center p-8 group">
                  <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                     <Cpu size={32} />
                  </div>
                  <div className="mt-4 text-center">
                     <h3 className="text-[12px] font-black text-slate-900 tracking-widest uppercase italic">The Core</h3>
                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Strategy Hub</p>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>

               {/* CURVED CONNECTOR PATHS (Data Flow) */}
               <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible">
                  <defs>
                     <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                     </linearGradient>
                  </defs>
                  {teamMembers.map((member, i) => {
                     const r = 260; // Spread radius
                     const x = Math.cos((member.angle * Math.PI) / 180) * r;
                     const y = Math.sin((member.angle * Math.PI) / 180) * r;
                     
                     // Calculate Bezier Control point for curves
                     const cpX = x * 0.4;
                     const cpY = y * 0.1;

                     return (
                        <motion.path
                           key={i}
                           d={`M 50% 50% Q calc(50% + ${cpX}px) calc(50% + ${cpY}px) calc(50% + ${x}px) calc(50% + ${y}px)`}
                           initial={{ pathLength: 0, opacity: 0 }}
                           animate={{ 
                              pathLength: 1, 
                              opacity: 0.4,
                              strokeDashoffset: [0, -20]
                           }}
                           transition={{ 
                              pathLength: { delay: 1 + i * 0.1, duration: 1.5, ease: "easeOut" },
                              opacity: { duration: 1 },
                              strokeDashoffset: { repeat: Infinity, duration: 1.5, ease: "linear" }
                           }}
                           fill="none"
                           stroke="url(#lineGrad)"
                           strokeWidth="1.5"
                           strokeDasharray="5 10"
                        />
                     );
                  })}
               </svg>
            </motion.div>

            {/* TEAM NODES: ORGANIC SPREAD */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               {teamMembers.map((member, i) => {
                  const r = 260;
                  const x = Math.cos((member.angle * Math.PI) / 180) * r;
                  const y = Math.sin((member.angle * Math.PI) / 180) * r;
                  
                  return (
                     <div 
                        key={i} 
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        style={{ 
                           transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                        }}
                     >
                        <motion.div
                           initial={{ opacity: 0, scale: 0.5, y: 20 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 1.5 + i * 0.1, duration: 0.8 }}
                           className="flex flex-col items-center group relative"
                        >
                           {/* Outer Ring Glow */}
                           <div className="absolute -inset-4 bg-indigo-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           
                           {/* Profile Node with Gradient Border */}
                           <div className="relative w-20 h-20 p-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] shadow-2xl overflow-hidden group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500">
                              <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden">
                                 <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              </div>
                           </div>

                           {/* Permanent Label below Image */}
                           <div className="mt-4 opacity-100 transition-all duration-500 min-w-[140px] text-center">
                              <div className="bg-white/90 backdrop-blur-xl p-2.5 rounded-2xl border border-white shadow-lg group-hover:shadow-indigo-500/10 transition-shadow">
                                 <p className="text-[11px] font-black text-slate-900 tracking-tight">{member.name}</p>
                                 <p className="text-[8px] font-black text-indigo-600 uppercase tracking-widest mt-1">{member.role}</p>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  );
               })}
            </div>

         </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Empower Your <span className="text-indigo-400 not-italic">Infrastructure.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising quality is one conversation away.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Work With the Elite
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Team;
