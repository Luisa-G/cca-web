import galleryPlaceholder from "@/assets/images/gallery-2.png";

interface Organizacion {
  nombre: string;
  logo: string;
  url: string;
  descripcion: string;
}

const ORGANIZACIONES: Organizacion[] = [
  {
    nombre: "Hagamos Composta y Hagamos Poposta",
    logo: galleryPlaceholder,
    url: "https://example.com",
    descripcion:
      "Recolección de residuos orgánicos para su transformación en composta. Se tiene también el servicio de compostaje a partir de heces animales.",
  },
  {
    nombre: "Ecomposta",
    logo: galleryPlaceholder,
    url: "https://example.com",
    descripcion:
      "Servicio de recolección de residuos orgánicos para generar composta.",
  },
];

export function AccionesConjuntas() {
  return (
    <section id="acciones-conjuntas" className="pt-26 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        {/* TODO: ajustar el título */}
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-surface-foreground">
          Acciones conjuntas
        </h2>

        {/* Un solo panel con dos filas; la segunda se invierte en pantallas md+ */}
        <div className="rounded-2xl overflow-hidden bg-card divide-y divide-surface-foreground/15">
          {ORGANIZACIONES.map((org, i) => (
            <div
              key={org.nombre}
              className={`flex flex-col items-center gap-6 md:gap-10 px-8 py-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el sitio de ${org.nombre}`}
                className="w-full max-w-xs md:w-72 md:max-w-none shrink-0 h-32 rounded-xl bg-white p-4 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <img
                  src={org.logo}
                  alt={`Logo de ${org.nombre}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </a>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl text-muted-foreground underline underline-offset-6 text-center md:text-left">
                  {org.nombre}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  {org.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
