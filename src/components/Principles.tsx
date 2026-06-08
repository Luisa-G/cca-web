import misionImg from "@/assets/hero.png";

const items = [
  {
    title: "Educar",
    text: "Creemos que el cambio comienza en casa. Por eso educamos a las y los chihuahuenses para vivir de una manera más consciente, reduciendo su huella en el medio ambiente a través de prácticas simples y cotidianas. Desde el ahorro de agua y energía, hasta la correcta separación de residuos y el consumo responsable, acompañamos a nuestra comunidad para que cada acción, por pequeña que parezca, sume a la construcción de un futuro más limpio y sostenible.",
  },
  {
    title: "Actuar",
    text: "Sabemos que las ideas se vuelven poderosas cuando se transforman en acción. Por eso diseñamos clases, talleres y proyectos que permiten a niñas, niños, jóvenes y adultos poner en práctica sus creencias ambientales. Con actividades dinámicas y proyectos comunitarios, fomentamos la creatividad y la innovación para que cada participante encuentre su propia manera de cuidar y transformar su entorno.",
  },
  {
    title: "Conectar",
    text: "Nuestro impacto crece cuando nos unimos. En Cultura Ambiental conectamos a personas, colectivos y corporaciones que comparten nuestra misión de proteger el planeta. Creamos redes de colaboración que impulsan proyectos comunes, fortalecemos alianzas y multiplicamos resultados, demostrando que cuando trabajamos juntos, el poder de la comunidad se convierte en un motor imparable de cambio positivo.",
  },
];

export function Principles() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] rounded-2xl overflow-hidden border border-border">

        {/* Imagen izquierda */}
        <div className="relative min-h-[320px]">
          <img
            src={misionImg}
            alt="Equipo de CCA Chihuahua"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Contenido derecho */}
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-[140px_1fr] gap-4 items-start px-8 py-6"
            >
              <h3 className="text-secondary text-lg pt-0.5">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}