import { Container } from "../../_components/ui/container";

export function UseCasesSection() {
  const useCases = [
    {
      title: "[Use case name]",
      description:
        "[One-line description of how product solves this use case]",
    },
    {
      title: "[Use case name]",
      description:
        "[One-line description of how product solves this use case]",
    },
    {
      title: "[Use case name]",
      description:
        "[One-line description of how product solves this use case]",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Built for [target audience]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-muted hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

