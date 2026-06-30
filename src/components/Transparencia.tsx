import { motion } from 'framer-motion';

export function Transparencia() {
  return (
    <section id="transparencia" className="pt-26 pb-12 bg-card">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Transparencia</h2>
            <p className="text-lg text-muted-foreground">Agregar contenido</p>
          </motion.div>
        </div>
                <div
          style={{
            position: 'relative',
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '60vh',   // o '60vh', ajusta a tu gusto
            paddingTop: 0,
            paddingBottom: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '1.2em',
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAHHilBvTHA/d0fEr7Ez1yZXxYObDRd_3g/view?embed"
            allow="fullscreen"
          />
        </div>

        {/* Link con clases Tailwind consistentes con el resto del componente */}
        <a
          href="https://www.canva.com/design/DAHHilBvTHA/d0fEr7Ez1yZXxYObDRd_3g/view?utm_content=DAHHilBvTHA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Informe de Cultura Ambiental CCA
        </a>

        

      </div>
    </section>
  );
}
