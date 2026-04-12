import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  PieChart,
  Shield,
  Zap,
  ArrowRight,
  Globe,
  Sparkles,
  Monitor,
  Activity,
  Database,
  Layers,
  Briefcase,
  Settings
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

const crmPillars = [
  {
    tag: "Software Overview",
    title: "WHAT IS CRM SOFTWARE?",
    desc: "A tool known as customer relationship management (CRM) is used to handle all interactions and relationships between your business and its clients. The objective is straight forward: to strengthen business ties. CRM systems assist businesses in maintaining contact with clients, streamlining procedures, and boosting profitability. When people talk about CRM, they usually refer to a CRM system or platform, a tool that helps with contact management, sales management, productivity, and more.\n\nThe use of CRM software enables you to concentrate on the relationships that your business has with specific individuals, such as clients, service users, coworkers, or suppliers, over the course of the entire lifecycle of the relationship. This includes acquiring new clients, earning their business, and maintaining and enhancing existing relationships.",
    icon: Database,
    image: "/images/crm_analytics.png"
  },
  {
    tag: "Target Audience",
    title: "WHO IS CRM SOFTWARE FOR?",
    desc: "A CRM system gives everyone a better way to manage the external contacts and relationships that are essential to success, whether they work in sales, customer service, business development, recruiting, marketing, or any other area of the company. With CRM software, you can manage marketing campaigns, track service issues, identify sales opportunities, and store customer and prospect contact information all in one convenient location. You can also make data about every customer interaction accessible to anyone at your company who might need it.\n\nCollaboration and productivity can be increased with visibility and simple access to data. Everyone in your firm has access to information about consumers, including how they were approached, what they purchased, when they most recently did so, how much they paid, and much more. CRM solutions can be especially helpful to a small firm, as teams frequently need to find methods to do more with less.",
    icon: Users,
    image: "/images/crm_matrix.png"
  },
  {
    tag: "Strategic Growth",
    title: "THE IMPORTANCE OF CRM FOR YOUR BUSINESS",
    desc: "Since CRM software is the most popular and quickly expanding subset of enterprise application software, its significance is growing. By 2027, it is anticipated that global CRM spending will amount to $114.4 billion USD. If you want your firm to last, you need a future strategy that is focused on your consumers and supported by the appropriate technology. You have goals for your business's goals, profitability, and sales. Yet, obtaining current, accurate information about your development can be challenging.\n\nA CRM system can give you a clear overview of your customers. You can see everything in one place — a simple, customizable dashboard that can tell you a customer's previous history with you, the status of their orders, any outstanding customer service issues, and more.",
    icon: PieChart,
    image: "/images/crm_pipeline.png"
  },
  {
    tag: "Operational Risk",
    title: "RUNNING A BUSINESS WITHOUT CRM SOFTWARE CAN COST YOU.",
    desc: "More administration means less time for everything else. An active sales team can generate a flood of data. Reps are out on the road talking to customers, meeting prospects, and finding out valuable information - but all too often this information gets stored in handwritten notes, laptops, or inside the heads of your salespeople.\n\nDetails can get lost, meetings are not followed up on promptly, and prioritizing customers can be a matter of guesswork rather than a rigorous exercise based on fact. Your customers may be contacting you on a range of different platforms including phone, email, or social media — asking questions, following up on orders, or contacting you about an issue.",
    icon: Shield,
    image: "/marketing_dashboard.png"
  },
  {
    tag: "Core Functionality",
    title: "WHAT DOES A CRM SYSTEM DO?",
    desc: "A customer relationship management (CRM) solution organizes customer and prospect information in a way that enables you to forge deeper ties with them and expand your business more quickly. It helps you locate new clients, more their business, and keep them satisfied. CRM systems begin by gathering information about a client from their website, email, phone, social media, and other sources.\n\nA CRM platform can also connect to other business apps that help you to develop customer relationships. CRM solutions today are more open and can integrate with your favourite business tools, such as document signing, accounting and billing, and surveys.",
    icon: Settings,
    image: "/images/crm_login.png"
  }
];

