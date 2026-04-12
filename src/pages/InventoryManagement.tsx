import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  BarChart3,
  Scan,
  ArrowRight,
  Layers,
  Box,
  ShoppingCart,
  CheckCircle2,
  Database,
  Activity,
  Zap,
  Sparkles,
  Target,
  FileText,
  Search,
  Users,
  ShieldCheck,
  ClipboardList,
  ChevronDown,
  Warehouse
} from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import ParticleNetwork from '../components/ParticleNetwork';

export default function InventoryManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pipelineSteps = [
    {
      id: "NODE-01",
      title: "Universal SME Acquisition",
      icon: Database,
      desc: "A universal program for Inventory Control & Materials Management from simple invoicing to complex enterprise systems.",
      align: "left"
    },
    {
      id: "NODE-02",
      title: "Sales & Purchase Engine",
      icon: ShoppingCart,
      desc: "Orchestrating high-velocity transactions through integrated sales and purchase automation pipelines.",
      align: "right"
    },
    {
      id: "NODE-03",
      title: "Distribution Suite Core",
      icon: Layers,
      desc: "Synchronized integration with Financial and Order Management modules for total suite harmony.",
      align: "left"
    },
    {
      id: "NODE-04",
      title: "Real-Time Liquidity",
      icon: Activity,
      desc: "Instant access to inventory in transit and reorder points to maximize distribution velocity.",
      align: "right"
    }
  ];

  const technicalProtocols = [
    { title: "Hardware/Software Sync", code: "INV-HQ-01", icon: ClipboardList },
    { title: "Prohibited Detection", code: "INV-HQ-02", icon: ShieldCheck },
    { title: "Software Usage Stats", code: "INV-HQ-03", icon: BarChart3 },
    { title: "Smart Event Alerts", code: "INV-HQ-04", icon: Zap },
    { title: "Predictive Reordering", code: "INV-HQ-05", icon: Truck },
    { title: "Global Warehouse Sync", code: "INV-HQ-06", icon: Warehouse }
  ];

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-x-hidden">

      {/* COMPACT SPLIT HERO */}
      <div className="relative min-h-[300px] lg:min-h-[380px] bg-white overflow-hidden flex items-center border-b border-orange-100/50">
        <div className="absolute inset-0 opacity-30">
          <ThreeSolutionBackground />
          <ParticleNetwork />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 lg:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Logistics Matrix v3.0</span>
            </motion.div>

            <h1 className="text-3xl lg:text-5xl font-display font-black text-slate-950 leading-[1.1] uppercase tracking-tight">
              Orchestrating <br />
              <span className="text-[#FF6600]">Supply</span> Chains.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm lg:text-base text-slate-500 font-bold max-w-lg uppercase tracking-wider leading-relaxed"
            >
              Inventory Management Software essentially powers your sales engine with real-time liquidity and predictive fulfillment.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex justify-end relative pr-12"
          >
            <div className="w-56 h-56 rounded-[32px] bg-white border border-slate-100 shadow-xl flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent" />
              <Box size={80} className="text-[#FF6600] group-hover:scale-110 transition-transform duration-700 relative z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-[24px] border border-dashed border-orange-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* HIGH-FIDELITY THREADED PIPELINE */}
      <section className="py-16 lg:py-20 relative bg-[#FDFBF9] overflow-hidden">
        {/* LOGISTICS WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-slate-900/[0.01] select-none pointer-events-none uppercase tracking-tighter">
           Logistics
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <span className="text-[#FF6600] text-[11px] font-black uppercase tracking-[0.5em]">The Infrastructure</span>
            <h2 className="text-2xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">Supply Chain <span className="text-[#FF6600]">Evolution</span></h2>
          </div>

          <div className="relative">
            {/* ANIMATED FLOW LINE */}
            <div className="absolute left-[31px] lg:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 overflow-hidden">
               <div className="absolute inset-0 border-l border-dashed border-slate-300" />
               <motion.div 
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#FF6600]/40 to-transparent"
               />
            </div>

            <div className="space-y-12 lg:space-y-16">
              {pipelineSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-row items-center gap-8 lg:gap-0 ${step.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 group ${step.align === 'left' ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:text-left'}`}>
                    <div className="py-6 px-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#FF6600]/30 transition-all duration-700 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6600]/10 group-hover:bg-[#FF6600] transition-colors" />
                      
                      <div className="flex flex-col gap-1 mb-3">
                         <div className="flex items-center gap-2 justify-end lg:justify-start lg:group-even:justify-end">
                            <span className="text-[9px] font-mono font-black text-[#FF6600] tracking-widest">{step.id}</span>
                            <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-tighter">Status: Active</span>
                         </div>
                         <h3 className="text-sm lg:text-lg font-display font-black text-slate-900 uppercase tracking-tight leading-none">{step.title}</h3>
                      </div>
                      
                      <p className="text-[11px] lg:text-[13px] text-slate-500 font-semibold leading-relaxed group-hover:text-slate-700 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* PULSING TECHNICAL NODE */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <motion.div 
                       animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                       className="w-14 h-14 rounded-full bg-slate-950 border-4 border-white shadow-2xl flex items-center justify-center text-[#FF6600] relative group-hover:scale-110 transition-transform duration-500 overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-[#FF6600]/5 animate-pulse" />
                       <step.icon size={20} className="relative z-10" />
                    </motion.div>
                    
                    {/* OUTER RADAR RING */}
                    <motion.div 
                       animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                       className="absolute inset-0 rounded-full border border-[#FF6600]/30"
                    />
                  </div>

                  {/* Spacer Side for large screens */}
                  <div className="hidden lg:block lg:flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFINED LIGHT-THEMED STRATEGIC CONTROL SECTION */}
      <section className="bg-[#F8F9FB] py-20 relative overflow-hidden border-t border-slate-100">
        {/* SUBTLE BLUEPRINT GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,102,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,102,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,102,0,0.05),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div className="space-y-4">
              <span className="text-[#FF6600] text-[11px] font-black uppercase tracking-[0.4em]">System Specs</span>
              <h3 className="text-2xl lg:text-4xl font-display font-black text-slate-900 uppercase leading-tight tracking-tight">Strategic <br /> Logistics <span className="text-[#FF6600]">Control</span></h3>
            </div>
            <p className="text-slate-500 font-bold text-base lg:text-lg max-w-md italic border-l-4 border-[#FF6600] pl-6  capitalize tracking-tight">
              Transforming complex inventory metrics into a centralized orchestration of mission-critical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalProtocols.map((protocol, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white border border-slate-100/80 hover:border-[#FF6600]/30 transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.1)] group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500 shadow-sm">
                    <protocol.icon size={18} className="group-hover:rotate-12 transition-transform" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-300 group-hover:text-orange-300 transition-colors uppercase tracking-widest">{protocol.code}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs lg:text-sm font-black uppercase tracking-wider text-slate-800 group-hover:text-[#FF6600] transition-colors leading-none">
                    {protocol.title}
                  </h4>
                  <div className="h-[2px] w-6 bg-[#FF6600]/10 group-hover:w-full group-hover:bg-[#FF6600] transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
