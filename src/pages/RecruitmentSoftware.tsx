import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  Building2,
  Share2,
  Search,
  UserCircle,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Globe,
  Monitor,
  Sparkles,
  Zap,
  ShieldCheck,
  PlusCircle,
  FileText
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

gsap.registerPlugin(ScrollTrigger);

export default function RecruitmentSoftware() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  const modularSections = [
    {
      id: "MODULE_01",
      title: "MANAGE USER",
      color: "border-orange-500",
      icon: Users,
      features: [
        { label: "Add user", desc: "Initialize new user protocols." },
        { label: "Admin/Employee Protocol", desc: "Admin (complete access) / Employee (partial control)." },
        { label: "Attendance Capture", desc: "Track and create user attendance logs." },
        { label: "Job Seeker Intel", desc: "Admin view/removal of candidate details." },
        { label: "Employer Intel", desc: "Admin view/removal of employer details." }
      ]
    },
    {
      id: "MODULE_02",
      title: "MANAGE JOBS",
      color: "border-blue-500",
      icon: Briefcase,
      features: [
        { label: "Position Deployment", desc: "Full job posting with technical detail filling." },
        { label: "Job Orchestration", desc: "View, edit, or terminate existing postings." },
        { label: "Applicant Tracking", desc: "Real-time view of applicant status for jobs." },
        { label: "Draft Templates", desc: "Save and reuse job descriptions as blueprints." }
      ]
    },
    {
      id: "MODULE_03",
      title: "EMPLOYER JOBS",
      color: "border-emerald-500",
      icon: Building2,
      features: [
        { label: "Integrated Site Listings", desc: "View/delete jobs posted via web portal." },
        { label: "Approval Gateway", desc: "Mandatory admin verification for employer postings." }
      ]
    },
    {
      id: "MODULE_04",
      title: "COLLABORATION",
      color: "border-purple-500",
      icon: Share2,
      features: [
        { label: "Dynamic Folders", desc: "Shortlist candidates into categorical folders." },
        { label: "Cross-User Sharing", desc: "Shared folder access between team members." },
        { label: "Communication Inboxes", desc: "Track shared folders from others and sent items." }
      ]
    },
    {
      id: "MODULE_05",
      title: "TALENT SEARCH",
      color: "border-cyan-500",
      icon: Search,
      features: [
        { label: "Quick Discovery", desc: "Rapid candidate search via core parameters." },
        { label: "Advanced Search", desc: "Deep-level search protocols for niche requirements." }
      ]
    },
    {
      id: "MODULE_06",
      title: "MY ACCOUNT",
      color: "border-rose-500",
      icon: UserCircle,
      features: [
        { label: "Identity Profile", desc: "Update and manage personal credentials." },
        { label: "Mail Settings", desc: "Configuration of system email communications." },
        { label: "Security Vault", desc: "Managed password and access credential updates." }
      ]
    },
    {
      id: "MODULE_07",
      title: "DASHBOARD",
      color: "border-slate-500",
      icon: LayoutDashboard,
      features: [
        { label: "Command Status", desc: "Real-time tracking of profile interactions and views." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">

      {/* COMPACT FLAGSHIP HERO - LIGHT THEME SYNC */}
      <section className="relative min-h-[350px] lg:h-[420px] flex items-center justify-center overflow-hidden border-b border-slate-50 pt-[80px]">
        <div className="absolute inset-0 z-0">
          <ThreeNetworkGlobe />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 rounded text-white shadow-lg"
          >
            <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Recruitment Core v5.1</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-display font-black text-slate-950 uppercase tracking-tighter leading-none">
              RECRUITMENT <span className="text-orange-600">SOFTWARE</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed"
            >
              Delivering customized and tailor-made Mobile application Development services across the globe.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-5 pt-2"
          >
            {[
              { label: "Talent Protocol", icon: ShieldCheck },
              { label: "Global Node", icon: Globe }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded">
                <item.icon size={12} className="text-orange-600" />
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REFINED CONTENT ARCHITECTURE - COMPACT LIGHT THEME */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {modularSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`group relative border rounded-xl p-8 flex flex-col shadow-sm transition-all duration-500 cursor-default ${
                idx % 2 === 1 
                  ? "bg-white border-orange-500/20 shadow-orange-500/5" 
                  : "bg-white border-slate-200"
              }`}
            >
              {/* Specialized Accent Strip */}
              <div className={`absolute top-0 left-0 h-1.5 w-full overflow-hidden rounded-t-xl ${
                idx % 2 === 1 ? "bg-orange-600" : "bg-slate-50"
              }`}>
                {idx % 2 === 0 && (
                  <div className="h-full w-0 group-hover:w-full bg-orange-600 transition-all duration-700 ease-in-out" />
                )}
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      idx % 2 === 1 ? "text-orange-600/60" : "text-orange-600"
                    }`}>{section.id}</span>
                  </div>
                  <h3 className={`text-xl font-display font-bold uppercase ${
                    idx % 2 === 1 ? "text-orange-600" : "text-slate-900 group-hover:text-orange-600"
                  } transition-colors`}>{section.title}</h3>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  idx % 2 === 1 
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20" 
                    : "bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white"
                }`}>
                  <section.icon size={18} />
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {section.features.map((feat, i) => (
                  <div key={i} className="group/item flex gap-4">
                    <div className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full border transition-colors ${
                      idx % 2 === 1 ? "border-orange-600 bg-orange-600" : "border-orange-600 group-hover/item:bg-orange-600"
                    }`} />
                    <div className="space-y-1">
                      <h4 className={`text-[13px] font-bold uppercase tracking-tight transition-colors ${
                        idx % 2 === 1 ? "text-orange-600" : "text-slate-800 group-hover/item:text-slate-950"
                      }`}>{feat.label}</h4>
                      <p className={`text-[11px] font-medium leading-relaxed uppercase ${
                        idx % 2 === 1 ? "text-slate-800/80" : "text-slate-500"
                      }`}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
                idx % 2 === 1 ? "border-orange-500/10" : "border-slate-50"
              }`}>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  idx % 2 === 1 ? "text-orange-500/50" : "text-slate-400"
                }`}>Protocol Enabled</span>
                <ArrowRight size={14} className={idx % 2 === 1 ? "text-orange-600" : "text-slate-300 group-hover:text-orange-600"} />
              </div>
            </motion.div>
          ))}



        </div>
      </section>

      {/* MODULAR FOOTER STRIP */}
      <div className="bg-white py-12 border-t border-slate-50 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center opacity-30"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-4xl lg:text-5xl font-display font-black text-slate-200 uppercase tracking-tighter italic">RECRUITMENT OPERATING SYSTEM</span>
              <div className="w-4 h-4 rounded-full bg-orange-600" />
              <span className="text-4xl lg:text-5xl font-display font-black text-slate-200 uppercase tracking-tighter italic">GLOBAL TALENT MATRIX</span>
              <div className="w-4 h-4 rounded-full bg-orange-600" />
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
