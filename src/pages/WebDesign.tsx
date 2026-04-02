import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Palette, Smartphone, ChevronRight, ChevronDown, Monitor, Rocket, Zap, Eye, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- HELPER 3D COMPONENT ---
const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create unique technical particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const colorOptions = [new THREE.Color(0x5e6ad2), new THREE.Color(0xa78bfa), new THREE.Color(0x22d3ee)];
    
    for (let i = 0; i < 2500; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 12;
      vertices.push(x, y, z);
      
      const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors.push(randomColor.r, randomColor.g, randomColor.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create wireframe architectural cubes for specific "Blueprint" depth
    const cubeGroup = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const cubeGeom = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const cubeMat = new THREE.MeshBasicMaterial({ 
        color: 0x5e6ad2, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.03 
      });
      const cube = new THREE.Mesh(cubeGeom, cubeMat);
      cube.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5);
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubeGroup.add(cube);
    }
    scene.add(cubeGroup);

    // Create a "Neural Network" technical cluster for far background depth
    const neuralGroup = new THREE.Group();
    const nodeGeom = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const points = [];
    for (let i = 0; i < 30; i++) {
        const node = new THREE.Mesh(nodeGeom, nodeMat);
        const pos = new THREE.Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 15, -10);
        node.position.copy(pos);
        points.push(pos);
        neuralGroup.add(node);
    }
    
    // Interconnect nodes with faint data lines
    const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.1 });
    const lineNet = new THREE.LineSegments(lineGeom, lineMat);
    neuralGroup.add(lineNet);
    scene.add(neuralGroup);

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0012;
      particles.rotation.z += 0.0006;
      
      cubeGroup.children.forEach((cube) => {
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        cube.position.y += Math.sin(Date.now() * 0.001 + cube.position.x) * 0.002;
      });

      neuralGroup.rotation.y -= 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 400;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 400);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-80 pointer-events-none" />;
};

const servicePillars = [
  {
    tag: "Architectural",
    title: "CUSTOMIZED SOLUTIONS",
    desc: "We deliver Unique Designs tailored specifically to your business DNA. Your website will be distinct, search-engine friendly, and built with high-status coding that influences your success in organic rankings.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
  },
  {
    tag: "Responsive",
    title: "MASTERFUL ADAPTATION",
    desc: "Over 90% of user traffic is mobile. Our team develops fully responsive interfaces with intelligent UX that adapts to any resolution, delivering an amazing user experience regardless of the environment.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    tag: "Conversion",
    title: "DIGITAL IMPACT",
    desc: "An effective website is the core of your digital marketing efforts. We visualize your site from a conversion perspective, turning casual visitors into long-term loyal clients.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
  },
  {
    tag: "Excellence",
    title: "BEAUTIFUL VISUALS",
    desc: "We specialize in creative and innovative approaches. Our dedicated team spends time understanding your business objectives to integrate features that pave the way for your digital success.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1541462608141-ad4d05941400?auto=format&fit=crop&q=80&w=1000"
  }
];

