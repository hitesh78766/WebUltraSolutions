import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight
} from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';

export default function ERPSoftware() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const erpContent = [
    "Enterprise Resource Planning (ERP) Software, or ERP Solutions, provide you with powerful functionality and cutting-edge technology to springboard your business to the next level.",
    "Influence role-based access to critical data, applications, procurement, manufacturing, service, sales, finance, and HR.",
    "In Web-based ERP Software eliminates the error about any technical problem as online help from the vendors will able to solve any such issues within a short period.",
    "In Web-based ERP Software such as resource makes the implementation process very easy.",
    "Web-based ERP software easy to use anytime and anywhere from a simple browser.",
    "ERP systems often come equipped with features to ensure regulatory compliance in various industries.",
    "ERP software serves as a centralized platform that integrates and streamlines various business processes.",
    "ERP systems optimize business processes by automating repetitive tasks, reducing delays, and minimizing paperwork.",
    "ERP software helps maintain data accuracy and consistency by eliminating manual data entry and reducing the risk of errors."
  ];

  return (
    <div className="bg-white min-h-screen font-secondary">
      {/* ELITE HERO: SYNCED WITH WEBDESIGN ARCHITECTURE */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-[100px] pb-16 overflow-hidden">
        <ParticleNetwork color="dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Institutional Grade</span>
          </motion.div>

          {/* CHARACTER-SPLIT TITLE: SYNCED SCALE */}
          <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto">
            {(() => {
              const title = "ERP SOFTWARE SOLUTIONS.";
              return title.split(" ").map((word, wordIdx) => (
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
                      className={`inline-block ${word === "SOFTWARE" || word === "SOLUTIONS." ? "text-[#FF6600]" : "text-slate-900"}`}
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
            className="text-slate-600 text-sm lg:text-base font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            ERP Solutions, provide you with powerful functionality and cutting-edge technology
          </motion.p>
        </div>
      </section>

      {/* CORE CONTENT: STRICT IMAGE PARITY IN WEBDESIGN STYLE */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT SIDE: ISOMETRIC HUB */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square sticky top-32 rounded-md overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-slate-100 bg-white group"
            >
              <img
                src="/images/erp_institutional_interface.png"
                alt="ERP Core Illustration"
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6600]/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-md border border-white/20 shadow-xl text-center">
                <h2 className="text-2xl font-display font-black text-[#FF6600] uppercase tracking-tight text-center">ERP Software</h2>
                <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mt-1">Institutional Distribution Hub</p>
              </div>
            </motion.div>

            {/* RIGHT SIDE: EXACT BULLET POINTS IN INSTITUTIONAL STYLE */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-[#FF6600]" />
                  <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.4em] text-[#FF6600]">Technical Overview</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-display font-extrabold tracking-tight uppercase leading-[1.1] text-slate-950">
                  ERP <span className="text-[#FF6600]">Software.</span>
                </h2>
              </div>

              {/* LIST ARCHITECTURE: EXACT CONTENT COPIED FROM IMAGE */}
              <div className="space-y-8">
                {erpContent.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6600] font-mono font-black text-sm transition-all group-hover:bg-[#FF6600] group-hover:text-white group-hover:rotate-12">
                      0{i + 1}
                    </div>
                    <div className="space-y-2 pt-1.5 flex-1">
                      <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-700 italic group-hover:text-slate-900 transition-colors">
                        {text}
                      </p>
                      <div className="w-8 h-[1px] bg-slate-100 group-hover:w-full group-hover:bg-orange-100 transition-all duration-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
