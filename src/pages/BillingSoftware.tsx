import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Receipt,
  BarChart3,
  ShieldCheck,
  Database,
  Zap,
  Globe,
  Languages,
  CreditCard,
  FileJson,
  ArrowRight,
  Monitor
} from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

export default function BillingSoftware() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const accountingPoints = [
    "Made for entrepreneurs, freelancers, consultants and small businesses.",
    "100% Free architecture with Professional enterprise reporting.",
    "Generate accurate balance sheets and sales tax reports instantly.",
    "A/R and A/P tracking for owners, accountants, and investors.",
    "Support for credit cards, debit cards, and partial payment methods."
  ];

  const databasePoints = [
    "International Multi-Currency & Multi-Lingual support structure.",
    "Administer customer and product databases with absolute precision.",
    "Advanced maintenance and automated organization of technical data.",
    "Smooth cross-platform management of entity relationships.",
    "Real-time execution of day-to-day database operations.",
    "Effective control protocols over scale-sensitive product data."
  ];

  return (
    <div className="pt-[50px] bg-white min-h-screen font-secondary selection:bg-orange-100">
      {/* COMPACT CINEMATIC HEADER */}
      <div className="relative min-h-[300px] lg:min-h-[350px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeSolutionBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-5">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg mt-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Financial Intelligence v14.0</span>
            </motion.div>

            <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl">
              PREMIER <span className="text-[#FF6600]">BILLING</span> INFRASTRUCTURE.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-600 text-xs lg:text-sm font-semibold max-w-xl leading-relaxed mx-auto italic"
            >
              Billing Software is easy to use; generate an invoice as well as the ability to allow online payment methods, integrating credit card and partial payment protocols.
            </motion.p>
          </div>

        </div>
      </div>

      {/* COMPACT HUB - ACCOUNTING PROTOCOL */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* CINEMATIC IMAGE RIG - COMPACT */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] border border-slate-100 bg-white p-1.5"
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/2] lg:aspect-[3/4] lg:aspect-square">
                <img
                  src="/images/billing_software_hero.png"
                  alt="Accounting Dashboard"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-white/5" />

                {/* STATUS INDICATOR */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 rounded font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">SYSTEM_ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ELITE CONTENT ARCHITECTURE - COMPACT */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#FF6600]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">Technical Hub</span>
              </div>

              <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase text-slate-950">
                EASY, REAL <span className="text-[#FF6600]">ACCOUNTING.</span>
              </h2>

              <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500 max-w-xl">
                A streamlined workspace for high-growth enterprises to manage financial cycles with <span className="text-slate-900 border-b-2 border-[#FF6600]/20 italic">technical precision</span> and autonomous reporting logic.
              </p>
            </div>

            {/* PEHRA SECTION - BULLET POINTS SAME-TO-SAME */}
            <div className="grid grid-cols-1 gap-y-4">
              {[
                "Made for entrepreneurs, freelancers, consultants and small businesses. And it's 100% free. Professional reporting",
                "100% Free architecture with Professional enterprise reporting.",
                "Generate accurate reports like balance sheets, sales tax reports, A/R and A/P for yourself, your accountant or your investors.",
                "A/R and A/P tracking for owners, accountants, and investors.",
                "Basically, Billing Software is easy to use generate an invoice as well as the ability to allow online payment method, we also use a credit card, debit card and include partial payment method."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#FF6600] border-b-[5px] border-b-transparent" />
                  </div>
                  <span className="text-[13px] md:text-sm lg:text-base font-semibold text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol V14.0 Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLE HUB - COMPACT GRID */}
      <section className="bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Invoice Engine", icon: Receipt, desc: "Generate invoices, quotes, and orders with automated auto-fill elements and PDF exports." },
              { title: "Payment Gateway", icon: CreditCard, desc: "Integrated credit/debit card processing with full support for partial payment protocols." },
              { title: "Analytical Vault", icon: BarChart3, desc: "Professional reporting architecture for balance sheets, sales tax, and performance audits." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/20">
                  <feature.icon size={16} className="lg:size-6" />
                </div>
                <h3 className="text-[16px] lg:text-[20px] font-bold capitalize tracking-wider leading-[0.9] mb-3">{feature.title}</h3>
                <p className="text-[13px] md:text-sm lg:text-base font-semibold leading-relaxed text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED ELITE DATA INFRASTRUCTURE - SYNCED WITH WEBDESIGN STYLE */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-20 py-12 bg-white relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-slate-50 pb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#FF6600]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF6600]">Infrastructure Hub</span>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-wider uppercase text-slate-950">
                MANAGE CUSTOMER & <span className="text-[#FF6600]">PRODUCT DATABASES.</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-md p-4 bg-slate-50 border-l-4 border-[#FF6600] rounded-r-xl"
            >
              <p className="text-sm font-semibold text-slate-500 italic tracking-wide leading-relaxed">
                "Administer multi-currency and multi-lingual technical nodes with absolute administrative precision and automated entity scaling."
              </p>
            </motion.div>
          </div>

          {/* ELITE DATA PILLARS - GROUPED CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                tag: "Global Node",
                title: "International Sync",
                points: [
                  "International Multi-Currency & Multi-Lingual features and date support.",
                  "Direct the management of databases related to customers and products."
                ],
                icon: Globe
              },
              {
                tag: "Admin Protocol",
                title: "Governance Core",
                points: [
                  "Administer customer and product databases effectively.",
                  "Take charge of customer and product database management.",
                  "Supervise the maintenance and organization of customer and product data."
                ],
                icon: ShieldCheck
              },
              {
                tag: "Functional Hub",
                title: "Operational Flow",
                points: [
                  "Ensure the smooth management of both customer and product databases.",
                  "Implement effective control over customer and product databases.",
                  "Execute the day-to-day operations of customer and product database management.",
                  "Handle the organization and maintenance of customer and product databases."
                ],
                icon: Zap
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative space-y-6 p-8 bg-white border border-slate-100 rounded-xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-slate-50 group-hover:bg-[#FF6600] flex items-center justify-center text-[#FF6600] group-hover:text-white transition-all duration-500 shadow-sm">
                      <pillar.icon size={16} className="lg:size-5" />
                    </div>
                    <span className="text-2xl font-display font-black text-slate-100 group-hover:text-orange-50 transition-colors italic">0{i + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-[2px] bg-[#FF6600]" />
                      <span className="text-[9px] font-bold capitalize tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                    </div>
                    <h3 className="text-[16px] lg:text-[20px] font-bold capitalize tracking-wide leading-[0.9]">{pillar.title}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-[#FF6600] border-b-[4px] border-b-transparent" />
                      <span className="text-[13px] md:text-sm lg:text-base font-semibold leading-snug text-slate-500 group-hover:text-slate-800 transition-colors italic">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
