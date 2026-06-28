import { motion } from 'framer-motion';
import { Lightbulb, Heart, Users, Leaf} from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: "2022",
    description: [
      "Investigación de buenas prácticas sobre residuos sólidos urbanos (basura común) en Chihuahua y otros estados de  México.",
      "Inicio del programa “Reciclables Domésticos” con recolección de materiales casa por casa en Chihuahua Capital.",
    ],
  },
  {
    icon: Heart,
    title: "2023",
    description: [
      "Constitución legal como Asociación sin fines de lucro y como donataria autorizada para emitir recibos deducibles de impuestos",
      "Nos capacitamos para en en el Centro de Fortalecimiento (CFOSC)",
      "Creamos grupos participativos para analizar la gestión de residuos sólidos urbanos en Chihuahua",
      "Premio segundo lugar en “Emprende por un Cambio Social” otorgado por la Asociación Celiderh",
      "Premio Municipal del Cuidado al Medio Ambiente en Chihuahua Capital",
    ],
  },
  {
    icon: Users,
    title: "2024",
    description: [
      "Obtención de la Clave Única de Registro de Organizaciones (CLUNI)",
      "Miembros del Comité Municipal de Ecología y Cambio Climático",
      "Reuniones con Comisión Municipal de Regidores de Ecología",
      "Programa Comparte (intercambio de materiales y artículos para reuso)",
      "Reconocimiento al Mérito Rotario 2024 a nuestra Consejera Ana de la Rosa",
    ],
  },
  {
    icon: Leaf,
    title: "2025",
    description: [
      "Reconocimiento como participantes en el Premio a la Responsabilidad Medioambiental otorgada por El Congreso del Estado de Chihuahua",
      "Trabajo con la administración municipal para fomentar la gestión sustentable del manejo de residuos sólidos urbanos.",
    ],
  }
];

export function Historia() {
  return (
    <section id="historia" className="py-24 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Nuestra historia</h2>
          <p className="text-xl text-surface-foreground/70 font-light">
            Actuamos con el compromiso de vivir en armonía con la naturaleza y cuidar el planeta con responsabilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-surface-foreground/20" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="relative pt-8 md:pt-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="w-24 h-24 mx-auto bg-surface-foreground/10 rounded-full flex items-center justify-center mb-8 relative z-10 backdrop-blur-sm border border-surface-foreground/20">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-surface-foreground">{step.title}</h3>
              {Array.isArray(step.description) ? (
                <ul className="list-none list-inside text-sm text-muted-foreground leading-relaxed space-y-2 text-left">
                  {step.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-surface-foreground/60 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
