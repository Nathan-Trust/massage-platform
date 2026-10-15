"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { COPY, SERVICES, formatNaira } from "@/lib/content";
import { cn } from "@/lib/utils";

const CYCLE_MS = 6000;

/**
 * Home page service row. The first card is open by default; hovering, focusing or tapping a card
 * opens it while the others compress into slim photo strips. When nobody is interacting, the row
 * advances on its own every few seconds (paused on hover/focus, off for reduced motion).
 */
export function ServiceAccordion() {
  const [active, setActive] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const schedule = useCallback(() => {
    clearTimeout(timer.current);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setTimeout(() => {
      if (!rowRef.current?.matches(":hover, :focus-within")) {
        setActive((i) => (i + 1) % SERVICES.length);
      }
      schedule();
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    schedule();
    return () => clearTimeout(timer.current);
  }, [schedule]);

  const open = (i: number) => {
    setActive(i);
    schedule();
  };

  return (
    <div ref={rowRef} className="svc-row" data-reveal>
      {SERVICES.map((s, i) => (
        <div
          key={s.id}
          className={cn("svc", i === active && "active")}
          onPointerEnter={(e) => e.pointerType === "mouse" && open(i)}
          onFocus={() => open(i)}
          onClick={() => open(i)}
        >
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            sizes="(max-width: 980px) 100vw, 60vw"
            className="svc-img"
          />
          <span className="orb" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </span>
          <span className="vt" aria-hidden="true">
            {s.short}
          </span>
          <div className="cap">
            <b>{s.name}</b>
            <em className="svc-price">{formatNaira(s.price)}</em>
            <span>{s.description}</span>
            <ArrowButton href={`/book?item=${s.id}`} variant="light">
              {COPY.services.cta}
            </ArrowButton>
          </div>
          <span className="bar" key={i === active ? `on-${active}` : "off"} />
        </div>
      ))}
    </div>
  );
}
