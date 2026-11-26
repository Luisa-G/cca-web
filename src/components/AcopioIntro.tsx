import { Link } from "wouter";

export function AcopioIntro() {
  return (
    <section id="acopio" className="pt-20 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
          Centros de acopio
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-4 text-justify">
          Si aún no recogemos en tu colonia y ya separas, puedes llevar tus residuos a un centro de acopio.
        </p>

        <div className="flex justify-center">
          <Link
            href="/toma-accion/centros-de-acopio"
            className="bg-accent inline-flex gap-2 text-md px-6 py-3 border-2 border-accent rounded-full font-medium text-input hover:bg-input hover:text-accent transition-colors"
          >
            Ubicación centros de acopio
          </Link>
        </div>

        <p className="text-md md:text-lg text-muted-foreground pt-6 text-center">
          ¿Te gustaría que tu colonia forme parte del programa?
        </p>
        <p className="text-md md:text-lg text-muted-foreground pb-6 text-center">
          Dinos el nombre y ubicación al{" "}
          <a href="tel:+526142154235" className="font-bold underline">
            614 215 4235
          </a>{" "}
          o al correo{" "}
          <a href="mailto:culturambiental.mx@gmail.com" className="font-bold underline">
            culturambiental.mx@gmail.com
          </a>{" "}
        </p>

      </div>
    </section>
  );
}
