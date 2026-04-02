import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const partners = [
  { name: 'Justdial', logo: '/images/justdial.png', color: 'text-orange-600' },
  { name: 'Manta', logo: '/images/manta.png', color: 'text-rose-500' },
  { name: 'Wellfound', logo: '/images/wellfound.png', color: 'text-slate-800' },
  { name: 'Trade India', logo: '/images/tradeindia.png', color: 'text-red-600' },
  { name: 'Sulekha', logo: '/images/sulekha.png', color: 'text-blue-600' },
  { name: 'Sitejabber', logo: '/images/sitejabber.png', color: 'text-indigo-600' },
];

export default function Listing() {
  const listRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-card', {
        opacity: 0,
        scale: 0.9,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 85%'
        }
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={listRef}
      className="relative py-24 bg-gradient-to-tr from-teal-400/20 via-white/5 to-rose-500/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-800 text-center mb-16 uppercase tracking-tight">
          Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-rose-600">Listing</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((partner, i) => (
            <div 
              key={i}
              className="partner-card group relative p-6 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 hover:border-accent-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Fallback to text logo if images aren't present - elite typography */}
              <div className={`text-xl font-display font-black tracking-tight ${partner.color} group-hover:scale-110 transition-transform duration-500 px-4 text-center`}>
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
