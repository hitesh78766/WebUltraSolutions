import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code2, Globe, TrendingUp, Database, ChevronRight, ArrowRight, Layers, BarChart3, Target, Activity, Zap, Command, Terminal, Inbox } from 'lucide-react';
import ThreeTechnicalLattice from '../components/ThreeTechnicalLattice';

const expertisePillars = [
  {
    title: "Front End Architecture",
    icon: Layout,
    number: "ARC-001",
    desc: "Crafting high-status digital identities with severe adherence to quality and pixel-perfect precision.",
    services: ["Web Design", "Responsive Websites", "Graphic Design", "Logo Design", "Custom Design", "Hosting"]
  },
  {
    title: "Web & App Ecosystem",
    icon: Code2,
    number: "SYS-002",
    desc: "Engineering scalable backend frameworks and mobile technical assets for global enterprise requirements.",
    services: ["Web Dev", "PHP Frameworks", "Ecommerce", "Wordpress", "App Dev", "Software Architecture"]
  },
  {
    title: "Integrated Marketing Hub",
    icon: TrendingUp,
    number: "MKT-003",
    desc: "Strategic search dominance and global engagement infrastructure tailored for high-status market penetration.",
    services: ["Digital Marketing", "SEO Consulting", "PPC Advertising", "Content Strategy", "Social Media", "Analytics"]
  },
  {
    title: "Advanced Pro Systems",
    icon: Database,
    number: "DAT-004",
    desc: "Developing complex news portals, financial systems, and institutional digital data infrastructure.",
    services: ["News Portals", "Property Portals", "Classifieds", "Financial Systems", "Live Chat", "Health Portals"]
  }
];

