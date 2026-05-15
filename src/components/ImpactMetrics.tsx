import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function Counter({ value, direction = "up" }: { value: number, direction?: "up" | "down" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    damping: 60,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  // Handle format for large numbers (e.g., 2.5M, 140+)
  const display = useTransform(springValue, (current) => {
    if (value >= 1000000) {
      return (current / 1000000).toFixed(0) + 'T';
    } else if (value >= 1000) {
      return Math.floor(current / 1000) + 'K';
    }
    return Math.floor(current).toString();
  });

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function ImpactMetrics() {
  const metrics = [
    { label: "Materiales reciclados", value: 279000000, suffix: "+" },
    { label: "Fraccionamientos y escuelas", value: 29, suffix: "" },
    { label: "Personas capacitadas", value: 1400, suffix: "+" },
    { label: "Empresas", value: 30, suffix: "" }
  ];

  return (
    <section id="our-impact" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
                <Counter value={metric.value} />
                <span className="text-primary">{metric.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
