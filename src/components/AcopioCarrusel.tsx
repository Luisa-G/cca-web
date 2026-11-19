import galleryPlaceholder from "@/assets/images/gallery-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// TODO: reemplazar con los residuos, textos e imágenes reales de CCA
const residuos = [
  {
    title: "Plásticos",
    intro: "Dales una nueva vida",
    description: "Describe cómo entregarlos (limpios, aplastados, separados por tipo).",
    image: galleryPlaceholder,
  },
  {
    title: "Papel y cartón",
    intro: "Secos y limpios se reciclan mejor",
    description: "Describe cómo entregarlos (secos, sin grasa, doblados).",
    image: galleryPlaceholder,
  },
  {
    title: "Vidrio",
    intro: "Se recicla una y otra vez",
    description: "Describe cómo entregarlo (limpio, sin tapas).",
    image: galleryPlaceholder,
  },
  {
    title: "Residuos electrónicos",
    intro: "Evita que contaminen",
    description: "Describe qué equipos se reciben y en qué condiciones.",
    image: galleryPlaceholder,
  },
  {
    title: "Aceite usado",
    intro: "Nunca lo tires al drenaje",
    description: "Describe cómo entregarlo (en envase cerrado, sin mezclar).",
    image: galleryPlaceholder,
  },
];

export function AcopioCarrusel() {
  return (
    <section id="acopio-residuos" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          ¿Qué residuos puedes entregar?
        </h2>

        {/* El padding lateral deja espacio a las flechas del carrusel */}
        <div className="px-10 md:px-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {residuos.map((r) => (
                <CarouselItem key={r.title} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                      <h3 className="text-2xl text-muted-foreground text-center">{r.title}</h3>
                      <p className="text-md font-semibold text-muted-foreground leading-relaxed text-center">
                        {r.intro}
                      </p>
                      <p className="px-2 text-md text-muted-foreground leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
