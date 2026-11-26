import { MapaEmbed } from "@/components/MapaEmbed";

interface PuntoLimpio {
  nombre: string;
  // Opcional: si no hay dirección, la tarjeta se muestra solo con el nombre.
  direccion?: string;
}

// TODO: reemplazar por los puntos limpios reales.
const PUNTOS: PuntoLimpio[] = [
  { nombre: "Punto limpio ejemplo 1", direccion: "Av. Division del Norte 400, Chihuahua, Chih." },
  { nombre: "Punto limpio ejemplo 2" },
  { nombre: "Punto limpio ejemplo 3", direccion: "Calle Aldama 500, Chihuahua, Chih." },
  { nombre: "Punto limpio ejemplo 4" },
  { nombre: "Punto limpio ejemplo 5" },
  { nombre: "Punto limpio ejemplo 6", direccion: "Av. Independencia 600, Chihuahua, Chih." },
];

export function PuntosLimpiosListado() {
  return (
    <section id="puntos-limpios" className="bg-surface">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-8 text-center">
          Puntos limpios
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {PUNTOS.map((punto) => (
            <article
              key={punto.nombre}
              className="rounded-2xl overflow-hidden border border-accent/20 bg-background shadow-xs"
            >
              <div className="p-5">
                <h3 className="text-xl font-serif text-secondary">{punto.nombre}</h3>
                {punto.direccion && (
                  <p className="text-md text-muted-foreground mt-1">
                    {punto.direccion}
                  </p>
                )}
              </div>
              {punto.direccion && (
                <MapaEmbed direccion={punto.direccion} titulo={punto.nombre} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
