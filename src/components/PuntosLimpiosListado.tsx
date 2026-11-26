import { MapaEmbed } from "@/components/MapaEmbed";

interface PuntoLimpio {
  nombre: string;
  direccion?: string;
  texto?: string;
}

const PUNTOS: PuntoLimpio[] = [
  {
    nombre: "Presa El Rejón",
    texto: "Ubicado en la entrada principal del parque",
  },
  {
    nombre: "Distrito 1",
    texto: "Ubicado sobre el Periférico de la Juventud casi esquina con Francisco Villa",
  },
  {
    nombre: "Plaza Perea",
    texto: "Ubicado en Trías y 21a",
  },
  {
    nombre: "Plaza Libertad",
  },
  {
    nombre: "Sierra Azul",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Distrito TEC",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Centro",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Parque El Platanito",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Ciudad Deportiva",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Palomar",
    texto: "",
    direccion: "",
  },
  {
    nombre: "UACH Campus II",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Deportiva",
    texto: "",
    direccion: "",
  },
  {
    nombre: "Elías Müller y Avenida Mirador",
    texto: "",
    direccion: "",
  },
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
                <h3 className="text-xl font-serif text-muted-foreground">{punto.nombre}</h3>
                {punto.texto && (
                  <p className="text-md text-muted-foreground mt-3 whitespace-pre-line">
                    {punto.texto}
                  </p>
                )}
                {punto.direccion && (
                  <p className="text-sm font-bold text-muted-foreground mt-1">
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
