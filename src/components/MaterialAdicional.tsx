import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import galleryPlaceholder from "@/assets/images/gallery-2.png";

// TODO: reemplazar con el contenido real en cada arreglo

const videos = [
  {
    title: "Título del video 1",
    description: "Una frase sobre de qué trata el video.",
    youtubeId: "", // ID del video de YouTube; si queda vacío se usa la imagen de respaldo
    image: galleryPlaceholder,
    url: "#",
  },
  {
    title: "Título del video 2",
    description: "Una frase sobre de qué trata el video.",
    youtubeId: "",
    image: galleryPlaceholder,
    url: "#",
  },
];

const leyes = [
  {
    title: "Nombre de la ley o norma",
    description: "Una frase sobre qué regula y por qué es relevante para el manejo de residuos.",
    url: "#",
  },
  {
    title: "Nombre de la ley o norma",
    description: "Una frase sobre qué regula y por qué es relevante para el manejo de residuos.",
    url: "#",
  },
  {
    title: "Nombre de la ley o norma",
    description: "Una frase sobre qué regula y por qué es relevante para el manejo de residuos.",
    url: "#",
  },
];

const externas = [
  {
    title: "Título de la investigación 1",
    autoria: "Autoría o institución",
    description: "Pequeña explicación de qué investigó y por qué vale la pena leerla.",
    url: "#",
  },
  {
    title: "Título de la investigación 2",
    autoria: "Autoría o institución",
    description: "Pequeña explicación de qué investigó y por qué vale la pena leerla.",
    url: "#",
  },
];

const tabs = [
  { id: "videos", name: "Videos" },
  { id: "leyes", name: "Leyes" },
  { id: "externas", name: "Investigaciones externas" },
];

const btn =
  "bg-accent mt-auto self-center inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors";

export function MaterialAdicional() {
  return (
    <section id="material-adicional" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Material adicional
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-8 text-center">
          Videos, leyes e investigaciones de otras personas y organizaciones para seguir aprendiendo.
        </p>

        <Tabs defaultValue={tabs[0].id} className="w-full">
          <TabsList className="flex flex-wrap justify-center h-auto w-full gap-1 bg-background">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="px-4 text-sm md:text-base data-[state=active]:bg-muted data-[state=active]:shadow-none font-bold"
              >
                {t.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Videos: tarjetas con miniatura que abren el video en otra pestaña */}
          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {videos.map((v) => (
                <a
                  key={v.title}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={
                        v.youtubeId
                          ? `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`
                          : v.image
                      }
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1 bg-surface">
                    <h3 className="text-2xl text-muted-foreground text-center">{v.title}</h3>
                    <p className="text-md text-muted-foreground leading-relaxed text-center">
                      {v.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Leyes: lista compacta dentro del cuadro muted de las pestañas de Misión */}
          <TabsContent value="leyes" className="mt-6">
            <div className="mx-auto max-w-4xl rounded-md border p-5 bg-muted">
              <ul className="divide-y divide-border">
                {leyes.map((l, i) => (
                  <li
                    key={`${l.title}-${i}`}
                    className="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-muted-foreground">{l.title}</h3>
                      <p className="text-md text-muted-foreground leading-relaxed">{l.description}</p>
                    </div>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btn} sm:mt-0 sm:self-auto shrink-0`}
                    >
                      Consultar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Investigaciones externas: explicación breve + enlace */}
          <TabsContent value="externas" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {externas.map((e) => (
                <div
                  key={e.title}
                  className="rounded-xl border border-border overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                    <h3 className="text-2xl text-muted-foreground text-center">{e.title}</h3>
                    <p className="text-md font-semibold text-muted-foreground text-center">
                      {e.autoria}
                    </p>
                    <p className="px-2 text-md md:text-lg text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className={btn}>
                      Leer investigación
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