const sidebarServices = [
  { name: "Front End", active: true, links: ["Web Design", "Responsive Websites", "Graphic Design", "Logo Design"] },
  { name: "Web & App Development", links: ["PHP Development", "Ecommerce Portals", "Software Solutions"] },
  { name: "Digital Strategy", links: ["Integrated Marketing", "Web Portals"] }
];

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen">
      {/* ELITE COMPACT LIGHT HEADER WITH CHROMATIC 3D ANIMATION */}
      <div className="relative h-[350px] lg:h-[500px] overflow-hidden bg-white border-b border-slate-100 flex items-center">
         {/* CHROMATIC IRIDESCENT VORTEX */}
         <ThreeBackground />
         
         {/* Subtle pattern overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none" />
         
         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10 w-full">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
               <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.5em] text-[#5e6ad2]">
                     <span>SOLUTIONS</span>
                     <ChevronRight size={10} />
                     <span className="text-slate-400">WEB DESIGN</span>
                  </div>
                  <div className="h-[1px] w-12 bg-slate-100" />
                  <span className="text-[9px] font-black text-[#5e6ad2] uppercase tracking-[0.4em] bg-[#5e6ad2]/5 px-3 py-1 rounded-full border border-[#5e6ad2]/10 italic">Established Global Leader</span>
               </div>
               <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase flex flex-wrap">
                  {"ENGINEERING LEGACY DIGITAL EMPIRES.".split("").map((char, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2 + (i * 0.03), 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className={`${i >= 12 && i <= 17 ? "text-[#5e6ad2]" : ""} ${char === " " ? "mr-4" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
               </h1>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1.5 }}
                 className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed"
               >
                  High-status UX/UI architecture for global enterprise leaders. Precision-engineered solutions refined across two decades of dominant industry innovation.
               </motion.p>
            </motion.div>
         </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-24 bg-[#fdfdff]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* MAIN UNIQUE ALTERNATING COLUMN - LIGHT THEME */}
          <div className="lg:col-span-8 space-y-24 lg:space-y-32">
             {servicePillars.map((pillar, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                   className={`flex flex-col gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                >
                   {/* CONTENT BLOCK WITH UNIQUE BG NUMBER */}
                   <div className="flex-1 space-y-8 relative group">
                      {/* Background Technical Number */}
                      <span className="absolute -top-12 -left-8 text-[140px] font-black text-slate-100 pointer-events-none select-none z-0 tracking-tighter">0{idx + 1}</span>
                      
                      <div className="relative z-10 space-y-6">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#5e6ad2]/10 flex items-center justify-center text-[#5e6ad2] shadow-sm transform group-hover:rotate-12 transition-transform duration-500">
                               <pillar.icon size={22} />
                            </div>
                            <span className="text-[10px] font-black text-[#5e6ad2] uppercase tracking-[0.5em]">{pillar.tag}</span>
                         </div>
                         <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                           {pillar.title}
                         </h2>
                         <p className="text-base lg:text-lg font-medium text-slate-500 leading-relaxed text-justify">
                           {pillar.desc}
                         </p>
                         <button className="flex items-center gap-3 text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] group/btn">
                            Explore Capabilities <div className="w-12 h-[1px] bg-slate-200 group-hover/btn:w-20 group-hover/btn:bg-[#5e6ad2] transition-all" />
                         </button>
                      </div>
                   </div>

                   {/* IMAGE BLOCK WITH FLOATING EFFECT */}
                   <motion.div 
                     whileHover={{ y: -15, rotateX: 2, rotateY: 2 }}
                     className="w-full lg:w-[320px] shrink-0"
                   >
                      <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] relative bg-white border border-slate-100">
                         <img 
                           src={pillar.image} 
                           alt={pillar.title}
                           className="w-full h-full object-cover grayscale-[0.2] transition-all duration-[2s] hover:grayscale-0 hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                      </div>
                   </motion.div>
                </motion.div>
             ))}

             {/* CONCLUSION BLOCK - LUXURY LIGHT GLASS */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 lg:p-20 rounded-[4rem] bg-white border border-slate-100 text-slate-900 relative overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.06)] flex items-center justify-center text-center"
             >
                <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                   <div className="w-20 h-20 mx-auto rounded-3xl bg-[#5e6ad2] flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                      <Zap size={34} fill="currentColor" />
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-black italic tracking-tighter leading-tight text-slate-800 uppercase">
                      "WE PRIORITIZE CREATIVE INNOVATION TO PAVE THE WAY FOR YOUR ONLINE BUSINESS SUCCESS."
                   </h3>
                   <div className="flex items-center justify-center gap-6">
                      <div className="h-[1px] w-16 bg-slate-100" />
                      <span className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-400 italic">Established Global Leader</span>
                      <div className="h-[1px] w-16 bg-slate-100" />
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5e6ad2]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[100px]" />
             </motion.div>
          </div>

          {/* ELITE SIDEBAR - TECHNICAL GLASS */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[120px] self-start space-y-12">
             <div className="bg-white/80 backdrop-blur-xl border border-[#5e6ad2]/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] rounded-[3.5rem] p-10 lg:p-12 overflow-hidden relative">
                <div className="mb-12">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-6 bg-[#5e6ad2] rounded-full" />
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.6em]">SOLUTIONS HUB</span>
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">The Archive</h3>
                </div>
                <div className="space-y-8">
                   {sidebarServices.map((service, sidx) => (
                      <div key={sidx} className="space-y-4">
                         <button className={`w-full flex items-center justify-between p-6 rounded-3xl border transition-all duration-700 group ${service.active ? 'bg-slate-900 text-white border-slate-900 shadow-2xl' : 'bg-white text-slate-900 border-slate-50 hover:border-[#5e6ad2] hover:bg-[#5e6ad2]/5'}`}>
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] leading-none">{service.name}</span>
                            {service.active ? <ChevronDown size={14} className="text-[#5e6ad2]" /> : <ChevronRight size={14} className="opacity-10 group-hover:opacity-100 transition-opacity" />}
                         </button>
                         {service.active && (
                            <ul className="pl-8 space-y-6 border-l border-slate-100 ml-3 py-4">
                               {service.links.map((link, lidx) => (
                                  <li key={lidx} className="flex items-center gap-5 group cursor-pointer">
                                     <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-[#5e6ad2] group-hover:w-6 transition-all duration-500" />
                                     <span className="text-[11px] font-black text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-[0.4em]">{link}</span>
                                  </li>
                               ))}
                            </ul>
                         )}
                      </div>
                   ))}
                </div>
             </div>

             <div className="bg-[#5e6ad2] rounded-[3.5rem] p-14 text-white relative overflow-hidden shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative z-10 space-y-10">
                   <h4 className="text-4xl font-black leading-[0.9] tracking-tighter uppercase">ESTABLISH<br/>YOUR<br/>DIGITAL<br/><span className="text-white/40">LEGACY</span></h4>
                   <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">Refining World-Class Digital Standards Since 2004.</p>
                   <button className="flex items-center gap-4 px-10 py-5 bg-white text-[#5e6ad2] rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl hover:bg-slate-50 transition-colors">
                      CONNECT NOW <ArrowRight size={18} />
                   </button>
                </div>
                <Monitor className="absolute -bottom-16 -right-16 text-white/5 w-72 h-72 group-hover:scale-110 transition-transform duration-[3s]" />
             </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
