import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "light" | "ghost" | "dark" | "gold";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: LucideIcon;
  className?: string;
  external?: boolean;
};

/** Pill link with a round arrow chip, the site's primary call-to-action shape. */
export function ArrowButton({ href, children, variant = "dark", icon: Icon = ArrowUpRight, className, external }: Props) {
  const content = (
    <>
      {children}
      <span className="chip" aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </span>
    </>
  );
  const cls = cn("btn", `btn-${variant}`, className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
