import { Container } from "../../_components/ui/container";

export function ProblemSolutionSection() {
  return (
    <section id="product" className="py-20 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Column */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">The problem</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              [Target audience] struggle with [specific pain point].{" "}
              [Consequence 1]. [Consequence 2]. [Consequence 3].
            </p>
          </div>
          {/* Solution Column */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">The solution</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              [Product name] solves this by [solution approach]. [Benefit 1].{" "}
              [Benefit 2]. [Benefit 3].
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

