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
         className="relative pt-20 pb-10 overflow-hidden bg-white border-t border-slate-200/80"
      >
         {/* ELITE ARCHITECTURAL OVERLAYS */}
         <div className="absolute inset-0 bg-[#f8fafc]/30" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none" />
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />

         <div className="relative z-10 w-full px-6 lg:px-20 max-w-[1700px] mx-auto space-y-16">

            {/* INSTITUTIONAL IDENTITY STRIP */}
            <div className="flex flex-col xl:flex-row items-start justify-between gap-12 pb-12 border-b border-slate-200/60">
               <div className="space-y-4">
                  <div className="space-y-1">
                     <h2 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight uppercase whitespace-nowrap">
                        Digicorn Webultrasolution <span className="text-[#f97316]">Pvt Ltd.</span>
                     </h2>
                     <p className="text-[10px] font-black text-[#f97316] uppercase tracking-[0.4em] flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-[#f97316]/30" />
                        Enterprise Digital Infrastructure
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 w-full xl:w-auto">
                  {companyDetails.map((detail, i) => (
                     <div key={i} className="flex flex-col gap-2.5 group cursor-help">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                              <detail.icon size={14} />
                           </div>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{detail.label}</span>
                        </div>
                        <div className="text-[13px] font-bold text-slate-600 font-mono tracking-tight group-hover:text-slate-900 transition-colors pl-0.5">
                           {detail.value}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* CORE OPERATIONAL HUB */}
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

               {/* BRAND ARCHITECTURE */}
               <div className="lg:col-span-4 space-y-10">
                  <div className="space-y-8">
                     <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f97316]/5 border border-[#f97316]/10">
                        <Cpu size={14} className="text-[#f97316]" />
                        <span className="text-[10px] font-black text-[#f97316] uppercase tracking-[0.25em]">NextGen Architecture</span>
                     </div>
                     <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                        Engineering digital legacies through <span className="text-slate-900 font-black italic underline decoration-[#f97316]/40 decoration-4 underline-offset-4">technical precision</span> and architectural excellence.
                     </p>
                  </div>

                  <div className="space-y-5">
                     <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Institutional Network</h4>
                     <div className="flex gap-4">
                        {socialIcons.map((social, i) => (
                           <a
                              key={i}
                              href={social.href}
                              aria-label={social.label}
                              className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 border border-slate-200 hover:border-[#f97316] hover:text-[#f97316] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 group"
                           >
                              <social.icon size={19} className="group-hover:scale-110 transition-transform" />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* MULTI-NODE NAVIGATION */}
               <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                  <div className="space-y-8">
                     <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#f97316] ring-4 ring-[#f97316]/10" />
                        Ecosystem
                     </h4>
                     <ul className="space-y-4">
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
                                 <span className="group-hover:translate-x-1 transition-transform uppercase tracking-tighter">{link.name}</span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                        Solutions
                     </h4>
                     <ul className="space-y-4">
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
                                 <span className="group-hover:translate-x-1 transition-transform uppercase tracking-tighter">{link.name}</span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        Access
                     </h4>
                     <div className="space-y-9">
                        <div className="group cursor-pointer">
                           <div className="flex items-center gap-2.5 mb-2.5">
                              <Phone size={12} className="text-[#f97316]" />
                              <span className="text-[10px] font-black font-bold text-slate-400 uppercase tracking-[0.2em]">Global Line</span>
                           </div>
                           <span className="text-[14px] font-black text-slate-900 group-hover:text-[#f97316] transition-colors tracking-tighter italic">
                              +91-87978 06959
                           </span>
                        </div>
                        <div className="group cursor-pointer">
                           <div className="flex items-center gap-2.5 mb-2.5">
                              <Mail size={12} className="text-[#f97316]" />
                              <span className="text-[10px] font-black font-bold text-slate-400 uppercase tracking-[0.2em]">Institutional Mail</span>
                           </div>
                           <span className="text-[14px] font-black text-slate-900 group-hover:text-[#f97316] transition-colors break-all leading-tight  tracking-tight">
                              webultrasolution@gmail.com
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* PRECISION BASE */}
            <div className="pt-10 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] order-2 md:order-1">
                  <div className="flex items-center gap-2.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-emerald-600">System Live</span>
                  </div>
                  <div className="h-4 w-[1px] bg-slate-200" />
                  <span>© {new Date().getFullYear()} WebUltra Solution.</span>
               </div>

               <div className="flex items-center gap-8 order-1 md:order-2">
                  <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 group hover:border-[#f97316]/30 transition-all shadow-sm">
                     <Heart size={14} className="fill-[#f97316] text-[#f97316] group-hover:scale-125 transition-transform" />
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Built for the future</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
                     <Globe size={14} className="text-[#f97316]/40" />
                     <span>Global Architecture</span>
                  </div>
               </div>
            </div>

         </div>
      </footer>
   );
}
