import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile detection — tune performance
    const isMobile = window.innerWidth < 768;
    const SPACING = isMobile ? 80 : 40;       // 4x fewer dots on mobile
    const MAX_FPS = isMobile ? 24 : 60;        // throttle on mobile
    const FRAME_INTERVAL = 1000 / MAX_FPS;
    let lastFrame = 0;

    let animId = null;

    // Cache theme so we don't query the DOM every frame
    let isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const observer = new MutationObserver(() => {
      isLight = document.documentElement.getAttribute('data-theme') === 'light';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 100);
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', handleResize);

    const draw = (timestamp = 0) => {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastFrame < FRAME_INTERVAL) return;
      lastFrame = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      const time = timestamp / 1000;

      // Build a single path per dot (arcs share the same radius so we can
      // use a single path object; fillStyle must change per-dot, so we group
      // dots into buckets of 32 alpha steps and flush each bucket together).
      const BUCKETS = 32;
      const paths = Array.from({ length: BUCKETS }, () => new Path2D());

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const phase = (col + row) * 0.3;
          const raw = 0.5 + 0.5 * Math.sin(time * 1.2 + phase);
          const bucket = Math.min(BUCKETS - 1, Math.floor(raw * BUCKETS));
          const p = paths[bucket];
          const cx = col * SPACING;
          const cy = row * SPACING;
          p.moveTo(cx + 1.5, cy);
          p.arc(cx, cy, 1.5, 0, Math.PI * 2);
        }
      }

      for (let b = 0; b < BUCKETS; b++) {
        const raw = (b + 0.5) / BUCKETS;
        const alpha = isLight ? 0.06 + 0.16 * raw : 0.03 + 0.15 * raw;
        ctx.fillStyle = isLight
          ? `rgba(9,105,218,${alpha.toFixed(3)})`
          : `rgba(31,111,235,${alpha.toFixed(3)})`;
        ctx.fill(paths[b]);
      }
    };

    draw();

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',   // compositor hint — reduces layout invalidation
      }}
    />
  );
}
