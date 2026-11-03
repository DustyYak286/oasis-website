import Image from "next/image";
import { Container } from "./Container";
import { CONTACT_EMAIL } from "@/lib/site";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platform", label: "Platform" },
  { href: "#story", label: "Our story" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-night text-white/60">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Oasis"
              width={870}
              height={276}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Offline learning for classrooms the internet doesn&apos;t reach.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Oasis
        </div>
      </Container>
    </footer>
  );
}
