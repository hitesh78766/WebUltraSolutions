import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  Workflow,
  Target,
  CreditCard,
  ListTodo,
  Layers,
  Users2,
  Lock,
  Database
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ForceDirectedGraph from '../components/ForceDirectedGraph';

gsap.registerPlugin(ScrollTrigger);

const pmsPillars = [
  {
    category: "Project Core Architecture",
    modules: [
      { id: "01", title: "Project Lifecycle Engine", desc: "Comprehensive management of project creation, deployment, and legacy archiving within a unified tactical interface.", bullets: ["Creation Protocol", "Assignment Logic"] },
      { id: "02", title: "Database & Vault Management", desc: "Secure archiving and retrieval of completed or inactive projects to maintain high-density database efficiency.", bullets: ["Project Archive", "Modification Sync"] },
      { id: "03", title: "Global View Protocol", desc: "Full-spectrum visibility into all active projects with real-time deletion and modification authorizations.", bullets: ["View/Delete Logs", "Permission Levels"] }
    ]
  },
  {
    category: "Workflow & Task Orchestration",
    modules: [
      { id: "04", title: "Dynamic Task Manager", desc: "Granular control over task deployment and list-view management for real-time operational tracking.", bullets: ["Add/List Tasks", "Edit/Delete Control"] },
      { id: "05", title: "Subtask Interaction Node", desc: "Deep-level subtask partitioning to manage complex project dependencies and micro-milestone tracking.", bullets: ["Subtask Logic", "Dependency Links"] },
      { id: "06", title: "Status Matrix (Protocol X)", desc: "Advanced status tracking through 7 distinct states: Pending, Re-assigned, Completed, On Hold, Junk, and Hold Client.", bullets: ["Real-time Tracking", "Status Automation"] }
    ]
  },
  {
    category: "Financial & Client Gateway",
    modules: [
      { id: "07", title: "Client Intelligence Hub", desc: "Complete gateway for managing client metadata, including view/edit/delete protocols for client registries.", bullets: ["Client Intake", "Intel Management"] },
      { id: "08", title: "Institutional Ledger System", desc: "Monthly client ledger tracking and standardized invoicing protocols for structured financial reconciliation.", bullets: ["Standard Invoicing", "Monthly Reports"] },
      { id: "09", title: "Billing & Vault Security", desc: "Product and project-wise billing systems with a secure payment vault for due/received tracking.", bullets: ["Precision Billing", "Payment Vault"] }
    ]
  }
];

export default function PMSSoftware() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">

      {/* PEHRA HERO: CINEMATIC & HIGH-STATUS */}
      <section className="relative min-h-[400px] lg:min-h-[480px] flex items-center justify-center overflow-hidden border-b border-slate-50 pt-[80px]">
        <div className="absolute inset-0 z-0">
          <ForceDirectedGraph />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-950 rounded text-white shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.5em]">Elite PMS Protocol v7.2</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
            {(() => {
              const title = "PMS SOFTWARE.";
              return title.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-4">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={`${wordIdx}-${charIdx}`}
                      initial={{ opacity: 0, y: -60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring", stiffness: 200, damping: 10,
                        delay: 0.1 + (wordIdx * 0.1) + (charIdx * 0.02)
                      }}
                      className={`inline-block ${word === "SOFTWARE." ? "text-orange-600" : ""}`}
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[12px] lg:text-sm font-bold text-slate-400 uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed"
          >
            High-density project management orchestration with real-time status matrices and secure billing gateways.
          </motion.p>
        </div>
      </section>

      {/* PEHRA PROTOCOL CONTENT ARCHITECTURE */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-8 lg:px-24">
        <div className="space-y-32">
          {pmsPillars.map((pillar, pi) => (
            <div key={pi} className="space-y-16">
              {/* Pillar Header */}
              <div className="flex items-center gap-6 group">
                <div className="h-[3px] w-12 bg-orange-600 group-hover:w-20 transition-all duration-700" />
                <h2 className="text-2xl lg:text-4xl font-display font-black text-slate-950 uppercase tracking-tighter italic">
                  {pillar.category.split(" ").map((w, wi) => (
                    <span key={wi} className={wi === 1 ? "text-orange-600" : ""}>{w} </span>
                  ))}
                </h2>
              </div>

              {/* Pehra Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {pillar.modules.map((mod, mi) => (
                  <motion.div
                    key={mi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mi * 0.1 }}
                    className="group relative flex flex-col"
                  >
                    {/* Index Background */}
                    <span className="absolute -top-12 -left-8 text-7xl font-display font-black text-slate-50 group-hover:text-orange-50 transition-colors pointer-events-none select-none z-0">
                      {mod.id}
                    </span>

                    <div className="relative z-10 space-y-5 pt-4">
                      <h3 className="text-xl lg:text-2xl font-display font-black text-slate-950 capitalize leading-none group-hover:translate-x-1 transition-transform">
                        {mod.title.split(" ").map((word, widx) => (
                          <span key={widx} className={widx === 1 ? "text-orange-600" : ""}>{word} </span>
                        ))}
                      </h3>
                      <p className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed capitalize  tracking-tight">
                        {mod.desc}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {mod.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-center gap-3 group/bullet">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover/bullet:scale-150 transition-transform" />
                            <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pehra Structural Line */}
                    <div className="absolute -left-8 top-4 w-[2px] h-[calc(100%-16px)] bg-slate-100 group-hover:bg-orange-600 transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
