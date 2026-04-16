import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShoppingCart, Cloud, Zap, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ResponsiveDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Smooth Entrance Reveal
    gsap.fromTo(textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="responsive"
      className="relative py-10 lg:py-16 bg-white overflow-hidden"
    >
      {/* Background Soft Glows (Ultra-Compact) */}
      <div className="absolute top-[20%] -right-[15%] w-[30%] h-[40%] bg-[#FFF1E6] rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[25%] h-[35%] bg-[#F5F3FF] rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Main Section Header - Ultra Compact */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-display font-bold text-[#111827] tracking-tight leading-[1.1] uppercase">
            We've Helped Leaders <span className="text-[#FF6600]">Outlast Trends.</span> Your Turn?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left Column: Narrative (Tighter) */}
          <div ref={textRef} className="lg:w-[48%] space-y-5">
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-[#111827] leading-[1.1] tracking-tight uppercase">
                Global Presence. 500+ elite engineers. <br /> <span className="text-[#FF6600]">100+ Digital Transformations.</span>
              </h3>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed max-w-lg">
                While others chase fads, we build digital legacies— <span className="text-[#111827] font-bold">750+ eCommerce empires</span>, <span className="text-[#111827] font-bold">50+ Cloud foundations</span>, <span className="text-[#111827] font-bold">75+ AI systems</span> dominant for decades.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-[#FF6600] hover:bg-[#EA580C] text-white px-5 py-3 rounded-md font-bold text-[12px] capitalize tracking-widest transition-all shadow-xl shadow-orange-500/20 active:scale-95 group">
              <span>Power My Tech Capability</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: The Legacy Card (Ultra Compact) */}
          <div ref={cardRef} className="lg:w-[48%] relative group">
            <div className="absolute inset-x-4 -bottom-4 h-full bg-[#111827]/5 blur-3xl rounded-md -z-10 group-hover:bg-[#111827]/10 transition-colors" />

            <div className="bg-[#4C1D95] rounded-md lg:md-[1.5rem] overflow-hidden shadow-[12px_25px_50px_-15px_rgba(76,29,149,0.12)] border border-[#5B21B6]/15">

              {/* Card Header (Purple - Ultra Compact) */}
              <div className="px-6 py-5 lg:py-4.5 flex items-center gap-3.5 border-b border-white/10">
                <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center border border-white/20">
                  <Award className="text-orange-500 w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-white tracking-tight">Digital Legacies</h4>
                  <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-none pt-0.5">Built to Last Decades</p>
                </div>
              </div>

              {/* Card Body (White - Nano Props) */}
              <div className="bg-white p-5 lg:p-6">
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Stat Box 1 */}
                  <div className="group/stat bg-[#FBFBFC] border border-slate-100 p-3 rounded-md flex flex-col items-center justify-center gap-1.5 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50">
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center">
                      <ShoppingCart className="w-3 h-3 text-[#FF6600]" strokeWidth={3} />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#111827]">750+</div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight leading-tight pt-1">eCommerce <br /> Empires</p>
                    </div>
                  </div>

                  {/* Stat Box 2 */}
                  <div className="group/stat bg-[#FBFBFC] border border-slate-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50">
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center">
                      <Cloud className="w-3 h-3 text-[#FF6600]" strokeWidth={3} />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#111827]">50+</div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight leading-tight pt-1">Cloud <br /> Foundations</p>
                    </div>
                  </div>

                  {/* Stat Box 3 */}
                  <div className="group/stat bg-[#FBFBFC] border border-slate-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50">
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center">
                      <Zap className="w-3 h-3 text-[#FF6600]" strokeWidth={3} />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#111827]">75+</div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight leading-tight pt-1">AI <br /> Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer (Purple - Ultra Compact) */}
              <div className="px-6 py-6 lg:py-6 bg-[#4C1D95] flex flex-col items-center gap-3.5">
                <h5 className="text-lg md:text-base lg:text-xl font-bold text-white tracking-tight">Join the Legacy</h5>
                <button className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-md font-bold text-[12px] capitalize tracking-widest transition-all shadow-xl shadow-orange-500/20 active:scale-95 group">
                  <span>View Success Stories</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

