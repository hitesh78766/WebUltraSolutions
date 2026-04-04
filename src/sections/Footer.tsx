import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  CreditCard
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

  // Removed animations to ensure maximum visibility in multi-route architecture
  return (
    <footer
      ref={containerRef}
      className="relative pt-16 pb-8 overflow-hidden bg-slate-900 border-t border-slate-800"
    >
      {/* ELITE TEXTURED BACKGROUND */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full space-y-12">
        
        {/* MINIMAL CORPORATE BRANDING (SIMPLIFIED) */}
        <div className="animate-up flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
           <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl lg:text-2xl font-display font-black text-white/90 leading-tight tracking-tight px-1">
                 Digicorn Webultrasolution <span className="text-indigo-500">Pvt Ltd.</span>
              </h2>
           </div>

           <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4">
              {companyDetails.map((detail, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                   <div className="text-[8px] font-black text-indigo-500/80 uppercase tracking-[0.2em]">{detail.label}</div>
                   <div className="text-[10px] font-bold text-white/50 group-hover:text-white/80 transition-colors uppercase tabular-nums">{detail.value}</div>
                </div>
              ))}
           </div>
        </div>

        {/* COMPACT NAVIGATION GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
           
           {/* BRAND COL */}
           <div className="animate-up lg:col-span-4 space-y-6">
              <div className="flex items-center">
                 <img 
                   src="/images/webUltraSolution-logo.png" 
                   alt="WebUltra Solution Logo" 
                   className="h-8 lg:h-9 w-auto object-contain brightness-150 grayscale-0 invert-0" 
                 />
              </div>
              <p className="text-white/40 text-[11px] lg:text-xs font-medium max-w-sm leading-relaxed">
                 Engineering the next frontier of enterprise web architecture. Delivering high-performance digital legacy across the globe.
              </p>
              <div className="flex gap-3">
                 {socialIcons.map((social, i) => (
                   <a key={i} href={social.href} className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 border border-white/5 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all active:scale-90">
                     <social.icon size={16} />
                   </a>
                 ))}
              </div>
           </div>

           {/* LINKS COLS */}
           <div className="animate-up lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                 <span className="block text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Navigation</span>
                 <ul className="space-y-4">
                    {['Home', 'Services', 'About', 'Insights', 'FAQ'].map((link, i) => (
                      <li key={i}>
                        <a href={`#${link.toLowerCase()}`} className="text-xs font-black text-white/60 hover:text-indigo-400 transition-colors tracking-tight">
                          {link}
                        </a>
                      </li>
                    ))}
                 </ul>
              </div>
              <div>
                 <span className="block text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Specialties</span>
                 <ul className="space-y-4">
                    {['Web Architecture', 'Elastic Scaling', 'UI Systems', 'Mobile Core'].map((link, i) => (
                      <li key={i}>
                        <span className="text-xs font-black text-white/60 hover:text-indigo-400 transition-colors tracking-tight cursor-pointer">
                          {link}
                        </span>
                      </li>
                    ))}
                 </ul>
              </div>
              <div>
                 <span className="block text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Contact</span>
                 <div className="space-y-5">
                    <div className="group cursor-pointer">
                       <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Direct Line</span>
                       <span className="text-xs font-black text-white group-hover:text-indigo-400 transition-colors">+91 87978 06959</span>
                    </div>
                    <div className="group cursor-pointer">
                       <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Global Mail</span>
                       <span className="text-xs font-black text-white group-hover:text-indigo-400 transition-colors">webultrasolution@gmail.com</span>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="animate-up pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">
              © {new Date().getFullYear()} WebUltra Solution. All rights reserved.
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 text-white/40 rounded-full border border-white/10 transition-all hover:bg-white/10">
                 <span className="text-[8px] font-black uppercase tracking-widest">Digital Legacy Built With</span>
                 <Heart size={10} className="fill-indigo-500 text-indigo-500" />
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
}
