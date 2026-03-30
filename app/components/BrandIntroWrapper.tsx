"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AnimatePresence } from "framer-motion";
import BrandIntro from "./BrandIntro";

// ── Context ──────────────────────────────────────────────────────────────────

interface IntroCtx {
  introComplete: boolean;
}
export const IntroContext = createContext<IntroCtx>({ introComplete: true });
export const useIntro = () => useContext(IntroContext);

// ── Wrapper ──────────────────────────────────────────────────────────────────

const SESSION_KEY = "axion-intro-v1";

export default function BrandIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroComplete(true);
      return;
    }

    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShowIntro(true);
    } else {
      // Return visit — skip intro, reveal hero immediately
      setIntroComplete(true);
    }
  }, []);

  // Called when BrandIntro signals it's ready to be removed (~1500ms in)
  const handleComplete = useCallback(() => {
    setShowIntro(false); // AnimatePresence triggers 600ms exit on BrandIntro

    // Start hero reveal partway through the overlay exit so content appears
    // as the overlay is fading — creates a seamless, layered reveal
    setTimeout(() => setIntroComplete(true), 200);
  }, []);

  return (
    <IntroContext.Provider value={{ introComplete }}>
      <AnimatePresence>
        {showIntro && (
          <BrandIntro key="brand-intro" onComplete={handleComplete} />
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
