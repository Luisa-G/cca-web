import { motion } from 'framer-motion';
import team1 from '@/assets/images/team-1.jpg';
import team2 from '@/assets/images/team-2.jpg';
import team3 from '@/assets/images/team-3.jpg';
import team4 from '@/assets/images/team-4.jpg';
import team5 from '@/assets/images/team-5.jpg';
import team6 from '@/assets/images/team-6.jpg';
import team7 from '@/assets/images/team-7.jpg';

const people = [
  {
    title: "Ana de la Rosa",
    tag: "Arquitecta",
    description: "Experiencia con más de 30 años en estrategias del cuidado del medio ambiente. “Creo que los ciudadanos podemos hacer la diferencia en el cuidado del medio ambiente”.",
    image: team1,
  },
  {
    title: "Marcia Jaramillo",
    tag: "Maestría en valores y desarrollo humano (IAPE)",
    description: "“Creo firmemente en que el Ser Humano puede cambiar su forma de actuar si se hace consciente del efecto y trascendencia  de sus acciones actuales y por ende puede  hacerse  responsable de ellas para cambiar el futuro de nuestro planeta en forma individual; y ser parte de un movimiento colectivo y esperanzador”.",
    image: team2,
  },
  {
    title: "Teresa Pérez",
    tag: "Arquitecta",
    description: "“Durante más de 40 años he trabajado en educación organizando proyectos que tienen que ver con la responsabilidad que tenemos como individuos en el cuidado del medio ambiente y organizando el centro de acopio de una escuela”.",
    image: team3,
  },
  {
    title: "Lourdes Pico",
    tag: "Maestría en Ciencias Químicas y Administración de Empresas",
    description: "Más de 30 años participando de acciones para el cuidado al Medio Ambiente. “Me motiva el generar condiciones para que la comunidad participe con actividades sencillas pero contundentes para aminorar el cambio climático y así poder vivir en una ciudad sustentable”.",
    image: team4,
  },
  {
    title: "Daniela Martínez",
    tag: "Lic. en Administración Financiera",
    description: "“Considero la consciencia y responsabilidad individual muy importante en todos los aspectos; es vital para la conservación de la vida, el cuidar de los recursos que tenemos”.",
    image: team5,
  },
  {
    title: "Luis Delgado",
    tag: "Técnico en Animal Sc",
    description: "“Cada vez es más importante crear conciencia en la gente sobre el cuidado del planeta”.",
    image: team6,
  },
  {
    title: "Hector Ortíz",
    tag: "",
    description: "“Es importante cuidar el medio ambiente”.",
    image: team7,
  }
];

export function Equipo() {
  return (
    <section id="equipo" className="pt-26 pb-12 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Equipo de trabajo</h2>
            <p className="text-lg text-muted-foreground">El equipo está formado por un consejo directivo integrado por tres personas con experiencia de más de 30 años en el tema de separación y reciclado de materiales y en el cuidado ambiental. Se tiene la colaboración voluntaria de 10 personas que también cuentan con muchos años de experiencia en el cuidado del medio ambiente. El personal operativo se compone de una administradora y dos personas recolectoras.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p, idx) => (
            <motion.div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-card border shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-foreground mb-3">{p.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3 block">
                  {p.tag}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
