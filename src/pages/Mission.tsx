import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, ShieldCheck, Award, ChevronRight, Activity, Zap } from 'lucide-react';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

const Mission: React.FC = () => {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

   useEffect(() => {
	window.scrollTo(0, 0);
   }, []);

   const container: Variants = {
	hidden: { opacity: 0 },
	visible: (i: number = 1) => ({
	   opacity: 1,
	   transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
	}),
   };

   const child: Variants = {
	visible: {
	   opacity: 1,
	   y: 0,
	   transition: {
		type: "spring",
		damping: 12,
		stiffness: 200,
	   } as any,
	},
	hidden: {
	   opacity: 0,
	   y: 30,
	},
   };

   const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
	const words = text.split(" ");
	return (
	   <motion.p
		initial={{ opacity: 0, y: 10 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-50px" }}
		transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
		className={className}
	   >
		{words.map((word, i) => (
		   <span key={i} className="inline-block mr-[0.25em]">
			{word}
		   </span>
		))}
	   </motion.p>
	);
   };

   return (
	<div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
	   {/* HERO SECTION - ELITE CINEMATIC ARCHITECTURE */}
	   <section className="relative min-h-[300px] lg:min-h-[350px] flex items-center justify-center bg-[#f8fafc] border-b border-slate-100 overflow-hidden pt-8">
		<ThreeSolutionBackground />

		<div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
		   <motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			style={{ opacity, scale }}
			className="flex flex-col items-center gap-4"
		   >
			{/* Elite Identity Badge */}
			<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-200/50 bg-white/40 backdrop-blur-md shadow-sm">
			   <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
			   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 leading-none pt-0.5">Strategic Alignment</span>
			</div>

			<h1 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter leading-[1.05] uppercase max-w-4xl mx-auto">
			   {(() => {
				const title = "OUR MISSION STATEMENT.";
				return title.split(" ").map((word, wordIdx) => (
				   <span key={wordIdx} className="inline-block mr-4">
					{word.split("").map((char, charIdx) => (
					   <motion.span
						key={`${wordIdx}-${charIdx}`}
						variants={child}
						className="inline-block"
					   >
						{char}
					   </motion.span>
					))}
				   </span>
				));
			   })()}
			</h1>

			<p className="text-slate-500 text-sm lg:text-[15px] font-medium max-w-2xl leading-relaxed font-secondary">
			   Webultrasolution is provided customized services to specific web designing and web programming needs of the clients. Our approach is customer-oriented, business-minded and cost-efficient.
			</p>
		   </motion.div>
		</div>
	   </section>

	   {/* CORE MISSION NARRATIVE - ELITE COMPACT GRID */}
	   <section className="relative py-12 lg:py-16 bg-[#fdfdff] overflow-hidden">
		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
		   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
			
			{/* LEFT: MISSION FOCUS */}
			<div className="lg:col-span-8 space-y-8">
			   <div className="space-y-4">
				<div className="flex items-center gap-3">
				 <div className="h-[1px] w-8 bg-indigo-500" />
				 <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.4em] leading-none pt-0.5">Core Purpose</span>
				</div>
				<h2 className="text-3xl lg:text-[40px] font-black text-slate-950 tracking-tighter uppercase leading-[0.95] italic">
				   Our <span className="not-italic">Mission.</span>
				</h2>
			   </div>

			   <div className="space-y-4 max-w-4xl pt-4">
				<AnimatedText
				   className="text-[16px] lg:text-[18px] font-bold text-slate-800 leading-relaxed text-left font-secondary border-l-4 border-indigo-600 pl-6 py-2 bg-slate-50/50 rounded-r-2xl shadow-sm"
				   text="to fulfill all needs and exceed all expectations of our client's is the main mantra that we passionately follow at webultrasolution."
				/>
				<AnimatedText
				   className="text-[14px] lg:text-[15px] text-slate-500 font-medium leading-relaxed text-left pl-10 pt-2 italic border-l border-slate-200"
				   text="By taking a strategic approach we're able to boost businesses see the whole forest before picking the right trees: identifying the channels, tactics and technologies that will drive your business forward."
				/>
			   </div>

			   {/* MISSION PILLARS */}
			   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-4">
				{[
				   { title: "Customer Oriented", icon: Target, desc: "Personalized approach ensuring client contentment." },
				   { title: "Business Minded", icon: Zap, desc: "Strategic alignment with global market standards." },
				   { title: "Cost Efficient", icon: Award, desc: "Delivering low IT cost structures without compromise." },
				   { title: "Proven Results", icon: Activity, desc: "Consistently exceeding expectations worldwide." }
				].map((pillar, idx) => (
				   <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
					<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
					 <pillar.icon size={16} />
					</div>
					<div className="space-y-0.5">
					 <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-widest leading-none pt-0.5">{pillar.title}</h4>
					 <p className="text-[11px] text-slate-500 font-medium leading-none">{pillar.desc}</p>
					</div>
				   </div>
				))}
			   </div>
			</div>

			{/* RIGHT: VISION STATS - ELITE PERSPECTIVE */}
			<div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
			   <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(79,70,229,0.2)] border-8 border-white">
				<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team Synergy" className="w-full h-auto object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent pointer-events-none" />

				<div className="absolute top-4 left-4">
				 <div className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-2xl flex items-center gap-2">
				  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none pt-0.5">Global Reach</span>
				 </div>
				</div>
			   </div>

			   <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 space-y-4 relative overflow-hidden group">
				{/* Elite Interior Animation */}
				<div className="absolute inset-0 opacity-[0.15] pointer-events-none group-hover:opacity-25 transition-opacity duration-700">
				 <ThreeNeuralStorm />
				</div>

				<div className="relative z-10 space-y-4">
				 <h4 className="text-[13px] font-black text-indigo-600 uppercase tracking-[0.3em]">Our Vision</h4>
				 <p className="text-[14px] lg:text-[15px] font-bold text-slate-800 leading-relaxed italic">
					"Our vision is to create a business Globally full of prosperity, meaning, and connection for all. Delivering measurable results to clients, employees, and business owners."
				 </p>
				 <div className="h-px bg-indigo-200/50" />
				 <ul className="space-y-2">
					{["WOW factors through services", "Meaningful digital experiences", "Prime performer in Web/Software"].map((item, i) => (
					   <li key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-600">
						<ChevronRight size={13} className="text-indigo-500" /> {item}
					   </li>
					))}
				 </ul>
				</div>
			   </div>
			</div>
		   </div>
		</div>
	   </section>

	   {/* COMMITMENT & CREDENTIALS - SUPER COMPACT POLISHED ROW */}
	   <section className="relative py-12 lg:py-16 bg-[#f8faff] overflow-hidden border-y border-slate-100">
		<div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-24">
		   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<div className="lg:col-span-12">
			   <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
				
                {/* OUR COMMITMENT CARD */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="flex-1 p-7 rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.12)] hover:border-indigo-100/50 transition-all duration-500 space-y-4 relative flex flex-col group overflow-hidden"
                >
                   <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-indigo-500 transition-colors duration-500" />
                   <div className="space-y-2 relative z-10">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em] leading-none pt-0.5">The Promise</span>
                         </div>
                         <Target size={14} className="text-slate-200 group-hover:text-indigo-400 transition-colors duration-500" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-black text-slate-950 tracking-[0.05em] uppercase leading-none italic">
                         Our <span className="not-italic">Commitment.</span>
                      </h2>
                   </div>
                   <p className="text-[13px] lg:text-[14px] text-slate-500 font-medium leading-relaxed flex-1 relative z-10">
                      We take pride in our on-time delivery and ability to meet quick turn around requests while exceeding customer quality demands. Customer Satisfaction continues to be of utmost importance to CWS.
                   </p>
                </motion.div>

                {/* OUR CREDENTIALS CARD */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="flex-1 p-7 rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.12)] hover:border-indigo-100/50 transition-all duration-500 space-y-4 relative flex flex-col group overflow-hidden"
                >
                   <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-indigo-500 transition-colors duration-500" />
                   <div className="space-y-2 relative z-10">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em] leading-none pt-0.5">Proven Expertise</span>
                         </div>
                         <Award size={14} className="text-slate-200 group-hover:text-indigo-400 transition-colors duration-500" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-black text-slate-950 tracking-[0.05em] uppercase leading-none italic">
                         Our <span className="not-italic">Credentials.</span>
                      </h2>
                   </div>
                   <p className="text-[14px] lg:text-[15px] font-bold text-slate-700 leading-relaxed font-secondary flex-1 relative z-10">
                      Best quality services, creative designs, innovative ideas, cost-effective & time bound project completion are our special features.
                   </p>
                   <div className="flex items-center gap-2 pt-2 border-t border-slate-50 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] leading-none pt-0.5">Global Excellence</span>
                   </div>
                </motion.div>

                {/* OUR INTEGRITY CARD */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="flex-1 p-7 rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.12)] hover:border-indigo-100/50 transition-all duration-500 space-y-4 relative flex flex-col group overflow-hidden"
                >
                   <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-indigo-500 transition-colors duration-500" />
                   <div className="space-y-2 relative z-10">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em] leading-none pt-0.5">Core Value</span>
                         </div>
                         <ShieldCheck size={14} className="text-slate-200 group-hover:text-indigo-400 transition-colors duration-500" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-black text-slate-950 tracking-[0.05em] uppercase leading-none italic">
                         Our <span className="not-italic">Integrity.</span>
                      </h2>
                   </div>
                   <p className="text-[13px] lg:text-[14px] text-slate-500 font-medium leading-relaxed italic opacity-90 flex-1 relative z-10">
                      &quot;Integrity: We believe in doing the right thing, no matter what the cost. We believe in fairness, transparency, and honesty. Without integrity, we have nothing.&quot;
                   </p>
                   <div className="flex items-center gap-2 pt-2 border-t border-slate-50 text-indigo-500 relative z-10">
                      <Zap size={14} />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] leading-none pt-0.5">Uncompromising Pillar</span>
                   </div>
                </motion.div>
			   </div>
			</div>
		   </div>
		</div>
	   </section>

	   {/* CALL TO ACTION - ELITE LIGHT (COMMENTED OUT AS PER USER REQUEST) */}
	   {/* <section className="py-10 lg:py-14 relative overflow-hidden bg-white border-t border-slate-100">
		...
	   </section> */}
	</div>
   );
};

export default Mission;
