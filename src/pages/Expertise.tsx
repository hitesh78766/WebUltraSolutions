import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Layout, Smartphone, Search, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const expertiseCards = [
  { title: "Custom Software", icon: Code2, desc: "Building scalable, high-performance enterprise applications with modern tech stacks.", color: "bg-indigo-50", text: "text-indigo-600" },
  { title: "Mobile Innovation", icon: Smartphone, desc: "Developing immersive, high-status iOS and Android experiences for global brands.", color: "bg-blue-50", text: "text-blue-600" },
  { title: "Global SEO", icon: Search, desc: "Strategic optimization to drive worldwide engagement and search dominance.", color: "bg-indigo-50", text: "text-indigo-600" },
  { title: "UI/UX Architecture", icon: Layout, desc: "Crafting digital identities with meticulous attention to detail and user flow.", color: "bg-blue-50", text: "text-blue-600" },
  { title: "Data Security", icon: ShieldCheck, desc: "Uncompromising protection for global corporate data and infrastructure.", color: "bg-slate-50", text: "text-slate-800" },
  { title: "E-Commerce", icon: Briefcase, desc: "End-to-end commerce solutions for high-status retail and digital trade.", color: "bg-indigo-50", text: "text-indigo-600" }
];

const Expertise: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "OUR EXPERTISE.".split("");

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } as any },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
        <ThreeNeuralStorm />
        <ParticleNetwork />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
              {headingChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className={index >= 4 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
              Technical Rigor Meets Global Ambition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE EXPERTISE GRID */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="space-y-16">
            
            {/* Header Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-12 space-y-6 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Enterprise Capabilities</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Specialized in <span className="text-indigo-600 not-italic">Technical Precision.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] font-bold text-slate-700 leading-relaxed font-secondary">
                  At WebUltraSolution, we deliver high-status digital infrastructure that serves as the backbone of global corporate success. Our domain expertise span the most rigorous technological demands.
                </p>
               </div>
            </div>

            {/* Cinematic Visual Banner */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white group"
            >
               <img 
                  src="C:\Users\hs760\.gemini\antigravity\brain\595e57d0-2358-45b3-929a-b6aba06509a3\expertise_technical_architecture_1775240729958.png" 
                  alt="Technical Excellence" 
                  className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-[3s]" 
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-10 left-10 text-white space-y-2">
                  <span className="text-[10px] font-black tracking-widest uppercase opacity-80">Elite Core</span>
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter">Architectural Precision.</h4>
               </div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 40px 100px -30px rgba(79,70,229,0.1)' }}
                  className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between h-[380px] group transition-all"
                >
                  <div className="space-y-6">
                    <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center ${card.text} group-hover:scale-110 transition-transform duration-500`}>
                      <card.icon size={28} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{card.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Explore Service</span>
                    <TrendingUp size={16} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Reliability", value: "99.9%" },
                { label: "Global Clients", value: "500+" },
                { label: "Lines of Code", value: "2M+" },
                { label: "Market Success", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                  <span className="text-4xl lg:text-5xl font-black text-indigo-400 tracking-tighter italic block">{stat.value}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Ready to Leverage <span className="text-indigo-600 not-italic">Our Expertise?</span>
          </h2>
          <p className="text-slate-500 text-lg font-bold">Uncompromising quality is one conversation away.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Start Project
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
