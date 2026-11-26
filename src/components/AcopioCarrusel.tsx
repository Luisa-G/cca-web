import { Phone } from "lucide-react";
import galleryPlaceholder from "@/assets/images/gallery-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Aliado {
  nombre: string;
  logo: string;
  url?: string;
  // Una frase, o un arreglo para mostrar un listado (un elemento por línea).
  info?: string | string[];
  telefono?: string;
}

const ALIADOS: Aliado[] = [
  {
    nombre: "Ecorecickla",
    logo: galleryPlaceholder,
    url: "https://www.ecorecikla.com/ ",
    info: "Artículos electrónicos",
  },
  {
    nombre: "Ceredil",
    logo: galleryPlaceholder,
    url: "",
    info: "Lentes",
  },
  {
    nombre: "Club de Leones",
    logo: galleryPlaceholder,
    telefono: "614 000 0000",
  },
  {
    nombre: "Medicamentos para donar",
    logo: galleryPlaceholder,
    url: "https://example.com",
    info: ["Papel y cartón", "Vidrio", "Aluminio", "PET"],
    telefono: "614 000 0000",
  },
  {
    nombre: "Organización ejemplo 5",
    logo: galleryPlaceholder,
    info: "Nunca lo tires al drenaje.",
  },
];

// Área superior de la card: ocupa todo el ancho y tiene alto fijo,
// el logo se ajusta dentro sin recortarse.
function Logo({ aliado }: { aliado: Aliado }) {
  const imagen = (
    <img
      src={aliado.logo}
      alt={`Logo de ${aliado.nombre}`}
      className="max-w-full max-h-full object-contain"
      loading="lazy"
    />
  );

  const clases = "w-full h-36 bg-white p-5 flex items-center justify-center";

  if (!aliado.url) return <div className={clases}>{imagen}</div>;

  return (
    <a
      href={aliado.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar el sitio de ${aliado.nombre}`}
      className={`${clases} focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent`}
    >
      {imagen}
    </a>
  );
}

export function AcopioCarrusel() {
  return (
    <section id="acopio-residuos" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Residuos específicos
        </h2>

        {/* El padding lateral deja espacio a las flechas del carrusel */}
        <div className="px-10 md:px-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {ALIADOS.map((a) => (
                <CarouselItem
                  key={a.nombre}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="h-full rounded-4xl overflow-hidden flex flex-col">
                    <Logo aliado={a} />

                    <div className="px-5 pt-5 pb-7 flex flex-col items-center gap-4 text-center flex-1">
                      <h3 className="text-xl font-serif text-muted-foreground leading-tight">
                        {a.nombre}
                      </h3>

                      {a.info && (
                        Array.isArray(a.info) ? (
                          <ul className="text-md text-muted-foreground leading-snug space-y-1">
                            {a.info.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-md text-muted-foreground leading-snug">
                            {a.info}
                          </p>
                        )
                      )}

                      {a.telefono && (
                        <a
                          href={`tel:${a.telefono.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 text-md font-semibold text-muted-foreground hover:underline"
                        >
                          <Phone className="size-4 text-secondary" aria-hidden="true" />
                          {a.telefono}
                        </a>
                      )}
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
