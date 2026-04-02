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
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import LoadingScreen from './sections/LoadingScreen';
import PrestigeBanner from './sections/PrestigeBanner';

// Import Pages
import WebDesign from './pages/WebDesign';

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
      <FAQ />
      <CTA />
      <PrestigeBanner />
      <Testimonials />
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
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
