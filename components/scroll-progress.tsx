"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  inline?: boolean;
}

export function ScrollProgress({
  className,
  containerRef,
  inline,
}: ScrollProgressProps) {
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    damping: 40,
    stiffness: 300,
  });
  const [ready, setReady] = useState(false);
  const initialised = useRef(false);

  useEffect(() => {
    const scrollEl: HTMLElement | Window =
      containerRef?.current ?? window;

    const getProgress = () => {
      if (containerRef?.current) {
        const el = containerRef.current;
        const docHeight = el.scrollHeight - el.clientHeight;
        return docHeight > 0 ? el.scrollTop / docHeight : 0;
      }
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;
      return docHeight > 0 ? window.scrollY / docHeight : 0;
    };

    const handleScroll = () =>
      rawProgress.set(getProgress());

    scrollEl.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    if (!initialised.current) {
      initialised.current = true;
      const p = getProgress();
      rawProgress.jump(p);
      smoothProgress.jump(p);
      requestAnimationFrame(() => setReady(true));
    }

    return () =>
      scrollEl.removeEventListener("scroll", handleScroll);
  }, [containerRef, rawProgress, smoothProgress]);

  const bar = (
    <motion.div
      className="h-full w-full bg-primary"
      style={{
        scaleX: smoothProgress,
        transformOrigin: "left",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.15, ease: "linear" }}
      aria-hidden="true"
    />
  );

  if (inline) {
    return (
      <div
        className={cn(
          "sticky top-0 z-10 h-1 w-full overflow-hidden rounded-t-lg bg-muted/50",
          className,
        )}
      >
        {bar}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 z-50 h-1.5 w-full bg-primary",
        className,
      )}
      style={{
        scaleX: smoothProgress,
        transformOrigin: "left",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.15, ease: "linear" }}
      aria-hidden="true"
    />
  );
}
