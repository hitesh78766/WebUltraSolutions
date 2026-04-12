import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './App.css';

// Import sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import ResponsiveDesign from './sections/ResponsiveDesign';
import FAQ from './sections/FAQ';
import Arsenal from './sections/Arsenal';
import IndustryExcellence from './sections/IndustryExcellence';
import Testimonials from './sections/Testimonials';
import ScaleAmbition from './sections/ScaleAmbition';
import Footer from './sections/Footer';
import LoadingScreen from './sections/LoadingScreen';
import PrestigeBanner from './sections/PrestigeBanner';
import ContactSection from './sections/ContactSection';

// Import Pages
import WebDesign from './pages/WebDesign';
import ResponsivePage from './pages/ResponsiveDesign';
import GraphicPage from './pages/GraphicDesign';
import LogoDesign from './pages/LogoDesign';
import WebDevelopment from './pages/WebDevelopment';
import PhpDevelopment from './pages/PhpDevelopment';
import EcommerceDevelopment from './pages/EcommerceDevelopment';
import WordpressDevelopment from './pages/WordpressDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import AndroidAppDevelopment from './pages/AndroidAppDevelopment';

import CompanyOverview from './pages/CompanyOverview';
import Mission from './pages/Mission';
import Team from './pages/Team';
import Expertise from './pages/Expertise';
import Feedback from './pages/Feedback';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import IntegratedMarket from './pages/IntegratedMarket';
import WebPortal from './pages/WebPortal';

// Integrated Marketing Suite
import DigitalMarketing from './pages/DigitalMarketing';
import SEOConsulting from './pages/SEOConsulting';
import PPCAdvertising from './pages/PPCAdvertising';
import ContentMarketing from './pages/ContentMarketing';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import WebAnalytics from './pages/WebAnalytics';
import ReputationManagement from './pages/ReputationManagement';
import ContentWriting from './pages/ContentWriting';
import OnlineReputationManagement from './pages/OnlineReputationManagement';

// Web Portal Suite
import NewsPortal from './pages/NewsPortal';
import PropertyPortal from './pages/PropertyPortal';
import ClassifiedPortal from './pages/ClassifiedPortal';
import MatrimonialPortal from './pages/MatrimonialPortal';
import OnlineChat from './pages/OnlineChat';
import FinancialPortal from './pages/FinancialPortal';

import AdvertisementPortal from './pages/AdvertisementPortal';
import HealthPortal from './pages/HealthPortal';
import Portfolio from './pages/Portfolio';

// Product Suite Imports
import BillingSoftware from './pages/BillingSoftware';
import SecurityManagement from './pages/SecurityManagement';
import InventoryManagement from './pages/InventoryManagement';
import OMRSolution from './pages/OMRSolution';
import CRMPage from './pages/CRMPage';
import ELearning from './pages/ELearning';
import ConstructionSoftware from './pages/ConstructionSoftware';
import SchoolCollegeERP from './pages/SchoolCollegeERP';
import SchoolManagementERP from './pages/SchoolManagementERP';
import HRPayroll from './pages/HRPayroll';
import DoctorBooking from './pages/DoctorBooking';
import GSTSoftware from './pages/GSTSoftware';
import TenderManagement from './pages/TenderManagement';

import EcommerceSoftware from './pages/EcommerceSoftware';
import ERPSoftware from './pages/ERPSoftware';
import MassEmail from './pages/MassEmail';
import RecruitmentSoftware from './pages/RecruitmentSoftware';
import PMSSoftware from './pages/PMSSoftware';
import EnterpriseERP from './pages/EnterpriseERP';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
    // Critical: Refresh ScrollTrigger after route change and DOM update
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, [pathname]);
  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  // Handle loading completion
  useEffect(() => {
    if (isLoading) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Custom cursor movement
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorOutline = document.querySelector('.custom-cursor-outline') as HTMLElement;
    if (!cursor || !cursorOutline) return;
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(cursorOutline, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .service-card, .portfolio-card')) {
        gsap.to(cursorOutline, { scale: 2.5, backgroundColor: 'rgba(94, 106, 210, 0.12)', duration: 0.3 });
        gsap.to(cursor, { scale: 0.5, opacity: 0.5, duration: 0.3 });
      } else {
        gsap.to(cursorOutline, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="custom-cursor fixed top-0 left-0 w-2.5 h-2.5 bg-accent-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
      <div className="custom-cursor-outline fixed top-0 left-0 w-8 h-8 border border-accent-500/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
      <div className="noise-overlay" />
      <div ref={mainRef} className={`relative min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Services />
      <About />
      <ResponsiveDesign />
      <Arsenal />
      <PrestigeBanner />
      <IndustryExcellence />
      <ScaleAmbition />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/responsive-design" element={<ResponsivePage />} />
          <Route path="/graphic-design" element={<GraphicPage />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/php-development" element={<PhpDevelopment />} />
          <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/wordpress-development" element={<WordpressDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrated-market" element={<IntegratedMarket />} />
          <Route path="/web-portal" element={<WebPortal />} />

          {/* Integrated Marketing Sub-routes */}
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/seo-consulting" element={<SEOConsulting />} />
          <Route path="/ppc-advertising" element={<PPCAdvertising />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/web-analytics" element={<WebAnalytics />} />
          <Route path="/reputation-management" element={<ReputationManagement />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/online-reputation-management" element={<OnlineReputationManagement />} />

          {/* Web Portal Sub-routes */}
          <Route path="/news-portal" element={<NewsPortal />} />
          <Route path="/property-portal" element={<PropertyPortal />} />
          <Route path="/classified-portal" element={<ClassifiedPortal />} />
          <Route path="/matrimonial-portal" element={<MatrimonialPortal />} />
          <Route path="/online-chat" element={<OnlineChat />} />
          <Route path="/financial-portal" element={<FinancialPortal />} />

          <Route path="/advertisement-portal" element={<AdvertisementPortal />} />
          <Route path="/health-portal" element={<HealthPortal />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Product Suite Routes */}
          <Route path="/billing-software" element={<BillingSoftware />} />
          <Route path="/security-management" element={<SecurityManagement />} />
          <Route path="/inventory-management" element={<InventoryManagement />} />
          <Route path="/omr-solution" element={<OMRSolution />} />
          <Route path="/crm" element={<CRMPage />} />
          <Route path="/elearning-module" element={<ELearning />} />
          <Route path="/construction-software" element={<ConstructionSoftware />} />
          <Route path="/school-college-erp" element={<SchoolCollegeERP />} />
          <Route path="/school-management-erp" element={<SchoolManagementERP />} />
          <Route path="/hr-payroll" element={<HRPayroll />} />
          <Route path="/doctor-patient-booking" element={<DoctorBooking />} />
          <Route path="/gst-software" element={<GSTSoftware />} />
          <Route path="/tender-management" element={<TenderManagement />} />

          <Route path="/ecommerce-software" element={<EcommerceSoftware />} />
          <Route path="/erp-software" element={<ERPSoftware />} />
          <Route path="/mass-email" element={<MassEmail />} />
          <Route path="/recruitment-software" element={<RecruitmentSoftware />} />
          <Route path="/pms-software" element={<PMSSoftware />} />
          <Route path="/enterprise-erp" element={<EnterpriseERP />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
