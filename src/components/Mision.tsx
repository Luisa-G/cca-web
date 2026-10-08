import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    id: "mision",
    name: "Misión",
    content: {
      text: (
        <>
          El Centro de Cultura Ambiental de Chihuahua, A.C. tiene como misión trabajar para contribuir a la{" "}
          <b className="text-foreground">toma de conciencia</b> sobre el cuidado del medio ambiente de los chihuahuenses.
        </>
      ),
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
        <><b className="text-foreground">Honestidad:</b> Hablar con la Verdad.</>,
        <><b className="text-foreground">Responsabilidad:</b> Cumplir con lo prometido.</>,
        <><b className="text-foreground">Confianza:</b> Integridad, competencia, consistencia, lealtad, apertura.</>,
        <><b className="text-foreground">Congruencia:</b> Coherencia entre las acciones y las palabras.</>,
        <><b className="text-foreground">Compromiso:</b> Buscar siempre la mejora continua.</>,
        <><b className="text-foreground">Liderazgo:</b> compromiso con la comunidad.</>,
      ],
    },
  },
];

// Renderiza el contenido según su estructura
function TabBody({ content }: { content: (typeof tabs)[number]["content"] }) {
  return (
    <div className="space-y-3 text-md text-muted-foreground leading-relaxed">
      {"intro" in content && content.intro && (
        <p>{content.intro}</p>
      )}
      {"text" in content && content.text && (
        <p>{content.text}</p>
      )}
      {"list" in content && content.list && (
        <ul className="list-disc pl-5 space-y-1">
          {content.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Mision() {
  return (
    <section id="mision2" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
          Mensaje de las consejeras
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-2"><b>La sostenibilidad se construye en el presente, actúa ahora</b></p>
        <p className="text-md md:text-lg text-muted-foreground pb-2"><b>Cultura y Acción Ambiental en Chihuahua</b></p>
        <p className="italic text-md md:text-lg text-muted-foreground pb-2">Juntos tenemos el poder de transformar nuestro entorno y heredar un Chihuahua sostenible a los ciudadanos</p>
        <p className="text-md md:text-lg text-muted-foreground pb-2 text-justify">El planeta enfrenta una grave crisis ambiental por la explotación de recursos y la contaminación, situación que también afecta al municipio de Chihuahua, donde cada persona genera en promedio 1.4 kg de basura al día y sólo se recicla el 8%.</p>
        <p className="text-md md:text-lg text-muted-foreground pb-2 text-justify">Desde el <b>Centro de Cultura Ambiental de Chihuahua A.C.</b> promovemos la conciencia y acción responsable en el manejo de residuos mediante programas de recolección, capacitación y educación ambiental. Nuestro objetivo es impulsar la gestión sostenible de los residuos sólidos urbanos por parte del Municipio para que favorezca la economía circular, reduzca la contaminación y genere empleos verdes.</p>
        <p className="text-md md:text-lg text-muted-foreground pb-6 text-justify">Invitamos a la comunidad a sumarse aplicando las <b>6Rs: rechazar, reducir, reutilizar, reparar, reciclar y reintegrar,</b> para cuidar el planeta y garantizar un futuro más limpio y sostenible.</p>

        <div className="flex justify-center">
          <Tabs
            defaultValue={tabs[0].id}
            orientation="vertical"
            className="flex w-full max-w-3xl flex-col md:flex-row items-stretch gap-4"
          >
            {/* Móvil: fila centrada. Desktop: columna de ancho fijo a la izquierda */}
            <TabsList className="flex flex-wrap justify-center md:grid md:grid-cols-1 h-auto w-full md:w-36 shrink-0 gap-1 md:self-start bg-background">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-3 text-sm md:text-base data-[state=active]:bg-muted data-[state=active]:shadow-none font-bold"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Contenedor: usa grid para apilar todos los TabsContent en la misma celda */}
            <div className="flex-1 rounded-md border p-5 bg-muted">
              <div className="grid">
                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    forceMount
                    className="col-start-1 row-start-1 self-center m-0 data-[state=inactive]:invisible data-[state=inactive]:pointer-events-none text-justify"
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