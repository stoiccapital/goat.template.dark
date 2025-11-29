import { HeroSection } from "./_components/hero-section";
import { SocialProofSection } from "./_components/social-proof-section";
import { ProblemSolutionSection } from "./_components/problem-solution-section";
import { FeatureSection } from "./_components/feature-section";
import { UseCasesSection } from "./_components/use-cases-section";
import { MetricsSection } from "./_components/metrics-section";
import { PricingSection } from "./_components/pricing-section";
import { FAQSection } from "./_components/faq-section";
import { CTASection } from "./_components/cta-section";

export default function TemplatePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ProblemSolutionSection />
      <FeatureSection
        variant="image-left"
        headline="Feature name"
        description="Feature description in 2-3 sentences. Key benefit. Use case context."
      />
      <FeatureSection
        variant="image-right"
        headline="Feature name"
        description="Feature description in 2-3 sentences. Key benefit. Use case context."
      />
      <FeatureSection
        variant="image-left"
        headline="Feature name"
        description="Feature description in 2-3 sentences. Key benefit. Use case context."
      />
      <UseCasesSection />
      <MetricsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

