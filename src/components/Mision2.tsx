import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    id: "mision",
    name: "Misión",
    content: {
      text: "El Centro de Cultura Ambiental de Chihuahua, A.C. tiene como misión trabajar para contribuir a la toma de conciencia sobre el cuidado del medio ambiente de los chihuahuenses.",
    },
  },
  {
    id: "objetivos",
    name: "Objetivos",
    content: {
      intro:
        "El Centro de Cultura Ambiental de Chihuahua tiene como objetivo promover la conciencia y la acción sobre la sostenibilidad y el cuidado del planeta a través de la metodología de las 6Rs.",
      text: "Este marco normativo se construye considerando normativas internacionales, leyes nacionales y locales, así como el respaldo de organismos internacionales que comparten el compromiso con la sostenibilidad y la gestión de desechos.",
    },
  },
  {
    id: "vision",
    name: "Visión",
    content: {
      intro: "Para el 2030 los y las chihuahuenses han contribuido al cuidado del medio ambiente:",
      list: [
        "El Municipio de Chihuahua cuenta con un relleno sanitario sustentable.",
        "En las instituciones educativas se fomenta el cuidado del planeta a través de la metodología 6Rs.",
        "Los comercios evitan tener a la venta productos altamente contaminantes y no reciclables.",
        "Las Organizaciones de la Sociedad Civil (OSC) participan de manera colectiva a favor del medio ambiente.",
        "Las empresas tienen procesos que apoyan la economía circular.",
        "Los gobiernos cuentan con servicios altamente sustentables.",
      ],
    },
  },
  {
    id: "valores",
    name: "Valores",
    content: {
      list: [
        "Honestidad: Hablar con la Verdad.",
        "Responsabilidad: Cumplir con lo prometido.",
        "Confianza: Integridad, competencia, consistencia, lealtad, apertura.",
        "Congruencia: Coherencia entre las acciones y las palabras.",
        "Compromiso: Buscar siempre la mejora continua.",
        "Liderazgo: compromiso con la comunidad.",
      ],
    },
  },
];

// Renderiza el contenido según su estructura
function TabBody({ content }: { content: (typeof tabs)[number]["content"] }) {
  return (
    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
      {"intro" in content && content.intro && (
        <p className="font-medium text-foreground">{content.intro}</p>
      )}
      {"text" in content && content.text && (
        <p>{content.text}</p>
      )}
      {"list" in content && content.list && (
        <ul className="list-disc list-inside space-y-1">
          {content.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Mision2() {
  return (
    <section id="mision2" className="pt-26 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-6">
          Misión y visión
        </h2>

        <div className="flex justify-center">
          <Tabs
            defaultValue={tabs[0].id}
            orientation="vertical"
            className="flex w-full max-w-3xl flex-row items-stretch gap-4"
          >
            {/* Lista de tabs — ancho fijo */}
            <TabsList className="grid h-auto w-36 shrink-0 grid-cols-1 gap-1 self-start">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="ps-2.5 text-left">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Contenedor: usa grid para apilar todos los TabsContent en la misma celda */}
            <div className="flex-1 rounded-md border p-5 bg-card">
              <div className="grid">
                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    // Esto le dice a Radix que no monte/desmonte el contenido
                    // sino que lo mantenga en el DOM siempre
                    forceMount
                    className="col-start-1 row-start-1 m-0 data-[state=inactive]:invisible data-[state=inactive]:pointer-events-none"
                  >
                    <TabBody content={tab.content} />
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}