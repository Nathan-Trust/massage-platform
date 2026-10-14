import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/site/PageHero";
import { BRAND, COPY, findBookable } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: COPY.book.intro,
};

export default async function Book({ searchParams }: { searchParams: Promise<{ item?: string }> }) {
  const { item } = await searchParams;
  const initialItem = findBookable(item)?.id;

  return (
    <>
      <PageHero
        eyebrow="Contact & Book"
        title={COPY.book.heading}
        titleAccent={COPY.book.headingAccent}
        sub={COPY.book.intro}
        image="/images/v2/book.jpg"
        objectPosition="center 40%"
      />
      <section className="block">
        <div className="wrap book-layout">
          <BookingForm key={initialItem ?? "none"} initialItem={initialItem} />
          <aside className="aside">
            <div className="photo aspect-[4/3]">
              <Image
                src="/images/v2/four-hand.jpg"
                alt="Hands placing warm stones on a client’s back"
                fill
                sizes="(max-width: 980px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
            <div className="card">
              <b>Contact</b>
              <p>
                WhatsApp or call{" "}
                <a href={`tel:${BRAND.phoneE164}`} className="font-semibold text-foreground">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p>
                Instagram{" "}
                <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground">
                  @{BRAND.instagram}
                </a>
              </p>
            </div>
            <div className="card">
              <b>Deposit</b>
              <p>{COPY.packages.depositNote}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
