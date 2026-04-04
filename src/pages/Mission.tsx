import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Target, ShieldCheck, Award, MessageSquare, Quote } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "OUR MISSION.".split("");

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[250px] lg:h-[350px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
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
                  className={index >= 4 ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
               Defining Excellence Through Your Vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE NARRATIVE: MOSAIC LAYOUT */}
      <section className="py-16 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24 space-y-24">
          
          {/* SECTION 1: OUR MISSION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-orange-600" />
                <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em]">The Core Purpose</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 not-italic">Mission.</span>
              </h2>
              <div className="p-8 bg-slate-50 border-l-4 border-orange-500 rounded-r-3xl relative overflow-hidden group">
                 <Quote size={40} className="absolute -top-2 -right-2 text-orange-200/50 -rotate-12 group-hover:rotate-0 transition-transform" />
                 <p className="text-[15px] lg:text-[17px] font-bold text-slate-800 leading-relaxed italic relative z-10">
                    "To fulfill all needs and exceed all expectations of our client's is the main mantra that we passionately follow at webultrasolution."
                 </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-[15px] font-medium text-slate-600 leading-relaxed">
              <p className="text-lg font-bold text-slate-800 font-secondary">
                Webultrasolution is provided customized services to specific web designing and web programming needs of the clients.
              </p>
              <p>Our approach is customer-oriented, business-minded and cost-efficient.</p>
              <p>It's about doing the right thing, not just anything. We work to perceive the entire scope of a business so that we can not only recommend the right solutions, but implement them consistently across all mediums.</p>
              <p>We use strategic data and relevant insights to enlighten the creative process and technical fulfilment.</p>
              <div className="p-6 bg-slate-900 rounded-[2rem] text-white">
                 <p className="text-sm font-bold leading-relaxed opacity-90">
                    By taking a strategic approach we're able to boost businesses see the whole forest before picking the right trees: identifying the channels, tactics and technologies that will drive your business forward.
                 </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: OUR VISION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-red-600" />
                    <span className="text-red-700 text-[10px] font-black uppercase tracking-[0.5em]">Global Horizon</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 not-italic">Vision.</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                      "Create a business Globally full of prosperity, meaning, and connection for all.",
                      "Delivering measurable results to clients, employees, and business owners.",
                      "Provide the best possible results and deliver the WOW factor.",
                      "Leverage secret expertise for tailored-fit business models.",
                      "Creating meaningful relationships through digital experiences.",
                      "Disciplined approach towards supreme customer satisfaction.",
                      "Become a prime performer in Quality Web, Print and Software solutions."
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                         <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-red-600 group-hover:text-white transition-all flex-shrink-0">
                            <Target size={14} />
                         </div>
                         <p className="text-[12px] font-bold text-slate-700 leading-snug">{item}</p>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="lg:col-span-5 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
                >
                   <img src="C:\Users\hs760\.gemini\antigravity\brain\595e57d0-2358-45b3-929a-b6aba06509a3\mission_vision_success_1775240774071.png" alt="Vision Visual" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                   <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-red-900/40 via-transparent to-transparent text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Global Scale</span>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* SECTION 3: OUR COMMITMENT */}
          <div className="py-20 bg-slate-50 rounded-[3rem] px-10 lg:px-20 relative overflow-hidden border border-orange-100">
             <div className="absolute top-0 right-0 p-10 opacity-5 grayscale">
                <Compass size={150} className="animate-spin-slow" />
             </div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-orange-600" />
                      <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em]">The Promise</span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 not-italic">Commitment.</span>
                    </h3>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed italic">
                      "We take pride in our on-time delivery and ability to meet quick turn around requests while exceeding customer quality demands."
                    </p>
                </div>
                <div className="lg:col-span-8 space-y-6 text-[15px] font-medium text-slate-700 leading-relaxed">
                   <p>Customer Satisfaction continues to be of utmost importance to CWS, as do Consistent quality, Constant innovation, Technology enhancement, Process improvement and Customer orientation.</p>
                   <p>We have developed our core competence and aligning objectives at all levels so as to realize synergy in operations. It is our collaborative approach, creative input, and emphasis on economical solutions that has allowed us to develop an impressive and diverse client list.</p>
                </div>
             </div>
          </div>

          {/* SECTION 4: CREDENTIALS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-10">
             <div className="lg:col-span-12 text-center space-y-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-indigo-600" />
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Authority & Integrity</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                  Our <span className="text-indigo-600 not-italic">Credentials.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] font-bold text-slate-800 leading-relaxed font-secondary">
                  Best quality services, creative designs, innovative ideas, cost-effective & time bound project completion are our special features.
                </p>
             </div>
             
             <div className="lg:col-span-6 p-10 bg-indigo-50/30 rounded-[2.5rem] border border-indigo-100/50 space-y-4">
                <div className="flex gap-4 items-start">
                   <Award className="text-indigo-600 flex-shrink-0" size={32} />
                   <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                      People looking for consumer-friendly, perfect web solutions, may contact us freely. We offer personalized prompt services to our valuable clients which strengthen our relations & build trust. We provide excellent web solutions to our clients as per their need & with solutions.
                   </p>
                </div>
             </div>

             <div className="lg:col-span-6 p-10 bg-slate-900 text-white rounded-[2.5rem] space-y-6 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10"><ThreeNeuralStorm /></div>
                <div className="relative z-10 flex gap-4 items-start">
                   <ShieldCheck className="text-orange-400 flex-shrink-0" size={32} />
                   <div className="space-y-4">
                      <h4 className="text-lg font-black italic tracking-widest uppercase">The Integrity Pillar</h4>
                      <p className="text-sm font-bold leading-relaxed opacity-90">
                         "Integrity: We believe in doing the right thing, no matter what the cost. We believe in fairness, transparency, and honesty. Without integrity, we have nothing"
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Share Our <span className="text-orange-400 not-italic">Vision.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising precision. Proven Results. Global Reach.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Connect With Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Mission;
