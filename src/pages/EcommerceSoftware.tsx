import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  CreditCard, 
  Layout, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Zap,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeSolutionBackground from '../components/ThreeSolutionBackground';

gsap.registerPlugin(ScrollTrigger);

const bottomFeatures = [
  { name: "User Friendly", icon: Layout },
  { name: "Reasonable Price", icon: CreditCard },
  { name: "On time Delivery", icon: Truck },
  { name: "Quality Assurance", icon: ShieldCheck }
];

const expertiseList = [
  "Shaping Cart",
  "Shopping carts",
  "E-commerce Portals"
];

export default function EcommerceSoftware() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-hidden">
      {/* CINEMATIC HERO SECTION - SYNCED WITH WEBDESIGN ARCHITECTURE */}
      <div className="relative min-h-[300px] lg:min-h-[380px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeSolutionBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-5">
          <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl">
            {(() => {
              const title = "INSTITUTIONAL E-COMMERCE DEVELOPMENT SOLUTIONS.";
              return title.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-4">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={`${wordIdx}-${charIdx}`}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 10, 
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02) 
                      }}
                      className={`inline-block ${
                        word === "E-COMMERCE" || word === "SOLUTIONS." 
                        ? "text-[#FF6600]" 
                        : "text-slate-900"
                      }`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ));
            })()}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed w-full px-6 md:px-0"
          >
            eCommerce is growing globally for both B2B and B2C market segments. High-status retail architecture for global enterprise leaders.
          </motion.p>
        </div>
      </div>

      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* INTRO GRID: IMAGE + TEXT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-video lg:aspect-square rounded-md overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 group"
            >
              <img 
                src="/images/ecommerce-dev.png" 
                alt="E-commerce Illustration" 
                className="w-full h-full md:h-75 object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
              
              <div className="absolute top-6 right-6">
                 <div className="px-3 py-1.5 rounded-md bg-[#FF6600] text-white shadow-xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Elite Standard</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:ml-6"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-[#FF6600]" />
                  <span className="text-[11px] lg:text-[12px] font-black capitalize tracking-[0.4em] text-[#FF6600]">Strategic Partner</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-display font-bold tracking-tight uppercase leading-[1.1] text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                   Powering <span className="text-[#FF6600]">Retail Dominance.</span>
                </h3>

                <p className="text-sm lg:text-base font-semibold capitalize tracking-wider leading-relaxed text-slate-500">
                  weultrasolution provides eCommerce development solutions to the clients with the best software and development plans for their unique requirements. We have a dedicated team of expert consultants, developers and project managers to ensure that our customers not only receive a successful development process but also a collaborative strategic partner.
                </p>

                <div className="p-8 bg-slate-50 border-l-4 border-[#FF6600] rounded-r-md">
                   <p className="text-sm lg:text-base font-bold text-slate-900 leading-relaxed tracking-wide">
                     "We turn complex selling ideas of merchants worldwide into simple e-commerce models that make shopping a fun for customers."
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-900" />
                 <h4 className="text-xs lg:text-base font-black text-slate-900 capitalize tracking-widest">Infrastructure</h4>
              </div>
              <p className="text-sm lg:text-base font-semibold leading-relaxed text-slate-500">
                Our efforts are directed towards assisting our clients in creating a dominant web presence backed with robust software. Websites that we develop are the right blend of creativity, modern design, latest web standards, secure codes and Search Engine friendly web-pages.
              </p>
              <p className="text-sm lg:text-base font-semibold leading-relaxed text-slate-500">
                E-commerce is the latest trend for selling your products and services across the web. With the availability of online payment gateway, online integration with shipping companies like UPS etc., inventory management, online support, global reach. Therefore setting up an e-commerce website is the most convenient and most cost effective way of buying/selling products/services.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
                 <h4 className="text-xs lg:text-sm font-black text-[#FF6600] capitalize tracking-widest">Global Scale</h4>
              </div>
              <p className="text-sm lg:text-base font-semibold leading-relaxed text-slate-500">
                We provide high-quality E-commerce development services to our offshore clients in UK, USA, Australia, Sweden, Canada, Germany, France, and Europe and all over the world. E-commerce changes the trend of business and a give a magical move to the shopping. Earlier nobody can think of about e-commerce or web shopping .now trends are changing people want everything at their doorstep and e-commerce made it possible. 
              </p>
              <p className="text-sm lg:text-base font-semibold leading-relaxed text-slate-500">
                In today's environment, everyone is so busy that they want products to be delivered to them just by making a few clicks. E-commerce change the market scenario .now everything is available on the web from buying shoes to paying a bill. We provide the best services to our clients so that they can achieve maximum profit.
              </p>
            </motion.div>
          </div>

          {/* COMPACT HIGH-STATUS EXPERTISE - HIGH DENSITY UPGRADE */}
          <div className="mt-12 lg:mt-20 relative py-12 lg:py-16 px-6 lg:px-12 rounded-[2rem] bg-white border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Topographic Background Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100 opacity-10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-10">
              {/* Compact Institutional Header */}
              <div className="text-center space-y-4 max-w-3xl">
                <div className="flex flex-col items-center gap-3">
                   <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full flex items-center gap-2">
                      <Zap size={12} className="text-[#FF6600]" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FF6600]">Technical Silos</span>
                   </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-display text-slate-900 leading-widest uppercase tracking-tight">
                  Precision <span className="text-[#FF6600]">E-Commerce Engineering.</span>
                </h2>
                
                <p className="text-xs lg:text-sm font-semibold text-slate-500 italic max-w-2xl mx-auto leading-relaxed">
                   "Deploying expert development siloes architected for high-performance retail dominance."
                </p>
              </div>

              {/* High-Density Pillar Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                {expertiseList.map((item, i) => (
                  <div 
                    key={i}
                    className="group relative h-full p-6 lg:p-8 bg-white border border-slate-50 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.02)] rounded-3xl transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(255,102,0,0.08)] hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10 space-y-5 flex flex-col items-center text-center">
                       {/* Compact Index Hub */}
                       <div className="relative">
                          <span className="absolute -top-3 -left-3 text-4xl font-display font-black text-orange-50 group-hover:text-orange-100 transition-colors select-none">0{i + 1}</span>
                          <div className="relative w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-[#FF6600] group-hover:rotate-[360deg] transition-transform duration-[1500ms]">
                             <Zap size={20} />
                          </div>
                       </div>

                       <div className="space-y-2">
                          <h4 className="text-[10px] lg:text-xs font-black text-slate-400 tracking-widest capitalize">Knowledge Core</h4>
                          <span className="block text-[11px] lg:text-xs font-black capitalize tracking-widest text-slate-900 group-hover:text-orange-600 transition-colors leading-none">{item}</span>
                       </div>

                       <div className="w-6 h-0.5 bg-slate-100 group-hover:w-12 group-hover:bg-[#FF6600] transition-all duration-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INSTITUTIONAL STATUS PANEL - TYPOGRAPHY & ACCENT UPGRADE */}
          <div className="mt-24 lg:mt-40 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {bottomFeatures.map((feat, i) => (
              <div 
                key={i}
                className="relative p-8 lg:p-10 bg-white border border-slate-100 rounded-lg shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-default text-center"
              >
                {/* Active Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[8px] font-black text-orange-400 capitalize tracking-widest">Verified</span>
                </div>

                <div className="flex flex-col items-center gap-8">
                   {/* Technical Icon Hub - Saturated Background */}
                   <div className="relative">
                      <div className="absolute inset-0 bg-orange-100/40 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                      <div className="relative w-20 h-20 rounded-2xl bg-orange-100/50 border border-orange-200 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-500">
                         <feat.icon size={32} strokeWidth={1.5} />
                      </div>
                   </div>

                   {/* Labels - Increased Size & Persistent Underline */}
                   <div className="space-y-4 w-full">
                      <div className="flex items-center justify-center gap-2">
                         <div className="h-[1px] flex-1 bg-slate-100" />
                         <span className="text-[9px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase">VERIFIED CORE 0{i + 1}</span>
                         <div className="h-[1px] flex-1 bg-slate-100" />
                      </div>
                      
                      <div className="inline-block relative">
                         <h4 className="text-xs lg:text-sm font-black text-slate-900 capitalize tracking-widest leading-none group-hover:text-[#FF6600] transition-colors">
                            {feat.name}
                         </h4>
                         {/* Persistent Underline Shadow Accent */}
                         <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-orange-100 rounded-full group-hover:w-full group-hover:bg-[#FF6600] transition-all duration-500" />
                      </div>

                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2">
                         System Ready
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


    </div>
  );
}
