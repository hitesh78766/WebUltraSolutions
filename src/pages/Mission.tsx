import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Globe, Quote } from 'lucide-react';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

const Mission: React.FC = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end end"]
   });

   useEffect(() => {
	window.scrollTo(0, 0);
   }, []);

   const SectionHeader = ({ label, title }: { label: string, title: string }) => (
		<div className="flex flex-col gap-1 mb-4">
			<div className="flex items-center gap-2">
				<div className="h-[1px] w-6 bg-[#FF6600]" />
				<span className="text-[#FF6600] text-[9px] font-bold uppercase tracking-[0.3em]">{label}</span>
			</div>
			<h2 className="text-lg lg:text-2xl font-display font-bold tracking-tight uppercase leading-none text-slate-950 italic">
				{title}
			</h2>
		</div>
	);

   return (
	<div ref={containerRef} className="bg-white min-h-screen font-secondary overflow-x-hidden pt-[70px]">
	   {/* HERO SECTION */}
	   <section className="relative h-[280px] lg:h-[320px] flex items-center justify-center overflow-hidden border-b border-slate-100">
  		<ThreeNetworkGlobe />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-white/95 z-[1]" />

  		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full flex flex-col items-center justify-center">
  		   <div className="flex flex-col items-center text-center gap-4 max-w-4xl">
  			<motion.div 
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-950 rounded-md shadow-2xl border border-white/10"
             >
  			   <span className="flex h-1 w-1 items-center justify-center">
                 <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#FF6600] opacity-75"></span>
                 <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6600]"></span>
               </span>
  			   <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white">Institutional Mission</span>
  			</motion.div>

  			<div className="space-y-3">
               <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-0.5">
                 <span className="block text-[9px] font-bold text-[#FF6600] uppercase tracking-[0.5em] mb-1">Elite Global Strategy</span>
                 <h1 className="text-3xl lg:text-5xl font-bold text-slate-950 tracking-tighter leading-[0.9] uppercase whitespace-nowrap">
                   Our Mission <span className="text-[#FF6600] italic">& Vision.</span>
                 </h1>
               </motion.div>
               <motion.p 
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-600 text-[10px] lg:text-[13px] font-medium max-w-3xl border-x-2 border-[#FF6600] px-8 py-1.5 leading-relaxed italic"
               >
                 Webultrasolution is provided customized services to specific <span className="text-[#FF6600]">web designing</span> and <span className="text-[#FF6600]">web programming</span> needs.
               </motion.p>
             </div>
  		   </div>
  		</div>
	   </section>

	   {/* MISSION SECTION - FULL WIDTH IMAGE */}
	   <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
		<div className="max-w-[1400px] mx-auto px-8 lg:px-20">
		   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
             <div className="space-y-6">
               <SectionHeader label="Strategic" title="Our Mission" />
               <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="p-6 bg-[#FDFBF9] border-r-4 border-[#FF6600] rounded-sm relative group shadow-sm">
                 <p className="text-[13px] lg:text-[16px] text-slate-950 font-bold italic leading-tight">
                   "To fulfill all needs and exceed all expectations of our client's is the <span className="text-[#FF6600]">main mantra</span> that we passionately follow at webultrasolution."
                 </p>
               </motion.div>
               <div className="space-y-4 text-[11px] lg:text-[13px] text-slate-500 font-medium leading-relaxed">
                  <p>Webultrasolution is provided customized services to specific web designing and web programming needs of the clients. Our approach is <span className="text-[#FF6600] font-bold">customer-oriented</span>, business-minded and cost-efficient.</p>
                  <p className="text-slate-900 font-bold italic border-l-2 border-[#FF6600] pl-4 py-0.5">
                    It's about doing the right thing, not just anything. We work to perceive the entire scope of a business so that we can implement them consistently across <span className="text-[#FF6600]">all mediums.</span>
                  </p>
               </div>
             </div>

             <div className="space-y-6 lg:pt-8">
               <p className="text-[10px] lg:text-[12px] text-slate-600 font-medium leading-relaxed italic p-5 bg-[#FDFBF9] border border-slate-100">
                 We use <span className="text-[#FF6600] font-bold">strategic data</span> and relevant insights to enlighten the creative process and technical fulfilment. By taking a strategic approach we're able to boost businesses: see the <span className="text-[#FF6600]">whole forest</span> before picking the right trees.
               </p>
               <div className="flex flex-wrap gap-2">
                 {["Customer Oriented", "Business Minded", "Cost Efficient"].map((pill, i) => (
                   <div key={i} className="px-3 py-1 bg-white border border-[#FF6600]/20 text-[8px] font-bold text-[#FF6600] uppercase tracking-widest rounded-full flex items-center gap-1.5 transition-colors hover:bg-[#FF6600] hover:text-white group">
                     <div className="w-1 h-1 rounded-full bg-[#FF6600] group-hover:bg-white" />
                     {pill}
                   </div>
                 ))}
               </div>
               
               {/* Full Width Strategy Image */}
               <div className="relative aspect-[24/9] lg:max-h-[220px] rounded-sm overflow-hidden shadow-xl w-full border border-slate-100 mt-4">
                 <img src="/mission_hero.png" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
               </div>
             </div>
		   </div>
		</div>
	   </section>

       {/* VISION SECTION */}
       <section className="py-16 bg-[#FDFBF9] border-y border-slate-100 overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader label="Future" title="Prosperity & Connection" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {[
                   { t: "Global Vision", d: "Prosperity, meaning, and connection for all." },
                   { t: "Measurable Impact", d: "Results for clients and business owners." },
                   { t: "WOW Factor", d: "Deliver the WOW factor through our services." }
                 ].map((box, i) => (
                   <div key={i} className="p-4 bg-white border border-slate-100 rounded-sm shadow-sm hover:border-[#FF6600] transition-colors">
                      <h4 className="text-[9px] font-bold text-[#FF6600] uppercase tracking-widest mb-1.5">{box.t}</h4>
                      <p className="text-[11px] lg:text-[12px] text-slate-500 font-medium italic leading-snug">{box.d}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="space-y-6 lg:pl-10 border-l border-[#FF6600]/20">
              <p className="text-[11px] lg:text-[13px] text-slate-500 font-medium leading-relaxed italic">
                Leverage expertise and <span className="text-[#FF6600]">marginal understanding</span> of business areas to create tailored-fit solutions for individual models.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                 {["Relationships", "Disciplined", "Quality"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[9px] font-bold text-[#FF6600] uppercase tracking-widest">
                       <ArrowRight size={10} /> {item}
                    </div>
                 ))}
              </div>
              <p className="text-[10px] lg:text-[12px] text-slate-950 font-bold uppercase tracking-tighter pt-4 border-t border-slate-100 italic">
                "Prime performer in <span className="text-[#FF6600]">quality Web</span>, Print and Software solutions."
              </p>
            </div>
         </div>
       </section>

	   {/* COMMITMENT & CREDENTIALS */}
	   <section className="py-16 bg-white">
		<div className="max-w-[1400px] mx-auto px-8 lg:px-20">
		   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-7 space-y-6">
               <SectionHeader label="The Promise" title="Our Commitment" />
               <div className="space-y-4 text-[11px] lg:text-[13px] text-slate-500 font-medium leading-relaxed">
                  <p className="text-[13px] lg:text-[15px] text-slate-950 font-bold italic border-l-4 border-[#FF6600] pl-6 py-1">
                    Pride in <span className="text-[#FF6600]">on-time delivery</span> and quick turn around while exceeding quality demands.
                  </p>
                  <p>Customer Satisfaction continues to be of <span className="text-[#FF6600]">utmost importance</span> to CWS, as do Consistent quality and Constant innovation.</p>
                  <p className="p-5 bg-[#FDFBF9] border border-slate-100 italic rounded-sm">
                    Synergy in operations realized through <span className="text-[#FF6600]">collaborative approach</span> and emphasis on economical solutions.
                  </p>
               </div>
             </div>

             <div className="lg:col-span-5 space-y-8">
               <div className="space-y-4">
                 <SectionHeader label="Background" title="Credentials" />
                 <p className="text-[11px] lg:text-[12px] text-slate-500 font-medium leading-relaxed italic text-right border-r-2 border-[#FF6600]/20 pr-6">
                   Innovative ideas and <span className="text-[#FF6600]">cost-effective</span> completions strengthen our relations and build trust for valuable clients worldwide.
                 </p>
               </div>

               <motion.div whileHover={{ y: -3 }} className="p-6 bg-[#FDFBF9] border border-[#FF6600]/20 text-slate-950 relative rounded-sm shadow-lg overflow-hidden">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6600]/5 rounded-bl-full pointer-events-none" />
                 <div className="relative z-10 space-y-3">
                   <div className="flex items-center gap-2">
                     <ShieldCheck size={20} className="text-[#FF6600]" />
                     <h3 className="text-lg lg:text-xl font-display font-bold uppercase italic tracking-tighter text-[#FF6600]">Integrity.</h3>
                   </div>
                   <p className="text-[12px] lg:text-[14px] font-medium text-slate-700 leading-tight italic border-l-2 border-[#FF6600] pl-4">
                     "Doing the right thing, no matter the cost. <span className="text-[#FF6600]">Fairness and honesty</span>—without it, we have nothing."
                   </p>
                 </div>
               </motion.div>
             </div>
		   </div>
		</div>
	   </section>
	</div>
   );
};

export default Mission;
