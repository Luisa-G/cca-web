import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Referencia = {
  categoria: 'Video' | 'Ley' | 'Investigación' | 'Caso de éxito';
  titulo: string;
  fuente: string;
  descripcion: string;
  url: string;
};

// TODO: reemplaza estos elementos con tus referencias reales (las categorías
// coinciden con "Material adicional" y "Casos de éxito" de Aprende Más).
const REFERENCIAS: Referencia[] = [
  {
    categoria: 'Video',
    titulo: 'TODO: título del video',
    fuente: 'TODO: canal o institución',
    descripcion: 'TODO: una frase sobre de qué trata.',
    url: 'https://example.com',
  },
  {
    categoria: 'Ley',
    titulo: 'TODO: nombre de la ley o norma',
    fuente: 'TODO: dependencia',
    descripcion: 'TODO: una frase sobre qué regula.',
    url: 'https://example.com',
  },
  {
    categoria: 'Investigación',
    titulo: 'TODO: título del estudio',
    fuente: 'TODO: autor u organización',
    descripcion: 'TODO: hallazgo principal.',
    url: 'https://example.com',
  },
  {
    categoria: 'Caso de éxito',
    titulo: 'TODO: nombre de la instalación o proyecto',
    fuente: 'TODO: ciudad, estado',
    descripcion: 'TODO: cómo cooperaron gobierno y sociedad.',
    url: 'https://example.com',
  },
];

export function Referencias() {
  return (
    <section className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Para seguir aprendiendo
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Videos, leyes e investigaciones de otras personas y organizaciones.
        </p>

        {/* El padding lateral deja espacio a las flechas del carrusel */}
        <div className="px-10 md:px-14">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {REFERENCIAS.map((r) => (
                <CarouselItem key={r.titulo} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                      <span className="w-fit rounded-full bg-muted px-3 py-1 text-md text-muted-foreground">
                        {r.categoria}
                      </span>
                      <h3 className="text-2xl text-muted-foreground">{r.titulo}</h3>
                      <p className="text-md font-semibold text-muted-foreground leading-relaxed">
                        {r.fuente}
                      </p>
                      <p className="text-md text-muted-foreground leading-relaxed flex-1">
                        {r.descripcion}
                      </p>
                      <span className="inline-flex items-center gap-2 text-md font-bold underline text-muted-foreground">
                        Abrir enlace
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <p className="text-md text-muted-foreground pt-8 text-center">
          <Link href="/aprende-mas" className="font-bold underline">
            Ver todo en Aprende más
          </Link>
        </p>
      </div>
    </section>
  );
}
