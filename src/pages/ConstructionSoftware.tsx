import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat,
  Construction,
  Building2,
  Briefcase,
  Layers,
  Activity,
  Zap,
  ArrowRight,
  Globe,
  Settings,
  ShieldCheck,
  Cpu,
  BarChart3,
  Search,
  Box
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const constructionPillars = [
  {
    id: "MOD-01",
    tag: "Software Core",
    title: "Project Lifecycle Management",
    desc: "Construction software typically manages a lot of data and changeable workflows such as project management, project estimating, earned value management, project accounting, project cost tracking, procurement, etc.",
    icon: Construction
  },
  {
    id: "MOD-02",
    tag: "Infrastructure",
    title: "High-Demand Performance",
    desc: "The demand it has on the server, as well as the client browser, is much greater than the typical website. Today's systems can easily handle it - and the web technology that's coming over the next year is going to make it even more powerful.",
    icon: Cpu
  },
  {
    id: "MOD-03",
    tag: "Architecture",
    title: "Capital Project Advantage",
    desc: "Construction Software still has a slight edge on web-based software today, but unless you're running big capital projects with tens of thousands of items in your WBS, cloud-based software can handle most jobs out there.",
    icon: Layers
  },
  {
    id: "MOD-04",
    tag: "Operations",
    title: "Resource & Staff Monitoring",
    desc: "You will be able to manage and monitor staff, contractors, suppliers, and dealers to improve on their performance. Upgrades are automatic and invisible, ensuring zero-downtime operations.",
    icon: Activity
  }
];

const lifecycleSteps = ["Analysis", "Specification", "Design", "Develop", "Testing", "Implement"];

export default function ConstructionSoftware() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary">
      {/* COMPACT INDUSTRIAL HERO */}
      <div className="relative min-h-[220px] lg:min-h-[300px] bg-transparent flex items-center justify-center overflow-hidden border-b border-slate-100">
        <ThreeNeuralStorm />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1 bg-slate-900 rounded shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Structural Module v8.1</span>
          </motion.div>

          <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
            {(() => {
              const title = "Construction Company Software.";
              return title.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-4">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={`${wordIdx}-${charIdx}`}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring", stiffness: 200, damping: 10,
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                      }}
                      className={`inline-block ${word === "Construction" ? "text-[#FF6600]" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ));
            })()}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-600 text-xs lg:text-sm font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Construction software typically manages a lot of data and changeable workflows. Structural integrity meets digital innovation.
          </motion.p>
        </div>
      </div>

      {/* UNIQUE UI PLACEMENT: THE CORE BLUEPRINT GRID */}
      <section className="py-12 lg:py-20 max-w-[1400px] mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT STACK - COMPACT MODULAR STYLE */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {constructionPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative p-8 bg-white border border-slate-100 rounded-md shadow-sm hover:shadow-2xl hover:border-[#FF6600]/20 transition-all duration-500"
              >
                {/* Technical Coordinates Background */}
                <span className="absolute top-4 right-6 text-[10px] font-black text-slate-100 group-hover:text-[#FF6600]/10 transition-colors uppercase tracking-[0.4em]">{pillar.id}</span>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-700 shadow-sm">
                      <pillar.icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                      <h3 className="text-xl font-display font-extrabold text-slate-950 uppercase leading-none mt-1">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="text-base font-semibold text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* UNIQUE INTERACTIVE DIAGRAM MODULE */}
          <div className="lg:col-span-12 py-12 flex flex-col items-center gap-12 border-y border-slate-50">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-display font-black text-slate-900 uppercase">Interactive <span className="text-[#FF6600]">Lifecycle.</span></h2>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">Proprietary Project Orchestration Diagram</p>
            </div>

            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
              {/* Central Project Core */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-slate-900 border-4 border-[#FF6600] flex items-center justify-center shadow-[0_0_50px_rgba(255,102,0,0.2)]"
              >
                <span className="text-white font-display font-black text-xs lg:text-sm tracking-widest uppercase">Project</span>
                <div className="absolute -inset-4 border border-[#FF6600]/30 rounded-full animate-spin-slow" />
              </motion.div>

              {/* Satellite Steps */}
              {lifecycleSteps.map((step, i) => {
                const angle = (i * (360 / lifecycleSteps.length)) * (Math.PI / 180);
                const radius = 160;
                const x = Math.cos(angle) * (radius * (window.innerWidth > 1024 ? 1.4 : 0.8));
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ x, y }}
                    className="absolute z-10 px-4 lg:px-6 py-2 bg-white border border-slate-100 rounded-md shadow-xl flex items-center gap-3 group cursor-pointer hover:border-[#FF6600] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-slate-900">{step}</span>
                    <div className="absolute inset-0 bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                  </motion.div>
                );
              })}

              {/* SVG Connecting Lines - Simplified */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="160" fill="none" stroke="#FF6600" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
