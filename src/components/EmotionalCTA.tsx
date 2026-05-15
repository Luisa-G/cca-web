import { motion } from 'framer-motion';
import heroBg from '@/assets/images/hero-bg.png';

export function EmotionalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover filter brightness-[0.3]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The future isn't written yet. <br/>
          Let's write it together.
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your contribution doesn't just fund a project. It funds potential. It funds dreams. It funds hope.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Donate Monthly
          </button>
          <button className="px-10 py-5 rounded-full bg-white text-black text-lg font-medium hover:bg-white/90 transition-all hover:scale-105">
            Give Once
          </button>
        </motion.div>
      </div>
    </section>
  );
}
