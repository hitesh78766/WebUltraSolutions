import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code2, Globe, TrendingUp, Database, ChevronRight, ArrowRight, Layers, BarChart3, Target, Activity, Zap, Command, Terminal, Inbox, Fingerprint } from 'lucide-react';
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

    const SectionHeader = ({ label, title }: { label: string, title: string }) => (
        <div className="flex flex-col gap-1 mb-8">
            <div className="flex items-center gap-2">
                <div className="h-[2px] w-8 bg-[#FF6600]" />
                <span className="text-[#FF6600] text-[10px] font-black uppercase tracking-[0.4em]">{label}</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-none text-slate-950 italic">
                {title}
            </h2>
        </div>
    );

    return (
        <div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
            {/* HERO SECTION - REFINED ELITE TYPOGRAPHY */}
            <section className="relative h-[220px] lg:h-[280px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 bg-[#FDFBF9]">
                <ThreeTechnicalLattice />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 z-[1]" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center text-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 bg-slate-950 rounded-full flex items-center gap-3 shadow-2xl border border-[#FF6600]/30"
                    >
                        <Fingerprint size={12} className="text-[#FF6600] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Registry Active</span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-3xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-[0.8] flex items-center justify-center gap-4">
                            OUR <span className="text-[#FF6600] italic">EXPERTISE.</span>
                        </h1>
                        <p className="text-slate-500 text-[10px] lg:text-[12px] font-black uppercase tracking-[0.7em]">Technological Assets Reservoir • Noida Hub</p>
                    </div>
                </div>
            </section>

            {/* THEMATIC "UNFOLDING" STACK - ELITE 2.0 REFINEMENT */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">

                    <SectionHeader label="Strategic" title="Technical Infrastructure" />

                    <div className="space-y-4">
                        {expertisePillars.map((pillar, i) => {
                            const isActive = activeIndex === i;

                            return (
                                <div
                                    key={i}
                                    className={`relative border border-slate-100 rounded-md overflow-hidden transition-all duration-500 hover:border-[#FF6600]/30 ${isActive ? 'bg-[#FDFBF9] shadow-2xl border-orange-100' : 'bg-white shadow-sm'}`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(isActive ? null : i)}
                                        className="w-full text-left px-8 py-6 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-12">
                                            {/* ID Marker - INSTITUTIONAL LABEL */}
                                            <div className={`px-3 py-1.5 rounded-sm border transition-all duration-500 flex items-center justify-center min-w-[75px] ${isActive ? 'bg-[#FF6600] border-[#FF6600] shadow-lg shadow-orange-500/20' : 'bg-orange-50 border-orange-100 group-hover:border-[#FF6600]/40'}`}>
                                                <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-white' : 'text-[#FF6600]'}`}>
                                                    {pillar.number}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                {/* Icon Container - ELITE ACCENT */}
                                                <div className={`p-2.5 rounded-sm transition-all duration-500 ${isActive ? 'bg-slate-950 text-white shadow-2xl' : 'bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white'}`}>
                                                    <pillar.icon size={18} />
                                                </div>
                                                <h3 className={`text-[14px] lg:text-[16px] font-black uppercase tracking-[0.1em] italic transition-all ${isActive ? 'text-slate-950' : 'text-slate-800 group-hover:text-[#FF6600]'}`}>
                                                    {pillar.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={`transition-transform duration-500 ${isActive ? 'rotate-180 text-[#FF6600]' : 'text-slate-300'}`}>
                                            <ChevronRight size={22} />
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
                                                <div className="px-8 lg:px-[130px] pb-12 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-slate-100">
                                                    <div className="lg:col-span-5 space-y-6 pt-4">
                                                        <div className="space-y-4">
                                                            <p className="text-[10px] font-black text-[#FF6600] uppercase tracking-[0.3em] leading-none flex items-center gap-3">
                                                                <div className="w-2.5 h-[2px] bg-[#FF6600]" /> Status Narrative
                                                            </p>
                                                            <p className="text-sm lg:text-base font-semibold text-slate-500 italic leading-relaxed border-l-4 border-[#FF6600] pl-8 py-2">
                                                                {pillar.desc}
                                                            </p>
                                                        </div>
                                                        <button className="px-10 py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-md hover:bg-[#FF6600] transition-all flex items-center gap-4 shadow-2xl shadow-slate-950/20">
                                                            Initialize Project <ArrowRight size={16} />
                                                        </button>
                                                    </div>

                                                    <div className="lg:col-span-7 pt-4">
                                                        <div className="space-y-4 mb-6">
                                                            <p className="text-[10px] font-black text-[#FF6600] uppercase tracking-[0.3em] leading-none flex items-center gap-3">
                                                                <div className="w-2.5 h-[2px] bg-[#FF6600]" /> Internal Registry
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                                                            {pillar.services.map((service, sIdx) => (
                                                                <div key={sIdx} className="flex items-center gap-4 group/item cursor-default overflow-hidden py-0.5">
                                                                    <div className="w-2.5 h-[2px] bg-[#FF6600] shrink-0" />
                                                                    <span className="text-sm font-semibold text-slate-800 uppercase tracking-tight group-hover/item:text-[#FF6600] transition-colors">{service}</span>
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
        </div>
    );
};

export default Expertise;
