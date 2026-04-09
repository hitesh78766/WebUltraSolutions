import { useRef } from 'react';
import {
   Facebook,
   Twitter,
   Instagram,
   Linkedin,
   Github,
   Heart,
   ShieldCheck,
   Building2,
   FileText,
   CreditCard,
   ArrowRight,
   Globe,
   Mail,
   Phone,
   Cpu
} from 'lucide-react';

const companyDetails = [
   { label: 'GST', value: '09AAJCD4576A1Z5', icon: ShieldCheck },
   { label: 'ISO', value: '9001:2015 CERT', icon: Building2 },
   { label: 'CIN', value: 'U72900UP2024PTC188542', icon: FileText },
   { label: 'PAN', value: 'AAJCD4576A', icon: CreditCard },
];

const socialIcons = [
   { icon: Facebook, href: '#', label: 'Facebook' },
   { icon: Twitter, href: '#', label: 'Twitter' },
   { icon: Instagram, href: '#', label: 'Instagram' },
   { icon: Linkedin, href: '#', label: 'LinkedIn' },
   { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
   const containerRef = useRef<HTMLElement>(null);

   return (
      <footer
         ref={containerRef}
         className="relative pt-16 pb-8 overflow-hidden bg-[hsl(var(--background))] border-t border-slate-200/80"
      >
         {/* ELITE ARCHITECTURAL OVERLAYS */}
         <div className="absolute inset-0 bg-[#f8fafc]/50" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.02] pointer-events-none" />
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/20 to-transparent" />

         <div className="relative z-10 w-full px-6 lg:px-20 max-w-[1600px] mx-auto space-y-12">

            {/* INSTITUTIONAL IDENTITY STRIP */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200/50">
               <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="relative group">
                     <div className="absolute -inset-4 bg-[#f97316]/5 rounded-full blur-2xl group-hover:bg-[#f97316]/10 transition-colors duration-700" />
                     <img
                        src="/images/webUltraSolution-logo.png"
                        alt="WebUltra Solution Logo"
                        className="h-10 w-auto object-contain relative transition-all duration-500 hover:scale-105"
                     />
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
                  <div className="space-y-0.5">
                     <h2 className="text-xl font-display font-bold text-slate-900 tracking-tight">
                        Digicorn Webultrasolution <span className="text-[#f97316]">Pvt Ltd.</span>
                     </h2>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Enterprise Digital Infrastructure</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-5 w-full xl:w-auto">
                  {companyDetails.map((detail, i) => (
                     <div key={i} className="flex flex-col gap-1.5 group cursor-help">
                        <div className="flex items-center gap-1.5">
                           <detail.icon size={11} className="text-[#f97316] opacity-70" />
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{detail.label}</span>
                        </div>
                        <div className="text-[12px] font-medium text-slate-600 font-mono tracking-tight group-hover:text-slate-900 transition-colors">
                           {detail.value}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* CORE OPERATIONAL HUB */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

               {/* BRAND ARCHITECTURE */}
               <div className="lg:col-span-4 space-y-9">
                  <div className="space-y-7">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/5 border border-[#f97316]/10">
                        <Cpu size={12} className="text-[#f97316]" />
                        <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-[0.2em]">NextGen Architecture</span>
                     </div>
                     <p className="text-slate-500 text-base font-normal leading-relaxed max-w-sm">
                        Engineering digital legacies through <span className="text-slate-900 font-semibold italic underline decoration-[#f97316]/30 decoration-2 underline-offset-4">technical precision</span> and architectural excellence.
                     </p>
                  </div>

                  <div className="space-y-4 text-center lg:text-left">
                     <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">Institutional Network</h4>
                     <div className="flex justify-center lg:justify-start gap-3.5">
                        {socialIcons.map((social, i) => (
                           <a
                              key={i}
                              href={social.href}
                              aria-label={social.label}
                              className="w-11 h-11 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-200 hover:border-[#f97316] hover:text-[#f97316] transition-all duration-300 shadow-sm hover:shadow-orange-500/10 hover:-translate-y-1"
                           >
                              <social.icon size={17} />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* MULTI-NODE NAVIGATION */}
               <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="space-y-7">
                     <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.4em] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                        Ecosystem
                     </h4>
                     <ul className="space-y-3.5">
                        {['Home', 'Services', 'About', 'Insights', 'FAQ'].map((link, i) => (
                           <li key={i}>
                              <a href={`#${link.toLowerCase()}`} className="group flex items-center gap-3 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-all">
                                 <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#f97316]" />
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="space-y-7">
                     <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.4em] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]/40" />
                        Focus
                     </h4>
                     <ul className="space-y-3.5">
                        {['Web Architecture', 'Elastic Scaling', 'UI Systems', 'Mobile Core'].map((link, i) => (
                           <li key={i}>
                              <span className="group flex items-center gap-3 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-all cursor-pointer">
                                 <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#f97316]" />
                                 {link}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="space-y-7">
                     <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.4em] flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        Access
                     </h4>
                     <div className="space-y-7">
                        <div className="group cursor-pointer">
                           <div className="flex items-center gap-2 mb-1.5">
                              <Phone size={11} className="text-[#f97316]" />
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Line</span>
                           </div>
                           <span className="text-sm font-bold text-slate-900 group-hover:text-[#f97316] transition-colors tracking-tight">+91-87978 06959</span>
                        </div>
                        <div className="group cursor-pointer">
                           <div className="flex items-center gap-2 mb-1.5">
                              <Mail size={11} className="text-[#f97316]" />
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institutional Mail</span>
                           </div>
                           <span className="text-[15px] font-bold text-slate-900 group-hover:text-[#f97316] transition-colors break-all leading-tight">webultrasolution@gmail.com</span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* PRECISION BASE */}
            <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] order-2 md:order-1">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span>System Live</span>
                  </div>
                  <div className="h-3 w-[1px] bg-slate-200" />
                  <span>© {new Date().getFullYear()} WebUltra Solution.</span>
               </div>

               <div className="flex items-center gap-6 order-1 md:order-2">
                  <div className="flex items-center gap-3 px-4 py-1.5 bg-white rounded-full border border-slate-200 group hover:border-[#f97316]/30 transition-all shadow-sm">
                     <Heart size={12} className="fill-[#f97316] text-[#f97316] group-hover:scale-125 transition-transform" />
                     <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Built for the future</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     <Globe size={12} className="text-slate-300" />
                     <span>Global Architecture</span>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   );
}
