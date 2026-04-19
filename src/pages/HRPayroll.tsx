import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building2, CalendarRange, ShoppingCart, LayoutGrid, CheckSquare, FileText, Palette, MonitorPlay, ChevronRight, Globe, Shield, Zap } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

const features = [
  { name: "People", icon: Users, color: "bg-blue-500" },
  { name: "Company", icon: Building2, color: "bg-indigo-500" },
  { name: "Leave Management", icon: CalendarRange, color: "bg-rose-500" },
  { name: "HR Sale Settings", icon: ShoppingCart, color: "bg-emerald-500" },
  { name: "Total Projects", icon: LayoutGrid, color: "bg-amber-500" },
  { name: "Tasks", icon: CheckSquare, color: "bg-purple-500" },
  { name: "Document Management", icon: FileText, color: "bg-cyan-500" },
  { name: "Theme Setting", icon: Palette, color: "bg-pink-500" },
];

const dashboardImages = [
  "/hrm_dashboard.png",
  "/hrm_dashboard_2.png",
  "/hrm_dashboard_3.png"
];

export default function HRPayroll() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % dashboardImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">
      {/* Compact Cinematic Hero Section */}
      <section className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 pt-[80px]">
        {/* Cinematic Backdrop System */}
        <div className="absolute inset-0 z-0">
          <ThreeNeuralStorm color="#C2410C" bgOpacity={0} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/hr_hero_bg.png"
            className="w-full h-full object-cover mix-blend-multiply"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-[#F97316] rounded-md shadow-lg mb-4 sm:mb-6 mx-auto"
          >
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white">Advanced Workforce Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl"
          >
            HR <span className="text-[#F97316]">PAYROLL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed max-w-xl px-6 md:px-0 border-l-2 border-orange-500/20 pl-4 lg:pl-0 lg:border-none mt-4x`"
          >
            HR Payroll is an essential part of running a successful enterprise.
            Automate your workforce orchestration with extreme precision and compliance.
          </motion.p>
        </div>
      </section>

      {/* High-Density Content Section */}
      <section className="py-16 relative bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content & Features */}
          <div className="lg:col-span-6 space-y-10 group">
            <div className="space-y-6">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-3 bg-[#F97316]/10 rounded-full blur-lg animate-pulse" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#F97316] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                    <Building2 size={18} />
                  </div>
                </div>
                <div className="space-y-0 sm:space-y-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-4 sm:w-6 h-[2px] bg-[#F97316]" />
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#F97316] whitespace-nowrap">Strategic Infrastructure</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold tracking-wide sm:tracking-wider uppercase text-slate-950 leading-tight sm:leading-none whitespace-nowrap">
                    Architectural <span className="text-[#F97316]">Excellence.</span>
                  </h3>
                </div>
              </div>

              <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 max-w-xl group-hover:text-slate-700 transition-colors">
                HRM system allows your HR team to start working more efficiently on utilizing their time and resources.
                Experience a paradigm shift in administrative throughput with our real-time dashboard.
                Timely reminders keep your todo list organised and manageable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-3.5 bg-slate-50 border border-slate-200 shadow-sm rounded-md hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md ${feature.color}/10 flex items-center justify-center text-[#F97316]`}>
                    <feature.icon size={12} className="sm:size-14" />
                  </div>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-[11px] font-semibold text-slate-700 capitalize tracking-widest leading-none">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <button className="group relative px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-4 lg:py-2 bg-slate-900 text-white font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] lg:text-[9px] flex items-center gap-2 sm:gap-3 lg:gap-2 rounded-md hover:shadow-2xl hover:shadow-slate-900/20 transition-all overflow-hidden shadow-lg">
               <span>Initialize Demo Protocol</span>
            </button>
          </div>

          {/* Right: Dashboard Preview (Rotating) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-2 bg-white border border-slate-100 rounded-md shadow-2xl shadow-slate-200 group h-[300px] lg:h-[400px] overflow-hidden"
            >
              <div className="relative h-full rounded-sm overflow-hidden border border-slate-100 bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={dashboardImages[imgIndex]}
                    alt="HRM Dashboard"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#F97316] text-white text-[10px] font-bold uppercase rounded-md shadow-xl flex items-center gap-2 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Elite Standard
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Metrics Row (Compact Elite Style) - Restored */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Smart Payroll", value: "99.9%", sub: "Accuracy Rate", icon: Globe },
            { title: "Compliance", value: "Global", sub: "Ready", icon: Shield },
            { title: "Real-time", value: "24/7", sub: "Monitoring", icon: Zap }
          ].map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-4 group hover:border-[#F97316] hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all">
                <stat.icon size={18} />
              </div>
              <div className="space-y-1">
                <p className="text-[9px] lg:text-sm font-bold capitalize tracking-[0.2em] text-[#F97316]">{stat.title}</p>
                <h4 className="text-sm md:text-base font-display font-bold text-slate-700 select-none tracking-tighter">{stat.value}</h4>
                <p className="text-[9px] font-semibold uppercase text-slate-500 tracking-widest">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


