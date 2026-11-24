import { Link } from 'wouter';
import { GraduationCap, Recycle, Share2, Landmark } from 'lucide-react';

// Rutas tomadas de los botones "Conoce más" de /que-hacemos.
// El eje "Comparte" no tiene botón en el sitio actual; apunto a /que-hacemos.
// Cuando exista su página, cambia el href.
const EJES = [
  {
    titulo: 'Sensibilización y capacitación',
    texto: 'Compartimos conocimiento con organizaciones y ciudadanos mediante cursos y talleres.',
    href: '/que-hacemos/sensibilizacion',
    icono: GraduationCap,
  },
  {
    titulo: 'Reciclables Domésticos',
    texto: 'Reintegramos los materiales a los procesos. ¡Es fácil empezar!',
    href: '/que-hacemos/reciclables-domesticos',
    icono: Recycle,
  },
  {
    titulo: 'Comparte',
    texto: 'Si ya no lo necesitas, ¡compártelo! Para alguien más puede ser muy valioso.',
    href: '/que-hacemos',
    icono: Share2,
  },
  {
    titulo: 'Incidencia en política pública',
    texto: 'Trabajando juntos logramos cambios a largo plazo.',
    href: '/que-hacemos/incidencia-politica-publica',
    icono: Landmark,
  },
];

export function EjesHome() {
  return (
    <section className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          ¿Qué hacemos?
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Cuatro ejes de trabajo, apoyados en nuestra teoría de cambio de las 6Rs.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EJES.map(({ titulo, texto, href, icono: Icono }) => (
            <Link
              key={titulo}
              href={href}
              className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:bg-muted"
            >
              <Icono className="h-8 w-8 text-accent" />
              <h3 className="text-2xl text-muted-foreground">{titulo}</h3>
              <p className="flex-1 text-md text-muted-foreground leading-relaxed">{texto}</p>
              <span className="text-md font-bold underline text-muted-foreground">Conoce más</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
