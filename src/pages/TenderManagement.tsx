import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, UserCheck, UploadCloud, Search, CheckCircle2, Star, Target, Monitor, ShieldCheck, Cpu, Globe, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

gsap.registerPlugin(ScrollTrigger);

export default function TenderManagement() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const seoFeatures = [
    { text: "In Tender Management Companies can pay for RTM/Specification document online", icon: FileText },
    { text: "Automated Email Notification", icon: Mail },
    { text: "Email Verification", icon: Mail },
    { text: "Supplier Registration or not", icon: UserCheck },
    { text: "Upload Files In the format of DOC, PDF, RTF, TXT", icon: UploadCloud }
  ];

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">
      
      {/* 1:1 Flagship Hero Sync - WebDesign Architecture */}
      <section className="relative min-h-[380px] lg:h-[400px] flex items-center justify-center overflow-hidden border-b border-orange-100 pt-[80px]">
        <div className="absolute inset-0 z-0">
          <ThreeNeuralStorm color="#FF6600" bgOpacity={0} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6 lg:space-y-8">

          <div className="space-y-6">
            <h1 className="font-system-hero font-display font-bold text-dark tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto text-3xl lg:text-5xl">
               {(() => {
                  const words = "TENDER MANAGEMENT SOFTWARE".split(" ");
                  return words.map((word, wordIdx) => (
                     <span key={wordIdx} className="inline-block whitespace-nowrap mr-3 last:mr-0">
                        {word.split("").map((char, charIdx) => (
                           <motion.span
                              key={`${wordIdx}-${charIdx}`}
                              initial={{ opacity: 0, y: -40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                 type: "spring", stiffness: 200, damping: 12,
                                 delay: 0.1 + (wordIdx * 0.08) + (charIdx * 0.015)
                              }}
                              className={`inline-block ${word === "MANAGEMENT" ? "text-[#FF6600]" : ""}`}
                           >
                              {char}
                           </motion.span>
                        ))}
                     </span>
                  ));
               })()}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xs md:text-sm lg:text-base font-semibold text-slate-600 leading-relaxed w-full  px-6 md:px-0 capitalize tracking-widest"
            >
              We have developed ERP Software, Security Management software, and so many software products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* High-Density Content Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          
          <div className="space-y-4 max-w-5xl">
            <h2 className="text-2xl lg:text-3xl font-display font-bold uppercase tracking-widest leading-tight">
              <span className="text-slate-950">TENDER</span> <span className="text-[#FF6600]">MANAGEMENT SOFTWARE</span>
            </h2>
            
            <p className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed tracking-wide border-l-4 border-[#FF6600] pl-6 py-1">
              Webultrasolution Services Pvt. Ltd. Is Website Designing Company & Software Development Company. We have developed ERP Software, Security Management software, and so many software products. The Tender Management starts when a suitable Invitation To Tender (ITT) has been identified. Enterprise or Government sector has to regularly deal with various type of work which required Invitation of tender, select a proper supplier for work; compare different estimation with cost, previous work etc. Tender Management Software help to start with New Tender to Resubmission/verification of previously launched tender.
            </p>
          </div>

          {/* SEO Section - Compact Grid */}
          <div className="pt-6 border-t border-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-[#FF6600]" size={18} />
              <h3 className="text-xl lg:text-2xl font-display font-bold uppercase tracking-widest">
                <span className="text-slate-950">SEO</span> <span className="text-[#FF6600]">SYSTEM</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 gap-2">
                {seoFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-4 p-3 border border-slate-100 bg-slate-50/20 rounded shadow-sm group hover:bg-white transition-all duration-300">
                    <CheckCircle2 className="text-[#FF6600] shrink-0 mt-0.5" size={14} />
                    <span className="text-xs lg:text-sm font-bold capitalize tracking-widest text-slate-500 group-hover:text-slate-950 leading-relaxed">
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-12 xl:col-span-5 relative mt-4 xl:mt-0">
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-xl p-1 bg-white hover:border-orange-100 transition-all duration-500">
                   <img 
                     src="/tender_lifecycle.png" 
                     alt="Tender Process Lifecycle" 
                     className="w-full h-auto md:h-60 lg:h-auto rounded grayscale-[30%] hover:grayscale-0 transition-all duration-700 object-cover" 
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
