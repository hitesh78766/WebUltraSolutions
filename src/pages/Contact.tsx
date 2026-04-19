import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle2, 
  Globe2, 
  ArrowRight,
  Shield,
  Smartphone
} from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const contactItems = [
    { label: "Main Office Address", value: "A-043, A Block, Sector 63, Noida, Uttar Pradesh 201301", icon: MapPin, color: "bg-blue-600" },
    { label: "Telephone No", value: "0120 4736854", icon: Phone, color: "bg-orange-600" },
    { label: "Mobile", value: "+91 8797806959", icon: Smartphone, color: "bg-red-600" },
    { label: "Skype", value: "webultrasolution", icon: MessageSquare, color: "bg-purple-600" },
    { label: "Send Us an E-mail", value: "info@webultrasolution.com", icon: Mail, color: "bg-emerald-600" }
  ];

  return (
    <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-x-hidden">
      {/* ELITE 2.0 HEADER - COMPACT & CINEMATIC */}
      <section className="relative min-h-[280px] lg:min-h-[350px] flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeNeuralStorm />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
            {(() => {
              const title = "CONTACT US.";
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
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.05)
                      }}
                      className={`inline-block ${word === "US." ? "text-[#FF6600]" : ""}`}
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
            transition={{ duration: 1, delay: 0.8 }}
            className="text-slate-500 text-xs lg:text-base font-semibold max-w-xl mx-auto leading-relaxed"
          >
            "Feel free to share your requirements with us – we build the digital future together."
          </motion.p>
        </div>
      </section>

      {/* CORE CONTACT INTERFACE */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* LEFT: INFORMATION ARCHITECTURE */}
            <div className="lg:col-span-5 space-y-10">
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#FF6600]" />
                    <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">The Headquarters</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 tracking-widest uppercase leading-none">
                    Digicorn <span className="text-[#FF6600]">Webultrasolution.</span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 gap-4">
                  {contactItems.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-center gap-5 p-4 bg-slate-50 border border-slate-100 rounded-md hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-md flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-6`}>
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-[13px] font-bold text-slate-800 leading-tight">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* RIGHT: ELITE INTAKE FORM */}
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-slate-950 rounded-md p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5"
               >
                  <div className="absolute top-0 right-0 p-10 opacity-5 grayscale pointer-events-none">
                    <Globe2 size={300} />
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                     <div className="space-y-3">
                        <h3 className="text-3xl font-bold capitalize tracking-wide text-white">Connection<span className="text-[#FF6600]">.</span></h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Our team responds within 12 business hours.</p>
                     </div>

                     <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                           <input 
                              type="text" 
                              className="w-full bg-slate-900 border border-white/10 rounded-md p-4 text-xs font-bold text-white focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all outline-none placeholder:text-slate-700" 
                              placeholder="Elite Professional" 
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                           <input 
                              type="email" 
                              className="w-full bg-slate-900 border border-white/10 rounded-md p-4 text-xs font-bold text-white focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all outline-none placeholder:text-slate-700" 
                              placeholder="contact@domain.com" 
                           />
                        </div>
                        <div className="space-y-1.5 md:col-span-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">How can we assist you?</label>
                           <textarea 
                              className="w-full bg-slate-900 border border-white/10 rounded-md p-4 text-xs font-bold text-white h-32 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all outline-none resize-none placeholder:text-slate-700" 
                              placeholder="Briefly describe your project requirements..." 
                           />
                        </div>
                        
                        <motion.button
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           className="md:col-span-2 py-4 bg-gradient-to-r from-[#FF6600] to-red-600 rounded-md text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-3 transition-all hover:shadow-[#FF6600]/20"
                        >
                           Send Discovery Request <Send size={14} />
                        </motion.button>
                     </form>

                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                           "Website Design", "Ecommerce Hub", "CMS Expertise"
                        ].map((serv, i) => (
                           <div key={i} className="flex items-center gap-2 group cursor-default">
                              <CheckCircle2 size={12} className="text-[#FF6600] group-hover:scale-110 transition-transform" />
                              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{serv}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* REFINED CONCLUSION BLOCK - SYNCED WITH WEB DESIGN */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative py-12 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center group"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.1),transparent_70%)]" />
           
           <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                 <Shield size={24} />
              </div>
              <h3 className="text-lg lg:text-xl font-medium italic text-slate-200">
                "We provide industry-leading digital infrastructure for global enterprise leaders, ensuring every connection is built on a foundation of excellence."
              </h3>
              <div className="flex items-center justify-center gap-6 pt-4">
                 <div className="h-[1px] w-12 bg-white/10" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF6600]">Elite Standard</span>
                 <div className="h-[1px] w-12 bg-white/10" />
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;