const Expertise: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
            {/* HERO SECTION - REVERTED TO LIGHT BG WITH DARK ANIMATION */}
            <section className="relative h-[220px] lg:h-[260px] flex items-center justify-center overflow-hidden border-b border-slate-100 bg-[#FDFBF9]">
                <ThreeTechnicalLattice />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 z-[1]" />
                <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center text-center gap-5">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-3 py-1 bg-[#FF6600] rounded-full flex items-center gap-2 shadow-lg shadow-orange-200">
                        <Terminal size={10} className="text-white" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white">Registry Active</span>
                    </motion.div>
                    <div className="space-y-2">
                        {/* REVERTED TO DARK TEXT FOR LIGHT BG */}
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-950 tracking-tighter uppercase leading-[0.8] flex items-center justify-center gap-4">
                            OUR <span className="text-[#FF6600] italic">EXPERTISE.</span>
                        </h1>
                        <p className="text-slate-400 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.5em]">Technological Assets Reservoir • Noida Hub</p>
                    </div>
                </div>
            </section>

            {/* THEMATIC "UNFOLDING" STACK - ENHANCED READABILITY */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    
                    <div className="flex flex-col gap-1 mb-10 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <div className="h-[1px] w-8 bg-[#FF6600]" />
                            <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.5em]">Section 04</span>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-display font-bold tracking-tighter uppercase text-slate-950 italic px-4 lg:px-0">
                            Technical <span className="text-[#FF6600] not-italic">Infrastructure.</span>
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {expertisePillars.map((pillar, i) => {
                            const isActive = activeIndex === i;
                            
                            return (
                                <div 
                                    key={i}
                                    className={`relative border border-slate-100 rounded-md overflow-hidden transition-all duration-500 hover:border-[#FF6600]/30 ${isActive ? 'bg-[#FDFBF9] shadow-xl' : 'bg-white shadow-sm'}`}
                                >
                                    <button 
                                        onClick={() => setActiveIndex(isActive ? null : i)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-12">
                                            {/* ID Marker - THEMED TECH BADGE (NO BLACK) */}
                                            <div className={`px-2 py-1 rounded-[2px] border transition-all duration-500 flex items-center justify-center min-w-[65px] h-[22px] ${isActive ? 'bg-[#FF6600] border-[#FF6600]' : 'bg-orange-50 border-orange-100 group-hover:border-[#FF6600]/40'}`}>
                                                <span className={`text-[8.5px] font-bold tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-white' : 'text-[#FF6600]'}`}>
                                                    {pillar.number}
                                                </span>
                                            </div>
                                            
                                            <div className="flex items-center gap-5">
                                               {/* Icon Container - THEMED ORANGE (NO BLACK) */}
                                               <div className={`p-2 rounded-sm transition-all duration-500 ${isActive ? 'bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/20' : 'bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white'}`}>
                                                   <pillar.icon size={16} />
                                               </div>
                                               <h3 className={`text-[12px] lg:text-[14px] font-bold uppercase tracking-widest italic transition-all ${isActive ? 'text-[#FF6600]' : 'text-slate-800 group-hover:text-[#FF6600]'}`}>
                                                   {pillar.title}
                                               </h3>
                                            </div>
                                        </div>
                                        <div className={`transition-transform duration-500 ${isActive ? 'rotate-180 text-[#FF6600]' : 'text-orange-200'}`}>
                                            <ChevronRight size={18} />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <div className="px-6 lg:px-[120px] pb-10 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-50">
                                                    <div className="lg:col-span-5 space-y-5 pt-4">
                                                        <div className="space-y-3">
                                                            {/* ENHANCED LABEL FONT SIZE */}
                                                            <p className="text-[11px] font-medium text-slate-800 uppercase tracking-[0.4em] leading-none flex items-center gap-3">
                                                                <div className="w-2 h-2 rounded-full bg-[#FF6600]" /> Status Narrative
                                                            </p>
                                                            <p className="text-[12px] lg:text-[14px] font-medium text-slate-600 italic leading-relaxed border-l-2 border-[#FF6600] pl-6 py-1">
                                                                {pillar.desc}
                                                            </p>
                                                        </div>
                                                        {/* CTA Button - THEMED ORANGE (NO BLACK) */}
                                                        <button className="px-8 py-3.5 bg-[#FF6600] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-md hover:bg-slate-950 transition-all flex items-center gap-3 shadow-lg shadow-orange-100">
                                                           Initialize Project <ArrowRight size={14} />
                                                        </button>
                                                    </div>

                                                    <div className="lg:col-span-7 pt-4">
                                                        <div className="space-y-3 mb-6">
                                                            {/* ENHANCED LABEL FONT SIZE */}
                                                            <p className="text-[11px] font-medium text-slate-800 uppercase tracking-[0.4em] leading-none flex items-center gap-3">
                                                                <div className="w-2 h-2 rounded-full bg-[#FF6600]" /> Internal Registry
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                                            {pillar.services.map((service, sIdx) => (
                                                                <div key={sIdx} className="flex items-center gap-3 group/item cursor-default overflow-hidden py-0.5">
                                                                    {/* NODE BOLIDFIED BY DEFAULT */}
                                                                    <div className="w-1.5 h-1.5 bg-[#FF6600] shrink-0" />
                                                                    <span className="text-[12px] lg:text-[13px] font-medium text-slate-800 uppercase tracking-tight group-hover/item:text-[#FF6600] transition-colors truncate">{service}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* THEMED COMPACT CTA (NO BLACK BACKGROUND) */}
            <section className="py-12 bg-white border-y border-slate-100 relative overflow-hidden text-center">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10 space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-950 uppercase tracking-tighter leading-none italic">
                            Technical <span className="text-[#FF6600] not-italic">Execution.</span>
                        </h2>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect with our Noida Technical team today.</p>
                    </div>
                    <button className="px-12 py-4 bg-[#FF6600] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-slate-950 transition-all shadow-xl rounded-md flex items-center justify-center gap-4 mx-auto">
                        Connect Elite Architects <ArrowRight size={16} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Expertise;
