import { Link } from 'wouter';
import { motion } from 'framer-motion';
// AJUSTA esta ruta a donde vive la imagen en tu proyecto (en el build aparece como hero-camioneta-equipo)
import heroImg from '@/assets/images/hero-camioneta-equipo.png';

export function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Equipo del Centro de Cultura Ambiental de Chihuahua junto a la camioneta de recolección"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Overlay oscuro para legibilidad: sobre foto el texto va en blanco, no en tokens del tema */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/70 via-black/45 to-black/10" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-26 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-md font-medium backdrop-blur">
            Cuidando el medio ambiente en Chihuahua
          </p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Tomando conciencia sobre el medio ambiente junto con Chihuahua
          </h1>
          <p className="text-md md:text-lg text-white/90 pb-6">
            El Centro de Cultura Ambiental de Chihuahua A. C. contribuye a la toma de conciencia
            sobre el cuidado del medio ambiente de los chihuahuenses.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/toma-accion"
              className="bg-accent inline-flex gap-2 text-md px-4 py-1 border border-accent rounded-full font-medium text-input hover:bg-input hover:text-surface-foreground transition-colors"
            >
              Toma acción
            </Link>
            <Link
              href="/que-hacemos"
              className="inline-flex gap-2 text-md px-4 py-1 border border-white rounded-full font-medium text-white hover:bg-white/15 transition-colors"
            >
              Conoce qué hacemos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
