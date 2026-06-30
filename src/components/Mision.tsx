const items = [
  {
    title: "Misión",
    description:
      "El Centro de Cultura Ambiental de Chihuahua, A.C. tiene como misión trabajar para contribuir a la toma de conciencia sobre el cuidado del medio ambiente de los chihuahuenses.",
  },
  {
    title: "Objetivos",
    intro: "El Centro de Cultura Ambiental de Chihuahua tiene como objetivo promover la conciencia y la acción sobre la sostenibilidad y el cuidado del planeta a través de la metodología de las 6Rs.",
    description:
      "Este marco normativo se construye considerando normativas internacionales, leyes nacionales y locales, así como el respaldo de organismos internacionales que comparten el compromiso con la sostenibilidad y la gestión de desechos.",
  },
  {
    title: "Visión",
    intro: "Para el 2030 los y las chihuahuenses han contribuido al cuidado del medio ambiente:",
    description: [
      "El Municipio de Chihuahua cuenta con un relleno sanitario sustentable.",
      "En las instituciones educativas se fomenta el cuidado del planeta a través de la metodología 6Rs.",
      "Los comercios evitan tener a la venta productos altamente contaminantes y no reciclables.",
      "Las Organizaciones de la Sociedad Civil (OSC) participan de manera colectiva a favor del medio ambiente.",
      "Las empresas tienen procesos que apoyan la economía circular.",
      "Los gobiernos cuentan con servicios altamente sustentables.",
    ],
  },
  {
    title: "Valores",
    description: [
      "Honestidad: Hablar con la Verdad.",
      "Responsabilidad: Cumplir con lo prometido.",
      "Confianza: Integridad, competencia, consistencia, lealtad, apertura.",
      "Congruencia: Coherencia entre las acciones y las palabras.",
      "Compromiso: Buscar siempre la mejora continua.",
      "Liderazgo: compromiso con la comunidad.",
    ],
  },
];

export function Mision() {
  return (
    <section id="mision" className="pt-26 pb-12 bg-card">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-3xl font-serif text-primary mb-6">Mensaje de las consejeras</h2>
        <p className="text-lg text-muted-foreground pb-2"><b>La sostenibilidad se construye en el presente, actúa ahora</b></p>
        <p className="text-lg text-muted-foreground pb-2"><b>Cultura y Acción Ambiental en Chihuahua</b></p>
        <p className="italic text-lg text-muted-foreground pb-2">Juntos tenemos el poder de transformar nuestro entorno y heredar un Chihuahua sostenible a los ciudadanos</p>
        <p className="text-lg text-muted-foreground pb-2">El planeta enfrenta una grave crisis ambiental por la explotación de recursos y la contaminación, situación que también afecta al municipio de Chihuahua, donde cada persona genera en promedio 1.4 kg de basura al día y sólo se recicla el 8%.</p>
        <p className="text-lg text-muted-foreground pb-2">Desde el <b>Centro de Cultura Ambiental de Chihuahua A.C.</b> promovemos la conciencia y acción responsable en el manejo de residuos mediante programas de recolección, capacitación y educación ambiental. Nuestro objetivo es impulsar la gestión sostenible de los residuos sólidos urbanos por parte del Municipio para que favorezca la economía circular, reduzca la contaminación y genere empleos verdes.</p>
        <p className="text-lg text-muted-foreground pb-6">Invitamos a la comunidad a sumarse aplicando las <b>6Rs: rechazar, reducir, reutilizar, reparar, reciclar y reintegrar,</b> para cuidar el planeta y garantizar un futuro más limpio y sostenible.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-xl border border-border bg-muted/60 p-6 flex flex-col gap-3"
            >
              <h3 className="text-xl text-secondary underline underline-offset-6">{i.title}</h3>
              <p className="text-md text-muted-foreground leading-relaxed">
                {i.intro}
              </p>
              {Array.isArray(i.description) ? (
                <ul className="list-disc list-inside text-md text-muted-foreground leading-relaxed space-y-1">
                  {i.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {i.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

