import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import program1 from '@/assets/images/program-1.png';
import program2 from '@/assets/images/program-2.png';
import program3 from '@/assets/images/program-3.png';

const programs = [
  {
    title: "Education Initiative",
    description: "Providing quality education and modern learning resources to underserved communities.",
    image: program1,
    tag: "Education"
  },
  {
    title: "Green Earth Project",
    description: "Restoring ecosystems through community-led tree planting and conservation efforts.",
    image: program2,
    tag: "Environment"
  },
  {
    title: "Elderly Care Program",
    description: "Ensuring dignity, medical care, and companionship for our senior citizens.",
    image: program3,
    tag: "Healthcare"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Initiatives that drive real change</h2>
            <p className="text-lg text-muted-foreground">We focus on sustainable, long-term solutions rather than quick fixes. Explore our active programs across the globe.</p>
          </motion.div>
          <motion.button 
            className="group flex items-center gap-2 text-primary font-medium border-b border-primary pb-1 hover:text-primary/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
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
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
                  {program.tag}
                </span>
                <h3 className="text-2xl font-serif text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