const crmBullets = [
  "Sugar CRM is one of the popular Customer Relationship Management(CRM) Software.",
  "Webtrakresolution offers hosting services for CRM with SugarCRM. We provide free SugarCRM installation, powerful servers for great CRM performance, high quality customer service.",
  "CRM is one of the popular Customer Relationship Management(CRM) Software.",
  "Webtrakresolution offers hosting services for CRM. We provide free CRM installation, powerful servers for great CRM performance, high quality customer service."
];

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<'admin' | 'customer'>('admin');

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary">
      {/* CINEMATIC FULL-BLEED HEADER */}
      <div className="relative min-h-[280px] lg:min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden border-b border-orange-100/50">
        <ThreeNeuralStorm />

        {/* Content Core */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 lg:space-y-6">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] rounded-md shadow-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Advanced Client Intelligence</span>
            </motion.div>

            <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto">
              Customer Relationship <span className="text-[#FF6600]">Management.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-slate-600 text-xs lg:text-sm font-semibold max-w-2xl leading-relaxed"
            >
              CRM is one of the popular Customer Relationship Management (CRM) Software. Engineered for total ecosystem dominance.
            </motion.p>
          </div>

          {/* REFINED BADGE STACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {[
              { label: 'Sugar CRM Integration', icon: Globe },
              { label: 'Enterprise Hosting', icon: Sparkles },
              { label: 'AI Analytics', icon: Monitor }
            ].map((feature, i) => (
              <div key={i} className="px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-md flex items-center gap-2.5 transition-all hover:shadow-xl hover:-translate-y-0.5 group">
                <div className="w-7 h-7 rounded-md bg-orange-50 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                  <feature.icon size={14} />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-widest">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* INITIAL STRATEGY BULLETS - AS SHOWN IN IMAGE */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                Strategic <span className="text-[#FF6600]">Solutions.</span>
              </h2>
              <ul className="space-y-4">
                {crmBullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FF6600] flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-sm font-semibold text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {bullet}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[480px] w-full"
              >
                <img src="/images/crm_login.png" alt="CRM Interface" className="w-full h-auto object-cover" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF6600]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">

          {/* MAIN CONTENT PILLARS - AS SHOWN IN IMAGE */}
          <div className="flex flex-col gap-10 lg:gap-16">
            {crmPillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                {/* IMAGE SECTION */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[45%] relative h-[250px] lg:h-[320px] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group/img cursor-pointer bg-slate-100"
                >
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10" />
                  <span className={`absolute bottom-6 ${idx % 2 === 0 ? "right-6" : "left-6"} text-4xl font-display font-bold text-white/60 select-none tracking-tighter italic`}>0{idx + 1}</span>
                </motion.div>

                {/* CONTENT SECTION */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[55%] space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-[#FF6600]/10 rounded-full blur-lg animate-pulse" />
                        <div className="relative w-12 h-12 rounded-md bg-[#FF6600] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                          <pillar.icon size={22} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-[2px] bg-[#FF6600]" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">{pillar.tag}</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-display font-extrabold tracking-tight uppercase leading-[1.1] text-slate-950 group-hover:text-[#FF6600] transition-colors duration-500">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-sm lg:text-base font-semibold leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors whitespace-pre-wrap">
                      {pillar.desc}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* LOGIN ACTIONS SECTION - AS SEEN IN IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="py-6 border-y border-slate-100 flex flex-col items-center gap-5"
          >
            <div className="text-center space-y-2">
              <h3 className="text-xl lg:text-2xl font-display font-extrabold uppercase text-slate-900">Access Your <span className="text-[#FF6600]">Ecosystem.</span></h3>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Select your portal for secure verification</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('admin')}
                className={`px-8 py-3 font-bold rounded-md shadow-xl transition-all uppercase text-xs tracking-widest ${activeTab === 'admin' ? 'bg-[#FF6600] text-white shadow-orange-500/20 -translate-y-1' : 'bg-slate-100 text-slate-400 hover:text-slate-600'}`}
              >
                Administrators login
              </button>
              <button 
                onClick={() => setActiveTab('customer')}
                className={`px-8 py-3 font-bold rounded-md shadow-xl transition-all uppercase text-xs tracking-widest ${activeTab === 'customer' ? 'bg-[#FF6600] text-white shadow-orange-500/20 -translate-y-1' : 'bg-slate-100 text-slate-400 hover:text-slate-600'}`}
              >
                Customers login
              </button>
            </div>
          </motion.div>

          {/* SCREENSHOT GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === 'admin' ? [
              { img: "/images/crm_login.png", label: "Verification Terminal" },
              { img: "/images/crm_analytics.png", label: "Neural Insights" },
              { img: "/images/crm_matrix.png", label: "Client Matrix" },
              { img: "/images/crm_pipeline.png", label: "Pipeline Orchestration" }
            ] : [
              { img: "/images/crm_client.png", label: "Client Dashboard" },
              { img: "/images/crm_support.png", label: "Support Terminal" },
              { img: "/images/crm_profile.png", label: "Verification Vault" },
              { img: "/images/crm_login.png", label: "Secure Access" }
            ]).map((item, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 cursor-pointer"
              >
                <img src={item.img} alt={item.label} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xs font-black uppercase tracking-[0.3em]">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONCLUSION BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative py-10 lg:py-14 px-8 rounded-md bg-[#0d0d0f] text-white overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center group/panel cursor-default"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,102,0,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-4">
              <div className="w-12 h-12 mx-auto rounded-md bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] shadow-xl group-hover:scale-110 transition-transform duration-700">
                <Zap size={24} />
              </div>

              <div className="relative">
                <h3 className="text-sm lg:text-lg font-display font-medium tracking-tight leading-relaxed text-slate-200 max-w-2xl mx-auto italic">
                  "We specialize in creative and innovative approaches to CRM deployment and development. Our primary goal is to integrate new features that pave the way for the success of your online business."
                </h3>
              </div>

              <div className="flex items-center justify-center gap-8 pt-4">
                <div className="h-[1px] w-24 bg-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-orange-500">Elite Standards</span>
                <div className="h-[1px] w-24 bg-white/10" />
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF6600] rounded-full blur-[100px]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
