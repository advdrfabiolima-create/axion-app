"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  green: boolean;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    let raf: number;
    let t = 0;
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // ── Size ──────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Particles ─────────────────────────────────────────────────────
    const count = isMobile ? 22 : 55;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 0.7 + Math.random() * 1.6,
      opacity: 0.07 + Math.random() * 0.18,
      vx: (Math.random() - 0.5) * 0.11,
      vy: -(0.04 + Math.random() * 0.14), // gentle upward drift
      green: Math.random() > 0.62,
    }));

    // ── Mouse parallax (desktop only) ─────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseTargetX = (e.clientX / window.innerWidth - 0.5) * 10;
      mouseTargetY = (e.clientY / window.innerHeight - 0.5) * 6;
    };
    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    // ── Render loop ───────────────────────────────────────────────────
    const draw = () => {
      t += 0.007;

      // Smooth parallax interpolation
      mouseX += (mouseTargetX - mouseX) * 0.045;
      mouseY += (mouseTargetY - mouseY) * 0.045;
      if (!isMobile) {
        canvas.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Breathing glow pulse ──
      const pulseOpacity = 0.042 + Math.sin(t * 0.6) * 0.022;
      const gx = canvas.width * 0.64;
      const gy = canvas.height * 0.47;
      const gRadius = Math.max(canvas.width, canvas.height) * 0.4;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gRadius);
      grad.addColorStop(0,   `rgba(0,200,83,${pulseOpacity})`);
      grad.addColorStop(0.45, `rgba(0,200,83,${(pulseOpacity * 0.28).toFixed(3)})`);
      grad.addColorStop(1,   "rgba(0,200,83,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Particles ──
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap vertically — reset at bottom with random x
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        // Wrap horizontally
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.green
          ? `rgba(0,200,83,${p.opacity})`
          : `rgba(185,210,198,${p.opacity})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (!isMobile) window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
