import { Link } from 'wouter';

export function MisionHome() {
  return (
    <section className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Nuestra misión
        </h2>
        <p className="mx-auto max-w-3xl text-xl md:text-2xl font-serif text-muted-foreground pb-4 text-center">
          Contribuir a la <b>toma de conciencia</b> sobre el cuidado del medio ambiente de los
          chihuahuenses.
        </p>
        <p className="mx-auto max-w-3xl italic text-md md:text-lg text-muted-foreground pb-6 text-center">
          Lo hacemos a través de la metodología de las 6Rs: rechazar, reducir, reutilizar, reparar,
          reciclar y reintegrar.
        </p>
        <p className="text-md text-muted-foreground text-center">
          <Link href="/quienes-somos" className="font-bold underline">
            Conoce nuestra misión, visión y valores
          </Link>
        </p>
      </div>
    </section>
  );
}
