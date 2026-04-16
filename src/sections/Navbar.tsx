import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Monitor, Cpu, Target, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  isMega?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about', isMega: true },
  { name: 'Services', href: '/#services', isMega: true },
  { name: 'Products', href: '#', isMega: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact Us', href: '/contact' },
];

const productsMegaMenuData = [
  {
    category: "SOFTWARE DEVELOPMENT",
    links: [
      { name: "Billing Software", href: "/billing-software" },
      { name: "Security Management Software", href: "/security-management" },
      { name: "Inventory Management Software", href: "/inventory-management" },
      { name: "OMR Solution", href: "/omr-solution" },
      { name: "CRM", href: "/crm" },
      { name: "ELearning Module", href: "/elearning-module" },
      { name: "Construction Company Software", href: "/construction-software" },
      { name: "School/College ERP Software", href: "/school-college-erp" },
      { name: "School Management System ERP", href: "/school-management-erp" },
      { name: "HR Payroll", href: "/hr-payroll" },
      { name: "Doctor Patient Booking", href: "/doctor-patient-booking" },
      { name: "GST Software", href: "/gst-software" }
    ]
  },
  {
    category: "SOFTWARE FOR GOVERMENT",
    links: [
      { name: "Tender Management", href: "/tender-management" }
    ]
  },
  {
    category: "SOFTWARE FOR ENTERPRISE",
    links: [
      { name: "E-Commerce", href: "/ecommerce-software" },
      { name: "ERP Software", href: "/erp-software" },
      { name: "Mass E-Mail", href: "/mass-email" },
      { name: "Recruitment Software", href: "/recruitment-software" },
      { name: "PMS (Project Management System)", href: "/pms-software" },
      { name: "ERP (Enterprise Resource Planning)", href: "/enterprise-erp" }
    ]
  }
];

