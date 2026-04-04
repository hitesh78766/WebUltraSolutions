import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Star, Quote, MessageSquare, Zap, Heart } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';
import ParticleNetwork from '../components/ParticleNetwork';

const reviews = [
  { name: "John Davis", role: "CEO, TechSphere USA", text: "WebUltraSolution has been our definitive offshore partner for over 4 years. Their technical rigor and architectural precision are unmatched.", rating: 5, accent: 'indigo' },
  { name: "Maria Garcia", role: "Product Head, RetailFlow", text: "The UI/UX expertise they bring to the table transformed our user engagement metrics. Truly a world-class team with high-status solutions.", rating: 5, accent: 'blue' },
  { name: "Robert Wilson", role: "CTO, GlobalTrade Hub", text: "Scaling our infrastructure was seamless. Their 24/7 reliability and expert coordination helped us achieve 100% time-to-market success.", rating: 5, accent: 'indigo' },
  { name: "Elena Petrova", role: "Founder, LuxeIdentity", text: "The most trusted partner we've ever worked with. Every pixel and line of code resonates with excellence. I highly recommend them.", rating: 5, accent: 'blue' },
  { name: "Satoshi Tanaka", role: "Marketing Director, DigitalCore", text: "Strategic SEO and global engagement success. They don't just build, they ensure impact across every geographical boundary.", rating: 5, accent: 'indigo' },
  { name: "Sarah Miller", role: "Lead Designer, VisionaryCo", text: "Crafting digital identities with meticulous attention to detail. WebUltraSolution's commitment to our vision was unwavering.", rating: 5, accent: 'blue' }
];

const Feedback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const headingChars = "CLIENT FEEDBACK.".split("");

  return (
    <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center bg-[#fafaff] border-b border-indigo-100/30 overflow-hidden">
        <ThreeNeuralStorm />
        <ParticleNetwork />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tighter uppercase flex justify-center flex-wrap">
              {headingChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={index >= 7 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 whitespace-pre" : "whitespace-pre"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
              Resonating Excellence Across Global Enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="space-y-16">
            
            {/* Header Narrative */}
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-indigo-600" />
                <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em]">Voice of Partners</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                Delivering <span className="text-indigo-600 not-italic">Proven Results.</span>
              </h2>
              <p className="text-[16px] lg:text-[18px] font-bold text-slate-700 leading-relaxed font-secondary">
                The success of WebUltraSolution is intricately tied to the achievements of our global corporate clients. Here is what they have to say about our uncompromising technical standards.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="p-10 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all h-[380px] group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote size={80} className="text-indigo-600 rotate-12" />
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-1 text-indigo-500">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[15px] lg:text-[16px] text-slate-700 font-bold leading-relaxed italic group-hover:text-indigo-900 transition-colors">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-tighter leading-none italic">{review.name}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{review.role}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl ${review.accent === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                      <ShieldCheck size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* METRIC NARRATIVE */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { label: "Positive Feedback", icon: Heart, value: "100%" },
                { label: "Execution Speed", icon: Zap, value: "2X Fast" },
                { label: "Trusted Partners", icon: MessageSquare, value: "500+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
                    <stat.icon size={24} />
                  </div>
                  <span className="text-2xl font-black text-slate-900 italic tracking-tighter">{stat.value}</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Global <span className="text-indigo-600">Trust</span></h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Consistency is the hallmark of WebUltraSolution's commitment to our global corporate partners. Every feedback drives our pursuit of digital excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><ThreeNeuralStorm /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Become Our Next <span className="text-indigo-400 not-italic">Success Story.</span>
          </h2>
          <p className="text-slate-400 text-lg font-bold">Uncompromising precision. Proven Results. Global Reach.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Connect Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
