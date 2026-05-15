import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@/assets/images/hero-bg.png';
import heroCCA from '@/assets/images/hero-camioneta-equipo.png';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-900">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={heroCCA} 
          alt="Diverse people joining hands" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-wide mb-6 border border-white/20">
            Cuidando el medio ambiente en Chihuahua
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-4xl lg:text-5xl font-serif text-white max-w-5xl leading-tight md:leading-tight lg:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Tomando conciencia sobre el medio ambiente<br/>
          <span className="italic text-white/90">Junto con Chihuahua</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          El Centro de Cultura Ambiental de Chihuahua A. C.
          contribuye a la toma de conciencia sobre el cuidado del medio ambiente de los chihuahuenses
        </motion.p>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors shadow-lg shadow-white/10">
            Haz una donación
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white/30 hover:bg-white/10 transition-colors">
            Nuestra misión
          </button>
        </motion.div>
      </div>
      
      {/* <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-3">Desliza</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}
