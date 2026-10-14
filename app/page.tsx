import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { CityChips, PackageCards, Steps } from "@/components/site/Blocks";
import { ServiceAccordion } from "@/components/site/ServiceAccordion";
import { BRAND, CITIES, COPY } from "@/lib/content";

export default function Home() {
  return (
    <>
      <div className="frame">
        <section className="hero" aria-labelledby="home-title">
          <Image
            src="/images/v2/hero.jpg"
            alt="A therapist gives a calm back massage to a woman resting on a towel"
            fill
            priority
            sizes="100vw"
            className="hero-bg"
          />
          <div className="hero-body">
            <div>
              <span className="eyebrow eyebrow-photo load-in">{BRAND.tagline}</span>
              <h1 id="home-title" className="load-in d2">
                {COPY.home.headline} <em>{COPY.home.headlineAccent}</em>
              </h1>
              <p className="hero-sub load-in d3">{COPY.home.body}</p>
              <div className="hero-ctas load-in d3">
                <ArrowButton href="/book" variant="light">
                  {COPY.ctaPrimary}
                </ArrowButton>
                <ArrowButton href="/packages-and-pricing" variant="ghost">
                  {COPY.ctaSecondary}
                </ArrowButton>
              </div>
              <div className="trust" aria-label="Our approach">
                {COPY.trust.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="float-card">
              <div className="thumb">
                <Image src="/images/v2/facial.jpg" alt="A client relaxing during a facial massage" fill sizes="120px" className="object-cover" />
              </div>
              <div className="grid content-between gap-2.5">
                <div>
                  <div className="t">
                    {COPY.mobile.heading} {COPY.mobile.headingAccent}
                  </div>
                  <div className="s">Tell us your city and area so we can confirm whether we can serve your address.</div>
                </div>
                <div className="flex justify-end">
                  <Link href="/mobile-massage" className="go" aria-label="Mobile massage">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="ribbon">
        <span className="eyebrow mb-2.5 justify-center before:hidden">Now serving</span>
        <div className="ribbon-track">
          {CITIES.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div data-reveal>
              <span className="eyebrow">Our services</span>
              <h2 className="h-section">
                <em>Wellness,</em> made personal
              </h2>
            </div>
            <div className="grid gap-5" data-reveal>
              <p className="lede">{COPY.home.sectionBody}</p>
              <div>
                <Link href="/massage-and-wellness" className="link-arrow">
                  See all massage options <ArrowUpRight size={18} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
          <ServiceAccordion />
        </div>
      </section>

      <section className="band" aria-labelledby="how-title">
        <div className="wrap">
          <div className="section-head">
            <div data-reveal>
              <span className="eyebrow">Booking on WhatsApp</span>
              <h2 id="how-title" className="h-section text-band-fg">
                How it <em>works</em>
              </h2>
            </div>
          </div>
          <Steps steps={COPY.home.steps} />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="center-head" data-reveal>
            <span className="eyebrow">Packages</span>
            <h2 className="h-section">
              {COPY.packages.heading} <em>{COPY.packages.headingAccent}</em>
            </h2>
          </div>
          <PackageCards />
          <p className="mt-7 text-center">
            <Link href="/packages-and-pricing" className="link-arrow">
              Package notes, deposits and gift options <ArrowUpRight size={18} strokeWidth={1.8} />
            </Link>
          </p>
        </div>
      </section>

      <section className="block pt-0">
        <div className="wrap split">
          <div className="photo" data-reveal>
            <Image
              src="/images/v2/mobile.jpg"
              alt="A smiling woman in a white robe holding a cup of coffee at home"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-[22px]" data-reveal>
            <span className="eyebrow">Mobile massage</span>
            <h2 className="h-section">
              {COPY.mobile.heading} <em>{COPY.mobile.headingAccent}</em>
            </h2>
            <p className="lede">{COPY.mobile.intro}</p>
            <CityChips />
            <div>
              <ArrowButton href="/mobile-massage">{COPY.mobile.cta}</ArrowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
