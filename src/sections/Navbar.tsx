import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  isMega?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Project', href: '/#portfolio' },
  { name: 'Career', href: '/#insights' },
  { name: 'Contact Us', href: '/#cta' },
];

/*
const megaMenuData = [
  {
    category: "FRONT END",
    icon: Monitor,
    links: [
      { name: "Web Design", href: "/web-design" },
      { name: "Responsive + Mobile Websites", href: "#services" },
      { name: "Graphic Design", href: "#services" },
      { name: "Logo Design", href: "#services" },
      { name: "Custom Web Design", href: "#services" }
    ]
  },
  {
    category: "WEB & APP DEVELOPMENT",
    icon: Cpu,
    links: [
      { name: "Web Development", href: "#services" },
      { name: "PHP Development", href: "#services" },
      { name: "Ecommerce Development", href: "#services" },
      { name: "WordPress Development", href: "#services" },
      { name: "Joomla Development", href: "#services" },
      { name: "Interspire Development", href: "#services" },
      { name: "App Development", href: "#services" },
      { name: "Software Development", href: "#services" },
      { name: "Android App Development", href: "#services" }
    ]
  }
];
*/

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Entrance animation
    gsap.fromTo(nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power4.out' }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setIsServicesOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMega?: boolean) => {
    if (isMega) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (href.startsWith('/')) {
      // It's a proper route or a hash link with route
      if (href.includes('#')) {
        const [path, hash] = href.split('#');
        if (location.pathname !== path) {
           navigate(path);
           // Delay to allow page to load then scroll
           setTimeout(() => {
             const target = document.getElementById(hash);
             if (target) {
               if ((window as any).lenis) (window as any).lenis.scrollTo(target);
               else target.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
        } else {
           const target = document.getElementById(hash);
           if (target) {
             if ((window as any).lenis) (window as any).lenis.scrollTo(target);
             else target.scrollIntoView({ behavior: 'smooth' });
           }
        }
      } else {
        navigate(href);
      }
    } else {
      // It's just a hash
      const target = document.querySelector(href);
      if (target) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="relative w-full pointer-events-auto">
          <div
            className={`w-full px-8 lg:px-16 py-3.5 transition-all duration-500 flex items-center justify-between ${isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-premium border-b border-slate-200/80'
              : 'bg-white/40 backdrop-blur-lg border-b border-white/10'
              }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group active:scale-95 transition-transform"
            >
              <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-[#5e6ad2] shadow-lg group-hover:rotate-12 transition-all">
                <span className="text-white font-display font-bold text-base">W</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 uppercase" style={{ color: '#0f172a' }}>
                WebUltra<span className="text-[#5e6ad2]">.</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                  <button
                    onClick={(e) => handleNavClick(e as any, link.href, link.isMega)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm font-black transition-all duration-300 rounded-lg hover:text-[#5e6ad2] ${isScrolled ? 'text-slate-800' : 'text-slate-700'
                      } ${isServicesOpen && link.isMega ? 'text-[#5e6ad2]' : ''}`}
                  >
                    {link.name}
                    {link.isMega && <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-black rounded-lg shadow-lg hover:bg-[#5e6ad2] transition-all duration-300"
              >
                Schedule Meeting
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Backdrop Overlay - Disabled for now
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[76px] bg-black/5 z-30 pointer-events-auto"
                onClick={() => setIsServicesOpen(false)}
              />
            )}
          </AnimatePresence>
          */}

          {/* BHOOMI Style Mega Menu - Dual-Column Ultra-Compact Edition - Disabled for now
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, x: "-50%", y: -10, scale: 0.99 }}
                animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
                exit={{ opacity: 0, x: "-50%", y: -10, scale: 0.99 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ left: '50%' }}
                className="absolute top-[72px] w-[820px] max-w-[95vw] bg-white border border-slate-100 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)] z-40 overflow-hidden pointer-events-auto p-6 lg:p-7"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="grid grid-cols-2 gap-8 relative">
                  {megaMenuData.map((section, idx) => (
                    <div key={idx} className="relative group/column flex">
                      <div className="flex-1 space-y-2 px-4">
                        <div className="flex items-center gap-2 pb-1 mb-0 transition-all duration-300">
                           <div className="flex items-center justify-center text-[#5e6ad2] transition-transform duration-500 group-hover/column:rotate-6 group-hover/column:scale-110">
                             <section.icon size={16} />
                           </div>
                           <h4 className="text-[13px] font-black text-slate-900 tracking-tight uppercase">
                             {section.category}
                           </h4>
                        </div>
                        <ul className="grid grid-cols-1 gap-y-2">
                          {section.links.map((sublink, sIdx) => (
                            <li key={sIdx} className="group/item list-none">
                              <a
                                href={typeof sublink === 'string' ? '#services' : sublink.href}
                                onClick={(e) => handleNavClick(e as any, typeof sublink === 'string' ? '#services' : sublink.href)}
                                className="text-[13px] font-semibold text-slate-500 hover:text-[#5e6ad2] transition-colors flex items-center justify-between group-hover/item:translate-x-1 transition-transform"
                              >
                                <span>{typeof sublink === 'string' ? sublink : sublink.name}</span>
                                <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#5e6ad2]" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {idx < 1 && (
                        <div className="w-[1px] h-full bg-slate-50 self-stretch" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-white/80 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative h-full flex flex-col items-center justify-center gap-8 py-20 px-6" style={{ pointerEvents: 'auto' }}>
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavClick(e as any, link.href)}
                    className="text-3xl font-display font-medium text-slate-800 hover:text-[#5e6ad2]"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                className="mt-4 px-10 py-4 bg-[#5e6ad2] text-white text-lg font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
