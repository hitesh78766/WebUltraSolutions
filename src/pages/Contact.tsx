import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, MessageSquare, Mail, Send, CheckCircle2, Globe2 } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "CONTACT US.".split("");

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[250px] lg:h-[350px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
        <ThreeNeuralStorm />
        <ParticleNetwork />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
              {headingChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={index >= 7 ? "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-[0.6em] max-w-3xl mx-auto leading-relaxed">
               We can assist you in Website Services, E-commerce solutions, CMS Websites, Mobile App development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: INFORMATION PILLARS */}
            <div className="lg:col-span-5 space-y-12">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-red-600" />
                    <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.5em]">The Headquarters</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tighter uppercase italic leading-none">
                    Digicorn <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 not-italic">Webultrasolution.</span>
                  </h2>
                  <p className="text-[14px] text-slate-500 font-bold leading-relaxed italic">
                    "Feel free to share your requirements with us – we build the digital future together."
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "Main Office Address", value: "A-043, A Block, Sector 63, Noida, Uttar Pradesh 201301", icon: MapPin, color: "bg-blue-500" },
                    { label: "Telephone No", value: "0120 4736854", icon: Phone, color: "bg-orange-500" },
                    { label: "Mobile", value: "+91 8797806959", icon: Phone, color: "bg-red-500" },
                    { label: "Skype", value: "webultrasolution", icon: MessageSquare, color: "bg-purple-500" },
                    { label: "Send Us an E-mail", value: "info@webultrasolution.com", icon: Mail, color: "bg-emerald-500" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-center gap-6 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    >
                      <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                        <item.icon size={26} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-[14px] font-medium text-slate-800 leading-tight">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* RIGHT: ELITE INTAKE FORM */}
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl"
               >
                  <div className="absolute top-0 right-0 p-10 opacity-5 grayscale">
                    <Globe2 size={250} />
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                     <div className="space-y-4">
                        <h3 className="text-3xl font-bold uppercase italic tracking-tighter">Initiate <span className="text-orange-400 not-italic">Connection.</span></h3>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">Our team responds within 12 business hours.</p>
                     </div>

                     <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</label>
                           <input type="text" className="w-full bg-slate-800 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-orange-500 transition-all outline-none" placeholder="Elite Professional" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                           <input type="email" className="w-full bg-slate-800 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-orange-500 transition-all outline-none" placeholder="contact@domain.com" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">How can we assist you?</label>
                           <textarea className="w-full bg-slate-800 border-none rounded-xl p-4 text-sm font-bold h-32 focus:ring-2 focus:ring-orange-500 transition-all outline-none resize-none" placeholder="Briefly describe your project requirements..." />
                        </div>
                        
                        <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="md:col-span-2 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-sm font-bold uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-3 group"
                        >
                           Send Discovery Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                     </form>

                     <div className="pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                           "Website Design", "Ecommerce Hub", "CMS Expertise"
                        ].map((serv, i) => (
                           <div key={i} className="flex items-center gap-2 opacity-50">
                              <CheckCircle2 size={14} className="text-orange-500" />
                              <span className="text-[9px] font-bold uppercase tracking-widest">{serv}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* GLOBAL INFRASTRUCTURE MAP (VISUALIZATION) */}
      <section className="h-[400px] lg:h-[500px] relative bg-slate-50 overflow-hidden group">
         <div className="absolute inset-0 grayscale contrast-125 opacity-30 group-hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
            <img src="C:\Users\hs760\.gemini\antigravity\brain\595e57d0-2358-45b3-929a-b6aba06509a3\overview_digital_network_hub_1775239051985.png" alt="Strategic Map" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center border-2 border-red-600/50"
            >
               <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_20px_#dc2626]" />
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
