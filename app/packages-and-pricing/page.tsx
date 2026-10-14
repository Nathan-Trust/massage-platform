import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PackageCards } from "@/components/site/Blocks";
import { PageHero } from "@/components/site/PageHero";
import { COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description: COPY.packages.intro,
};

const NOTES = [
  { title: "About package prices", body: COPY.packages.packageNote },
  { title: "Deposit", body: COPY.packages.depositNote },
  { title: "Cancellation & rescheduling", body: COPY.packages.cancellationNote },
];

export default function PackagesAndPricing() {
  return (
    <>
      <PageHero
        eyebrow="Packages & Pricing"
        title={COPY.packages.heading}
        titleAccent={COPY.packages.headingAccent}
        sub={COPY.packages.intro}
        image="/images/v2/hot-stone.jpg"
        objectPosition="center 60%"
      />
      <section className="block">
        <div className="wrap">
          <PackageCards />
          <div className="notes">
            {NOTES.map((n) => (
              <div key={n.title} className="note" data-reveal>
                <b>{n.title}</b>
                <p>{n.body}</p>
              </div>
            ))}
            <div className="note" data-reveal>
              <b>Prepaid packs &amp; gift vouchers</b>
              <p>{COPY.packages.giftNote}</p>
              <div>
                <Link href="/book" className="link-arrow">
                  Ask on WhatsApp <ArrowUpRight size={18} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
