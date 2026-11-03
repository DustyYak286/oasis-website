"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platform", label: "Platform" },
  { href: "#story", label: "Our story" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // "onDark" while the header floats over the dark hero.
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("top");
      setOnDark(hero ? hero.getBoundingClientRect().bottom > 64 : false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const dark = onDark && !isMenuOpen;

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        dark
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line/80 bg-white/85 backdrop-blur-md"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          <Link
            href="/"
            className="relative flex items-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="sr-only">Oasis home</span>
            <Image
              src="/images/logo-white.png"
              alt=""
              width={870}
              height={276}
              priority
              className={cn("h-7 w-auto transition-opacity duration-300 sm:h-8", dark ? "opacity-100" : "opacity-0")}
            />
            <Image
              src="/images/logo.png"
              alt=""
              width={870}
              height={276}
              priority
              className={cn(
                "absolute left-0 top-0 h-7 w-auto transition-opacity duration-300 sm:h-8",
                dark ? "opacity-0" : "opacity-100"
              )}
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  dark ? "text-white/75 hover:text-white" : "text-slate hover:text-ink"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                dark
                  ? "bg-white text-ink hover:bg-white/90"
                  : "bg-blue text-white hover:bg-deep"
              )}
            >
              Get in touch
            </a>
          </div>

          <button
            className="-mr-2 p-2.5 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-6 text-ink" />
            ) : (
              <Menu className={cn("size-6", dark ? "text-white" : "text-ink")} />
            )}
          </button>
        </nav>

        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 md:hidden",
            isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 pb-5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-paper"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                className="mt-2 rounded-full bg-blue px-4 py-3 text-center text-base font-medium text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
