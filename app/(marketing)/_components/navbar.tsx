"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

type NavLink = {
  label: string;
  href: string; // section id, e.g. "#features"
};

type NavbarProps = {
  logoLabel?: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  showBorder?: boolean;
};

const NAVBAR_HEIGHT = 80; // Approximate navbar height in pixels

export function Navbar({
  logoLabel = "Brand",
  navLinks = [
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaLabel = "Get started",
  ctaHref = "#cta",
  showBorder = true,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Smooth scroll handler
  const handleSmoothScroll = (href: string) => {
    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight = navRef.current?.getBoundingClientRect().height || NAVBAR_HEIGHT;
      const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetOffset - navHeight,
        behavior: "smooth",
      });
    }

    // Close mobile menu
    setIsOpen(false);
  };

  // Handle link clicks
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      handleSmoothScroll(href);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm ${
        showBorder ? "border-b border-border" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-foreground">
            {logoLabel}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href={ctaHref} onClick={(e) => handleLinkClick(e, ctaHref)}>
              <Button variant="primary" className="text-sm">
                {ctaLabel}
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a href={ctaHref} onClick={(e) => handleLinkClick(e, ctaHref)}>
                  <Button variant="primary" className="w-full">
                    {ctaLabel}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
