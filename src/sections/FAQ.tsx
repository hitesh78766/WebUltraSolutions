import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const successStories = [
  {
    id: 1,
    brand: "Haldiram's",
    logoText: "Haldiram's",
    title: "Haldiram's: Two Decades of Digital Growth & Scalability",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=800",
    challenge: "High footfall made one-on-one sales assistance impossible, challenges emerged in product discovery, real-time stock checking and data gathering.",
    solution: "Our custom in-store kiosk application facilitated independently product catalogue browsing, check real-time availability, and access promotions.",
    results: [
      "Real-time collection of customer contact information and product interests.",
      "Immediate self-service access to customers reduced reliance on floor staff.",
      "Deployment across multiple store locations with reliable separate servers.",
      "Ensured zero glitches in kiosk accessibility and interface, providing a smooth and consistent experience."
    ]
  },
  {
    id: 2,
    brand: "IKEA",
    logoText: "IKEA",
    title: "IKEA: Global Automation and Seamless Supply Chain Logic",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    challenge: "International scale required a deterministic automation core to manage complex inventory flows across 50+ countries with zero downtime.",
    solution: "Engineered a neural-cloud orchestration layer that synchronizes warehouse robotics with real-time customer demand signals.",
    results: [
      "25% reduction in manual order routing overhead globally.",
      "Synchronized inventory states across 400+ physical stores.",
      "Proprietary AI-driven predictive packing algorithm implementation.",
      "Seamless integration with third-party logistics through low-latency APIs."
    ]
  },
  {
    id: 3,
    brand: "PVR",
    logoText: "PVR Cinemas",
    title: "PVR: Empowering the Future of Cinema with Direct Tech",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    challenge: "Legacy booking systems couldn't handle high-concurrency trailer drops and movie releases, leading to customer churn and portal lag.",
    solution: "Transitioned to a high-density serverless architecture optimized for flash-sales and extreme traffic surges.",
    results: [
      "Zero server crashes during major blockbuster trailer releases.",
      "Reduced ticket booking friction by 40% through unified checkout UX.",
      "Direct-to-consumer loyalty program integration with 10M+ users.",
      "Ultra-fast loading times (under 1.5s) even during nationwide traffic peaks."
    ]
  }
];

const faqs = [
  {
    q: "Why should businesses choose you as their technology partner?",
    a: "We provide enterprise-grade solutions with a focus on high-density architecture and scalable digital infrastructures, ensuring your business stays ahead."
  },
  {
    q: "What types of digital transformation solutions does orangemantra provide?",
    a: "We offer a comprehensive suite including AI/ML integration, cloud-native development, industrial automation, and legacy modernization."
  },
  {
    q: "What factors influence the cost and development timeline?",
    a: "Timelines are influenced by technical complexity, architectural depth, integration requirements, and security compliance standards."
  },
  {
    q: "Do you help with system integration and data migration projects?",
    a: "Yes, we specialize in seamless data migration and cloud integration with zero-downtime protocols for mission-critical business systems."
  }
];

const commitments = [
  {
    title: 'ShikshaMantra',
    logo: 'ShikshaMantra',
    color: 'text-[#F97316]',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Sammuday',
    logo: 'Sammuday',
    color: 'text-slate-500',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'GreenMantra',
    logo: 'GreenMantra',
    color: 'text-emerald-500',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
  }
];

