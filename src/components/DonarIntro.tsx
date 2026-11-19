export function DonarIntro() {
  return (
    <section id="donar" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
          Tu apoyo transforma Chihuahua
        </h2>
        <p className="italic text-md md:text-lg text-muted-foreground pb-2">
          Juntos tenemos el poder de transformar nuestro entorno
        </p>
        {/* Texto basado en "¿Quiénes somos?"; confirma o ajusta el tono */}
        <p className="text-md md:text-lg text-muted-foreground pb-2 text-justify">
          Desde el <b>Centro de Cultura Ambiental de Chihuahua A.C.</b> promovemos la conciencia y acción
          responsable en el manejo de residuos mediante programas de recolección, capacitación y educación
          ambiental.
        </p>
        <p className="text-md md:text-lg text-muted-foreground pb-2 text-justify">
          Puedes sumarte con <b>donativos en especie</b> o con una <b>aportación económica</b>: ambas nos
          ayudan a seguir impulsando una cultura ambiental en nuestra comunidad.
        </p>
      </div>
    </section>
  );
}
