import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub?: string;
  image: string;
  objectPosition?: string;
};

/** Short framed photo hero used at the top of every inner page. */
export function PageHero({ eyebrow, title, titleAccent, sub, image, objectPosition = "center 30%" }: Props) {
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
          </div>
        </div>
      </section>
    </div>
  );
}
