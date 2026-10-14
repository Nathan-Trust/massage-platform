import type { Metadata } from "next";
import Image from "next/image";
import { CorporateForm } from "@/components/booking/CorporateForm";
import { Steps } from "@/components/site/Blocks";
import { PageHero } from "@/components/site/PageHero";
import { BRAND, COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: COPY.corporate.intro,
};

export default function CorporateWellness() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Wellness"
        title={COPY.corporate.heading}
        titleAccent={COPY.corporate.headingAccent}
        sub={COPY.corporate.intro}
        image="/images/v2/corporate.jpg"
      />
      <section className="block">
        <div className="wrap">
          <div className="section-head mb-8">
            <div data-reveal>
              <span className="eyebrow">How it works</span>
              <h2 className="h-section">
                From brief to <em>booked</em>
              </h2>
            </div>
          </div>
          <Steps steps={COPY.corporate.steps} light />
        </div>
      </section>
      <section className="block pt-0">
        <div className="wrap book-layout">
          <CorporateForm />
          <aside className="aside">
            <div className="photo aspect-[4/3]">
              <Image
                src="/images/v2/corporate-2.jpg"
                alt="A smiling man in a dark sweatshirt"
                fill
                sizes="(max-width: 980px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
            <div className="card">
              <b>Prefer to talk first?</b>
              <p>
                Message or call us on{" "}
                <a href={`tel:${BRAND.phoneE164}`} className="font-semibold text-foreground">
                  {BRAND.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
