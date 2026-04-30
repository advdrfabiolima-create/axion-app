"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface InternalHeroBackgroundProps {
  imageUrl: string;
}

export default function InternalHeroBackground({
  imageUrl,
}: InternalHeroBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    );

    let frame = 0;

    const handleScroll = () => {
      if (mediaQuery.matches) {
        if (backgroundRef.current) {
          backgroundRef.current.style.transform = "none";
        }
        return;
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (backgroundRef.current) {
          const offset = window.scrollY * 0.12;
          backgroundRef.current.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="internal-hero-bg"
    >
      <Image
        src={imageUrl}
        alt=""
        fill
        className="object-contain object-[center_right] opacity-95 brightness-110 saturate-125 lg:object-[80%_center]"
        sizes="100vw"
        priority
      />
    </div>
  );
}
