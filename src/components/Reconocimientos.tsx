import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Reconocimiento = {
  nombre: string; // nombre del premio o reconocimiento
  fecha: string; // p. ej. "2023" o "Octubre de 2023"
  lugar: string; // ciudad / institución donde se otorgó
  otorgadoPor?: string; // organización que lo otorga (opcional)
  imagen: string; // TODO: ruta a la imagen, p. ej. "/reconocimientos/nombre.jpg" (carpeta public/)
  url?: string; // enlace externo (opcional); si existe, la tarjeta completa es clicable
};

// TODO: reemplazar imágenes, fechas exactas y lugares. Los nombres y años salen de
// "Nuestra historia" en ¿Quiénes somos?; lo marcado con TODO no lo conozco.
const reconocimientos: Reconocimiento[] = [
  {
    nombre: "Segundo lugar en “Emprende por un Cambio Social”",
    fecha: "2023",
    lugar: "TODO: lugar",
    otorgadoPor: "Asociación Celiderh",
    imagen: "/reconocimientos/reconocimiento-1.jpg",
  },
  {
    nombre: "Premio Municipal del Cuidado al Medio Ambiente",
    fecha: "2023",
    lugar: "Chihuahua Capital",
    imagen: "/reconocimientos/reconocimiento-2.jpg",
  },
  {
    nombre: "Reconocimiento al Mérito Rotario 2024 (a nuestra Consejera Ana de la Rosa)",
    fecha: "2024",
    lugar: "TODO: lugar",
    imagen: "/reconocimientos/reconocimiento-3.jpg",
  },
  {
    nombre: "Premio a la Responsabilidad Medioambiental (participantes)",
    fecha: "2025",
    lugar: "TODO: lugar",
    otorgadoPor: "Congreso del Estado de Chihuahua",
    imagen: "/reconocimientos/reconocimiento-4.jpg",
  },
];

function Tarjeta({ r }: { r: Reconocimiento }) {
  const contenido = (
    <>
      <div className="aspect-4/3 overflow-hidden bg-card flex items-center justify-center p-4">
        <img
          src={r.imagen}
          alt={r.nombre}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
        <p className="text-md font-semibold text-muted-foreground text-center">{r.fecha}</p>
        <h3 className="text-2xl text-muted-foreground text-center">{r.nombre}</h3>
        <p className="px-2 text-md text-muted-foreground leading-relaxed text-center">
          {r.lugar}
        </p>
        {r.otorgadoPor && (
          <p className="px-2 text-md italic text-muted-foreground leading-relaxed text-center">
            {r.otorgadoPor}
          </p>
        )}
      </div>
    </>
  );

  const clases = "group h-full rounded-xl border border-border bg-card overflow-hidden flex flex-col";

  return r.url ? (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver más sobre ${r.nombre}`}
      className={`${clases} hover:bg-surface transition-colors`}
    >
      {contenido}
    </a>
  ) : (
    <div className={clases}>{contenido}</div>
  );
}

export function Reconocimientos() {
  return (
    <section id="reconocimientos" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Premios y reconocimientos
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          El trabajo de nuestra comunidad ha sido reconocido por organizaciones e instituciones.
        </p>

        {/* El padding lateral deja espacio a las flechas del carrusel */}
        <div className="px-10 md:px-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {reconocimientos.map((r) => (
                <CarouselItem
                  key={`${r.nombre}-${r.fecha}`}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Tarjeta r={r} />
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
