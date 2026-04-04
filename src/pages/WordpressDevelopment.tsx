import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe, ShieldCheck, BarChart, Settings, Search, FileText, Layers, TrendingUp, CreditCard } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeWordpressParticles from '../components/ThreeWordpressParticles';

const imgWordpress = "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=2672";

export default function WordpressDevelopment() {
   const { scrollYProgress } = useScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

   const headingChars = "Wordpress Development".split("");
   const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
         opacity: 1,
         transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
      }),
   };
   const child: Variants = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
         } as any,
      },
      hidden: { opacity: 0, y: 30 },
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => ScrollTrigger.refresh(), 500);
   }, []);

   const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
      const words = text.split(" ");
      return (
         <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
         >
            {words.map((word, i) => (
               <motion.span 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.01, duration: 0.5 }}
                  className="inline-block mr-[0.25em]"
               >
                  {word}
               </motion.span>
            ))}
         </motion.p>
      );
   };

   return (
      <div className="pt-[80px] bg-white min-h-screen font-primary overflow-x-hidden">
         {/* HERO SECTION */}
         <section className="relative h-[250px] lg:h-[280px] flex items-center justify-center bg-[#fafbff] border-b border-indigo-50/50 overflow-hidden">
            <ThreeWordpressParticles />
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ opacity, scale }}
                  className="space-y-6"
               >
                  <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-[0.06em] uppercase flex justify-center flex-wrap">
                     {headingChars.map((char, index) => (
                        <motion.span key={index} variants={child} className={index >= 10 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 whitespace-pre" : "whitespace-pre"}>
                           {char}
                        </motion.span>
                     ))}
                  </h1>
                  <p className="text-[10px] lg:text-[13px] font-black text-slate-500 uppercase tracking-[0.25em] max-w-4xl mx-auto leading-relaxed text-center">
                     Welcome to WebUltraSolution, a premier WordPress development firm dedicated to crafting exceptional and resilient websites.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* MAIN CONTENT PORTAL - TEXT ONLY FROM DOCUMENT */}
         <section className="relative py-12 bg-white overflow-hidden border-t border-slate-50">
            <div className="relative z-10 max-w-[1300px] mx-auto px-8 lg:px-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-50 pb-16">
                  
                  {/* LEFT COLUMN: PRIMARY NARRATIVE */}
                  <div className="lg:col-span-8 space-y-10">
                     <div className="space-y-6">
                        <div className="flex items-center gap-2">
                           <div className="h-[2px] w-8 bg-indigo-600" />
                           <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.4em]">Strategic Hub</span>
                        </div>
                        <h2 className="text-3xl lg:text-[2.8rem] font-black text-slate-900 tracking-[0.06em] uppercase leading-[0.9] max-w-2xl relative">
                           Wordpress <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700">Development.</span>
                        </h2>
                        <AnimatedText
                           className="text-[15px] lg:text-[16px] font-black text-slate-800 leading-relaxed tracking-tight border-l-4 border-indigo-600 pl-4"
                           text="At webultrasolution, we are a leading WordPress development company that creates stunning and robust websites for businesses of all types and sizes. With a huge client base spanning across industries, we take pride in the fact that we have provided 100% results and on-time delivery, every-time for all our clients."
                        />
                        <AnimatedText
                           className="text-[13px] text-slate-700 font-bold leading-relaxed opacity-80"
                           text="Our WordPress developer team consists of result-oriented professionals who make sure that they deliver unique websites that are custom-made to meet the specific business requirements of every client."
                        />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
                        <div className="space-y-4">
                           <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                              <div className="w-4 h-px bg-slate-200" />
                              Benefits & Utility
                           </h3>
                           <AnimatedText
                              className="text-[13px] text-slate-700 font-bold leading-relaxed opacity-70"
                              text="Word Press is a great product. It’s easy-to-use, quite powerful, and flexible. Creating a website, and maintaining a website, is a science and art that has quickly evolved. In order to fully appreciate this, it is important to be well read on the subject."
                           />
                           <AnimatedText
                              className="text-[13px] text-slate-800 font-bold leading-relaxed"
                              text="One major thing to keep in mind is your investment of time. Being knowledgeable will without a doubt save you much time in the long run. before you invest your valuable time and energy into installing Word Press, there are some documents you need to read to help you get started."
                           />
                        </div>
                        <div className="space-y-4">
                           <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                              <div className="w-4 h-px bg-slate-200" />
                              Business Impact
                           </h3>
                           <AnimatedText
                              className="text-[13px] text-slate-700 font-bold leading-relaxed opacity-70"
                              text="Many successful bricks-and-mortar business owners, on buying a domain, go into the experience with high hopes. Floods of traffic! Huge revenues! Automated fun! These days, businesses are often required to use highly responsive websites; a text blurb and an email link no longer count as a true website."
                           />
                           <AnimatedText
                              className="text-[13px] text-slate-800 font-bold leading-relaxed"
                              text="Business owners can mop up extra gravy online, but not if their website is a big Word Press Screenshot belly flop."
                           />
                        </div>
                     </div>
                  </div>

                  {/* RIGHT COLUMN: SPECS & SPECIALIZATION PORTAL */}
                  <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                     <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-indigo-500/[0.03] space-y-4 hover:border-indigo-100/50 transition-all group">
                        <h3 className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.3em] flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                           Core Specialization
                        </h3>
                        <div className="space-y-1.5">
                           {[
                              "WordPress Web Development",
                              "WordPress eCommerce Hub",
                              "PSD to WordPress Conversion",
                              "Migration and Update",
                              "WordPress Customization",
                              "Maintenance and Support"
                           ].map((item, i) => (
                              <motion.div 
                                 key={i} 
                                 whileHover={{ x: 3 }}
                                 className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-slate-50/50 border border-slate-100 font-bold text-slate-800 text-[10px] transform-gpu transition-all hover:bg-white hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 cursor-default group/item"
                              >
                                 <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover/item:scale-125 transition-transform" />
                                 {item}
                              </motion.div>
                           ))}
                        </div>
                     </div>

                     <div className="p-5 rounded-2xl bg-white text-slate-900 border border-slate-100 space-y-4 shadow-xl shadow-indigo-500/[0.03] hover:shadow-2xl hover:border-indigo-100/50 transition-all relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                        <h3 className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.3em]">Conversion Targets</h3>
                        <div className="space-y-3">
                           {[
                              { icon: Globe, text: "Responsive themes to target mobile traffic" },
                              { icon: TrendingUp, text: "Social media integration to increase engagement" },
                              { icon: Settings, text: "Custom WP solutions for full control" },
                              { icon: Search, text: "SEO friendly architecture" },
                              { icon: ShieldCheck, text: "High-end Security Implementation" }
                           ].map((item, i) => (
                              <div key={i} className="flex items-start gap-3 group/item">
                                 <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-500 mt-0.5 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all shadow-sm">
                                    <item.icon size={12} />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-600 leading-tight group-hover/item:text-slate-900 transition-colors">{item.text}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* DETAILED BUSINESS PILLARS - TEXT ONLY FROM DOCUMENT */}
               <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                     {
                        id: "1",
                        title: "Ecommerce Plugins",
                        desc: "If business isn't ultimately about generating money, what is it? WP's broad array of e-commerce plugins, including Woo Commerce, Market Press, and Color Shop set up virtual storefronts within your site. Business owners can lead online shoppers directly to their shops, or establish trust and connection on other pages.",
                        icon: CreditCard
                     },
                     {
                        id: "2",
                        title: "WordPress SEO Tools",
                        desc: "All In One SEO and Yoast have given a strong boast to Word Press SEO. When you want to boost your local following, or you need to focus on an industry-specific keyword, WP’s SEO tools are about as quick as you can have. All In One SEO exposes the Meta fields you need to add keywords, search titles, and search descriptions.",
                        icon: Search
                     },
                     {
                        id: "3",
                        title: "Content Structuring",
                        desc: "Drupal isn't the only player in the taxonomy game. While the Drop is king of complex organization, the platform's learning curve as a DIY system may be forbidding to some. With WP, there are multiple solutions for your organizational problems, like List by Post, which automatically organizes posts on a page according to the category.",
                        icon: Layers
                     },
                     {
                        id: "4",
                        title: "WordPress Invoicing",
                        desc: "While you're busy building your website, you don't really need to dig out your invoicing software. As your other plugins bring in money and business, either they can do the invoicing themselves, or you can use plugins dedicated entirely to invoicing.",
                        icon: FileText
                     }
                  ].map((pillar, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group p-6 rounded-2xl bg-gradient-to-br from-white via-white to-slate-50 border border-slate-100 shadow-xl shadow-indigo-500/[0.03] hover:shadow-2xl transition-all duration-500 space-y-4"
                     >
                        <div className="flex items-center gap-6">
                           <div className="text-[3rem] font-black text-slate-300 leading-none transition-colors group-hover:text-indigo-200 select-none">{pillar.id}</div>
                           <div className="p-2.5 rounded-xl bg-white border border-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                              <pillar.icon size={18} />
                           </div>
                           <h3 className="text-lg lg:text-xl font-black text-slate-900 uppercase tracking-[0.06em] leading-none">{pillar.title}</h3>
                        </div>
                        <AnimatedText
                           className="text-[12px] lg:text-[13px] text-slate-600 font-medium leading-relaxed max-w-xl"
                           text={pillar.desc}
                        />
                     </motion.div>
                  ))}
               </div>

            </div>
         </section>
      </div>
   );
}
