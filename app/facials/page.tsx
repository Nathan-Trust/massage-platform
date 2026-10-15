import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { CityChips, Steps } from "@/components/site/Blocks";
import { FacialMosaic } from "@/components/site/FacialMosaic";
import { PageHero } from "@/components/site/PageHero";
import { COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: COPY.facials.label,
  description: COPY.facials.intro,
};

export default function Facials() {
  return (
    <>
      <PageHero
        eyebrow={COPY.facials.label}
        title={COPY.facials.heading}
        titleAccent={COPY.facials.headingAccent}
        sub={COPY.facials.intro}
        image="/images/v2/facial-hero.jpg"
        objectPosition="center 35%"
      >
        <ArrowButton href="/book?item=facial" variant="light" icon={MessageCircle}>
          {COPY.facials.cta}
        </ArrowButton>
      </PageHero>

      <section className="block">
        <div className="wrap facial-split">
          <div className="facial-copy" data-reveal>
            <span className="eyebrow">{COPY.facials.sectionEyebrow}</span>
            <h2>
              {COPY.facials.sectionHeading} <em>{COPY.facials.sectionHeadingAccent}</em>
            </h2>
            <p className="lede">{COPY.facials.sectionBody}</p>
            <div className="info">
              <b>Where</b>
              <CityChips />
            </div>
            <div className="info">
              <b>Pricing</b>
              <p>{COPY.facials.pricing}</p>
            </div>
            <div className="info">
              <b>Before your session</b>
              <p>{COPY.mobile.beforeSession}</p>
            </div>
          </div>
          <FacialMosaic ringId="ring-facials-page" />
        </div>
      </section>

      <section className="band mb-[clamp(48px,7vw,96px)]" aria-labelledby="facial-how">
        <div className="wrap">
          <div className="section-head">
            <div data-reveal>
              <span className="eyebrow">Booking on WhatsApp</span>
              <h2 id="facial-how" className="h-section text-band-fg">
                How it <em>works</em>
              </h2>
            </div>
          </div>
          <Steps steps={COPY.home.steps} />
        </div>
      </section>
    </>
  );
}
