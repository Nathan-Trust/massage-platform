import Image from "next/image";
import { BRAND } from "@/lib/content";

export function BrandMark({ withDescriptor = true }: { withDescriptor?: boolean }) {
  return (
    <>
      <Image src="/logo.png" alt="" width={52} height={52} className="brand-logo" priority />
      <span>
        <span className="brand-name">{BRAND.name}</span>
        {withDescriptor && <span className="brand-sub">{BRAND.descriptor}</span>}
      </span>
    </>
  );
}
