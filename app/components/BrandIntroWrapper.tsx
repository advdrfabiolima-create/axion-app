"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import BrandIntro from "./BrandIntro";

// ── Context ─────────────────────────────────────────────────────────────────

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
    // Skip intro if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroComplete(true);
      return;
    }

    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShowIntro(true);
    } else {
      // Return visit — no intro, reveal immediately
      setIntroComplete(true);
    }
  }, []);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
    // Wait for exit animation (0.65s) before signalling complete to hero
    setTimeout(() => setIntroComplete(true), 700);
  }, []);

  return (
    <IntroContext.Provider value={{ introComplete }}>
      <LayoutGroup id="axion-brand">
        <AnimatePresence>
          {showIntro && (
            <BrandIntro key="brand-intro" onComplete={handleComplete} />
          )}
        </AnimatePresence>
        {children}
      </LayoutGroup>
    </IntroContext.Provider>
  );
}
