import Link from "next/link";
import { Container } from "../../_components/ui/container";
import { Button } from "../../_components/ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "[Plan name]",
      price: "$[amount]",
      period: "/[period]",
      description: "[One-line plan description]",
      features: [
        "[Feature 1]",
        "[Feature 2]",
        "[Feature 3]",
        "[Feature 4]",
      ],
    },
    {
      name: "[Plan name]",
      price: "$[amount]",
      period: "/[period]",
      description: "[One-line plan description]",
      features: [
        "[Feature 1]",
        "[Feature 2]",
        "[Feature 3]",
        "[Feature 4]",
        "[Feature 5]",
      ],
    },
    {
      name: "[Plan name]",
      price: "$[amount]",
      period: "/[period]",
      description: "[One-line plan description]",
      features: [
        "[Feature 1]",
        "[Feature 2]",
        "[Feature 3]",
        "[Feature 4]",
        "[Feature 5]",
        "[Feature 6]",
      ],
    },
  ];

  return (
    <section className="py-20 scroll-mt-24" id="pricing">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Simple, transparent pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-muted hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <span className="mr-2 text-brand">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#cta" className="block w-full">
                <Button variant="secondary" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

