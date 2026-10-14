import { MapPin } from "lucide-react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { CITIES, PACKAGES, formatNaira } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CityChips() {
  return (
    <div className="chips">
      {CITIES.map((c) => (
        <span key={c} className="chip-city">
          <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
          {c}
        </span>
      ))}
    </div>
  );
}

export function PackageCards() {
  return (
    <div className="pkgs">
      {PACKAGES.map((p) => (
        <article key={p.id} className={cn("pkg", p.featured && "feature")} data-reveal>
          <span className="tier">Executive package</span>
          <h3>{p.name}</h3>
          <div className="price">
            {formatNaira(p.price)}
            <small>Listed price. Travel fee, if any, is agreed before confirmation.</small>
          </div>
          <p>Message us for current inclusions, session duration and availability before booking.</p>
          <ArrowButton href={`/book?item=${p.id}`} variant={p.featured ? "gold" : "dark"}>
            Book this package
          </ArrowButton>
        </article>
      ))}
    </div>
  );
}

export function Steps({ steps, light }: { steps: readonly { title: string; body: string }[]; light?: boolean }) {
  return (
    <ol className={cn("steps", light && "light")} style={{ "--n": steps.length } as React.CSSProperties}>
      {steps.map((s) => (
        <li key={s.title} data-reveal>
          <b>{s.title}</b>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
