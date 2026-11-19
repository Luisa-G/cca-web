import galleryPlaceholder from "@/assets/images/gallery-2.png";

// TODO: reemplazar con los tres estudios reales de CCA
const estudios = [
  {
    title: "Título del estudio 1",
    intro: "Una frase que resuma el hallazgo principal",
    description:
      "Describe en dos o tres frases qué se investigó, cómo y qué se encontró sobre materiales reciclables.",
    image: galleryPlaceholder,
    link: "#", // PDF en /public o enlace externo
  },
  {
    title: "Título del estudio 2",
    intro: "Una frase que resuma el hallazgo principal",
    description:
      "Describe en dos o tres frases qué se investigó, cómo y qué se encontró sobre materiales reciclables.",
    image: galleryPlaceholder,
    link: "#",
  },
  {
    title: "Título del estudio 3",
    intro: "Una frase que resuma el hallazgo principal",
    description:
      "Describe en dos o tres frases qué se investigó, cómo y qué se encontró sobre materiales reciclables.",
    image: galleryPlaceholder,
    link: "#",
  },
];

const btn =
  "bg-accent mt-auto self-center inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors";

export function Investigaciones() {
  return (
    <section id="investigaciones" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Nuestras investigaciones
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Estudios realizados por el Centro de Cultura Ambiental de Chihuahua sobre materiales reciclables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estudios.map((e) => (
            <div
              key={e.title}
              className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                <h3 className="text-2xl text-muted-foreground text-center">{e.title}</h3>
                <p className="text-md font-semibold text-muted-foreground leading-relaxed text-center">
                  {e.intro}
                </p>
                <p className="px-2 text-md text-muted-foreground leading-relaxed">{e.description}</p>
                <a href={e.link} target="_blank" rel="noopener noreferrer" className={btn}>
                  Ver estudio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
