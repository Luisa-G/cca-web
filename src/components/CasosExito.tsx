import galleryPlaceholder from "@/assets/images/gallery-2.png";

// TODO: reemplazar con los dos casos reales
const casos = [
  {
    title: "Nombre de la instalación o proyecto",
    intro: "Ciudad, Estado",
    description:
      "Describe en dos o tres frases cómo cooperaron gobierno y sociedad, y qué resultados ha tenido.",
    image: galleryPlaceholder,
    link: "#",
  },
  {
    title: "Nombre de la instalación o proyecto",
    intro: "Ciudad, Estado",
    description:
      "Describe en dos o tres frases cómo cooperaron gobierno y sociedad, y qué resultados ha tenido.",
    image: galleryPlaceholder,
    link: "#",
  },
];

const btn =
  "bg-accent mt-auto self-center inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors";

export function CasosExito() {
  return (
    <section id="casos-exito" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Casos de éxito
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Ejemplos de instalaciones ambientales que funcionan gracias a la cooperación entre gobierno y sociedad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {casos.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                <h3 className="text-2xl text-muted-foreground text-center">{c.title}</h3>
                <p className="text-md font-semibold text-muted-foreground leading-relaxed text-center">
                  {c.intro}
                </p>
                <p className="px-2 text-lg text-muted-foreground leading-relaxed">{c.description}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className={btn}>
                  Conocer el caso
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
