import { Container } from "../../_components/ui/container";

export function MetricsSection() {
  const metrics = [
    {
      number: "[Large number]",
      label: "[Metric label]",
      context: "[One-line context or description]",
    },
    {
      number: "[Large number]",
      label: "[Metric label]",
      context: "[One-line context or description]",
    },
    {
      number: "[Large number]",
      label: "[Metric label]",
      context: "[One-line context or description]",
    },
    {
      number: "[Large number]",
      label: "[Metric label]",
      context: "[One-line context or description]",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">{metric.number}</div>
              <div className="text-sm font-medium">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.context}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

