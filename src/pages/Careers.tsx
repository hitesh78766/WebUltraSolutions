import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

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

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
      {/* HERO SECTION - ELITE COMPACT STYLE */}
      <section className="relative min-h-[280px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeNeuralStorm />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-5">
           <div className="flex flex-col items-center gap-4">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
              >
                 <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Join the Elite Collective</span>
              </motion.div>

              <h1 className="text-2xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-2xl mx-auto">
                 {(() => {
                    const title = "JOIN THE ELITE.";
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
                                className={`inline-block ${word === "ELITE." ? "text-[#FF6600]" : ""}`}
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
                 className="text-slate-600 text-xs lg:text-base font-medium max-w-xl leading-relaxed"
              >
                 Engineering your professional evolution with purpose. Join a high-performance team that values uncompromising precision.
              </motion.p>
           </div>
        </div>
      </section>

      {/* CORE CULTURE SECTION */}
      <section className="py-10 lg:py-16 bg-[#FDFBF9] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: NARRATIVE */}
            <div className="lg:col-span-12 space-y-12">
              <div className="space-y-4 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-8 bg-[#FF6600]" />
                  <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Career Path Excellence</span>
                </div>
                <h2 className="text-2xl lg:text-2xl font-medium text-slate-800 tracking-tighter uppercase italic leading-none">
                  Defining the <span className="text-[#FF6600] not-italic">Digital Future Together.</span>
                </h2>
                <p className="text-[13px] lg:text-[15px] font-medium text-slate-700 leading-relaxed font-secondary max-w-2xl mx-auto">
                  Join a high-performance team that values uncompromising precision and global success. At WebUltraSolution, we don't just offer jobs; we offer global leadership opportunities.
                </p>
              </div>

              {/* JOBS LIST */}
              <div className="space-y-4 max-w-4xl mx-auto">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white border border-slate-100 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#FF6600] transition-all cursor-pointer shadow-sm"
                  >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-[#FF6600] uppercase tracking-widest bg-orange-50 px-2.5 py-0.5 rounded-md leading-none">{job.type}</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{job.location}</span>
                        </div>
                        <h4 className="text-lg font-medium text-slate-800 uppercase tracking-tight leading-none group-hover:text-[#FF6600] transition-colors">{job.title}</h4>
                        <p className="text-[12px] text-slate-500 font-normal leading-relaxed max-w-md group-hover:text-slate-700">{job.description}</p>
                    </div>
                    <motion.div className="flex-shrink-0">
                        <button className="px-6 py-2.5 bg-[#FF6600] text-white rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm group-hover:bg-slate-900 transition-all">Apply Now</button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRICS SECTION - ELITE COMPACT */}
      <section className="py-10 bg-white border-y border-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Innovation", icon: Zap, label: "Fast Development" },
                { title: "Impact", icon: TrendingUp, label: "Market Success" },
                { title: "Loyalty", icon: Users, label: "Strong Retention" },
                { title: "Precision", icon: Target, label: "Expert Focus" }
            ].map((pill, i) => (
              <div key={i} className="p-6 bg-[#FDFBF9] rounded-md border border-slate-100 text-center space-y-2 shadow-sm hover:border-[#FF6600] transition-all group">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-[#FF6600] mx-auto shadow-sm group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                  <pill.icon size={20} />
                </div>
                <h4 className="text-[10px] font-medium text-slate-800 uppercase tracking-widest italic leading-none pt-2">{pill.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
