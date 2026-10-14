import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Bliss",
  description: COPY.about.body,
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Bliss"
        title={COPY.about.heading}
        titleAccent={COPY.about.headingAccent}
        image="/images/v2/about.jpg"
      />
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div data-reveal>
              <span className="eyebrow">Our approach</span>
              <h2 className="h-section">
                Professional. Private. <em>Personal.</em>
              </h2>
            </div>
            <p className="lede" data-reveal>
              {COPY.about.body}
            </p>
          </div>
          <div className="pillars">
            {COPY.about.pillars.map((p) => (
              <div key={p.title} className="pillar" data-reveal>
                <b>{p.title}</b>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
          <div className="review-note">
            <Info size={18} strokeWidth={1.8} className="mt-0.5 flex-none" aria-hidden="true" />
            <span>{COPY.about.reviews}</span>
          </div>
        </div>
      </section>
    </>
  );
}
