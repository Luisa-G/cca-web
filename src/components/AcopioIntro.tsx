// TODO: reemplazar por la URL real (mapa, página de ubicaciones, etc.)
const UBICACIONES_URL = "#";

export function AcopioIntro() {
  return (
    <section id="acopio" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
          Dale una segunda vida a tus residuos
        </h2>
        {/* Texto basado en "¿Quiénes somos?"; confirma o ajusta el tono */}
        <p className="text-md md:text-lg text-muted-foreground pb-2 text-justify">
          Separar y entregar tus residuos es una forma concreta de aplicar las{" "}
          <b>6Rs: rechazar, reducir, reutilizar, reparar, reciclar y reintegrar.</b>
        </p>
        <p className="text-md md:text-lg text-muted-foreground pb-6 text-justify">
          Consulta qué materiales puedes llevar y dónde entregarlos.
        </p>

        <div className="flex justify-center">
          <a
            href={UBICACIONES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors"
          >
            Ver ubicaciones
          </a>
        </div>
      </div>
    </section>
  );
}