const megaMenuData = [
  {
    category: "FRONT END",
    icon: Monitor,
    links: [
      { name: "Web Design", icon: Monitor, href: "/web-design" },
      { name: "Responsive + Mobile Websites", icon: Monitor, href: "/responsive-design" },
      { name: "Graphic Design", icon: Target, href: "/graphic-design" },
      { name: "Logo Design", icon: Target, href: "/logo-design" },
      // { name: "Custom Web Design", icon: Monitor, href: "/web-design" }
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
  },
  {
    category: "INTEGRATED MARKETING",
    icon: Target,
    links: [
      { name: "Digital Marketing", icon: Target, href: "/digital-marketing" },
      { name: "SEO Consulting", icon: Target, href: "/seo-consulting" },
      { name: "PPC Advertising", icon: Target, href: "/ppc-advertising" },
      { name: "Content Marketing", icon: Target, href: "/content-marketing" },
      { name: "Social Media Marketing", icon: Target, href: "/social-media-marketing" },
      { name: "Web Analytics", icon: Target, href: "/web-analytics" },
      { name: "Reputation Management", icon: Target, href: "/reputation-management" },
      { name: "Content Writing", icon: Target, href: "/content-writing" },
      { name: "Online Reputation Management", icon: Target, href: "/online-reputation-management" }
    ]
  },
  {
    category: "WEB PORTAL",
    icon: Cpu,
    links: [
      { name: "News Portal", icon: Cpu, href: "/news-portal" },
      { name: "Property Portal", icon: Cpu, href: "/property-portal" },
      { name: "Classified Portal", icon: Cpu, href: "/classified-portal" },
      { name: "Matrimonial Portal", icon: Cpu, href: "/matrimonial-portal" },
      { name: "On Line Chat", icon: Cpu, href: "/online-chat" },
      { name: "Financial Portal", icon: Cpu, href: "/financial-portal" },
      { name: "Advertisement Portal", icon: Cpu, href: "/advertisement-portal" },
      { name: "Health Portal", icon: Cpu, href: "/health-portal" }
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
        setIsProductsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsAboutOpen(false);
        setIsProductsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
    setIsProductsOpen(false);

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
            className={`w-full px-8 lg:px-16 py-2 transition-all duration-500 flex items-center justify-between border-b ${isScrolled
              ? 'bg-white shadow-lg border-slate-200/60'
              : 'bg-white/95 backdrop-blur-xl border-slate-200/40'
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
                className="h-9 lg:h-11 w-auto object-contain transition-all group-hover:scale-105"
              />
            </a>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                  <div className="flex items-center">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.isMega) {
                          e.preventDefault();
                          e.stopPropagation();
                          if (link.name === 'Services') {
                            setIsServicesOpen(!isServicesOpen);
                            setIsAboutOpen(false);
                            setIsProductsOpen(false);
                          } else if (link.name === 'About') {
                            setIsAboutOpen(!isAboutOpen);
                            setIsServicesOpen(false);
                            setIsProductsOpen(false);
                          } else if (link.name === 'Products') {
                            setIsProductsOpen(!isProductsOpen);
                            setIsServicesOpen(false);
                            setIsAboutOpen(false);
                          }
                        } else {
                          handleNavClick(e, link.href);
                        }
                      }}
                      className={`px-3 py-1.5 text-[13px] lg:text-[13px] font-black transition-all duration-300 rounded-l-lg hover:text-[#F97316] text-slate-800 ${(isServicesOpen && link.isMega && link.name === 'Services') || (isAboutOpen && link.isMega && link.name === 'About') || (isProductsOpen && link.isMega && link.name === 'Products') ? 'text-[#F97316]' : ''}`}
                    >
                      {link.name}
                    </a>
                    {link.isMega && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (link.name === 'Services') {
                            setIsServicesOpen(!isServicesOpen);
                            setIsAboutOpen(false);
                            setIsProductsOpen(false);
                          } else if (link.name === 'About') {
                            setIsAboutOpen(!isAboutOpen);
                            setIsServicesOpen(false);
                            setIsProductsOpen(false);
                          } else if (link.name === 'Products') {
                            setIsProductsOpen(!isProductsOpen);
                            setIsServicesOpen(false);
                            setIsAboutOpen(false);
                          }
                        }}
                        className={`p-1.5 transition-all duration-300 rounded-r-lg hover:text-[#F97316] text-slate-800`}
                      >
                        <ChevronDown size={14} className={`transition-transform duration-300 ${(isServicesOpen && link.name === 'Services') || (isAboutOpen && link.name === 'About') || (isProductsOpen && link.name === 'Products') ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {link.isMega && (link.name === 'Services' || link.name === 'About' || link.name === 'Products') && (
                    <AnimatePresence>
                      {((isServicesOpen && link.name === 'Services') || (isAboutOpen && link.name === 'About') || (isProductsOpen && link.name === 'Products')) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.98 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className={`fixed top-[74px] left-0 right-0 z-[100] pointer-events-auto px-4 lg:px-8`}
                          onMouseLeave={() => {
                            setIsServicesOpen(false);
                            setIsAboutOpen(false);
                            setIsProductsOpen(false);
                          }}
                        >
                          <div className={`mx-auto ${link.name === 'Products' || link.name === 'Services' ? 'max-w-7xl' : 'max-w-lg'} bg-white border border-slate-100 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)] rounded-md overflow-hidden p-8 lg:p-12`}>
                            {link.name === 'Products' ? (
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                                {/* SOFTWARE DEVELOPMENT - Primary Matrix */}
                                <div className="md:col-span-8 space-y-8">
                                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F97316]">
                                      <Monitor size={16} />
                                    </div>
                                    <h3 className="text-xs font-display font-black text-slate-900 tracking-[0.2em] uppercase">
                                      {productsMegaMenuData[0].category}
                                    </h3>
                                  </div>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 list-none">
                                    {productsMegaMenuData[0].links.map((sublink, sIdx) => (
                                      <li key={sIdx} className="group/item">
                                        <a
                                          href={sublink.href}
                                          onClick={(e) => handleNavClick(e as any, sublink.href)}
                                          className="flex items-center gap-2.5 py-1.5 transition-all text-slate-500 hover:text-[#F97316] group-hover:translate-x-1"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-[#F97316] transition-colors shrink-0" />
                                          <span className="text-[11px] font-bold uppercase tracking-wide leading-none">{sublink.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* VERTICAL SECTORS - Gov & Enterprise */}
                                <div className="md:col-span-4 space-y-12 border-l border-slate-50 pl-10">
                                  {/* GOVERMENT */}
                                  <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                      <Cpu size={14} className="text-[#F97316]" />
                                      <h3 className="text-[11px] font-display font-black text-slate-900 tracking-[0.2em] uppercase">
                                        {productsMegaMenuData[1].category}
                                      </h3>
                                    </div>
                                    <ul className="space-y-3 list-none">
                                      {productsMegaMenuData[1].links.map((sublink, sIdx) => (
                                        <li key={sIdx}>
                                          <a
                                            href={sublink.href}
                                            onClick={(e) => handleNavClick(e as any, sublink.href)}
                                            className="flex items-center gap-2.5 py-1 transition-all text-slate-505 hover:text-[#F97316] group-hover:translate-x-1"
                                          >
                                            <ArrowRight size={12} className="text-slate-300" />
                                            <span className="text-[11px] font-bold uppercase tracking-wide leading-none">{sublink.name}</span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* ENTERPRISE */}
                                  <div className="space-y-6 pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-3">
                                      <Target size={14} className="text-[#F97316]" />
                                      <h3 className="text-[11px] font-display font-black text-slate-900 tracking-[0.2em] uppercase">
                                        {productsMegaMenuData[2].category}
                                      </h3>
                                    </div>
                                    <ul className="space-y-3 list-none">
                                      {productsMegaMenuData[2].links.map((sublink, sIdx) => (
                                        <li key={sIdx}>
                                          <a
                                            href={sublink.href}
                                            onClick={(e) => handleNavClick(e as any, sublink.href)}
                                            className="flex items-center gap-2.5 py-1 transition-all text-slate-500 hover:text-[#F97316] group-hover:translate-x-1"
                                          >
                                            <ArrowRight size={12} className="text-slate-300" />
                                            <span className="text-[11px] font-bold uppercase tracking-wide leading-none">{sublink.name}</span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ) : link.name === 'Services' ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative">
                                {megaMenuData.map((section, idx) => (
                                  <div key={idx} className="relative group/column p-2 lg:p-4 rounded-md transition-colors hover:bg-slate-50/50">
                                    <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-2">
                                      <div className="text-[#F97316]">
                                        <section.icon size={15} />
                                      </div>
                                      <h4 className="text-[10px] font-black text-slate-800 tracking-[0.15em] uppercase leading-none">
                                        {section.category}
                                      </h4>
                                    </div>
                                    <ul className="space-y-1.5">
                                      {section.links.map((sublink, sIdx) => (
                                        <li key={sIdx} className="group/item list-none">
                                          <a
                                            href={typeof sublink === 'string' ? '#services' : sublink.href}
                                            onClick={(e) => handleNavClick(e as any, typeof sublink === 'string' ? '#services' : sublink.href)}
                                            className="flex items-center gap-2.5 py-1.5 transition-all text-slate-600 hover:text-[#F97316] group/link"
                                          >
                                            <div className="text-[#F97316] group-hover/link:opacity-80 transition-opacity shrink-0">
                                              {typeof sublink === 'object' && sublink.icon ? <sublink.icon size={13} /> : <Target size={13} />}
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-wide leading-none transition-colors">
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
                              <div className="p-4 relative">
                                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-2">
                                  <div className="text-[#F97316]">
                                    <Target size={15} />
                                  </div>
                                  <h4 className="text-[10px] font-black text-slate-800 tracking-[0.15em] uppercase leading-none">Agency Core</h4>
                                </div>

                                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                                  {[
                                    { name: "Overview", icon: Monitor, href: "/company-overview" },
                                    { name: "Mission", icon: Target, href: "/mission" },
                                    { name: "Team", icon: Cpu, href: "/team" },
                                    { name: "Why Us", icon: Target, href: "/why-us" },
                                    { name: "Expertise", icon: Monitor, href: "/expertise" },
                                    { name: "Feedback", icon: Cpu, href: "/feedback" }
                                  ].map((item, index) => (
                                    <a
                                      key={index}
                                      href={item.href}
                                      onClick={(e) => handleNavClick(e as any, item.href)}
                                      className="group/link flex items-center gap-2.5 py-2 transition-all text-slate-600 hover:text-[#F97316]"
                                    >
                                      <div className="text-[#F97316] group-hover/link:opacity-80 transition-opacity shrink-0">
                                        <item.icon size={13} />
                                      </div>
                                      <span className="text-[11px] font-bold uppercase tracking-wide leading-none transition-colors">
                                        {item.name}
                                      </span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>



            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
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
            <div className="relative h-full overflow-y-auto pt-20 sm:pt-24 pb-12 px-4 sm:px-6 flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
              <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                {navLinks.map((link) => (
                  <div key={link.name} className="w-full flex flex-col items-center">
                    <div className="flex items-center gap-4">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.isMega) {
                            e.preventDefault();
                            if (link.name === 'Services') {
                              setIsServicesOpen(!isServicesOpen);
                              setIsAboutOpen(false);
                              setIsProductsOpen(false);
                            } else if (link.name === 'About') {
                              setIsAboutOpen(!isAboutOpen);
                              setIsServicesOpen(false);
                              setIsProductsOpen(false);
                            } else if (link.name === 'Products') {
                              setIsProductsOpen(!isProductsOpen);
                              setIsServicesOpen(false);
                              setIsAboutOpen(false);
                            }
                          } else {
                            handleNavClick(e, link.href);
                          }
                        }}
                        className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight transition-all duration-300 ${location.pathname === link.href ? 'text-[#F97316]' : 'text-slate-800'} hover:text-[#5e6ad2] active:scale-95`}
                      >
                        {link.name}
                      </a>
                      {link.isMega && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (link.name === 'Services') {
                              setIsServicesOpen(!isServicesOpen);
                              setIsAboutOpen(false);
                              setIsProductsOpen(false);
                            } else if (link.name === 'About') {
                              setIsAboutOpen(!isAboutOpen);
                              setIsServicesOpen(false);
                              setIsProductsOpen(false);
                            } else if (link.name === 'Products') {
                              setIsProductsOpen(!isProductsOpen);
                              setIsServicesOpen(false);
                              setIsAboutOpen(false);
                            }
                          }}
                          className="p-2 text-slate-400 active:scale-95 transition-all"
                        >
                          <ChevronDown
                            size={24}
                            className={`transition-transform duration-300 ${((link.name === 'Services' && isServicesOpen) || (link.name === 'About' && isAboutOpen) || (link.name === 'Products' && isProductsOpen)) ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.isMega && ((link.name === 'Services' && isServicesOpen) || (link.name === 'About' && isAboutOpen) || (link.name === 'Products' && isProductsOpen)) && (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full mt-4 flex flex-col items-center gap-6 overflow-hidden bg-slate-50/50 rounded-3xl p-6 border border-slate-100 shadow-sm"
                        >
                          {link.name === 'Products' ? (
                            <div className="w-full space-y-8">
                              {productsMegaMenuData.map((section, idx) => (
                                <div key={idx} className="w-full text-center space-y-4">
                                  <h4 className="text-[10px] font-black text-orange-600 tracking-[0.3em] uppercase">{section.category}</h4>
                                  <ul className="grid grid-cols-1 gap-2">
                                    {section.links.map((sublink, sIdx) => (
                                      <li key={sIdx}>
                                        <a
                                          href={sublink.href}
                                          onClick={(e) => handleNavClick(e as any, sublink.href)}
                                          className="text-[11px] font-bold text-slate-600 hover:text-orange-600 block transition-colors uppercase tracking-wide"
                                        >
                                          {sublink.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : link.name === 'Services' ? (
                            megaMenuData.map((section, idx) => (
                              <div key={idx} className="w-full text-center space-y-4">
                                <div className="flex items-center justify-center gap-3">
                                  <div className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-600">
                                    <section.icon size={14} />
                                  </div>
                                  <h4 className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase">{section.category}</h4>
                                </div>
                                <ul className="space-y-3">
                                  {section.links.map((sublink, sIdx) => (
                                    <li key={sIdx}>
                                      <a
                                        href={typeof sublink === 'object' ? sublink.href : '#'}
                                        onClick={(e) => handleNavClick(e as any, typeof sublink === 'object' ? sublink.href : '#')}
                                        className="text-sm font-bold text-slate-600 hover:text-slate-900 block transition-colors uppercase tracking-wide"
                                      >
                                        {typeof sublink === 'object' ? sublink.name : sublink}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <div className="w-full text-center space-y-4">
                              <h4 className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase">Agency Core</h4>
                              <ul className="grid grid-cols-2 gap-3 w-full">
                                {[
                                  { name: "Overview", href: "/company-overview" },
                                  { name: "Mission", href: "/mission" },
                                  { name: "Team", href: "/team" },
                                  { name: "Why Us", href: "/why-us" },
                                  { name: "Expertise", href: "/expertise" },
                                  { name: "Feedback", href: "/feedback" }
                                ].map((item, index) => (
                                  <li key={index}>
                                    <a
                                      href={item.href}
                                      onClick={(e) => handleNavClick(e as any, item.href)}
                                      className="text-[11px] font-bold text-slate-600 hover:text-slate-900 block p-2.5 bg-white rounded-xl border border-slate-100 transition-all active:scale-95 uppercase"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
