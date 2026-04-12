import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Activity, Database, ShieldCheck } from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

export default function DigifyIVR() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary">
      <div className="relative min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/30">
        <ThreeSolutionBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F97316] rounded-md"><span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Voice Matrix v5.2</span></motion.div>
          <h1 className="text-4xl lg:text-6xl font-display font-black text-slate-900 uppercase">Digify <span className="text-[#F97316]">IVR Machine.</span></h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest max-w-xl mx-auto">AI-Powered Interactive Voice Response systems for seamless enterprise communication.</p>
        </div>
      </div>
      <section className="py-20 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">Advanced <span className="text-[#F97316]">Communication.</span></h2>
          <div className="grid grid-cols-1 gap-4">
            {["Multi-level Menu Architecture", "AI Voice Recognition", "Real-time Call Analytics", "CRM Data Integration"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                 <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                 <span className="text-[11px] font-black uppercase text-slate-600 tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-10 rounded-3xl bg-slate-900 text-white space-y-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10"><Phone size={100} /></div>
           <h3 className="text-xl font-display font-black uppercase tracking-tight">System Status</h3>
           <div className="space-y-4">
             {[ {label: "Latency", val: "< 15ms"}, {label: "Uptime", val: "99.99%"}, {label: "Load", val: "Optimal"} ].map((s, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</span>
                  <span className="text-xs font-black uppercase text-[#F97316]">{s.val}</span>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
