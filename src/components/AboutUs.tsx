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

export function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
          >
            <h3 className="text-base text-secondary">{i.title}</h3>
            {Array.isArray(i.description) ? (
              <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1">
                {i.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {i.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

