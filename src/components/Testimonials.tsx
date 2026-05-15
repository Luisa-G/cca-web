import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import testimonial1 from '@/assets/images/testimonial-1.png';

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 inline-block"
          >
            <Quote className="w-16 h-16 text-primary/20 mx-auto" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-foreground leading-snug mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Before Hopelly arrived, we didn't have access to clean water. Today, not only does our village have a well, but our children are healthier, and we feel a renewed sense of dignity and possibility."
          </motion.h2>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-background shadow-md">
              <img src={testimonial1} alt="Marcus T." className="w-full h-full object-cover" />
            </div>
            <div className="font-medium text-foreground">Marcus T.</div>
            <div className="text-sm text-muted-foreground">Community Leader, Kenya</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
