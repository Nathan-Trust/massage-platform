"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { BrandMark } from "@/components/site/BrandMark";
import { COPY, NAV } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-nav">
      <div className="wrap">
        <nav className="nav-inner" aria-label="Main">
          <Link href="/" className="brand" aria-label="Bliss home">
            <BrandMark />
          </Link>

          <ul className="nav-links flex gap-0.5">
            {NAV.filter((n) => n.href !== "/book").map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="nav-link" aria-current={current(n.href)}>
                  {n.short}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ArrowButton href="/book" variant="light" className="nav-btn">
              <span className="nav-btn-text">{COPY.ctaPrimary}</span>
            </ArrowButton>

            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className="icon-btn menu-trigger" aria-label="Open menu">
                <Menu size={18} strokeWidth={1.8} />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Content
                  className="fixed inset-0 z-[60] flex flex-col gap-7 overflow-y-auto bg-band px-6 pb-8 pt-[calc(env(safe-area-inset-top,0px)+24px)] text-band-fg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-4"
                  aria-describedby={undefined}
                >
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <div className="flex items-center justify-between">
                    <span className="brand">
                      <BrandMark withDescriptor={false} />
                    </span>
                    <Dialog.Close className="icon-btn" aria-label="Close menu">
                      <X size={18} strokeWidth={1.8} />
                    </Dialog.Close>
                  </div>
                  <ul className="grid gap-1">
                    {[{ href: "/", label: "Home" }, ...NAV].map((n) => (
                      <li key={n.href}>
                        <Link
                          href={n.href}
                          className="sheet-link"
                          aria-current={current(n.href)}
                          onClick={() => setOpen(false)}
                        >
                          {n.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div onClick={() => setOpen(false)}>
                    <ArrowButton href="/book" variant="gold">
                      {COPY.ctaPrimary}
                    </ArrowButton>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  );
}
