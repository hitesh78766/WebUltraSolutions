import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users2,
  Database,
  FileSearch,
  Mail,
  LayoutDashboard,
  Settings2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MonitorCheck,
  Cpu,
  Layers
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAppArchitecture from '../components/ThreeAppArchitecture';

// Import assets for reliable resolution
import erpImg1 from '../assets/erp/erp_interface_1.png';
import erpImg2 from '../assets/erp/erp_interface_2.png';
import erpImg3 from '../assets/erp/erp_interface_3.png';
import erpImg4 from '../assets/erp/erp_interface_4.png';

gsap.registerPlugin(ScrollTrigger);

const erpModules = [
  {
    id: "ERP_ARCH_01",
    title: "Intuitive Configuration",
    icon: Settings2,
    desc: "Manage student and staff information with automated integrity checks, ensuring high-status data reporting and swift access protocols.",
    bullets: ["Data Integrity", "Swift Access"]
  },
  {
    id: "ERP_SYNC_02",
    title: "Cross-Module Sync",
    icon: Database,
    desc: "Stored data is shared across all institutional modules and programs, providing a unified backbone for school-wide orchestration.",
    bullets: ["Dynamic Sharing", "Program Integration"]
  },
  {
    id: "ERP_TRACK_03",
    title: "Operational Tracking",
    icon: LayoutDashboard,
    desc: "Advanced tracking of student classes, real-time attendance, and automated leave records for both academic staff and student bodies.",
    bullets: ["Attendance Engine", "Leave Protocols"]
  },
  {
    id: "ERP_COMMS_04",
    title: "Streamlined Communication",
    icon: Mail,
    desc: "Direct capability to broadcast emails and high-priority messages to any student or staff member within the secure system environment.",
    bullets: ["Broadcast Alerts", "User-to-User Sync"]
  }
];

const erpScreenshots = [
  erpImg1,
  erpImg2,
  erpImg3,
  erpImg4,
  erpImg1,
  erpImg2
];

export default function EnterpriseERP() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">

      {/* UNIQUE TACTICAL HUB HERO */}
      <section className="relative min-h-[380px] lg:min-h-[400px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 pt-[50px]">
        <div className="absolute inset-0 z-0 opacity-40">
          <ThreeAppArchitecture />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-wide leading-[1.1] uppercase max-w-4xl mx-auto">
              ERP <span className="text-orange-600">(ENTERPRISE</span> RESOURCE)
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-slate-600 text-xs lg:text-sm font-semibold max-w-2xl mx-auto leading-relaxed"
            >
              Managing student and staff details including name, date, fee, father name, mobile no., and mail ID with peak precision.
            </motion.p>
          </div>

        </div>
      </section>

      {/* UNIQUE "DATA HUB" ARCHITECTURE */}
      <section className="py-16 lg:py-20 px-8 lg:px-24 relative max-w-[1600px] mx-auto text-slate-600">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Content Column: The Core Logic */}
          <div className="lg:w-1/3 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <div className="h-[2px] w-16 bg-orange-600" />
              <h2 className="text-2xl lg:text-4xl font-display font-bold text-slate-900 capitalize tracking-wide leading-[1.1] ">
                Operational <span className="text-orange-600 block mt-1">Integrity.</span>
              </h2>
              <p className="text-slate-600 text-sm lg:text-base font-semibold leading-relaxed pr-6">
                We utilize an intuitive configuration to manage student and staff information, ensuring absolute data integrity and accurate reporting protocols.
              </p>
            </div>

            <div className="space-y-6">
              {erpModules.slice(0, 2).map((mod, i) => (
                <div key={i} className="group p-6 rounded-md border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <mod.icon size={20} className="text-orange-600 mb-4" />
                  <h3 className="text-lg lg:text-xl font-display  text-slate-950 capitalize mb-2 tracking-wider ">{mod.title}</h3>
                  <p className="text-sm lg:text-base font-bold text-slate-400 capitalize leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Central Module Visualization or Identity Hub */}
          <div className="lg:w-1/3 flex justify-center order-1 lg:order-2 hidden lg:block">
            <div className="relative w-full aspect-square max-w-[350px]">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-200 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border-2 border-slate-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-slate-950 rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_40px_rgba(249,115,22,0.25)] border-4 border-white">
                  <Cpu size={40} className="text-orange-600 mb-2 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">CORE ENGINE</span>
                </div>
              </div>
              {/* Orbital Feature Points */}
              {[Layers, MonitorCheck, FileSearch, Users2].map((Icon, i) => (
                <div key={i}
                  className="absolute w-10 h-10 bg-white rounded-md shadow-xl border border-slate-100 flex items-center justify-center text-orange-600 group hover:bg-orange-600 hover:text-white transition-all cursor-default"
                  style={{
                    top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                    left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Column: Reporting & Comms */}
          <div className="lg:w-1/3 space-y-8 order-3">
            <div className="space-y-6">
              {erpModules.slice(2, 4).map((mod, i) => (
                <div key={i} className="group p-6 rounded-md border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-500/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700" />
                  <mod.icon size={20} className="text-orange-600 mb-4" />
                  <h3 className="text-lg lg:text-xl font-display  text-slate-950 capitalize mb-2 tracking-wider ">{mod.title}</h3>
                  <p className="text-sm lg:text-base font-bold text-slate-400 capitalize leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-md bg-slate-50 border border-slate-100 space-y-3 group hover:bg-white hover:shadow-2xl transition-all duration-700">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-600">REPORTING ENGINE</span>
              <h3 className="text-xl font-display font-extrabold text-slate-900 uppercase tracking-tight leading-tight italic">
                PRECISION <span className="text-orange-600">ANALYTICS.</span>
              </h3>
              <p className="text-slate-600 text-[11px] font-semibold leading-relaxed pr-6 uppercase">
                Attendance reporting is simplified through calculating leave percentages and furnishing relevant information to the administration department.
              </p>
              <div className="pt-2">
                <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-950 group">
                  Initialize Protocol <ArrowRight size={14} className="text-orange-600 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE SCREENSHOT GALLERY: THE INTERFACE HUB */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8 space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
            <div className="space-y-3">
              <div className="h-[2px] w-16 bg-orange-600" />
              <h2 className="text-2xl lg:text-4xl font-display text-slate-950 capitalize tracking-wide leading-none ">
                How to <span className="text-orange-600">use ERP.</span>
              </h2>
              <p className="text-xs lg:text-sm font-black text-slate-400 capitalize tracking-wide">Visualizing institutional management protocols through high-fidelity interfaces.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {erpScreenshots.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[250px] lg:h-[280px] rounded-md overflow-hidden border border-slate-200 shadow-xl bg-white"
              >
                <img
                  src={src}
                  alt={`ERP Interface ${i + 1}`}
                  className="w-full h-full md:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0" />
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-slate-950 rounded-md text-white text-[8px] font-black uppercase tracking-[0.3em]">Module Hub 0{i + 1}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">Interface Protocol Secure</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
