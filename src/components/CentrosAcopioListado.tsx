import { MapaEmbed } from "@/components/MapaEmbed";

interface CentroAcopio {
  nombre: string;
  foto: string;
  direccion: string;
}

// TODO: reemplazar por los centros de acopio reales (nombre, foto y dirección).
const CENTROS: CentroAcopio[] = [
  {
    nombre: "Centro de acopio ejemplo 1",
    foto: "https://placehold.co/800x500?text=Centro+de+acopio+1",
    direccion: "Av. Universidad 100, Chihuahua, Chih.",
  },
  {
    nombre: "Centro de acopio ejemplo 2",
    foto: "https://placehold.co/800x500?text=Centro+de+acopio+2",
    direccion: "Calle Cuarta 200, Chihuahua, Chih.",
  },
  {
    nombre: "Centro de acopio ejemplo 3",
    foto: "https://placehold.co/800x500?text=Centro+de+acopio+3",
    direccion: "Av. Tecnológico 300, Chihuahua, Chih.",
  },
];

export function CentrosAcopioListado() {
  return (
    <section id="centros-de-acopio" className="bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-8 text-center">
          Centros de acopio
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CENTROS.map((centro) => (
            <article
              key={centro.nombre}
              className="rounded-2xl overflow-hidden border border-accent/20 bg-background shadow-xs"
            >
              <img
                src={centro.foto}
                alt={centro.nombre}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-serif text-secondary mb-1">
                  {centro.nombre}
                </h3>
                <p className="text-md text-muted-foreground">{centro.direccion}</p>
              </div>
              <MapaEmbed direccion={centro.direccion} titulo={centro.nombre} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
