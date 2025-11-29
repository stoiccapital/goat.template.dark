import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type MarketingLayoutProps = {
  children: ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar
        logoLabel="Brand"
        navLinks={[
          { label: "Product", href: "#product" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaLabel="Get started"
        ctaHref="#cta"
        showBorder
      />
      <main className="flex-1">{children}</main>
      <Footer
        brandLabel="Brand"
        copyrightLabel="© 2025 Brand. All rights reserved."
        linkGroups={[
          {
            heading: "Product",
            links: [
              { label: "Overview", href: "#product" },
              { label: "Pricing", href: "#pricing" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </div>
  );
}

