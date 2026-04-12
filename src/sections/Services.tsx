import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Palette,
  Code2,
  ShoppingCart,
  Smartphone,
  Database,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Monitor,
  Cloud,
  Brain,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Monitor,
    title: 'Digital Transformation',
    subtitle: 'Digitize and automate complex workflows with our responsive software solutions. Modernity, experience, scalability, security, performance — all check',
    keyTechnologies: ['Java', 'Python', 'Node.js', '.NET', 'PHP', 'Go', 'React', 'Angular', 'Vue.js', 'Next.js', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Microsoft', 'Salesforce', 'SAP', 'ServiceNow'],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    cta: 'Elevate Digital Transformation Journey'
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    subtitle: 'Build powerful, scalable eCommerce platforms that drive sales and enhance user experience. From custom storefronts to headless commerce integrations.',
    keyTechnologies: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce', 'Stripe', 'React', 'Node.js'],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    cta: 'Scale Your eCommerce Business'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    subtitle: 'Streamline your deployment pipelines and infrastructure management with our expert DevOps and Cloud services. Scale with confidence.',
    keyTechnologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    cta: 'Optimize Your Cloud Infrastructure'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    subtitle: 'Leverage the power of AI and Machine Learning to gain insights and automate decision-making. Future-proof your organization with data-driven intelligence.',
    keyTechnologies: ['PyTorch', 'TensorFlow', 'OpenAI', 'LangChain', 'Python', 'Scikit-learn', 'NLP'],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    cta: 'Explore AI Possibilities'
  }
];



export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Heading Reveal
    gsap.fromTo(el.querySelector('.service-header'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  }, []);


  const activeService = services[activeIndex];
  const ServiceIcon = activeService.icon;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-12 lg:py-16 overflow-hidden bg-[#FBFBFC]"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="service-header text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-[#111827] leading-[1.1] tracking-tight uppercase">
            Our Core <span className="text-[#FF6600]">Technology Services</span>
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold mt-4 max-w-xl mx-auto">
            From strengthening your digital presence to automating your workflow we offer end-to-end transformation.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side Buttons - Reference Style */}
          <div className="lg:col-span-3 space-y-3.5">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center gap-3.5 px-5 py-4 rounded-md transition-all duration-300 text-left group ${
                  activeIndex === index 
                    ? 'bg-[#F97316] text-white shadow-[0_8px_20px_-4px_rgba(249,115,22,0.35)]' 
                    : 'bg-white border border-slate-50 shadow-[0_4px_10px_rgba(0,0,0,0.02)] hover:shadow-md text-[#F97316] hover:bg-slate-50/50'
                }`}
              >
                <div className={`p-1 rounded-lg shrink-0 ${activeIndex === index ? 'text-white' : 'text-[#F97316]'}`}>
                  <service.icon className="w-4.5 h-4.5" />
                </div>
                <span className={`font-bold text-xs lg:text-sm leading-tight ${activeIndex === index ? 'text-white' : 'text-[#F97316]/80'}`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side Content - Compact Style */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[1.25rem] p-4 lg:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100/50 flex flex-col md:flex-row gap-6 lg:gap-8"
              >
                {/* Visual Side - More Compact */}
                <div className="relative rounded-[1rem] overflow-hidden w-full md:w-[42%] aspect-[1.1/1]">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white p-2.5 rounded-lg shadow-md border border-slate-100">
                      <ServiceIcon className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                  </div>
                </div>

                {/* Info Side - More Compact */}
                <div className="flex flex-col flex-1 py-1">
                  <h3 className="text-xl lg:text-2xl font-display font-extrabold text-[#111827] mb-3 tracking-tight uppercase">
                    {activeService.title}
                  </h3>
                  <p className="text-slate-500 text-base lg:text-lg font-semibold leading-relaxed mb-6">
                    {activeService.subtitle}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-[1px] flex-grow bg-sky-50"></div>
                      <span className="text-[9px] font-bold text-slate-400 capitalize whitespace-nowrap">Key technologies</span>
                      <div className="h-[1px] flex-grow bg-slate-50"></div>
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-2.5 mb-8">
                      {activeService.keyTechnologies.map((tech) => (
                        <div
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full border border-slate-100 bg-slate-50/30 text-slate-500 text-[9px] font-bold hover:border-[#F97316] hover:text-[#F97316] transition-all cursor-default"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-[#F97316] text-white py-3.5 rounded-md font-bold text-xs flex items-center justify-center gap-2 group hover:bg-[#EA580C] hover:shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all active:scale-[0.99]">
                      <span>{activeService.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
