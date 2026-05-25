import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Slide {
  tag: string
  title: string
  description: string
  href: string
  cta: string
  /** URL de imagen o color de fondo Tailwind como fallback */
  image?: string
  imageBg?: string
  imageAlt: string
}

// ─── Datos ────────────────────────────────────────────────────────────────────
// Reemplaza estos datos con los reales de tu sitio.
// Las imágenes deben estar en /public/assets/ o ser URLs absolutas.

const slides: Slide[] = [
  {
    tag: "Reciclables domésticos",
    title: "Recolección en la puerta de tu casa",
    description:
      "Separamos y damos valor a materiales reciclables directamente en tu domicilio, sin costo. Un programa único en Chihuahua.",
    href: "/que-hacemos#reciclables",
    cta: "Conoce el programa",
    image: "/assets/programa-rd.jpg",
    imageBg: "bg-secondary/10",
    imageAlt: "Camioneta de recolección de reciclables domésticos CCA",
  },
  {
    tag: "Sensibilización",
    title: "Educación ambiental en escuelas y empresas",
    description:
      "Talleres, pláticas y metodología propia para generar conciencia sobre consumo responsable y manejo de residuos.",
    href: "/que-hacemos#sensibilizacion",
    cta: "Ver programa",
    image: "/assets/programa-sensibilizacion.jpg",
    imageBg: "bg-primary/10",
    imageAlt: "Taller de educación ambiental en una escuela de Chihuahua",
  },
  {
    tag: "Programa Comparte",
    title: "Reutilización que conecta a la comunidad",
    description:
      "Intercambia objetos en buen estado entre vecinos y colonias. Menos basura, más comunidad, mayor impacto ambiental.",
    href: "/que-hacemos#comparte",
    cta: "Participar",
    image: "/assets/programa-comparte.jpg",
    imageBg: "bg-accent",
    imageAlt: "Personas intercambiando objetos en el Programa Comparte",
  },
  {
    tag: "Centros de acopio",
    title: "Puntos de entrega cerca de ti",
    description:
      "Localiza el centro de acopio más cercano y deposita tus materiales reciclables de forma segura y organizada.",
    href: "/aprende-mas#acopio",
    cta: "Ver ubicaciones",
    image: "/assets/centros-acopio.jpg",
    imageBg: "bg-secondary/10",
    imageAlt: "Centro de acopio de materiales reciclables CCA Chihuahua",
  },
]

// ─── Componente ───────────────────────────────────────────────────────────────

export function HomeCarousel() {
  return (
    /*
     * px-0 en mobile → los botones de navegación se ocultan con hidden md:flex
     * px-12 en desktop → da espacio para los botones laterales (-left-12 / -right-12)
     */
    <div className="w-full px-0 md:px-12">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="flex flex-col md:flex-row overflow-hidden rounded-lg border border-border bg-card">

                {/* ── Imagen ── */}
                <div
                  className={[
                    "w-full md:w-[48%] shrink-0",
                    "min-h-[200px] md:min-h-[280px]",
                    slide.imageBg ?? "bg-muted",
                  ].join(" ")}
                >
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Fallback visual si no hay imagen todavía
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      {slide.imageAlt}
                    </div>
                  )}
                </div>

                {/* ── Texto ── */}
                <div className="flex flex-col justify-center gap-3 p-5 md:p-8 bg-card">

                  {/* Tag */}
                  <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-secondary">
                    {slide.tag}
                  </p>

                  {/* Título — usa font-serif = Grandstander según tu config */}
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-tight tracking-tight">
                    {slide.title}
                  </h3>

                  {/* Descripción */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={slide.href}
                    className="inline-flex items-center gap-2 self-start rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {slide.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/*
         * hidden md:flex → invisibles en mobile.
         * Embla activa swipe táctil automáticamente en touch devices.
         */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
