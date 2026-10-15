import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/site/ArrowButton";
import { PageHero } from "@/components/site/PageHero";
import { COPY, SERVICES, formatNaira } from "@/lib/content";

export const metadata: Metadata = {
  title: "Massage & Wellness",
  description: COPY.services.intro,
};

export default function MassageAndWellness() {
  return (
    <>
      <PageHero
        eyebrow="Massage & Wellness"
        title={COPY.services.heading}
        titleAccent={COPY.services.headingAccent}
        sub={COPY.services.intro}
        image="/images/v2/swedish.jpg"
      />
      <section className="block">
        <div className="wrap grid gap-4">
          {SERVICES.map((s) => (
            <article key={s.id} className="svc-item" data-reveal>
              <div className="ph">
                <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 980px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="tx">
                <h3>{s.name}</h3>
                <div className="svc-price">{formatNaira(s.price)}</div>
                <p>{s.description}</p>
                <div>
                  <ArrowButton href={`/book?item=${s.id}`}>{COPY.services.cta}</ArrowButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
