import { useEffect, useRef, useMemo, useState } from 'react';

interface Node {
  id: string;
  label: string;
  angle: number;
  offsetPhase: number;
}

const skillsData = [
  'Mission-Driven', 'Innovation First', 'Client Partnership',
  'Excellence', 'On-time Delivery', 'Support',
  'Web Solutions', 'IT Partner', 'Mobile Apps', 'Digital Dreams'
];

export default function ForceDirectedGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = useMemo<Node[]>(() => {
    return skillsData.map((skill, i) => {
      return {
        id: skill,
        label: skill,
        angle: (i / skillsData.length) * Math.PI * 2,
        offsetPhase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth || 800;
        canvas.height = containerRef.current.clientHeight || 500;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.0015; // Slow professional rotation
      const scanRotation = Date.now() * 0.0008; // Faster radar scan
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitalRadius = Math.min(canvas.width, canvas.height) * 0.42;

      // 1. Draw Dashed Orbital Ring (Reference Style)
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitalRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); // Reset

      // 1.1 Radar Sweep Animation (Filling the "Empty" space)
      const grad = ctx.createConicGradient(scanRotation, centerX, centerY);
      grad.addColorStop(0, 'rgba(16, 185, 129, 0)');
      grad.addColorStop(0.1, 'rgba(16, 185, 129, 0.15)');
      grad.addColorStop(0.2, 'rgba(16, 185, 129, 0)');
      
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitalRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 2. Draw Nodes on the Ring
      nodes.forEach(node => {
        const currentAngle = node.angle + rotation;
        const floatOffset = Math.sin(Date.now() * 0.001 + node.offsetPhase) * 5;
        
        const nx = centerX + Math.cos(currentAngle) * orbitalRadius;
        let ny = centerY + Math.sin(currentAngle) * orbitalRadius + floatOffset;

        const isHovered = hoveredNode === node.id;
        if (isHovered) ny -= 12;

        const diameter = 70;
        const radius = diameter / 2;

        // Shadow & Glow
        ctx.shadowBlur = isHovered ? 30 : 10;
        ctx.shadowColor = isHovered ? 'rgba(99, 102, 241, 0.4)' : 'rgba(0, 0, 0, 0.05)';

        // White Circle Card
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(nx, ny, radius, 0, Math.PI * 2);
        ctx.fill();

        // High-end Border
        ctx.strokeStyle = isHovered ? 'rgba(99, 102, 241, 0.6)' : 'rgba(16, 185, 129, 0.15)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.shadowBlur = 0;
        
        // Icon
        const icons: Record<string, string> = {
            'Mission-Driven': '🎯', 'Innovation First': '💡', 'Client Partnership': '🤝',
            'Excellence': '⭐', 'On-time Delivery': '🚀', 'Support': '🛠️',
            'Web Solutions': '🌐', 'IT Partner': '🏢', 'Mobile Apps': '📱', 'Digital Dreams': '🌙'
        };
        
        ctx.font = '26px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(icons[node.label] || '🔹', nx, ny - 8);

        // Label (Cleanly Centered Below)
        ctx.fillStyle = isHovered ? '#4f46e5' : '#475569';
        ctx.font = `bold ${isHovered ? '9.5px' : '8.5px'} Inter, system-ui, sans-serif`;
        ctx.fillText(node.label, nx, ny + 18);
      });
    };

    const loop = () => {
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const timer = setTimeout(() => {
        resize();
        loop();
    }, 50);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitalRadius = Math.min(canvas.width, canvas.height) * 0.42;

      let found = null;
      for (const node of nodes) {
        const currentAngle = node.angle + rotation;
        const nx = centerX + Math.cos(currentAngle) * orbitalRadius;
        const ny = centerY + Math.sin(currentAngle) * orbitalRadius;
        
        const dx = mx - nx;
        const dy = my - ny;
        if (Math.sqrt(dx * dx + dy * dy) < 35) {
          found = node.id;
          break;
        }
      }
      setHoveredNode(found);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [nodes, hoveredNode]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-100 flex items-center justify-center">
      <canvas ref={canvasRef} className="pointer-events-auto" />
    </div>
  );
}
