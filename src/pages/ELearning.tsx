import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  PlayCircle,
  Video,
  Database,
  Users,
  PieChart,
  Shield,
  Zap,
  ArrowRight,
  Globe,
  Sparkles,
  Monitor,
  Award,
  CheckCircle2,
  Lock,
  Layers,
  Search
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeAppArchitecture from '../components/ThreeAppArchitecture';

gsap.registerPlugin(ScrollTrigger);

const learningPillars = [
  {
    tag: "Core Platform",
    title: "E-LEARNING SOFTWARE FOUNDATION",
    bullets: [
      "The e-learning software we provide has been chosen by thousands of organizations worldwide as their eLearning software platform.",
      "Built on one of the most adaptable content management systems available.",
      "Definition of e-learning is \"education through internet\" — a process of training for all types of learners in their required fields through IT Techniques.",
      "The E-learning process includes courses from technology to the art of living."
    ],
    icon: Database,
    image: "/images/elearning_main.png"
  },
  {
    tag: "Learning Experience",
    title: "QUALITY & INSPIRATION",
    bullets: [
      "The availability of Quality resources and materials through online portals.",
      "Creates an excellent platform for online training, which inspires employees to enjoy e-learning.",
      "Interactive courses inspire employees and encourage them to learn more.",
      "Highly accessible nature ensures the e-learning process saves the time of the learner."
    ],
    icon: Sparkles,
    image: "/images/elearning_lecture.png"
  },
  {
    tag: "Course Management",
    title: "FEATURES OF E-LEARNING",
    bullets: [
      "Efficient organization and management of courses, modules, and lessons.",
      "Secure user registration, login, and authentication processes to control access.",
      "Tools for creating, editing, and organizing multimedia content, quizzes, and assessments.",
      "Robust security measures to protect intellectual property and sensitive learning materials."
    ],
    icon: Layers,
    image: "/images/elearning_catalog.png"
  },
  {
    tag: "Success & Monitoring",
    title: "ANALYTICS & CERTIFICATION",
    bullets: [
      "Monitoring and tracking individual learner progress, completion rates, and performance.",
      "Platforms for discussion forums, group collaboration, and interactive learning communities.",
      "Awarding certificates and badges upon course completion or achievement of specific milestones.",
      "Test engines built into these websites to test the learner's knowledge effectively."
    ],
    icon: Award,
    image: "/images/elearning_terminal.png"
  }
];

export default function ELearning() {
  const [activeTab, setActiveTab] = useState<'admin' | 'student'>('student');

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary">
      {/* CINEMATIC HERO */}
      <div className="relative min-h-[220px] lg:min-h-[300px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeAppArchitecture />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Interactive Academy Protocol</span>
          </motion.div>

          <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto">
            {(() => {
              const title = "E-Learning Software.";
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
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                      }}
                      className={`inline-block ${word === "Software." ? "text-[#FF6600]" : ""}`}
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
            transition={{ duration: 1, delay: 0.5 }}
            className="text-slate-600 text-xs lg:text-sm font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            E-learning is more flexibility and effectiveness to the Learning than the traditional training.
          </motion.p>
        </div>
      </div>

      {/* UNIQUE UI PLACEMENT: THE KNOWLEDGE PIPELINE */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Central Pipeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <div className="flex flex-col gap-16 lg:gap-24">
            {learningPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-20 relative`}
              >
                {/* Connection Node */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#FF6600] z-20 hidden lg:flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
                </div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[50%] space-y-6"
                >
                  <div className={`space-y-4 ${idx % 2 === 0 ? "text-left" : "lg:text-right"}`}>
                    <div className={`flex items-center gap-4 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                      <div className="w-10 h-10 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg">
                        <pillar.icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                        <h3 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase leading-[1.1]">{pillar.title}</h3>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 pt-4">
                      {pillar.bullets.map((bullet, bi) => (
                        <li key={bi} className={`flex gap-3 group/li ${idx % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"}`}>
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6600] flex-shrink-0 group-hover/li:scale-125 transition-transform" />
                          <p className="text-base lg:text-lg font-semibold text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Asset Side */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[45%]"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video relative group cursor-pointer bg-slate-50 shadow-orange-500/5">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                    <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-3xl font-display font-bold text-slate-200 opacity-40 select-none italic`}>0{idx + 1}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
