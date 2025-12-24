"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "Product", isAnchor: false },
  { href: "/about", label: "About Us", isAnchor: false },
  { href: "/blog", label: "Blog", isAnchor: false },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { href: string; isAnchor: boolean }
  ) => {
    setIsMenuOpen(false);
    if (link.isAnchor) {
      e.preventDefault();
      scrollToSection(link.href);
    } else if (link.href === "/" && pathname === "/") {
      // Prevent navigation and scroll to top if already on home page
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // For other pages, Link component will handle navigation normally
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Oasis Logo.png"
              alt="Oasis"
              width={120}
              height={48}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="flex items-center">
                  {index > 0 && (
                    <span className="text-gray-400 mx-2">/</span>
                  )}
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={cn(
                      "text-sm font-medium text-gray-600 hover:text-oasis-primary transition-colors",
                      isActive && "underline decoration-2 underline-offset-4 decoration-oasis-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Get Involved Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-oasis-primary hover:bg-oasis-primary-dark"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cn(
                    "text-left text-sm font-medium text-gray-600 hover:text-oasis-primary transition-colors",
                    isActive && "underline decoration-2 underline-offset-4 decoration-oasis-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-oasis-primary hover:bg-oasis-primary-dark w-full"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
