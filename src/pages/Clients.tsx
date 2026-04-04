import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Zap } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const clientCategories = [
  { name: "Enterprise Corp", region: "United States", description: "Supporting high-stakes infrastructure and custom software for US-based corporate entities.", color: "indigo" },
  { name: "Global Retail", region: "Europe", description: "Providing seamless e-commerce and retail management systems for international trade.", color: "blue" },
  { name: "Tech Ventures", region: "Asia Pacific", description: "Accelerating technical growth for vision-driven startups and major digital ventures.", color: "indigo" }
];

const Clients: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "OUR CLIENTS.".split("");

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
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
                  className={index >= 4 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
              Resonating Excellence with Our Strategic Global Partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE CLIENT NARRATIVE */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="space-y-16">
            
            {/* Header Narrative */}
            <div className="max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12 space-y-6 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Worldwide Support</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Supporting the <span className="text-indigo-600 not-italic">World's Most Trusted Ambitions.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] font-bold text-slate-700 leading-relaxed font-secondary">
                  WebUltraSolution serves as the definitive offshore infrastructure partner for enterprises across the USA, Europe, and Asia Pacific. Our clients entrust us with their high-status digital goals.
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {clientCategories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="p-10 bg-slate-50 border border-slate-100 rounded-3xl space-y-6 group hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-700 hover:shadow-2xl h-[340px] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-${cat.color}-600 group-hover:bg-white/10 group-hover:text-white transition-all`}>
                          <Globe size={24} />
                        </div>
                        <span className="text-[9px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-widest">{cat.region}</span>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter leading-none">{cat.name}</h4>
                        <p className="text-sm text-slate-500 group-hover:text-white/80 font-medium leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200 group-hover:border-white/20">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <Zap key={i} size={12} className="text-indigo-400 group-hover:text-white" fill="currentColor" />)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Trust the <span className="text-indigo-400 not-italic">Elite Standards.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising quality is one conversation away.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Start Success Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Clients;