export default function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeStory = successStories[currentIndex];

  return (
    <div className="bg-white">
      {/* Success Stories Section */}
      <section id="success-stories" className="relative py-12 lg:py-16 bg-[#FFFFFF] overflow-hidden font-display">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#FFF1E2] rounded-md mb-4 shadow-sm">
              <span className="text-[10px] font-bold text-[#FF6600] uppercase tracking-widest">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#111827] leading-[1.1] tracking-tight mb-5 uppercase">
              From Technology Projects into <span className="text-[#FF6600]">Business Success Stories</span>
            </h2>
            <p className="text-slate-600 text-[11px] lg:text-[14px] font-semibold leading-relaxed max-w-4xl mx-auto px-4">
              When IKEA demanded automation, we innovated. When Eicher aimed for eCommerce presence, we facilitated. When PVR needed tech empowerment, we served it.
            </p>
          </div>

          <div className="relative group/slider max-w-6xl mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-slate-100 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-5 relative h-[240px] lg:h-auto overflow-hidden">
                  <img src={activeStory.image} alt={activeStory.brand} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 flex items-center justify-center">
                      <span className="text-[#E11D48] font-bold text-base italic tracking-tighter">{activeStory.brand}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-7 lg:p-10 lg:pl-12 space-y-7 flex flex-col justify-center bg-white">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#111827] leading-tight tracking-tight mb-6">
                      {activeStory.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Challenge:</h4>
                        <p className="text-slate-500 text-base lg:text-base font-semibold leading-relaxed">{activeStory.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">The Solution:</h4>
                        <p className="text-slate-500 text-base lg:text-base font-semibold leading-relaxed">{activeStory.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#111827] uppercase tracking-widest">Results:</h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeStory.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-4 group/result">
                          <div className="mt-1.5 w-4.5 h-4.5 rounded-md bg-[#22C55E]/10 flex items-center justify-center border border-[#22C55E]/20 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                          </div>
                          <p className="text-slate-600 font-bold text-sm tracking-tight leading-none pt-1">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="flex items-center gap-2 bg-white border-2 border-[#F97316] text-[#F97316] px-6 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-widest hover:bg-[#F97316] hover:text-white transition-all shadow-xl shadow-orange-500/5 active:scale-95 group">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2.5 mt-8">
              {successStories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-[#F97316] w-6' : 'bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>

            <button onClick={prevSlide} className="absolute left-[-40px] top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 rounded-full bg-white border border-slate-100 shadow-lg items-center justify-center text-slate-300 hover:text-[#F97316] transition-all opacity-0 group-hover/slider:opacity-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 rounded-full bg-white border border-slate-100 shadow-lg items-center justify-center text-slate-300 hover:text-[#F97316] transition-all opacity-0 group-hover/slider:opacity-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq-accordions" className="py-12 bg-white font-display border-t border-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#111827] leading-[1.1] tracking-tight mb-5 uppercase">
              Frequently <span className="text-[#FF6600]">Asked Questions</span>
            </h2>
            <p className="text-slate-600 text-[14px] font-semibold leading-relaxed">Get answers to common questions about our services</p>
          </div>
          <div className="space-y-2.5">
            {faqs.map((item, i) => (
              <div key={i} className="border border-slate-100 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors group">
                  <span className="text-[14px] font-bold text-slate-700 tracking-tight flex items-center gap-2.5">
                    <span className="text-[#FF6600]/60">Q:</span>{item.q}
                  </span>
                  <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-[#F97316] text-white rotate-45' : 'bg-slate-100 text-slate-400 group-hover:text-[#F97316]'}`}>
                    <Plus size={12} strokeWidth={3} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-10 pb-4 text-[13px] font-medium text-slate-500 leading-relaxed">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Commitments Section */}
      <section id="social-commitments" className="py-12 bg-white font-display">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#111827] tracking-tight leading-[1.1] mb-8 uppercase">
            Making <span className="text-[#FF6600]">Social Commitments</span> That Lasts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {commitments.map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-[180px] overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-3 border-t border-slate-50">
                  <h4 className={`text-[13px] font-bold tracking-tight ${item.color}`}>{item.logo}</h4>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-[#F97316] text-white px-8 py-2.5 rounded-sm font-bold text-[10px] capitalize tracking-widest hover:bg-[#EA580C] hover:shadow-xl hover:shadow-orange-500/20 transition-all flex items-center gap-2 mx-auto">
            <span>View All</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
