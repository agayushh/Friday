"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    damping: 40,
    stiffness: 300,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const docHeight =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        window.innerHeight;
      const p = docHeight > 0 ? scrollTop / docHeight : 0;
      rawProgress.set(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [rawProgress]);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-1.5 bg-gray-200 dark:bg-zinc-800",
        className
      )}
      style={{ zIndex: 99999 }}
    >
      <motion.div
        className="h-full w-full bg-black dark:bg-white"
        style={{
          scaleX: smoothProgress,
          transformOrigin: "left",
          opacity: 1,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
