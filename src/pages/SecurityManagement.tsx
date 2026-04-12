import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Activity,
  Fingerprint,
  Eye,
  Database,
  Zap,
  ArrowRight,
  ShieldAlert,
  Search,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  FileText,
  Users
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import ParticleNetwork from '../components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

export default function SecurityManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  const foundationalNodes = [
    {
      title: "METHODOLOGY CORE",
      icon: Cpu,
      desc: "Security Management Software has been emphasized mainly to introduce methodologies which are Practical, Flexible and Understandable. It provides an effective platform for alignment."
    },
    {
      title: "SDLC INTEGRATION",
      icon: Layers,
      desc: "Application Security can be seamlessly integrated into the SDLC by introducing specific steps or process within the development phases for robust protection."
    },
    {
      title: "POSITION IMPROVEMENT",
      icon: TrendingUp,
      desc: "Software methodology for improving the current position of Application Development by integrating Software Security across all architectural layers."
    },
    {
      title: "DYNAMIC ADAPTATION",
      icon: Activity,
      desc: "The application security and landscape are changing rapidly. We provide the tools to mitigate risks of application security attacks early in the lifecycle."
    }
  ];

  const strategicProtocols = [
    {
      code: "P-SEC-01",
      title: "Predictive Risk Assessment",
      icon: Target,
      desc: "Conduct thorough risk assessments to identify potential security threats and vulnerabilities before they manifest."
    },
    {
      code: "P-SEC-02",
      title: "Policy Formulation",
      icon: FileText,
      desc: "Formulate comprehensive security policies and procedures tailored to the organization's unique operational needs."
    },
    {
      code: "P-SEC-03",
      title: "Robust Access Control",
      icon: Lock,
      desc: "Implement robust access controls to ensure that only authorized personnel can access sensitive information and resources."
    },
    {
      code: "P-SEC-04",
      title: "Incident Response",
      icon: ShieldAlert,
      desc: "Develop and regularly update an incident response plan to efficiently address and mitigate security incidents in real-time."
    },
    {
      code: "P-SEC-05",
      title: "Cognitive Training",
      icon: Users,
      desc: "Provide ongoing training for employees to enhance awareness and understanding of security protocols and best practices."
    },
    {
      code: "P-SEC-06",
      title: "System Evaluation",
      icon: Search,
      desc: "Conduct regular security audits to assess the effectiveness of the security measures in place and identify improvement areas."
    }
  ];

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">
      {/* CINEMATIC FULL-BLEED HEADER - ELITE STYLE */}
      <div className="relative min-h-[300px] lg:min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        {/* HIGH-FIDELITY SECURITY RADAR BACKDROP - DARK ORANGE THEME */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden origin-center bg-orange-50/[0.03]">
           {/* SCANNING RADAR SWEEP - BURNT ORANGE */}
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[1px] bg-gradient-to-r from-transparent via-[#FF6600]/20 to-transparent z-0"
           />

           {/* PULSING SECURITY NODES - DEEP ORANGE & AMBER */}
           {[...Array(14)].map((_, i) => (
              <div
                 key={i}
                 className="absolute"
                 style={{ 
                    left: `${(i % 5) * 20 + Math.random() * 15}%`, 
                    top: `${Math.floor(i / 5) * 30 + Math.random() * 20}%` 
                 }}
              >
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                 >
                    <motion.div 
                       animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.6, 0.2]
                       }}
                       transition={{ 
                          duration: 5 + Math.random() * 2, 
                          repeat: Infinity,
                          delay: Math.random() * 2
                       }}
                       className="w-20 h-20 rounded-full border border-[#FF6600]/20 flex items-center justify-center relative bg-orange-500/[0.03]"
                    >
                       <div className="text-[#CC5200]">
                          {i % 4 === 0 ? <ShieldCheck size={24} /> : i % 4 === 1 ? <Lock size={22} /> : i % 4 === 2 ? <Fingerprint size={22} /> : <Zap size={22} />}
                       </div>
                       
                       {/* DYNAMIC RADAR PING RING - DARK ORANGE TONE */}
                       <motion.div 
                          animate={{ scale: [1, 2.8], opacity: [0.3, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: Math.random() * 2 }}
                          className="absolute inset-0 rounded-full border border-[#FF6600]/40"
                       />
                       <motion.div 
                          animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 1 }}
                          className="absolute inset-0 rounded-full border border-[#CC5200]/30"
                       />
                    </motion.div>
                 </motion.div>
              </div>
           ))}

           {/* ARCHITECTURAL GRID OVERLAY - SUBTLE ORANGE */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,102,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,102,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-5 lg:space-y-6">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#FF6600] rounded-md shadow-xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Fortress Core v2.0</span>
            </motion.div>

            <h1 className="text-2xl lg:text-4xl font-display font-black text-slate-900 tracking-[0.05em] leading-[1.1] uppercase max-w-5xl mx-auto">
              {(() => {
                const title = "ENGINEERING SECURITY FORTRESSES.";
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
                        className={`inline-block ${word === "FORTRESSES." ? "text-[#FF6600]" : ""}`}
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
              className="text-slate-600 text-sm lg:text-base font-bold max-w-2xl leading-relaxed uppercase tracking-wider"
            >
              Security Management Software has been emphasized mainly to introduce methodologies which are Practical, Flexible and Understandable.
            </motion.p>
          </div>

          {/* REFINED BADGE STACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {[
              { label: 'Cyber-Resilience Certified', icon: CheckCircle2 },
              { label: 'Cloud-Native Security', icon: Database },
              { label: 'Threat Intelligence', icon: Fingerprint }
            ].map((feature, i) => (
              <div key={i} className="px-4 py-2.5 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                  <feature.icon size={14} />
                </div>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* PEHRA OPERATIONAL MATRIX */}
      <section className="relative py-20 bg-[#FDFBF9] border-t border-slate-50">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* LEFT CONTENT CORE */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[3px] w-12 bg-[#FF6600]" />
                  <span className="text-[#FF6600] text-[12px] font-black uppercase tracking-[0.4em]">Operational Core</span>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-4xl font-display font-black text-slate-900 tracking-[0.05em] uppercase leading-none italic">
                    Security <span className="text-[#FF6600]">Management</span> System
                  </h2>

                  <div className="space-y-6">
                    <p className="text-base lg:text-xl font-bold text-slate-800 leading-relaxed tracking-tight border-l-4 border-[#FF6600] pl-6 italic">
                      Security is an important feature of any software. The current scenario of security management software is many companies to an extent have started addressing security earlier in the lifecycle.
                    </p>
                    <p className="text-xs lg:text-base text-slate-500 font-semibold leading-relaxed">
                      Integrating software security methodology for improving the current position of Application Development. These practices which endeavor to secure the application developed will be what future customers will look for in a rapidly changing security landscape.
                    </p>
                  </div>
                </div>
              </div>

              {/* FOUNDATIONAL NODES - GRID */}
              <div className="pt-8 space-y-8">
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-[#FF6600]" />
                  <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.3em]">Foundational Nodes</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {foundationalNodes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col gap-5 p-8 rounded-xl bg-white border border-slate-100 group transition-all duration-500 hover:border-[#FF6600] hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-[#FF6600] text-white flex items-center justify-center transition-all shadow-lg group-hover:rotate-6 group-hover:scale-110">
                          <item.icon size={24} />
                        </div>
                        <span className="text-sm lg:text-base font-black text-slate-900 transition-colors uppercase tracking-[0.05em]">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[12px] lg:text-[13px] text-slate-500 font-semibold leading-relaxed group-hover:text-slate-800 transition-colors">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SYSTEM SPECS - CINEMATIC IMAGE & DATA */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group/banner"
              >
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Security Operations Matrix"
                  className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover/banner:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="h-1 w-12 bg-[#FF6600] mb-4" />
                  <span className="text-xs font-black text-white uppercase tracking-[0.4em] leading-none">Cyber Fortress Spectrum</span>
                </div>
              </motion.div>

              {/* DATA OVERLAY SPEC CARDS */}
              <div className="mt-10 w-full space-y-6">
                <div className="p-8 rounded-2xl bg-slate-900 shadow-2xl space-y-8 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={120} /></div>

                  <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                    <Activity size={22} className="text-[#FF6600]" />
                    <h4 className="text-[12px] font-black text-white uppercase tracking-[0.4em]">System Health Spectrum</h4>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { label: "METHODOLOGY STATUS", val: "PRACTICAL", color: "text-emerald-400" },
                      { label: "INTEGRATION DEPTH", val: "NATIVE SDLC", color: "text-blue-400" },
                      { label: "POSITION RANK", val: "ELITE CORE", color: "text-[#FF6600]" }
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{spec.label}</span>
                        </div>
                        <span className={`text-[11px] font-mono font-black ${spec.color}`}>{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[13px] font-semibold text-slate-400 leading-relaxed italic pt-4">
                    "The application security landscape demands a transition from static defense to active methodological dominance."
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* TECHNICAL PROTOCOLS - PEHRA SECTION */}
          <div className="mt-32 pt-20 border-t border-slate-100 space-y-20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center gap-4">
                <Sparkles size={24} className="text-[#FF6600]" />
                <span className="text-[12px] font-black text-[#FF6600] uppercase tracking-[0.6em]">System Architecture</span>
              </div>
              <h3 className="text-2xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-[0.05em]">Strategic <span className="text-[#FF6600]">Defensive</span> Protocols</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {strategicProtocols.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#FF6600]/30 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(255,102,0,0.1)] overflow-hidden"
                >
                  {/* TECHNICAL BACKGROUND ACCENT */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_0%,_rgba(255,102,0,0.05),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_100%_0%,_rgba(255,102,0,0.1),transparent_70%)] transition-colors" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon size={22} className="group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[9px] font-mono font-bold text-slate-400 group-hover:border-orange-100 group-hover:text-[#FF6600] transition-colors">{item.code}</div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm lg:text-base font-display font-black text-slate-950 uppercase tracking-[0.05em] group-hover:text-[#FF6600] transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <div className="w-8 h-[2px] bg-[#FF6600] group-hover:w-full transition-all duration-700" />
                      <p className="text-[12px] lg:text-[13px] text-slate-500 font-semibold leading-relaxed group-hover:text-slate-700 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION PRESTIGE BLOCK - ELITE SYNC */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-20 py-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-10 lg:py-12 px-8 rounded-3xl bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
        >
          {/* Orange Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            {/* ICON CORE */}
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
              <ShieldAlert size={24} />
            </div>

            {/* QUOTE CORE */}
            <div className="relative">
              <h3 className="text-lg lg:text-xl font-display font-medium tracking-tight leading-relaxed text-slate-200 mx-auto italic max-w-3xl">
                {(() => {
                  const text = "We transform raw security requirements into an architectural narrative of dominance. Our defensive frameworks are designed to provide the total clarity required for mission-critical enterprise safety.";
                  return text.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block mr-2 relative">
                      <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + (wordIdx * 0.012),
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ));
                })()}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-12 pt-4">
              <div className="h-[1px] w-16 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#FF6600]">Elite Architecture</span>
              <div className="h-[1px] w-16 bg-white/10" />
            </div>
          </div>

          {/* Dynamic Background Effects */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF6600] rounded-full blur-[100px]"
          />
        </motion.div>
      </section>
    </div>
  );
}
