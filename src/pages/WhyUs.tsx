import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, TrendingUp, Cpu, Globe, Users, Target } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const features = [
  { title: "Offshore Experts", icon: Globe, desc: "Seamless US-based support with Noida-based execution excellence." },
  { title: "Technical Rigor", icon: Cpu, desc: "Meticulous focus on code quality and technical scalability." },
  { title: "Elite Strategy", icon: Target, desc: "Driving high-status digital identities for corporate entities." },
  { title: "24/7 Support", icon: Users, desc: "Unwavering commitment to reliable project delivery worldwide." },
  { title: "Impact Driven", icon: TrendingUp, desc: "Ensuring 100% time-to-market success for every client." },
  { title: "Secure Infrastructure", icon: ShieldCheck, desc: "Uncompromising data protection and security compliance." }
];

const WhyUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "WHY CHOOSE US.".split("");

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
                  className={index >= 11 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
              Choosing the Definitive Choice for Your Vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE ADVANTAGE SECTION */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: NARATIVE */}
            <div className="lg:col-span-12 space-y-16">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">The Advantage Choice</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Defining the <span className="text-indigo-600 not-italic">Corporate Success Standard.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] font-bold text-slate-700 leading-relaxed font-secondary">
                  WebUltraSolution offers a unique value proposition, bridging elite Noida talent with US-standard enterprise requirements. We deliver uncompromising reliability for global partners.
                </p>
              </div>

              {/* Cinematic Visual Banner */}
              <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(79,70,229,0.2)] border-8 border-white group"
              >
                  <img 
                      src="C:\Users\hs760\.gemini\antigravity\brain\595e57d0-2358-45b3-929a-b6aba06509a3\whyus_global_strategy_1775240749871.png" 
                      alt="Global Success Strategy" 
                      className="w-full h-[400px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-[5s]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-12 left-12 text-white">
                      <div className="flex items-center gap-4 mb-2">
                          <div className="h-[2px] w-8 bg-indigo-400" />
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Global Network</span>
                      </div>
                      <h4 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter">Strategic Excellence.</h4>
                  </div>
              </motion.div>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="group space-y-4 text-center p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all hover:bg-white hover:shadow-2xl hover:border-indigo-100"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 mx-auto">
                      <feature.icon size={28} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter leading-none">{feature.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRIC NARRATIVE */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Built on <span className="text-indigo-400 not-italic">Excellence.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising precision. Proven Global Results.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Choose Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
