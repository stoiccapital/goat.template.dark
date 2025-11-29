import Link from "next/link";
import { Container } from "./ui/container";

type FooterLinkGroup = {
  heading: string;
  links: { label: string; href: string }[];
};

type FooterProps = {
  brandLabel?: string;
  copyrightLabel?: string;
  linkGroups?: FooterLinkGroup[];
};

export function Footer({
  brandLabel = "Brand",
  copyrightLabel = "© 2025 Brand. All rights reserved.",
  linkGroups = [
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
  ],
}: FooterProps) {
  return (
    <footer className="py-16 sm:py-20 border-t border-border bg-muted/30">
      <Container>
        <div className="space-y-12">
          {/* Top: Brand + Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{brandLabel}</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              [One-line brand description or tagline]
            </p>
          </div>

          {/* Middle: Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {linkGroups.map((group, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-semibold">{group.heading}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom: Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">{copyrightLabel}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

