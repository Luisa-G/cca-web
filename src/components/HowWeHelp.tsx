import { motion } from 'framer-motion';
import { Heart, Globe, Lightbulb, Users } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    title: "Identify Needs",
    description: "We work directly with local leaders to understand the unique challenges facing their communities."
  },
  {
    icon: Lightbulb,
    title: "Develop Solutions",
    description: "Instead of imposing ideas, we co-create sustainable, culturally appropriate solutions."
  },
  {
    icon: Users,
    title: "Empower People",
    description: "We provide resources, training, and support to local champions who lead the change."
  },
  {
    icon: Heart,
    title: "Sustain Impact",
    description: "We ensure projects become self-sustaining, leaving communities stronger and independent."
  }
];

export function HowWeHelp() {
  return (
    <section className="py-24 bg-surface text-surface-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-surface-foreground">How we create change</h2>
          <p className="text-xl text-surface-foreground/70 font-light">
            Our methodology is rooted in respect, partnership, and long-term commitment.
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
              <p className="text-surface-foreground/60 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
