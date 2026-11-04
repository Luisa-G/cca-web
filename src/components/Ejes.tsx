import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import galleryPlaceholder from '@/assets/images/gallery-2.png';

const items = [
  {
    title: "Sensibilización y capacitación",
    intro: "Compartimos conocimiento con organizaciones y ciudadanos",
    description:
      "La capacitación y la sensibilización son una parte fundamental para crear conciencia en las y los chihuahuenses respecto a la responsabilidad con el medio ambiente. Lo hacemos a través de cursos y talleres.",
    image: galleryPlaceholder,
    link: "/que-hacemos/sensibilizacion",
  },
  {
    title: "Programa “Reciclables Domésticos”",
    intro: "Reintegramos los materiales a los procesos. ¡Es fácil empezar!",
    description:
      "Toda la familia puede participar en crear un futuro sostenible. La finalidad es mejorar hábitos de consumo de las familias a través de la separación de los materiales reciclables",
    image: galleryPlaceholder,
    link: "/que-hacemos/reciclables-domesticos",
  },
  {
    title: "Programa “Comparte”",
    intro: "Si ya no lo necesitas ¡Compártelo! Para alguien más puede ser muy valioso",
    description:
      "Somos un canal de comunicación que conecta a personas y comunidades. A través de nuestros chats de WhatsApp, facilitamos el intercambio de artículos y materiales con vida útil, para que puedan ser reutilizados por alguien más.",
    image: galleryPlaceholder,
    link: null,
  },
  {
    title: "Incidencia en Política Pública",
    intro: "Trabajando juntos logramos cambios a largo plazo",
    description:
      "A través de audiencias públicas, mesas técnicas y conversaciones colaborativas, promovemos la creación e implementación de políticas públicas a favor de un  medio ambiente sano para todos los chihuahuenses.",
    image: galleryPlaceholder,
    link: "/que-hacemos/incidencia-politica-publica",
  },
];

export function Ejes() {
  return (
    <section id="ejes" className="pt-26 bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">Ejes de trabajo</h2>
        <p className="text-lg text-muted-foreground pb-4">Apoyados en nuestra <b>teoría de cambio de las 6Rs</b>, construimos un presente responsable y sostenible por medio de cuatro ejes:</p>
            <ul className="list-disc list-inside text-lg text-muted-foreground text-bold leading-relaxed space-y-1 pb-10">
              <li><b>Eje 1: Sensibilización y capacitación sobre medio ambiente</b></li>
              <li><b>Eje 2: Programa "Reciclables Domésticos"</b></li>
              <li><b>Eje 3: Programa "Comparte"</b></li>
              <li><b>Eje 4: Incidencia en política pública</b></li>
            </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((i) => (
            <div
              key={i.title}
              className="group rounded-xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={i.image}
                  alt={i.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 bg-surface">
                <h3 className="text-2xl text-muted-foreground text-center">{i.title}</h3>
                {i.intro && (
                  <p className="text-md font-semibold text-muted-foreground leading-relaxed text-center">
                    {i.intro}
                  </p>
                )}
                {Array.isArray(i.description) ? (
                  <ul className="list-disc list-inside text-md text-muted-foreground leading-relaxed space-y-1">
                    {i.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-6 text-lg text-muted-foreground leading-relaxed">
                    {i.description}
                  </p>
                )}
                {i.link && (
                  <a
                    href={i.link}
                    className="bg-accent mt-auto self-center inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-background hover:text-surface-foreground transition-colors"
                  >
                    Conoce más
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}