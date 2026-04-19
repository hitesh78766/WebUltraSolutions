import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Search,
  LayoutGrid,
  Monitor,
  Smartphone,
  Zap,
  Filter,
  ArrowRight,
  Globe,
  Database,
  Layers,
  Shield,
  Cpu,
  Workflow
} from 'lucide-react';
import ThreeNetworkGlobe from '../components/ThreeNetworkGlobe';

const categories = [
  { id: 'all', name: 'ALL PROJECTS' },
  { id: 'responsive', name: 'RESPONSIVE', icon: Monitor },
  { id: 'dynamic', name: 'DYNAMIC', icon: Zap },
  { id: 'portal', name: 'PORTAL', icon: Globe },
  { id: 'mobile', name: 'MOBILE APP', icon: Smartphone },
];

const projects = [
  // === RESPONSIVE CATEGORY (From Screenshot 1) ===
  { id: 1, name: "THE HERBAL GROUP", category: "responsive", type: "Healthcare Hub", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "ATA MOHAMMAD KAIFI", category: "responsive", type: "Personal Portal", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "BHUTANI CYBERTHUM", category: "responsive", type: "Space Solutions", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "RESULT HUB", category: "responsive", type: "Data Metrics", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "BRIGHTX", category: "responsive", type: "Creative Suite", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "GPUSHER FINANCE", category: "responsive", type: "Banking Portal", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "AMIGO OFFICE", category: "responsive", type: "Admin Network", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "VYAPAR KUNDLI", category: "responsive", type: "Business Analytics", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "TICKYAL & BHAIJA", category: "responsive", type: "Legal Registry", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "EUROCARE INDIA", category: "responsive", type: "Medical Network", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  { id: 11, name: "DR. JYOTI GOEL", category: "responsive", type: "Expert Portal", image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c77c?auto=format&fit=crop&q=80&w=800" },
  { id: 12, name: "LE PASSAGE BUREAU", category: "responsive", type: "Travel Admin", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=800" },
  { id: 13, name: "AV EVENTMGMT", category: "responsive", type: "Event Registry", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" },
  { id: 14, name: "REHAJ SHOOT", category: "responsive", type: "Media Studio", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "GULSHAN HOME", category: "responsive", type: "Realty Portal", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: 16, name: "HUBDECHANA", category: "responsive", type: "Tech Hub", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { id: 17, name: "GLOBAL TRACK", category: "responsive", type: "Logistics Hub", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { id: 18, name: "MAKER", category: "responsive", type: "Creative Suite", image: "https://images.unsplash.com/photo-1454165833767-027508496b60?auto=format&fit=crop&q=80&w=800" },
  { id: 19, name: "BPS", category: "responsive", type: "Power Solutions", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { id: 20, name: "BHARAT POWER SOLUTIONS", category: "responsive", type: "Industrial Hub", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
  { id: 21, name: "DINESH GOEL", category: "responsive", type: "Legal Advisor", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" },
  { id: 22, name: "DRIZZLING LAND", category: "responsive", type: "Park Portal", image: "https://images.unsplash.com/photo-1513889958041-373c9e708217?auto=format&fit=crop&q=80&w=800" },
  { id: 23, name: "ROOFING TILES NIGERIA", category: "responsive", type: "Build Registry", image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800" },
  { id: 24, name: "ENJOYCOFFEE", category: "responsive", type: "Bistro Network", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800" },
  { id: 25, name: "HS DESIGN STUDIO", category: "responsive", type: "Interior Portal", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" },
  { id: 26, name: "WEB SAFE SOLUTION", category: "responsive", type: "Security Hub", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: 27, name: "COLOR LOGISTICS", category: "responsive", type: "Freight Portal", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" },
  { id: 28, name: "SMTP", category: "responsive", type: "Server Logic", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" },
  { id: 29, name: "NOXON", category: "responsive", type: "Digital Core", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { id: 30, name: "OUTSTANDING CARE AGENCY", category: "responsive", type: "Care Network", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" },
  { id: 31, name: "DROPSHIP WEB EXPERTS", category: "responsive", type: "Trade Solutions", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 32, name: "HIVES", category: "responsive", type: "Social Matrix", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
  { id: 33, name: "SMATCHEL CITY", category: "responsive", type: "Urban Portal", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800" },
  { id: 34, name: "OPEN MIND HR", category: "responsive", type: "HR Solutions", image: "https://images.unsplash.com/photo-1521737706563-99b616ec9232?auto=format&fit=crop&q=80&w=800" },
  { id: 35, name: "SAVE NAVY", category: "responsive", type: "Service Portal", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800" },
  { id: 36, name: "TRAVELIT", category: "responsive", type: "Booking Engine", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
  { id: 37, name: "PROPERTY DEKHO", category: "responsive", type: "Real Estate Hub", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: 38, name: "PODDAR ENTERPRISES", category: "responsive", type: "Enterprise Core", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" },
  { id: 39, name: "SOLARIZ", category: "responsive", type: "Energy Portal", image: "https://images.unsplash.com/photo-1509391366360-fe58f9671753?auto=format&fit=crop&q=80&w=800" },
  { id: 40, name: "SCRL", category: "responsive", type: "Logistics Admin", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { id: 41, name: "PTC DASHBANDA", category: "responsive", type: "Training Portal", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { id: 42, name: "CAMANTRA", category: "responsive", type: "Digital Studio", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  { id: 43, name: "DESIGN FACTORY INDIA", category: "responsive", type: "Creative Hub", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
  { id: 44, name: "DEZIGN CRAFT", category: "responsive", type: "Craft Solutions", image: "https://images.unsplash.com/photo-1456428746267-a1756408f782?auto=format&fit=crop&q=80&w=800" },
  { id: 45, name: "CANDID DIGITAL MEDIA", category: "responsive", type: "Media Hub", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 46, name: "REDQUADRANTS", category: "responsive", type: "Strategy Core", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
  { id: 47, name: "WOOD WINGS", category: "responsive", type: "Build Portal", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 48, name: "LOK GATHBANDHAN", category: "responsive", type: "Social Portal", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
  { id: 49, name: "EXPLORE INDIA PROPERTIES", category: "responsive", type: "Realty Matrix", image: "https://images.unsplash.com/photo-1582408921715-18e7806367c1?auto=format&fit=crop&q=80&w=800" },

  // === DYNAMIC CATEGORY (From Screenshot 2) ===
  { id: 50, name: "TREATOSE (DOCTOR PORTAL)", category: "dynamic", type: "Medical Hub", image: "https://images.unsplash.com/photo-1576091160550-217359f4bd08?auto=format&fit=crop&q=80&w=800" },
  { id: 51, name: "BOOKHOUNDS (BOOK RENT PORTAL)", category: "dynamic", type: "Rental Hub", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800" },
  { id: 52, name: "CONNECTING PROFESSIONALS", category: "dynamic", type: "Social Network", image: "https://images.unsplash.com/photo-1521737706563-99b616ec9232?auto=format&fit=crop&q=80&w=800" },
  { id: 53, name: "AJI INSURANCE", category: "dynamic", type: "Finance Portal", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
  { id: 54, name: "BMCARD", category: "dynamic", type: "Banking Core", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
  { id: 55, name: "PAYROL", category: "dynamic", type: "HR Solutions", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
  { id: 56, name: "NOIDA ARYA SAMAJ", category: "dynamic", type: "Trust Portal", image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800" },
  { id: 57, name: "MANORV INSURANCE SERVICES", category: "dynamic", type: "Insurance Hub", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
  { id: 58, name: "PERSONALITY INDIA", category: "dynamic", type: "Edu Portal", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { id: 59, name: "SHIKSHA INITIATIVE", category: "dynamic", type: "NGO Matrix", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
  { id: 60, name: "SEVENL", category: "dynamic", type: "Tech Hub", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { id: 61, name: "INDIANEXPRIENCE", category: "dynamic", type: "Travel Hub", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800" },
  { id: 62, name: "TRAVELORI", category: "dynamic", type: "Booking Engine", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
  { id: 63, name: "PLACIDIC INDIA", category: "dynamic", type: "Corporate Hub", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 64, name: "MINDENTAL", category: "dynamic", type: "Medical Portal", image: "https://images.unsplash.com/photo-1576091160550-217359f4bd08?auto=format&fit=crop&q=80&w=800" },
  { id: 65, name: "ABMCOFF", category: "dynamic", type: "Admin Core", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 66, name: "HEMANTCLARK", category: "dynamic", type: "Legal Hub", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" },
  { id: 67, name: "KWICKLAXMI", category: "dynamic", type: "Finance Hub", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: 68, name: "HITE ADVENT", category: "dynamic", type: "Media Hub", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" },
  { id: 69, name: "IDRAA", category: "dynamic", type: "Agency Core", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  { id: 70, name: "NBCC LTD", category: "dynamic", type: "Infra Portal", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 71, name: "FLAW LESS", category: "dynamic", type: "Service Hub", image: "https://images.unsplash.com/photo-1454165833767-027508496b60?auto=format&fit=crop&q=80&w=800" },
  { id: 72, name: "FTMID", category: "dynamic", type: "Trade Matrix", image: "https://images.unsplash.com/photo-1507679799987-c7377f5da5b2?auto=format&fit=crop&q=80&w=800" },
  { id: 73, name: "GRC INDIA", category: "dynamic", type: "Compliance Hub", image: "https://images.unsplash.com/photo-1454165833767-027508496b60?auto=format&fit=crop&q=80&w=800" },
  { id: 74, name: "GENIUS MANTRA", category: "dynamic", type: "Edu Matrix", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { id: 75, name: "LBP", category: "dynamic", type: "Corporate Matrix", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" },
  { id: 76, name: "IMTS INSTITUTE", category: "dynamic", type: "Institute Hub", image: "https://images.unsplash.com/photo-1523050338692-7b849a21b88f?auto=format&fit=crop&q=80&w=800" },
  { id: 77, name: "BESPOKE MEDITOUR INDIA", category: "dynamic", type: "Medical Travel", image: "https://images.unsplash.com/photo-1576091160550-217359f4bd08?auto=format&fit=crop&q=80&w=800" },
  { id: 78, name: "AGRICLINIC", category: "dynamic", type: "Agri Hub", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800" },
  { id: 79, name: "IPR LAW INDIA FIRM", category: "dynamic", type: "Legal Core", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" },

  // === PORTAL CATEGORY (From Screenshot 3) ===
  { id: 80, name: "BOOKING DOCTOR", category: "portal", type: "Medical Booking", image: "https://images.unsplash.com/photo-1505751172157-c7035c9866b7?auto=format&fit=crop&q=80&w=800" },
  { id: 81, name: "GRC INDIA", category: "portal", type: "Compliance Hub", image: "https://images.unsplash.com/photo-1454165833767-027508496b60?auto=format&fit=crop&q=80&w=800" },
  { id: 82, name: "REHAB ONLINE", category: "portal", type: "Recovery Portal", image: "https://images.unsplash.com/photo-1576091160550-217359f4bd08?auto=format&fit=crop&q=80&w=800" },
  { id: 83, name: "MEAGER DEMO", category: "portal", type: "Demo Interface", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 84, name: "ESSADGETS", category: "portal", type: "Gadget Registry", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
  { id: 85, name: "BOOKOVO", category: "portal", type: "Book Hub", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800" },
  { id: 86, name: "VIEPORTAL", category: "portal", type: "Visual Hub", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" },
  { id: 87, name: "APPAREL MANSIR", category: "portal", type: "Apparel Registry", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=800" },
  { id: 88, name: "NITROGEN", category: "portal", type: "Digital Core", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { id: 89, name: "BRICKPOP", category: "portal", type: "Real Estate Portal", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: 90, name: "CREO HEALTH", category: "portal", type: "Health Platform", image: "https://images.unsplash.com/photo-1538108149393-fdfd818d387a?auto=format&fit=crop&q=80&w=800" },

  // === MOBILE CATEGORY (From Screenshot 4) ===
  { id: 91, name: "MIMANSA", category: "mobile", type: "Native App", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
  { id: 92, name: "PERSONALITY INDIA", category: "mobile", type: "Edu App", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { id: 93, name: "MR. DRAYWEL", category: "mobile", type: "Utility Core", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 94, name: "HIRE4EVENT", category: "mobile", type: "Event App", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" },
  { id: 95, name: "KUCHH KARE - WORK & HELP", category: "mobile", type: "Social Hub", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
  { id: 96, name: "ECOBIZ", category: "mobile", type: "Business App", image: "https://images.unsplash.com/photo-1454165833767-027508496b60?auto=format&fit=crop&q=80&w=800" },
  { id: 97, name: "ABSOLUTE FACILITIES", category: "mobile", type: "Admin Hub", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 98, name: "E-COMMERCE WEBULTRASOLUTION", category: "mobile", type: "Native Store", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
  { id: 99, name: "HELLO TIFFIN", category: "mobile", type: "Food App", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 15;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(p =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <div className="pt-[50px] bg-white min-h-screen font-secondary overflow-hidden">
      {/* ELITE PORTFOLIO HERO - CINEMATIC 2.0 - COMPACT */}
      <section className="relative min-h-[280px] lg:min-h-[350px] flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeNetworkGlobe />
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center space-y-5 lg:space-y-6">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
            {(() => {
              const title = "OUR PORTFOLIO.";
              const words = title.split(" ");
              return words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-4">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={`${wordIdx}-${charIdx}`}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.05)
                      }}
                      className={`inline-block ${word === "PORTFOLIO." ? "text-[#FF6600]" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ));
            })()}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-slate-500 text-xs lg:text-sm font-semibold max-w-2xl mx-auto leading-relaxed capitalize tracking-wide"
          >
            Precision commitment to client success and architectural satisfaction.
          </motion.p>
        </div>

        {/* Floating Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
          <span className="text-[12rem] lg:text-[18rem] font-display font-black uppercase italic whitespace-nowrap">SHOWCASE.</span>
        </div>
      </section>

      {/* FILTER HUB: PEHRA PROTOCOL - SIGNATURE ALIGNMENT */}
      <section className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-2xl border-b border-slate-100 py-4 transition-all duration-500 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
         `}} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center justify-between gap-4">
          {/* Left Sector */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6600] border border-orange-100/50 shadow-sm">
              <Filter size={16} />
            </div>
            <span className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-950">Logic Engine</span>
          </div>

          {/* Center Scrollable Sector */}
          <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex justify-center">
            <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap py-2 px-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`group px-6 py-2.5 lg:px-7 lg:py-3.5 rounded-md text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-3 border-2 ${activeCategory === cat.id
                    ? 'bg-[#FF6600] border-[#FF6600] text-white shadow-xl shadow-[#FF6600]/20'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#FF6600] hover:text-[#FF6600]'
                    }`}
                >
                  {cat.icon && <cat.icon size={12} className={activeCategory === cat.id ? 'text-white' : 'text-[#FF6600]'} />}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Sector */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <div className="h-[1px] w-12 bg-slate-100" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                <span className="text-[#FF6600]">{filteredProjects.length}</span> NODES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT MESH GRID: HIGH-DENSITY PROTOCOL */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-5 min-h-[400px]">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 12) * 0.05 }}
              className="group relative flex flex-col"
            >
              {/* Industrial Card Frame - Standardized rounded-md */}
              <div className="relative w-full rounded-md overflow-hidden bg-white shadow-xl group-hover:-translate-y-4 transition-all duration-700 cursor-pointer group/card border-[3px] border-slate-50 flex flex-col">
                <div className="relative aspect-[16/12] overflow-hidden bg-slate-100">
                  <a href="#" className="absolute inset-0 z-20" />

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-700" />

                  {/* Project Tag - Standardized rounded-md */}
                  <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-md shadow-xl border border-white/20">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#FF6600]">{project.type}</span>
                    </div>
                  </div>

                  {/* UI Action Matrix */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                    <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center text-[#FF6600] shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                {/* SLEEK GLASS PANEL - MODERN MINIMALIST PROTOCOL */}
                <div className="relative bg-slate-950/80 backdrop-blur-md py-3 px-4 flex items-center justify-center min-h-[48px] overflow-hidden group-hover:bg-slate-950/90 transition-all duration-500 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] shadow-[0_0_8px_#FF6600] animate-pulse" />
                    <h3 className="text-[10px] font-display font-black text-white uppercase tracking-[0.25em] text-center leading-tight">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Subtle Node Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-900/10 group-hover:bg-white/20 transition-colors duration-500" />
              </div>


            </motion.div>
          ))}
        </div>

        {/* PAGINATION: ELITE PROTOCOL */}
        {/* PAGINATION: ELITE PROTOCOL - REFINED NAVIGATION */}
        {totalPages > 1 && (
          <div className="mt-12 lg:mt-16 flex items-center justify-center gap-4 lg:gap-6">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                window.scrollTo({ top: 500, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-md border-2 border-slate-200 flex items-center justify-center text-slate-400 disabled:opacity-20 hover:border-[#FF6600] hover:text-[#FF6600] transition-all duration-300"
            >
              <ArrowRight className="rotate-180" size={18} />
            </button>

            <div className="flex items-center gap-2 lg:gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }}
                  className={`w-11 h-11 lg:w-12 lg:h-12 rounded-md text-[10px] font-black transition-all duration-500 border-2 flex items-center justify-center ${currentPage === i + 1
                    ? 'bg-slate-950 border-slate-950 text-white shadow-[0_15px_30px_rgba(0,0,0,0.25)] scale-110'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#FF6600] hover:text-[#FF6600]'
                    }`}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 500, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-md border-2 border-slate-200 flex items-center justify-center text-slate-400 disabled:opacity-20 hover:border-[#FF6600] hover:text-[#FF6600] transition-all duration-300"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
