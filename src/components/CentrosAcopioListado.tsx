import { Clock } from "lucide-react";
import { MapaEmbed } from "@/components/MapaEmbed";
import FotoEjemplo from '@/assets/images/gallery-3.png';

interface CentroAcopio {
  nombre: string;
  foto: string;
  direccion: string;
  horario?: string;
  leyenda?: string;
}

const CENTROS: CentroAcopio[] = [
  {
    nombre: "Centro Montessori del Norte",
    foto: FotoEjemplo,
    direccion: "Calle María Montessori 3901, Chihuahua, Chih. (Atrás de Costco)",
    horario: "Lunes a viernes: 8am a 8pm\nSábados: 8am a 1pm",
    leyenda: "Este Centro de Acopio pertenece a nuestra Asociación y está abierto al público en general",
  },
  {
    nombre: "Instituto Down",
    foto: FotoEjemplo,
    direccion: "Avenida Mirador 4307, Chihuahua, Chih.",
    horario: "Lunes a viernes: 9am a 2pm",
  },
  {
    nombre: "Granja Hogar",
    foto: FotoEjemplo,
    direccion: "Juan de Dios Martín Barba 6542, Chihuahua, Chih.",
    horario: "Lunes a domingo: 8am a 9pm",
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
              className="flex flex-col h-full rounded-2xl overflow-hidden border border-accent/20 bg-background shadow-xs"
            >
              <div className="relative">
                <img
                  src={centro.foto}
                  alt={centro.nombre}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {centro.leyenda && (
                  <p className="absolute inset-x-0 bottom-0 bg-secondary/90 text-secondary-foreground text-xs md:text-sm leading-snug px-4 py-2">
                    {centro.leyenda}
                  </p>
                )}
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-serif text-muted-foreground mb-1">
                  {centro.nombre}
                </h3>
                <p className="text-sm font-bold text-muted-foreground">{centro.direccion}</p>
                {centro.horario && (
                  <p className="text-md text-muted-foreground mt-2 flex gap-2 items-start">
                    <Clock className="size-4 mt-1 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="whitespace-pre-line">{centro.horario}</span>
                  </p>
                )}
              </div>
              <MapaEmbed direccion={centro.direccion} titulo={centro.nombre} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
