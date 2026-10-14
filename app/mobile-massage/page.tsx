import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/site/ArrowButton";
import { CityChips } from "@/components/site/Blocks";
import { PageHero } from "@/components/site/PageHero";
import { COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mobile Massage",
  description: COPY.mobile.intro,
};

export default function MobileMassage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Massage"
        title={COPY.mobile.heading}
        titleAccent={COPY.mobile.headingAccent}
        sub={COPY.mobile.intro}
        image="/images/v2/mobile.jpg"
        objectPosition="center 25%"
      />
      <section className="block">
        <div className="wrap split">
          <div className="grid gap-[22px]" data-reveal>
            <span className="eyebrow">Where we work</span>
            <h2 className="h-section">
              Cities <em>we serve</em>
            </h2>
            <CityChips />
            <div className="info">
              <b>Travel fee</b>
              <p>{COPY.mobile.travelFee}</p>
            </div>
            <div className="info">
              <b>Before your session</b>
              <p>{COPY.mobile.beforeSession}</p>
            </div>
            <div>
              <ArrowButton href="/book">{COPY.mobile.cta}</ArrowButton>
            </div>
          </div>
          <div className="photo" data-reveal>
            <Image
              src="/images/v2/about.jpg"
              alt="A relaxed woman in a headwrap smiling at home"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
