import Link from "next/link";
import { Container } from "../../_components/ui/container";
import { Button } from "../../_components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column - 55% */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Build faster. Ship smarter.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              [Product name] helps [target audience] [primary outcome] without{" "}
              [main pain point].
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#cta">
                <Button variant="primary">Get started</Button>
              </Link>
              <Link href="#product">
                <Button variant="secondary">Learn more</Button>
              </Link>
            </div>
          </div>
          {/* Visual Column - 45% */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl bg-muted border border-border flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                [Hero visual placeholder]
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

