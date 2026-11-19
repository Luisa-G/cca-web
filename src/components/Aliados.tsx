import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Aliado = {
  name: string;
  logo: string; // TODO: ruta al logo, p. ej. "/aliados/nombre.png" (carpeta public/)
  url: string; // sitio externo del aliado
  curso?: {
    titulo: string;
    descripcion: string;
    url: string;
  };
};

// TODO: reemplazar con los aliados reales. Solo los que tengan "curso" aparecen
// con insignia en el carrusel y en el bloque "Cursos con nuestros aliados".
const aliados: Aliado[] = [
  {
    name: "Aliado 1",
    logo: "/aliados/aliado-1.png",
    url: "#",
    curso: {
      titulo: "Nombre del curso",
      descripcion: "Describe en una o dos frases de qué trata el curso y a quién va dirigido.",
      url: "#",
    },
  },
  {
    name: "Aliado 2",
    logo: "/aliados/aliado-2.png",
    url: "#",
    curso: {
      titulo: "Nombre del curso",
      descripcion: "Describe en una o dos frases de qué trata el curso y a quién va dirigido.",
      url: "#",
    },
  },
  { name: "Aliado 3", logo: "/aliados/aliado-3.png", url: "#" },
  { name: "Aliado 4", logo: "/aliados/aliado-4.png", url: "#" },
  { name: "Aliado 5", logo: "/aliados/aliado-5.png", url: "#" },
];

const btn =
  "bg-accent mt-auto self-center inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors";

export function Aliados() {
  const conCurso = aliados.filter((a) => a.curso);

  return (
    <section id="aliados" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Nuestros aliados
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Trabajamos junto a organizaciones, instituciones y empresas que comparten nuestro compromiso
          con el medio ambiente. Haz clic en un logo para conocer su trabajo.
        </p>

        {/* El padding lateral deja espacio a las flechas del carrusel */}
        <div className="px-10 md:px-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {aliados.map((a) => (
                <CarouselItem key={a.name} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar el sitio de ${a.name}`}
                    className="group relative h-full rounded-xl border border-border bg-card p-6 flex items-center justify-center aspect-4/3 hover:bg-surface transition-colors"
                  >
                    <img
                      src={a.logo}
                      alt={a.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {a.curso && (
                      <span className="absolute top-2 right-2 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-input">
                        Cursos
                      </span>
                    )}
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {conCurso.length > 0 && (
          <div className="pt-14">
            <h3 className="text-2xl md:text-3xl font-serif text-accent mb-6 text-center">
              Cursos con nuestros aliados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {conCurso.map((a) => (
                <div
                  key={a.name}
                  className="rounded-xl border border-border overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                    <p className="text-md font-semibold text-muted-foreground text-center">
                      {a.name}
                    </p>
                    <h4 className="text-2xl text-muted-foreground text-center">{a.curso!.titulo}</h4>
                    <p className="px-2 text-md md:text-lg text-muted-foreground leading-relaxed">
                      {a.curso!.descripcion}
                    </p>
                    <a href={a.curso!.url} target="_blank" rel="noopener noreferrer" className={btn}>
                      Ver curso
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
