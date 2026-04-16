import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code2, Globe, TrendingUp, Database, ChevronRight, ArrowRight, Layers, BarChart3, Target, Activity, Zap, Command, Terminal, Inbox, Fingerprint } from 'lucide-react';
import ThreeResponsiveVortex from '../components/ThreeResponsiveVortex';

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

    const SectionHeader = ({ label, title }: { label: string, title: React.ReactNode }) => (
        <div className="flex flex-col gap-1 mb-8 text-left">
            <span className="text-[#FF6600] text-[10px] font-bold uppercase tracking-[0.4em]">{label}</span>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-snug text-slate-950">
                {title}
            </h2>
        </div>
    );

    return (
        <div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[80px]">
            {/* HERO SECTION - REFINED ELITE TYPOGRAPHY */}
            <section className="relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[280px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 bg-[#FDFBF9]">
                <ThreeResponsiveVortex />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/98 z-[1]" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-12 md:px-16 lg:px-20 w-full flex flex-col items-center text-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3.5 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-slate-950 rounded-full flex items-center gap-2 lg:gap-3 shadow-2xl border border-[#FF6600]/30"
                    >
                        <Fingerprint className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#FF6600] animate-pulse" />
                        <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white">Registry Active</span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tighter uppercase leading-[1] flex items-center justify-center gap-3 sm:gap-4">
                            OUR <span className="text-[#FF6600]">EXPERTISE.</span>
                        </h1>
                        <p className="text-slate-500 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.6em]">Technological Assets Reservoir • Noida Hub</p>
                    </div>
                </div>
            </section>

            {/* THEMATIC "UNFOLDING" STACK - ELITE 2.0 REFINEMENT */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">

                    <SectionHeader label="Strategic" title={<>Technical <span className="text-[#FF6600]">Infrastructure</span></>} />

                    <div className="space-y-4">
                        {expertisePillars.map((pillar, i) => {
                            const isActive = activeIndex === i;
                            const titleParts = pillar.title.split(' ');
                            const mainTitle = titleParts.slice(0, -1).join(' ');
                            const orangeTitle = titleParts.slice(-1)[0];

                            return (
                                <div
                                    key={i}
                                    className={`relative border border-slate-100 rounded-md overflow-hidden transition-all duration-500 hover:border-[#FF6600]/30 ${isActive ? 'bg-[#FDFBF9] shadow-2xl border-orange-100' : 'bg-white shadow-sm'}`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(isActive ? null : i)}
                                        className="w-full text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4 sm:gap-8 lg:gap-12">
                                            {/* ID Marker - INSTITUTIONAL LABEL */}
                                            <div className={`px-3 py-1.5 rounded-sm border transition-all duration-500 flex items-center justify-center min-w-[75px] ${isActive ? 'bg-[#FF6600] border-[#FF6600] shadow-lg shadow-orange-500/20' : 'bg-orange-50 border-orange-100 group-hover:border-[#FF6600]/40'}`}>
                                                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-white' : 'text-[#FF6600]'}`}>
                                                    {pillar.number}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 sm:gap-6">
                                                {/* Icon Container - ELITE ACCENT */}
                                                <div className={`p-2 sm:p-2.5 rounded-sm transition-all duration-500 ${isActive ? 'bg-slate-950 text-white shadow-2xl' : 'bg-orange-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white'}`}>
                                                    <pillar.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                                                </div>
                                                <h3 className={`text-[14px] lg:text-[15px] font-bold uppercase tracking-[0.1em] transition-all ${isActive ? 'text-slate-950' : 'text-slate-800 group-hover:text-[#FF6600]'}`}>
                                                    {mainTitle} <span className="text-[#FF6600]">{orangeTitle}</span>
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
                                                <div className="px-5 sm:px-10 lg:px-[130px] pb-8 sm:pb-10 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-t border-slate-100">
                                                    <div className="lg:col-span-5 space-y-5 pt-2">
                                                        <div className="space-y-4">
                                                            <p className="text-[10px] font-black text-[#FF6600] uppercase tracking-[0.4em] leading-none flex items-center gap-3">
                                                                <div className="w-2.5 h-[2px] bg-[#FF6600]" /> Status Narrative
                                                            </p>
                                                            <p className="text-sm md:text-base font-semibold text-slate-500 leading-relaxed border-l-4 border-[#FF6600] pl-6 sm:pl-8 py-2">
                                                                {pillar.desc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="lg:col-span-7 pt-2">
                                                        <div className="space-y-4 mb-5">
                                                            <p className="text-[10px] font-black text-[#FF6600] uppercase tracking-[0.4em] leading-none flex items-center gap-3">
                                                                <div className="w-2.5 h-[2px] bg-[#FF6600]" /> Internal Registry
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-3">
                                                            {pillar.services.map((service, sIdx) => (
                                                                <div key={sIdx} className="flex items-center gap-3 group/item cursor-default overflow-hidden py-0.5">
                                                                    <div className="w-2 h-[2px] bg-[#FF6600] shrink-0" />
                                                                    <span className="text-[13px] font-semibold text-slate-800 capitalize tracking-tight group-hover/item:text-[#FF6600] transition-colors">{service}</span>
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
