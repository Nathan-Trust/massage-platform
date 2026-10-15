import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub?: string;
  image: string;
  objectPosition?: string;
  /** Optional call-to-action shown under the intro. */
  children?: React.ReactNode;
};

/** Short framed photo hero used at the top of every inner page. */
export function PageHero({ eyebrow, title, titleAccent, sub, image, objectPosition = "center 30%", children }: Props) {
  return (
    <div className="frame">
      <section className="hero short" aria-labelledby="page-title">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg"
          style={{ objectPosition }}
        />
        <div className="hero-body">
          <div>
            <span className="eyebrow eyebrow-photo load-in">{eyebrow}</span>
            <h1 id="page-title" className="load-in d2">
              {title} <em>{titleAccent}</em>
            </h1>
            {sub && <p className="hero-sub load-in d3">{sub}</p>}
            {children && <div className="hero-ctas load-in d3">{children}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
