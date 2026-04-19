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
         className="relative pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border-t border-slate-200/80"
      >
         {/* ELITE ARCHITECTURAL OVERLAYS */}
         <div className="absolute inset-0 bg-[#f8fafc]/30" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none" />
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />

         <div className="relative z-10 w-full px-4 sm:px-10 md:px-16 lg:px-20 max-w-[1700px] mx-auto space-y-12 sm:space-y-16">

            {/* INSTITUTIONAL IDENTITY STRIP */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 sm:gap-12 pb-10 sm:pb-12 border-b border-slate-200/60 text-center xl:text-left">
               <div className="space-y-4 w-full sm:w-auto flex flex-col items-center xl:items-start">
                  <div className="space-y-1 sm:space-y-2">
                     <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 tracking-wider capitalize whitespace-pre-wrap sm:whitespace-nowrap">
                        Digicorn Webultrasolution <span className="text-[#f97316]">Pvt Ltd.</span>
                     </h2>
                     <p className="text-[9px] sm:text-[10px] font-black text-[#f97316] capitalize tracking-[0.3em] sm:tracking-[0.4em] flex items-center justify-center xl:justify-start gap-2 sm:gap-3">
                        <span className="w-4 sm:w-6 h-[1px] bg-[#f97316]/30" />
                        Enterprise Digital Infrastructure
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8 w-full xl:w-auto justify-items-center xl:justify-items-start">
                  {companyDetails.map((detail, i) => (
                     <div key={i} className="flex flex-col items-center xl:items-start gap-1.5 sm:gap-2.5 group cursor-help">
                        <div className="flex items-center gap-2">
                           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                              <detail.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                           </div>
                           <span className="text-[9px] lg:text-sm font-black text-slate-400 capitalize tracking-[0.1em] sm:tracking-[0.2em]">{detail.label}</span>
                        </div>
                        <div className="text-[11px] sm:text-xs font-bold text-slate-600 font-mono tracking-wide group-hover:text-slate-900 transition-colors pl-0.5 break-all sm:break-normal">
                           {detail.value}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* CORE OPERATIONAL HUB */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24">

               {/* BRAND ARCHITECTURE */}
               <div className="md:col-span-full lg:col-span-4 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="space-y-8 flex flex-col items-center lg:items-start">
                     <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f97316]/5 border border-[#f97316]/10">
                        <Cpu size={14} className="text-[#f97316]" />
                        <span className="text-[10px] font-black text-[#f97316] capitalize tracking-[0.25em]">NextGen Architecture</span>
                     </div>
                     <p className="text-slate-500 text-sm sm:text-base md:text-base font-medium leading-relaxed max-w-md">
                        Engineering digital legacies through <span className="text-slate-900 font-black  underline decoration-[#f97316]/40 decoration-4 underline-offset-4">technical precision</span> and architectural excellence.
                     </p>
                  </div>

                  <div className="space-y-5 flex flex-col items-center lg:items-start">
                     <h4 className="text-[10px] text-slate-900 capitalize tracking-widest">Institutional Network</h4>
                     <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                        {socialIcons.map((social, i) => (
                           <a
                              key={i}
                              href={social.href}
                              aria-label={social.label}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 border border-slate-200 hover:border-[#f97316] hover:text-[#f97316] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 group"
                           >
                              <social.icon className="w-4 h-4 sm:w-[19px] sm:h-[19px] group-hover:scale-110 transition-transform" />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* MULTI-NODE NAVIGATION HUB */}
               <div className="md:col-span-full lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
                  {/* ECOSYSTEM */}
                  <div className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                     <h4 className="text-[11px] lg:text-sm text-slate-900 capitalize tracking-widest flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#f97316] ring-4 ring-[#f97316]/10" />
                        Ecosystem
                     </h4>
                     <ul className="space-y-4 flex flex-col items-center lg:items-start">
                        {[
                           { name: 'Agency Home', href: '/' },
                           { name: 'Elite Services', href: '/#services' },
                           { name: 'Project Registry', href: '/portfolio' },
                           { name: 'Global Network', href: '/#about' },
                           { name: 'Connect Desk', href: '/contact' }
                        ].map((link, i) => (
                           <li key={i}>
                              <a href={link.href} className="group flex items-center gap-4 text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-all">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] scale-0 group-hover:scale-100 transition-transform duration-300" />
                                 <span className="group-hover:translate-x-1 transition-transform capitalize tracking-tighter">{link.name}</span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* SOLUTIONS */}
                  <div className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                     <h4 className="text-[11px] lg:text-sm text-slate-900 capitalize tracking-widest flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                        Solutions
                     </h4>
                     <ul className="space-y-4 flex flex-col items-center lg:items-start">
                        {[
                           { name: 'Tender Mgmt', href: '/tender-management' },
                           { name: 'ERP Software', href: '/erp-software' },
                           { name: 'School ERP', href: '/school-college-erp' },
                           { name: 'HR Payroll', href: '/hr-payroll' },
                           { name: 'OMR Solution', href: '/omr-solution' },
                           { name: 'CRM System', href: '/crm' },
                           { name: 'GST Software', href: '/gst-software' }
                        ].map((link, i) => (
                           <li key={i}>
                              <a href={link.href} className="group flex items-center gap-4 text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-all">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] scale-0 group-hover:scale-100 transition-transform duration-300" />
                                 <span className="group-hover:translate-x-1 transition-transform capitalize tracking-tighter">{link.name}</span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* ACCESS */}
                  <div className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                     <h4 className="text-[11px] lg:text-sm text-slate-900 capitalize tracking-widest flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        Access
                     </h4>
                     <div className="space-y-6 sm:space-y-9 flex flex-col items-center lg:items-start">
                        <div className="group cursor-pointer flex flex-col items-center lg:items-start">
                           <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                              <Phone className="w-3 h-3 text-[#f97316]" />
                              <span className="text-[10px] lg:text-[13px] font-black text-slate-400 capitalize tracking-widest">Global Line</span>
                           </div>
                           <span className="text-[13px] lg:text-[13px] font-semibold text-slate-500 group-hover:text-[#f97316] transition-colors tracking-tighter ">
                              +91-87978 06959
                           </span>
                        </div>
                        <div className="group cursor-pointer flex flex-col items-center lg:items-start">
                           <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                              <Mail className="w-3 h-3 text-[#f97316]" />
                              <span className="text-[10px] lg:text-[13px] font-black text-slate-400 capitalize tracking-widest">Institutional Mail</span>
                           </div>
                           <span className="text-[13px] sm:text-[14px] text-slate-500 font-semibold group-hover:text-[#f97316] transition-colors break-all leading-tight tracking-tight">
                              webultrasolution@gmail.com
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* PRECISION BASE */}
            <div className="pt-4 sm:pt-10 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
               <div className="flex flex-wrap flex-col sm:flex-row md:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-[10px] font-black text-slate-400 capitalize tracking-wide sm:tracking-widest order-2 md:order-1">
                  <div className="flex items-center gap-2 bg-emerald-50 px-2 sm:px-2.5 py-1 rounded-full border border-emerald-100">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[9px] sm:text-[10px] text-emerald-600">System Live</span>
                  </div>
                  <div className="hidden sm:block h-4 w-[1px] bg-slate-200" />
                  <span className="leading-relaxed">© {new Date().getFullYear()} WebUltra Solution.</span>
               </div>

               <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-8 order-1 md:order-2">
                  <div className="flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-1.5 sm:py-2 bg-slate-50 rounded-full border border-slate-100 group hover:border-[#f97316]/30 transition-all shadow-sm">
                     <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f97316] text-[#f97316] group-hover:scale-125 transition-transform" />
                     <span className="text-[9px] sm:text-[10px] font-black text-slate-600 capitalize tracking-widest">Built for the future</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[10px] font-black text-slate-400 capitalize tracking-[0.15em] sm:tracking-widest ">
                     <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f97316]/40" />
                     <span>Global Architecture</span>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   );
}
