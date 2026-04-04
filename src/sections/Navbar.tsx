import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Monitor, Cpu, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  isMega?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' /*, isMega: true */ },
  { name: 'Services', href: '#services', isMega: true },
  { name: 'Our Project', href: '/#portfolio' },
  { name: 'Career', href: '/#insights' },
  { name: 'Contact Us', href: '/contact' },
];

const megaMenuData = [
  {
    category: "FRONT END",
    icon: Monitor,
    links: [
      { name: "Web Design", icon: Monitor, href: "/web-design" },
      { name: "Responsive + Mobile Websites", icon: Monitor, href: "/responsive-design" },
      { name: "Graphic Design", icon: Target, href: "/graphic-design" },
      { name: "Logo Design", icon: Target, href: "/logo-design" }
    ]
  },
  {
    category: "WEB & APP DEVELOPMENT",
    icon: Cpu,
    links: [
      { name: "Web Development", icon: Cpu, href: "/web-development" },
      { name: "PHP Development", icon: Cpu, href: "/php-development" },
      { name: "Ecommerce Development", icon: Target, href: "/ecommerce-development" },
      { name: "WordPress Development", icon: Cpu, href: "/wordpress-development" },
      { name: "App Development", icon: Cpu, href: "/app-development" },
      { name: "Software Development", icon: Cpu, href: "/software-development" },
      { name: "Android App Development", icon: Monitor, href: "/android-app-development" }
    ]
  }
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
      if (window.scrollY > 50) {
        setIsServicesOpen(false);
        setIsAboutOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMega?: boolean) => {
    if (isMega) {
      e.preventDefault();
      if (href === '#about') {
        setIsAboutOpen(!isAboutOpen);
        setIsServicesOpen(false);
      } else {
        setIsServicesOpen(!isServicesOpen);
        setIsAboutOpen(false);
      }
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
            className={`w-full px-8 lg:px-16 py-3 transition-all duration-700 flex items-center justify-between border-b ${isScrolled
              ? 'bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(79,70,229,0.06)] border-indigo-100/50'
              : 'bg-gradient-to-r from-white/60 via-indigo-50/30 to-blue-50/40 backdrop-blur-xl border-white/20'
              }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center group active:scale-95 transition-transform"
            >
              <img
                src="/images/webUltraSolution-logo.png"
                alt="WebUltra Solution Logo"
                className="h-10 lg:h-14 w-auto object-contain brightness-110 contrast-110 p-1 transition-all group-hover:scale-105"
              />
            </a>

            <div className="hidden md:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                  <button
                    onClick={(e) => handleNavClick(e as any, link.href, link.isMega)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm font-black transition-all duration-300 rounded-lg hover:text-[#5e6ad2] ${isScrolled ? 'text-slate-800' : 'text-slate-700'
                      } ${(isServicesOpen && link.isMega && link.name === 'Services') || (isAboutOpen && link.isMega && link.name === 'About') ? 'text-[#5e6ad2]' : ''}`}
                  >
                    {link.name}
                    {link.isMega && <ChevronDown size={14} className={`transition-transform duration-300 ${(isServicesOpen && link.name === 'Services') || (isAboutOpen && link.name === 'About') ? 'rotate-180' : ''}`} />}
                  </button>
                  {link.isMega && (link.name === 'Services' || link.name === 'About') && (
                    <AnimatePresence>
                      {((isServicesOpen && link.name === 'Services') || (isAboutOpen && link.name === 'About')) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.98 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-[52px] left-1/2 -translate-x-1/2 ${link.name === 'Services' ? 'w-[640px]' : 'w-[440px]'} max-w-[95vw] bg-white border border-slate-100 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)] z-[100] rounded-3xl overflow-hidden pointer-events-auto p-4 lg:p-4`}
                          onMouseLeave={() => {
                            setIsServicesOpen(false);
                            setIsAboutOpen(false);
                          }}
                        >
                          {link.name === 'Services' ? (
                            <div className="grid grid-cols-2 gap-4 relative">
                              {megaMenuData.map((section, idx) => (
                                <div key={idx} className="relative group/column p-4 rounded-2xl transition-colors hover:bg-slate-50/50">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-xl bg-indigo-50/50 flex items-center justify-center text-[#5e6ad2] shadow-sm transform group-hover/column:rotate-6 transition-transform">
                                      <section.icon size={16} />
                                    </div>
                                    <h4 className="text-[11px] font-black text-slate-800 tracking-[0.2em] uppercase leading-none">
                                      {section.category}
                                    </h4>
                                  </div>
                                  <ul className="space-y-2.5">
                                    {section.links.map((sublink, sIdx) => (
                                      <li key={sIdx} className="group/item list-none">
                                        <a
                                          href={typeof sublink === 'string' ? '#services' : sublink.href}
                                          onClick={(e) => handleNavClick(e as any, typeof sublink === 'string' ? '#services' : sublink.href)}
                                          className="flex items-center gap-3 group-hover/item:translate-x-1 transition-transform"
                                        >
                                          <div className="w-7 h-7 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 group-hover/item:scale-105 transition-transform flex-shrink-0">
                                            {typeof sublink === 'object' && sublink.icon ? <sublink.icon size={12} /> : <Target size={12} />}
                                          </div>
                                          <span className="text-[11px] font-black text-slate-700 group-hover/item:text-slate-900 uppercase tracking-[0.1em] transition-colors">
                                            {typeof sublink === 'string' ? sublink : sublink.name}
                                          </span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-1 relative">
                              <div className="flex items-center gap-3 mb-4 px-3 pt-1">
                                <div className="w-8 h-8 rounded-xl bg-indigo-50/50 flex items-center justify-center text-[#5e6ad2] shadow-sm transform group-hover/column:rotate-6 transition-transform">
                                  <Target size={16} />
                                </div>
                                <h4 className="text-[11px] font-black text-slate-800 tracking-[0.2em] uppercase leading-none">Agency Core</h4>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5">
                                {[
                                  { name: "Overview", icon: Monitor, href: "/company-overview" },
                                  { name: "Mission", icon: Target, href: "/mission" },
                                  { name: "Team", icon: Cpu, href: "/team" },
                                  { name: "Why Us", icon: Target, href: "/why-us" },
                                  { name: "Expertise", icon: Monitor, href: "/expertise" },
                                  { name: "Clients", icon: Target, href: "/clients" },
                                  { name: "Feedback", icon: Cpu, href: "/feedback" },
                                  { name: "Careers", icon: Monitor, href: "/careers" }
                                ].map((item, index) => (
                                  <a
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e as any, item.href)}
                                    className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 group-hover/item:scale-105 transition-transform flex-shrink-0">
                                      <item.icon size={12} />
                                    </div>
                                    <span className="text-[11px] font-black text-slate-700 group-hover/item:text-slate-900 uppercase tracking-[0.1em] transition-colors">
                                      {item.name}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
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
