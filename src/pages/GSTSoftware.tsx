import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Receipt, Monitor, Server, FileCode, Cpu, MousePointer2, ChevronRight, ShieldCheck } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

export default function GSTSoftware() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const technicalSpecs = [
    { label: "Framework", value: "CodeIgniter", icon: Server },
    { label: "High Resolution", value: "Yes", icon: Monitor },
    { label: "Compatible Browser", value: "IE 11, Firefox, Safari, Opera, Chrome, Edge", icon: Monitor },
    { label: "Files Included", value: "HTML, CSS, PHP, SQL", icon: FileCode },
    { label: "Software Version", value: "PHP 5.x, PHP 5.0 - 5.2, PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, MySQL 5.x", icon: Cpu },
  ];

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">

      {/* Cinematic Hero Section - Synced Scale */}
      <section className="relative min-h-[300px] lg:min-h-[380px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 pt-[50px]">
        <div className="absolute inset-0 z-0">
          <ThreeNeuralStorm color="#FF6600" bgOpacity={0} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl mb-4"
          >
            <span className="text-slate-950">GST</span> <span className="text-[#FF6600]">SOFTWARE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed max-w-xl px-6 md:px-0 capitalize tracking-wider border-t border-orange-100 pt-5"
          >
            Goods & Services Tax can impact accounting and invoicing processes across industries for each leased Accountants and Businesses.
          </motion.p>
        </div>
      </section>

      {/* Institutional Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Main Proposition & Demo Trigger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-widest uppercase text-slate-950 leading-tight">
                  <span className="text-slate-950">GST</span> <span className="text-[#FF6600]">SOFTWARE</span>
                </h2>

                <div className="space-y-6 text-sm lg:text-base font-semibold text-slate-500 leading-relaxed border-l-4 border-orange-100 pl-8 tracking-wide">
                  <p>
                    Goods & Services Tax can impact accounting and invoicing processes across industries for each leased Accountants and Businesses. once July 1, businesses and accountants can need to adopt software package and ERPs that area unit capable of managing taxation, invoicing & accounting as per the new tax regime. webultrasolution being a pioneer within the business can assist you perceive the technical aspects of the implementation of products and Services Tax, the impact on ERP systems, and what you wish to try and do to be tax compliant during this section.
                  </p>
                  <p className="text-slate-600 border-t border-slate-50 pt-6">
                    Many HM professionals are choosing a GSTS to handle all their HM activities electronically. Having a great GSTS has numerous benefits. In the end, productively levels tend to increase as a result of choosing the right GSTS.
                  </p>
                  <p className="text-sm lg:text-base font-bold text-[#FF6600] capitalize tracking-widest bg-orange-50/50 p-4 rounded-md inline-block">
                    From first July, 2017 product and Services Tax can replace Central and State level indirect taxes like VAT, Service tax, Excise etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Redesigned Technical Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 shadow-sm group hover:border-orange-200 transition-all duration-500">
                <div className="space-y-8">

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-slate-200" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Capability</span>
                    </div>

                    <div className="space-y-4">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex flex-col gap-1.5 pb-4 border-b border-white last:border-0 group/spec">
                          <span className="text-[9px] lg:text-sm font-bold capitalize text-[#FF6600] tracking-widest group-hover/spec:translate-x-1 transition-transform inline-block">
                            {spec.label}
                          </span>
                          <span className="text-[11px] lg:text-sm font-black tracking-widest capitalize text-slate-900 leading-relaxed">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-100 rounded-lg flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-orange-50 text-[#FF6600] flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black capitalize tracking-widest text-slate-400 font-display">Status</span>
                  <p className="text-[10px] font-black capitalize tracking-widest text-slate-950">Active Compliance v5.2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery Architecture */}
          <div className="space-y-10 pt-10 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#FF6600]" />
              <h3 className="text-xl lg:text-2xl font-display font-bold uppercase tracking-widest text-slate-950">
                <span className="text-slate-950">SYSTEM</span> <span className="text-[#FF6600]">VISUALS</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="relative group overflow-hidden rounded-md border border-slate-100 shadow-sm bg-white p-1 hover:border-orange-200 transition-all duration-500"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src="/gst_software_dashboard.png"
                      alt={`GST Software Screen ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-500" />
                    <div className="absolute bottom-2 right-2 px-3 py-1 bg-white/95 backdrop-blur-md rounded text-[8px] font-bold uppercase tracking-widest text-[#FF6600] border border-orange-50 shadow-sm">
                      Module Phase {i + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
