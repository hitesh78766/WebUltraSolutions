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
         className="relative bg-gradient-to-b from-orange-50/60 via-white to-orange-50/20 pt-12 pb-6 border-t border-orange-100 overflow-hidden"
      >
         {/* Subtle top border highlight & background texture */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.02] pointer-events-none" />

         <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

            {/* Top row: Logo & Description & Socials */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70">
               <div className="flex flex-col items-center md:items-start gap-3">
                  <img src="/images/webUltraSolution-logo.png" alt="WebUltra Solution Logo" className="h-10 sm:h-12 w-auto object-contain" />
                  <p className="text-[13px] text-slate-600 font-bold max-w-sm text-center md:text-left capitalize leading-relaxed">
                     Engineering digital legacies through technical precision and architectural excellence.
                  </p>
               </div>

               <div className="flex flex-col items-center md:items-end gap-3">
                  <span className="text-[10px] font-black text-slate-500 capitalize tracking-widest">Global Network</span>
                  <div className="flex items-center gap-2.5">
                     {socialIcons.map((social, i) => (
                        <a
                           key={i}
                           href={social.href}
                           aria-label={social.label}
                           className="w-9 h-9 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-[#f97316] hover:border-[#f97316] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                           <social.icon className="w-4 h-4" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Middle row: Links & Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">

               {/* Column 1: Ecosystem */}
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
                  <h4 className="text-[13px] font-black text-slate-900 capitalize tracking-wider flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                     Ecosystem
                  </h4>
                  <ul className="flex flex-col items-center sm:items-start gap-4">
                     {[
                        { name: 'Agency Home', href: '/' },
                        { name: 'Elite Services', href: '/#services' },
                        { name: 'Project Registry', href: '/portfolio' },
                        { name: 'Global Network', href: '/#about' },
                        { name: 'Connect Desk', href: '/contact' }
                     ].map((link, i) => (
                        <li key={i}>
                           <a href={link.href} className="text-[11px] font-black capitalize tracking-widest text-slate-600 hover:text-[#f97316] transition-colors relative group">
                              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Column 2: Solutions */}
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
                  <h4 className="text-[13px] font-black text-slate-900 capitalize tracking-wider flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                     Solutions
                  </h4>
                  <ul className="flex flex-col items-center sm:items-start gap-4">
                     {[
                        { name: 'Tender Mgmt', href: '/tender-management' },
                        { name: 'ERP Software', href: '/erp-software' },
                        { name: 'School ERP', href: '/school-college-erp' },
                        { name: 'HR Payroll', href: '/hr-payroll' },
                        { name: 'OMR Solution', href: '/omr-solution' },
                        { name: 'CRM System', href: '/crm' }
                     ].map((link, i) => (
                        <li key={i}>
                           <a href={link.href} className="text-[11px] font-black capitalize tracking-widest text-slate-600 hover:text-[#f97316] transition-colors relative group">
                              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Column 3: Contact Access */}
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
                  <h4 className="text-[13px] font-black text-slate-900 capitalize tracking-wider flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                     Access
                  </h4>
                  <div className="flex flex-col gap-5">
                     <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                        <span className="text-[10px] font-black text-slate-500 capitalize tracking-wider mb-1.5">Global Line</span>
                        <a href="tel:+918797806959" className="flex items-center gap-2.5 text-[12px] font-black tracking-widest text-slate-700 group-hover:text-[#f97316] transition-colors">
                           <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center">
                              <Phone className="w-3 h-3 text-[#f97316]" />
                           </div>
                           +91-87978 06959
                        </a>
                     </div>
                     <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                        <span className="text-[10px] font-black text-slate-500 capitalize tracking-wider mb-1.5">Institutional Mail</span>
                        <a href="mailto:webultrasolution@gmail.com" className="flex items-center gap-2.5 text-[12px] font-black tracking-wider capitalize text-slate-700 group-hover:text-[#f97316] transition-colors break-all">
                           <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center shrink-0">
                              <Mail className="w-3 h-3 text-[#f97316]" />
                           </div>
                           webultrasolution@gmail.com
                        </a>
                     </div>
                  </div>
               </div>

               {/* Column 4: Certifications */}
               <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
                  <h4 className="text-[13px] font-black text-slate-900 capitalize tracking-wider flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                     Legal & Certs
                  </h4>
                  <div className="flex flex-col gap-3 w-full max-w-[220px]">
                     {companyDetails.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white border border-slate-200 group hover:border-[#f97316]/40 hover:bg-orange-50/30 transition-all shadow-sm">
                           <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors shrink-0">
                              <detail.icon className="w-4 h-4" />
                           </div>
                           <div className="flex flex-col items-start overflow-hidden">
                              <span className="text-[9px] font-black text-slate-500 capitalize tracking-wider leading-none mb-1">{detail.label}</span>
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 leading-none truncate w-full" title={detail.value}>{detail.value}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

            {/* Bottom row: Copyright & Tags */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 text-[12px] capitalize tracking-widest font-bold text-slate-600">
                  <div className="flex items-center gap-2 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[10px] font-black text-emerald-700 capitalize tracking-widest">System Live</span>
                  </div>
                  <span className="font-black">© {new Date().getFullYear()} WebUltra Solution.</span>
               </div>

               <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 capitalize tracking-widest">
                  <span>Built With</span>
                  <Heart className="w-3.5 h-3.5 text-[#f97316] fill-[#f97316]" />
                  <span>For The Future</span>
               </div>
            </div>

         </div>
      </footer>
   );
}
