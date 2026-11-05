import misionImg from "@/assets/hero.png";

const items = [
  {
    title: "Hagamos composta y Poposta",
    text: "Sabemos que las ideas se vuelven poderosas cuando se transforman en acción. Por eso,",
  },
  {
    title: "Ecomposta",
    text: "Creemos que el cambio comienza en casa. Por eso educamos a las y los chihuahuenses para",
  },
  {
    title: "Ecoladrillos",
    text: "Nuestro impacto crece cuando nos unimos. En Cultura Ambiental conectamos a personas,",
  },
];

export function AccionesConjuntas() {
  return (
    <section id="acciones-conjuntas" className="pt-26 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-surface-foreground">Acciones conjuntas</h2>
        <div className="grid grid-cols-1 md:grid-cols-[fr_1fr] rounded-2xl overflow-hidden bg-card">
          <div>
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 px-8 py-6"
              >
                <h3 className="text-xl text-foreground underline underline-offset-6">
                  {item.title}
                </h3>
                <p className="text-surface-foreground text-lg leading-relaxed px-10 text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}