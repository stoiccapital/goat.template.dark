import { Container } from "../../_components/ui/container";

interface FeatureSectionProps {
  variant: "image-left" | "image-right";
  headline: string;
  description: string;
}

export function FeatureSection({
  variant,
  headline,
  description,
}: FeatureSectionProps) {
  const isImageLeft = variant === "image-left";

  return (
    <section className="py-20">
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
            !isImageLeft ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Column - 45% */}
          <div
            className={`lg:col-span-5 ${!isImageLeft ? "lg:order-2" : ""}`}
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl bg-muted border border-border flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                [Feature visual placeholder]
              </span>
            </div>
          </div>
          {/* Text Column - 55% */}
          <div
            className={`lg:col-span-7 space-y-4 ${!isImageLeft ? "lg:order-1" : ""}`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">{headline}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

