import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  FileText,
  Clock,
  MessageSquare,
  RefreshCcw,
  ShieldCheck,
  Mail,
  Smartphone,
  Palette,
  BarChart3,
  Calculator,
  ArrowRight,
  Globe,
  Monitor,
  Sparkles,
  Zap,
  CheckCircle2,
  Rocket,
  Cpu
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

export default function MassEmail() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  const pmsFeatures = [
    { text: "Free project management with unlimited projects and team members", icon: Users },
    { text: "Easily share Docs with your entire team", icon: FileText },
    { text: "Keep track of tasks, deadlines, and milestones", icon: Clock },
    { text: "Communicate with clients and team members and keep them up to date", icon: MessageSquare },
    { text: "Sync tasks and milestones with Google Calendar and Google Tasks", icon: RefreshCcw },
    { text: "Store and share files with your team", icon: ShieldCheck },
    { text: "Manage your projects via email with easy workspace email communication", icon: Mail },
    { text: "Keep track of projects on the go with our mobile app", icon: Smartphone },
    { text: "Customize the look and feel of SWM to match your company's logo and colors", icon: Palette },
    { text: "Keep track of time and expenses", icon: BarChart3 },
    { text: "Set budgets and manage change orders", icon: Calculator }
  ];

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">

      {/* 1:1 Flagship Hero Sync - Elite WebUltrasolutions Architecture */}
      <section className="relative min-h-[400px] lg:h-[480px] flex items-center justify-center overflow-hidden border-b border-orange-100 pt-[80px]">
        <div className="absolute inset-0 z-0">
          <ThreeNeuralStorm color="#FF6600" bgOpacity={0} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6 lg:space-y-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#FF6600] rounded-full shadow-lg shadow-orange-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Project Protocol v4.2</span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl font-display font-black text-slate-900 uppercase leading-[1] tracking-tighter">
              {(() => {
                const words = "PMS SOFTWARE ARCHITECTURE".split(" ");
                return words.map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block whitespace-nowrap mr-3 last:mr-0">
                    {word.split("").map((char, charIdx) => (
                      <motion.span
                        key={`${wordIdx}-${charIdx}`}
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring", stiffness: 200, damping: 12,
                          delay: 0.1 + (wordIdx * 0.08) + (charIdx * 0.015)
                        }}
                        className={`inline-block ${word === "SOFTWARE" ? "text-[#FF6600]" : ""}`}
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
              transition={{ duration: 0.8, delay: 1 }}
              className="text-slate-600 text-[10px] lg:text-xs font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest"
            >
              Collaborate with your employees and customers on projects with high-status orchestration.
            </motion.p>
          </div>

          {/* Bottom Badge Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-5 pt-2"
          >
            {[
              { label: 'ISOMETRIC COLLABORATION', icon: Globe },
              { label: 'MILESTONE PRECISION', icon: Sparkles },
              { label: 'DATA DRIVEN EXECUTION', icon: Monitor }
            ].map((feature, i) => (
              <div key={i} className="px-5 py-2.5 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-3 transition-all hover:shadow-2xl hover:-translate-y-1 group cursor-default">
                <div className="w-7 h-7 rounded bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                  <feature.icon size={13} />
                </div>
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.1em]">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-display font-black uppercase tracking-tight leading-tight">
                  <span className="text-slate-950">PMS</span> <span className="text-[#FF6600]">SOFTWARE</span>
                </h2>
                <div className="w-20 h-1 bg-[#FF6600]" />
              </div>

              <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed italic border-l-4 border-[#FF6600] pl-6 py-2">
                Manage project scope; create activities, milestones or even sub-projects to get things done in time. Track and bill time using the timesheets app and get online approvals from customers or managers.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#FF6600] transition-colors">
                  <h4 className="text-[10px] font-black text-[#FF6600] uppercase tracking-widest mb-1">Scale</h4>
                  <p className="text-sm font-bold text-slate-900 uppercase">Unlimited Teams</p>
                </div>
                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#FF6600] transition-colors">
                  <h4 className="text-[10px] font-black text-[#FF6600] uppercase tracking-widest mb-1">Precision</h4>
                  <p className="text-sm font-bold text-slate-900 uppercase">Real-time Analytics</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-6 bg-orange-100/30 rounded-[2rem] blur-3xl group-hover:bg-orange-200/40 transition-all duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xl p-3 bg-white hover:border-[#FF6600]/20 transition-all duration-700">
                <img
                  src="/pms_cycle.png"
                  alt="PMS Lifecycle Diagram"
                  className="w-full h-auto rounded-xl transform transition-transform duration-1000 group-hover:scale-[1.05]"
                />
                <div className="absolute bottom-6 right-6">
                  <div className="bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
                    Lifecycle Core v1.0
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Protocol Grid - Features */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#FF6600]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6600]">Feature Protocol</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-black uppercase tracking-tight">
                  <span className="text-slate-950">KEY SYSTEM</span> <span className="text-[#FF6600]">CAPABILITIES</span>
                </h3>
              </div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest max-w-sm">
                Advanced project management infrastructure engineered for high-density enterprise output.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pmsFeatures.map((feat, i) => (
                <div key={i} className="flex gap-5 p-6 border border-slate-100 bg-slate-50/20 rounded-xl shadow-sm group hover:bg-white hover:border-[#FF6600]/30 hover:shadow-[0_20px_40px_rgba(255,102,0,0.08)] transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white group-hover:rotate-6 transition-all duration-700">
                    <feat.icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Module {i < 9 ? `0${i + 1}` : i + 1}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#FF6600] transition-colors" />
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-tight text-slate-600 group-hover:text-slate-950 leading-relaxed transition-colors">
                      {feat.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary CTA - QuickBooks & Invoicing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative py-12 px-8 rounded-2xl bg-[#09090b] text-white overflow-hidden shadow-2xl border border-white/5 group"
          >
            {/* Animated Glow Backdrop */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6600]/10 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-12 xl:col-span-6 space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FF6600] flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                    <Rocket size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-black uppercase tracking-tight text-white italic leading-tight">
                    DO MORE WITH <span className="text-[#FF6600] not-italic">SWM</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: "Smart Invoicing", desc: "Automated billing cycles.", icon: CheckCircle2 },
                    { title: "Financial Bridge", desc: "Native QuickBooks sync.", icon: RefreshCcw }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#FF6600]/30 transition-all duration-300 group/item">
                      <div className="w-8 h-8 rounded-lg bg-[#FF6600]/20 flex items-center justify-center text-[#FF6600]">
                        <item.icon size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-white">{item.title}</h4>
                        <p className="text-[10px] font-bold text-slate-500 group-hover/item:text-slate-400 leading-tight transition-colors">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden xl:block lg:col-span-6 relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10" />
                <div className="relative p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Live Status Monitor</span>
                    </div>
                    <div className="h-1 w-12 bg-white/10 rounded-full" />
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: "Throughput", val: "85%", color: "from-[#FF6600] to-orange-400" },
                      { label: "Sync Latency", val: "45%", color: "from-blue-500 to-cyan-400" },
                      { label: "Core Utilization", val: "70%", color: "from-emerald-500 to-green-400" }
                    ].map((row, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/40">
                          <span>{row.label}</span>
                          <span>{row.val}</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: row.val }}
                            transition={{ duration: 2, delay: 0.5 + (i * 0.2), ease: "circOut" }}
                            className={`h-full bg-gradient-to-r ${row.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Clock, text: "99.9% Up" },
                      { icon: ShieldCheck, text: "Secure" },
                      { icon: Cpu, text: "Auto" }
                    ].map((card, i) => (
                      <div key={i} className="flex flex-col items-center justify-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF6600]/40 transition-colors group/card">
                        <card.icon size={16} className="text-[#FF6600] group-hover/card:scale-110 transition-transform" />
                        <span className="text-[8px] font-black uppercase tracking-tighter text-white/60 group-hover/card:text-white transition-colors">{card.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
