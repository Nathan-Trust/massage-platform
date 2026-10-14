import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/site/ArrowButton";
import { BrandMark } from "@/components/site/BrandMark";
import { BRAND, CITIES, COPY, NAV } from "@/lib/content";

export function SiteFooter() {
  return (
    <>
      <section className="cta-band" aria-labelledby="footer-cta">
        <Image src="/images/v2/hot-stone.jpg" alt="" fill sizes="100vw" className="cta-bg" />
        <span className="eyebrow eyebrow-photo">{COPY.footer.line}</span>
        <h2 id="footer-cta" data-reveal>
          {COPY.footer.cta} <em>{COPY.footer.ctaAccent}</em>
        </h2>
        <ArrowButton href="/book" variant="light" className="mt-8">
          {COPY.ctaPrimary}
        </ArrowButton>
      </section>

      <footer className="pb-10 pt-14">
        <div className="wrap">
          <div className="foot">
            <div className="grid content-start gap-4">
              <Link href="/" className="brand" aria-label="Bliss home">
                <BrandMark withDescriptor={false} />
              </Link>
              <p>{COPY.footer.line}</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul className="grid gap-2">
                {NAV.filter((n) => n.href !== "/book").map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Cities</h4>
              <p>{CITIES.join(" • ")}</p>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="grid gap-2">
                <li>
                  <a href={`tel:${BRAND.phoneE164}`}>{BRAND.phoneDisplay}</a>
                </li>
                <li>
                  <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer">
                    @{BRAND.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px] text-muted-foreground">
            <span>© {new Date().getFullYear()} Bliss</span>
            <span>
              {COPY.footer.cta} {COPY.footer.ctaAccent}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
