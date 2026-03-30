"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandIntro({ onComplete }: { onComplete: () => void }) {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Small delay before logo fades in — lets the dark screen settle
    const t1 = setTimeout(() => setLogoVisible(true), 80);
    // Call onComplete → parent sets showIntro=false → AnimatePresence runs exit
    const t2 = setTimeout(onComplete, 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0B0B0F] flex items-center justify-center"
      style={{ zIndex: 300 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow — extremely subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 25% at 50% 50%, rgba(0,200,83,0.035) 0%, transparent 70%)",
        }}
      />

      {/* Logo — shared layout element with the navbar logo */}
      <motion.div
        layoutId="axion-logo"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: logoVisible ? 1 : 0, scale: logoVisible ? 1 : 0.97 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/logo.png"
          alt="Axion Systems"
          width={220}
          height={58}
          priority
          className="h-14 w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
