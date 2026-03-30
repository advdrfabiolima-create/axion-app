"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Intro logo dimensions — significantly larger than navbar
const LOGO_W = 300;
const LOGO_H = Math.round(LOGO_W * (52 / 200)); // ≈ 62px  (preserves source aspect ratio)

type MoveTarget = { x: number; y: number; scale: number };

export default function BrandIntro({ onComplete }: { onComplete: () => void }) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [target, setTarget] = useState<MoveTarget | null>(null);

  useEffect(() => {
    // Phase 1 — logo fades in (delay 80ms)
    const t1 = setTimeout(() => setLogoVisible(true), 80);

    // Phase 2 — measure real navbar logo position, start movement
    const t2 = setTimeout(() => {
      const el = document.querySelector<HTMLElement>("[data-nav-logo]");
      if (el) {
        const r = el.getBoundingClientRect();
        setTarget({
          // delta from viewport center to navbar logo center
          x: r.left + r.width / 2 - window.innerWidth / 2,
          y: r.top + r.height / 2 - window.innerHeight / 2,
          // scale so intro logo visually matches navbar logo height
          scale: r.height / LOGO_H,
        });
      } else {
        // fallback: move up and scale if element not found
        setTarget({ x: 0, y: -(window.innerHeight / 2 - 32), scale: 0.28 });
      }
    }, 2050);

    // Phase 3 — signal parent to unmount (triggers AnimatePresence exit)
    const t3 = setTimeout(onComplete, 2500);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // Logo animate state
  const logoAnimate = target
    ? { x: target.x, y: target.y, scale: target.scale, opacity: 1 }
    : logoVisible
    ? { x: 0, y: 0, scale: 1, opacity: 1 }
    : { x: 0, y: 0, scale: 0.95, opacity: 0 };

  const logoTransition = target
    ? {
        x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
        y: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
        scale: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
        opacity: { duration: 0 }, // opacity stays 1 while moving; overlay fades it
      }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    // Whole overlay fades out when AnimatePresence removes this component
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#0B0B0F]"
      style={{ zIndex: 300 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Extremely subtle green ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 44% 26% at 50% 50%, rgba(0,200,83,0.032) 0%, transparent 70%)",
        }}
      />

      {/* Logo — starts centered and large, then moves to measured navbar position */}
      <motion.div
        animate={logoAnimate}
        transition={logoTransition}
        style={{ originX: "50%", originY: "50%" }}
      >
        <Image
          src="/logo.png"
          alt="Axion Systems"
          width={LOGO_W}
          height={LOGO_H}
          priority
          style={{ width: LOGO_W, height: "auto" }}
        />
      </motion.div>
    </motion.div>
  );
}
