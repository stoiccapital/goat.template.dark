import Link from "next/link";
import { Container } from "../../_components/ui/container";
import { Button } from "../../_components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 scroll-mt-24" id="cta">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            [One-line value proposition or call to action]
          </p>
          <div className="pt-4">
            <Link href="#cta">
              <Button variant="primary" className="px-8 py-4">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

