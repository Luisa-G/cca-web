import { Link } from 'wouter';
import { HeartHandshake, MapPin, Users } from 'lucide-react';

// Las tres rutas salen del submenú "Toma Acción" del Navbar.
// Si tus rutas reales difieren (p. ej. /toma-accion/centros-de-acopio), ajústalas aquí.
const ACCIONES = [
  {
    titulo: 'Dona',
    texto: 'En especie o con una aportación económica. Somos donataria autorizada.',
    href: '/toma-accion',
    icono: HeartHandshake,
  },
  {
    titulo: 'Centros de acopio',
    texto: 'Consulta qué materiales puedes llevar y dónde entregarlos.',
    href: '/toma-accion',
    icono: MapPin,
  },
  {
    titulo: 'Acciones conjuntas',
    texto: 'Hagamos composta, ecoladrillos y más, junto con tu comunidad.',
    href: '/toma-accion',
    icono: Users,
  },
];

export function TomaAccionHome() {
  return (
    <section className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Tu apoyo transforma Chihuahua
        </h2>
        <p className="italic text-md md:text-lg text-muted-foreground pb-8 text-center">
          Hay muchas maneras de sumarte. Elige la tuya.
        </p>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {ACCIONES.map(({ titulo, texto, href, icono: Icono }) => (
            <Link
              key={titulo}
              href={href}
              className="flex h-full flex-col items-center gap-3 rounded-md border p-5 bg-muted text-center transition-colors hover:bg-surface"
            >
              <Icono className="h-8 w-8 text-accent" />
              <h3 className="text-2xl text-muted-foreground">{titulo}</h3>
              <p className="text-md text-muted-foreground leading-relaxed">{texto}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Link
            href="/toma-accion"
            className="bg-accent inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors"
          >
            Toma acción
          </Link>
        </div>
      </div>
    </section>
  );
}
