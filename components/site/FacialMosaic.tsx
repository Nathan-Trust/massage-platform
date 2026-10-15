import Image from "next/image";

const PHOTOS = [
  { src: "/images/v2/facial-apply.jpg", alt: "A woman smoothing cream onto her cheek", sizes: "(max-width: 620px) 100vw, 30vw" },
  { src: "/images/v2/facial-cream.jpg", alt: "A hand holding an open jar of face cream", sizes: "(max-width: 620px) 50vw, 25vw" },
  { src: "/images/v2/facial.jpg", alt: "A client relaxing during a facial massage", sizes: "(max-width: 620px) 50vw, 25vw" },
];

/**
 * Three-photo grid that unveils itself (staggered wipe + settle) when it scrolls into view,
 * with a slowly turning "Bliss · Facial Treatments" badge.
 */
export function FacialMosaic({ ringId }: { ringId: string }) {
  return (
    <div className="mosaic" data-reveal>
      {PHOTOS.map((p) => (
        <figure key={p.src}>
          <Image src={p.src} alt={p.alt} fill sizes={p.sizes} className="object-cover" />
        </figure>
      ))}
      <div className="badge" aria-hidden="true">
        <svg className="badge-ring" viewBox="0 0 124 124">
          <defs>
            <path id={ringId} d="M62,62 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text>
            <textPath href={`#${ringId}`} textLength="286" lengthAdjust="spacing">
              Bliss · Facial Treatments ·{" "}
            </textPath>
          </text>
        </svg>
        <Image src="/logo.png" alt="" width={60} height={60} className="badge-logo" />
      </div>
    </div>
  );
}
