import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, Globe, Users, Target, CheckCircle2, Zap, ArrowRight, ChevronRight, BarChart3, Clock } from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

const strategicPillars = [
  "Better Understanding",
  "Greater Involvement",
  "Honest Delivery",
  "Active Management",
  "Fee for Value",
  "Team Approach",
  "Maximise Opportunities"
];

const impactPillars = [
  {
    title: "Understanding the client base",
    desc: "We attribute special emphasis to the needs and requirements of our clients. The likes and desires of patrons are unique. They want the best of the services and our in-house team of expert web developers spends ample time with the customers - even before starting the project. Once the requirements have been studied and analyzed thoroughly, the work begins.",
    icon: Target
  },
  {
    title: "Cost Effective Solutions",
    desc: "While the competition tries to inflate the costs, we tend to keep it small so that it does not break your account. We provide enterprise-grade quality at a fraction of the investment required by larger agencies.",
    icon: Zap
  },
  {
    title: "Keeping up with the latest 'drifts'",
    desc: "It is a well-known fact that web design and development is a dynamic niche. The intelligent always come up with innovative methods and manners to gain a leading edge over the competition. Only the professed will have the leads to keep in touch with these developments and to implement it on the websites of the patrons.",
    icon: TrendingUp
  }
];

const WhyUs: React.FC = () => {
   useEffect(() => {
	window.scrollTo(0, 0);
   }, []);

   const SectionHeader = ({ label, title }: { label: string, title: string }) => (
		<div className="flex flex-col gap-1 mb-6">
			<div className="flex items-center gap-2">
				<div className="h-[1px] w-6 bg-[#FF6600]" />
				<span className="text-[#FF6600] text-[9px] font-bold uppercase tracking-[0.4em]">{label}</span>
			</div>
			<h2 className="text-xl lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 italic">
				{title}
			</h2>
		</div>
	);

   return (
	<div className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[80px]">
	   {/* HERO SECTION - REFINED WITH SOLUTION BACKGROUND */}
	   <section className="relative h-[280px] lg:h-[320px] flex items-center justify-center overflow-hidden border-b border-slate-100">
  		<ThreeSolutionBackground />
        
        {/* Soft Contrast Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95 z-[1] pointer-events-none" />

  		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center justify-center">
  		   <div className="flex flex-col items-center text-center gap-4 max-w-4xl">
  			{/* Differentiation Badge */}
  			<motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="px-2.5 py-1 bg-white rounded-full border border-[#FF6600]/40 shadow-sm flex items-center gap-2"
             >
  			   <CheckCircle2 size={12} className="text-[#FF6600]" />
  			   <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-950 font-secondary">Differentiator Core</span>
  			</motion.div>

  			<div className="space-y-4">
               <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-0.5">
                 <span className="block text-[10px] font-bold text-[#FF6600] uppercase tracking-[0.8em] mb-1">Choosing Excellence</span>
                 <h1 className="text-3xl lg:text-5xl font-bold text-slate-950 tracking-tighter leading-[0.9] uppercase flex items-center justify-center gap-3">
                   Why <span className="text-[#FF6600] italic">Choose Us.</span>
                 </h1>
               </motion.div>
               
               <motion.p 
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-600 text-[11px] lg:text-[14px] font-medium max-w-2xl border-x-2 border-[#FF6600] px-10 py-1.5 leading-relaxed italic"
               >
                 Basic service delivery isn't enough to differentiate any firm in today's competitive marketplace. We propel clients beyond satisfaction to absolute loyalty.
               </motion.p>
             </div>
  		   </div>
  		</div>
	   </section>

       {/* STRATEGIC NARRATIVE & PILLARS GRID */}
       <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
             
             {/* Main Narrative Column */}
             <div className="lg:col-span-7 space-y-12">
                <div className="space-y-8">
                   <SectionHeader label="Strategic" title="Corporate Reputatation" />
                   <div className="space-y-6">
                      <p className="text-[14px] lg:text-[16px] text-slate-950 font-bold border-l-4 border-[#FF6600] pl-8 py-3 italic leading-relaxed">
                         "Understanding not only our client's web needs but their business needs have propelled webultrasolution beyond customer satisfaction."
                      </p>
                      <p className="text-[12px] lg:text-[14px] text-slate-500 font-medium leading-relaxed italic">
                         We have established a reputation for consistently delivering mission-critical, technically challenging projects under tight timelines, while also providing exceptional customer service and support to our clientele. This, in turn, has led to extremely positive long-term working relationships with both clients and solution partners alike.
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                   {impactPillars.map((pillar, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="p-8 bg-[#FDFBF9] border border-slate-100 rounded-sm hover:border-[#FF6600] transition-all group shadow-sm flex gap-6"
                      >
                         <div className="w-12 h-12 bg-white flex items-center justify-center text-[#FF6600] shadow-sm rounded-sm shrink-0 border border-slate-50 group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                            <pillar.icon size={22} />
                         </div>
                         <div className="space-y-2">
                            <h4 className="text-[11px] font-bold text-slate-950 uppercase tracking-widest">{pillar.title}</h4>
                            <p className="text-[12px] lg:text-[14px] text-slate-500 font-medium italic leading-relaxed">{pillar.desc}</p>
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>

             {/* The "Why Choose Us?" Callout Column */}
             <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
                <div className="bg-[#FDFBF9] p-10 lg:p-12 rounded-sm border border-slate-100 shadow-xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[#FF6600]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative z-10 space-y-10">
                      <div className="space-y-2 text-center lg:text-left">
                         <h3 className="text-2xl lg:text-2xl font-display font-bold text-slate-950 uppercase italic tracking-tighter leading-none">
                           Why Choose <br /> <span className="text-[#FF6600] not-italic">Us?</span>
                         </h3>
                         <div className="h-[2px] w-12 bg-[#FF6600] mx-auto lg:mx-0" />
                      </div>

                      <div className="space-y-5">
                         {strategicPillars.map((pillar, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-4 group/item"
                            >
                               <span className="text-xl font-display font-bold text-[#FF6600] transition-colors">{i + 1}</span>
                               <span className="text-[10px] font-bold text-slate-950 uppercase tracking-[0.25em] group-hover/item:translate-x-2 transition-transform">{pillar}</span>
                            </motion.div>
                         ))}
                      </div>

                      <div className="pt-8 border-t border-slate-100">
                         <p className="text-[11px] text-slate-500 font-medium italic leading-relaxed mb-6">
                            Ensuring 100% time-to-market success through elite Noida technical hubs.
                         </p>
                         <button className="w-full py-4 bg-[#FF6600] text-white text-[9px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 rounded-md hover:scale-[1.02] active:scale-95">
                            Start Executive Journey <ArrowRight size={14} />
                         </button>
                      </div>
                   </div>
                </div>

                {/* Sub-Metric Callout */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="p-6 bg-white border border-slate-100 rounded-sm text-center shadow-sm">
                      <BarChart3 className="text-[#FF6600] mx-auto mb-2" size={20} />
                      <p className="text-[20px] font-bold text-slate-950 leading-none">100%</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Client Loyalty</p>
                   </div>
                   <div className="p-6 bg-white border border-slate-100 rounded-sm text-center shadow-sm">
                      <Clock className="text-[#FF6600] mx-auto mb-2" size={20} />
                      <p className="text-[20px] font-bold text-slate-950 leading-none">24/7</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mission Support</p>
                   </div>
                </div>
             </div>

          </div>
       </section>

       {/* CALL TO ACTION */}
       <section className="py-14 bg-[#FDFBF9] border-t border-slate-100 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="text-center lg:text-left space-y-2">
             <h2 className="text-3xl lg:text-5xl font-bold text-slate-950 uppercase tracking-tighter leading-none italic">
               Ready to Differentiate?
             </h2>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect with our elite strategy team in Noida.</p>
           </div>
           <button className="px-10 py-4 bg-[#FF6600] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-600 transition-all duration-300 shadow-2xl flex items-center gap-4 rounded-md hover:scale-[1.02] active:scale-95">
             Request Strategic Consultation <ArrowRight size={14} />
           </button>
         </div>
       </section>
	</div>
   );
};

export default WhyUs;
