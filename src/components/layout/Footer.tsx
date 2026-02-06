import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const footerLinks = {
  navigation: [
    { href: "#problem", label: "The Problem" },
    { href: "#solution", label: "Our Solution" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#impact", label: "Impact" },
    { href: "#contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/oasis-logo.png"
              alt="Oasis"
              width={140}
              height={56}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-400 max-w-sm">
              Bringing quality education to schools without stable internet or
              electricity. A sustainable, offline-first educational platform.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:contact@oasis-edu.org"
                  className="hover:text-white transition-colors"
                >
                  contact@oasis-edu.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-7 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Oasis. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
