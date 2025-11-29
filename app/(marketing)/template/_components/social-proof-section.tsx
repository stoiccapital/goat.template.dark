import { Container } from "../../_components/ui/container";

export function SocialProofSection() {
  const logos = Array.from({ length: 6 }, (_, i) => `Company ${i + 1}`);

  return (
    <section className="py-12 bg-muted/30">
      <Container>
        <p className="text-sm text-center text-muted-foreground mb-8">
          Trusted by leading teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-full text-muted-foreground text-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

