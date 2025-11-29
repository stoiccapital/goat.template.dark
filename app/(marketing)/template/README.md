# Landing Page Template

Reusable Stripe-level landing page template following the GOAT guardrails.

## Structure

- `page.tsx` - Main page component that composes all sections
- `_components/` - Modular section components

## Components

1. **HeroSection** - 2-column hero with headline, subheadline, and CTAs
2. **SocialProofSection** - Logo grid for social proof
3. **ProblemSolutionSection** - Side-by-side problem/solution
4. **FeatureSection** - Reusable alternating feature sections
5. **UseCasesSection** - 3-column use case cards
6. **MetricsSection** - 4-column metrics display
7. **PricingSection** - 3-column pricing cards
8. **FAQSection** - Accordion-style FAQ
9. **CTASection** - Final breathing CTA section

## Color Tokens

This template uses semantic color tokens. Ensure your Tailwind config includes:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: 'var(--brand)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
    },
  },
}
```

Or use CSS variables in your global styles:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --brand: #0066ff;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --accent: #f0f0f0;
  --border: #e0e0e0;
}
```

## Usage

1. Copy the `template` directory to your desired route
2. Replace placeholder copy with your content
3. Update visual placeholders with actual images/illustrations
4. Customize color tokens to match your brand
5. Adjust spacing/typography as needed while maintaining grid laws

## Layout Compliance

- ✅ Grid: 8-12 column mental grid, max-w-6xl containers
- ✅ Spacing: py-16 to py-20 standard, py-24 to py-32 for breathing
- ✅ Mobile: Text → Image stacking, full-width CTAs
- ✅ CTAs: Max 3 total (Hero + Final CTA + optional Pricing)
- ✅ Density: Max 5 bullets per list, clear focal points

