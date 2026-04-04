import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const jobs = [
  { title: "Senior UI/UX Strategist", type: "Full-Time", location: "Noida / Remote", description: "Crafting immersive digital identities for our global corporate partners." },
  { title: "Lead Full-Stack Architect", type: "Full-Time", location: "Noida / Remote", description: "Engineering high-performance software ecosystems for elite enterprises." },
  { title: "Marketing Strategy Lead", type: "Full-Time", location: "Noida / Remote", description: "Driving worldwide engagement success and high-status digital growth." }
];

const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "JOIN THE ELITE.".split("");

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
                  className={index >= 9 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
              Engineering Your Professional Evolution with Purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE CULTURE SECTION */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: NARRATIVE */}
            <div className="lg:col-span-12 space-y-16">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Career Path Excellence</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Defining the <span className="text-indigo-600 not-italic">Digital Future Together.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] font-bold text-slate-700 leading-relaxed font-secondary">
                  Join a high-performance team that values uncompromising precision and global success. At WebUltraSolution, we don't just offer jobs; we offer global leadership opportunities in design and IT.
                </p>
              </div>

              {/* JOBS LIST */}
              <div className="space-y-6 max-w-4xl mx-auto pt-8">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all cursor-pointer"
                  >
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{job.type}</span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{job.location}</span>
                        </div>
                        <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{job.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">{job.description}</p>
                    </div>
                    <motion.div className="flex-shrink-0">
                        <button className="px-8 py-3 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg group-hover:bg-slate-900 transition-all">Apply Now</button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className={`lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-8`}>
              {[
                  { title: "Innovation", icon: Zap, label: "Fast Development" },
                  { title: "Impact", icon: TrendingUp, label: "Market Success" },
                  { title: "Loyalty", icon: Users, label: "Strong Retention" },
                  { title: "Precision", icon: Target, label: "Expert Focus" }
              ].map((pill, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 text-center space-y-3 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto">
                    <pill.icon size={24} />
                  </div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest italic">{pill.title}</h4>
                </div>
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
            Scale Your <span className="text-indigo-400 not-italic">Potential.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising quality. Proven Success. Global Impact.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Join the Elite
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
