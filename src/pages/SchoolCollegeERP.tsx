import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  School,
  Building2,
  Calendar,
  Wallet,
  Archive,
  Truck,
  Zap,
  Monitor,
  FileText,
  Users,
  UserCheck,
  Calculator,
  FolderOpen,
  Stethoscope,
  Database,
  GraduationCap,
  ClipboardCheck,
  PartyPopper,
  Settings,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCcw,
  Globe
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const erpFeatures = [
  { icon: Building2, label: "Front Office Manager", status: "Active" },
  { icon: Calendar, label: "Scheduling", status: "Dynamic" },
  { icon: Wallet, label: "Fees Administration", status: "Secure" },
  { icon: Archive, label: "Inventory Management", status: "Live" },
  { icon: Truck, label: "Transport Manager", status: "Tracking" },
  { icon: RefreshCcw, label: "Automatic Upgrades", status: "Silent" },
  { icon: Monitor, label: "Online Examination", status: "Proctored" },
  { icon: FileText, label: "Content Management", status: "Syncing" },
  { icon: UserCheck, label: "Workforce Monitor", status: "Precision" },
  { icon: GraduationCap, label: "Admissions Mgmt", status: "Pipeline" },
  { icon: Calculator, label: "Financial Accounting", status: "Audit-Ready" },
  { icon: FolderOpen, label: "File Manage", status: "Encrypted" },
  { icon: Stethoscope, label: "Medical Care Mgmt", status: "Wellness" },
  { icon: Database, label: "Student Database", status: "Scalable" },
  { icon: Wallet, label: "Scholarships", status: "Distributed" },
  { icon: ClipboardCheck, label: "Attendance Mgmt", status: "Real-time" },
  { icon: PartyPopper, label: "Event Management", status: "Curated" }
];

const erpHubNodes = [
  { label: "CRM", color: "#FF6600" },
  { label: "Supply Chain", color: "#6366f1" },
  { label: "Finance", color: "#10b981" },
  { label: "E-Commerce", color: "#f59e0b" },
  { label: "Business Intelligence", color: "#ef4444" },
  { label: "Human Resources", color: "#8b5cf6" },
  { icon: Settings, label: "Manufacturing", color: "#06b6d4" }
];

