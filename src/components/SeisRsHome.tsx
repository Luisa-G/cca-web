import { Link } from 'wouter';
// TODO: coloca la imagen principal de las 6Rs en esta ruta (o ajusta el import)
import seisRsImg from '@/assets/images/gallery-3.png';

// TODO: reemplaza cada "descripcion" con el texto del documento de las 6Rs.
// El orden y los nombres son los que aparecen en el sitio actual.
const RS = [
  { nombre: 'Rechazar', descripcion: 'TODO: pega aquí la explicación de Rechazar.' },
  { nombre: 'Reducir', descripcion: 'TODO: pega aquí la explicación de Reducir.' },
  { nombre: 'Reutilizar', descripcion: 'TODO: pega aquí la explicación de Reutilizar.' },
  { nombre: 'Reparar', descripcion: 'TODO: pega aquí la explicación de Reparar.' },
  { nombre: 'Reciclar', descripcion: 'TODO: pega aquí la explicación de Reciclar.' },
  { nombre: 'Reintegrar', descripcion: 'TODO: pega aquí la explicación de Reintegrar.' },
];

export function SeisRsHome() {
  return (
    <section className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">Las 6Rs</h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Nuestra teoría de cambio: seis acciones para construir un presente responsable y sostenible.
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={seisRsImg}
            alt="Las 6Rs: rechazar, reducir, reutilizar, reparar, reciclar y reintegrar"
            className="mx-auto w-full max-w-lg"
            loading="lazy"
          />

          <ol className="grid gap-4 sm:grid-cols-2">
            {RS.map((r, i) => (
              <li key={r.nombre} className="rounded-md border p-5 bg-muted">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-serif text-lg text-input">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-2xl text-muted-foreground">{r.nombre}</h3>
                <p className="mt-2 text-md text-muted-foreground leading-relaxed">
                  {r.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-md text-muted-foreground pt-8 text-center">
          <Link href="/que-hacemos" className="font-bold underline">
            Más sobre las 6Rs y nuestros ejes de trabajo
          </Link>
        </p>
      </div>
    </section>
  );
}
