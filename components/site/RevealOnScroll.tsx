"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Elements marked with data-reveal are fully visible at rest. When one scrolls into view it gets
 * the .in class, which plays a short rise; siblings are staggered by their index.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < innerHeight) return; // already on screen at load: leave it still
      const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", `${Math.min(index, 5) * 0.09}s`);
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