export default function SchoolCollegeERP() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[50px] bg-white min-h-screen font-secondary">
      {/* COMPACT HIGH-STATUS HERO */}
      <div className="relative min-h-[220px] lg:min-h-[300px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/30">
        <ThreeNeuralStorm />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4">
              <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl">
            {(() => {
              const title = "College ERP Software.";
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
                      className={`inline-block ${word === "ERP" ? "text-[#FF6600]" : ""}`}
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
            className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed w-full px-6 md:px-0"
          >
            ERP is also based on business activity module for CRM and business intelligence. Engineering future-ready academic ecosystems.
          </motion.p>
        </div>
      </div>

      {/* UNIQUE UI PLACEMENT: HIGH-DENSITY CORE STACK */}
      <section className="py-12 lg:py-20 max-w-[1400px] mx-auto px-8 lg:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* OVERVIEW CONTENT - STAGGERED MODULES */}
          <div className="lg:col-span-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Enterprice Core", text: "Enterprise resource planning (ERP) is business management software that allows an organization to use a system of integrated applications to manage the business." },
                 { title: "Facet Integration", text: "ERP software integrates all facets of an operation, including product planning, development, manufacturing processes, sales, and marketing." },
                 { title: "Intelligent Logic", text: "ERP is also based on business activity module for CRM and business intelligence. ERP modules include material purchasing, inventory control, distribution, accounting, and HR." }
               ].map((mod, mi) => (
                 <motion.div 
                   key={mi}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: mi * 0.1 }}
                   className="p-8 border border-slate-50 bg-white shadow-sm hover:shadow-xl transition-all rounded-md group"
                 >
                    <div className="w-8 h-[2px] bg-[#FF6600] group-hover:w-12 transition-all" />
                    <h4 className="text-[10px] lg:text-xl font-bold capitalize tracking-wide text-[#FF6600] mt-4">{mod.title}</h4>
                    <p className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed mt-4">{mod.text}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* THE ERP NEURAL HUB - UNIQUE INTERACTIVE DIAGRAM */}
          <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
             <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100">
                {/* SVG Connecting Lines - Dynamic Data Flow */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                   {erpHubNodes.map((node, i) => {
                     const angle = (i * (360 / erpHubNodes.length)) * (Math.PI / 180);
                     const radius = 200;
                     const x2 = 250 + Math.cos(angle) * radius;
                     const y2 = 250 + Math.sin(angle) * radius;
                     
                     return (
                        <g key={`line-${i}`}>
                           <motion.line
                              x1="250" y1="250"
                              x2={x2} y2={y2}
                              stroke={node.color}
                              strokeWidth="2"
                              strokeOpacity="0.3"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 1.5, delay: i * 0.1 }}
                           />
                           <circle cx={x2} cy={y2} r="4" fill={node.color} className="opacity-40" />
                        </g>
                     );
                   })}
                   <circle cx="250" cy="250" r="220" fill="none" stroke="#FF6600" strokeWidth="1" strokeDasharray="10 20" opacity="0.1" className="animate-spin-slow" />
                </svg>

                {/* Central Pillar - RIGID CENTERING */}
                <div className="relative z-20 w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ["0 0 20px rgba(255,102,0,0.2)", "0 0 50px rgba(255,102,0,0.4)", "0 0 20px rgba(255,102,0,0.2)"]
                    }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-full h-full rounded-full bg-slate-900 border-4 border-[#FF6600] flex items-center justify-center text-white shadow-2xl overflow-hidden"
                  >
                    <span className="font-display font-black tracking-widest text-lg relative z-10">ERP</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 to-transparent" />
                  </motion.div>
                </div>

                {/* Orbiting Elements - RIGID GEOMETRIC POSITIONING */}
                {erpHubNodes.map((node, i) => {
                  const angle = (i * (360 / erpHubNodes.length)) * (Math.PI / 180);
                  const radius = 200;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      animate={{ 
                        x: [x, x, x],
                        y: [y - 5, y + 5, y - 5]
                      }}
                      transition={{ 
                         y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                         opacity: { delay: i * 0.1 } 
                      }}
                      style={{ position: 'absolute' }}
                      className="group cursor-pointer z-30 flex flex-col items-center"
                    >
                       <div className="relative flex flex-col items-center gap-2">
                          <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white border-2 border-slate-50 shadow-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,102,0,0.2)] group-hover:border-[#FF6600]`}>
                             {node.icon ? <node.icon size={18} /> : <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />}
                          </div>
                          <span className="absolute -bottom-10 whitespace-nowrap text-[9px] lg:text-[11px] font-extrabold uppercase tracking-widest text-black group-hover:text-[#FF6600] transition-colors text-center w-40">{node.label}</span>
                       </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* FEATURE MICRO-TILES - DATA DENSE MATRIX */}
          <div className="lg:col-span-7 space-y-8">
             <div className="space-y-1">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-slate-950 uppercase tracking-tight">IMPORTANT <span className="text-[#FF6600]">FEATURES.</span></h3>
                <p className="text-slate-400 text-[10px] font-bold capitalize tracking-wider]">Proprietary Academic Architecture Features</p>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {erpFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="p-4 bg-slate-50/50 border border-slate-100 rounded hover:bg-white hover:shadow-xl transition-all cursor-crosshair group relative overflow-hidden"
                  >
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                           <div className="w-8 h-8 rounded-md bg-white border border-slate-100 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all shadow-sm">
                              <f.icon size={16} />
                           </div>
                           <span className="text-[7px] font-bold uppercase tracking-widest text-[#FF6600] opacity-0 group-hover:opacity-100 transition-opacity">{f.status}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 leading-tight">{f.label}</span>
                     </div>
                     <div className="absolute top-0 right-0 w-8 h-8 bg-[#FF6600]/5 -rotate-45 translate-x-4 -translate-y-4" />
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
