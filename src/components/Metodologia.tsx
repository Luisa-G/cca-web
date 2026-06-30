export function Metodologia() {
  return (
    <section id="metodologia" className="pt-26 pb-12 bg-card">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div 
            className="max-w-2xl"
          >
            {/* <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Introducción</h2> */}
            <p className="text-lg text-muted-foreground pb-4">Apoyados en nuestra <b>teoría de cambio de las 6Rs</b>, construimos un presente responsable y sostenible por medio de <b>cuatro ejes:</b></p>
            <ul className="list-disc list-inside text-lg text-muted-foreground text-bold leading-relaxed space-y-1 pb-20">
              <li><b>Sensibilización y capacitación</b></li>
              <li><b>Programa "Reciclables Domésticos"</b></li>
              <li><b>Programa "Comparte"</b></li>
              <li><b>Incidencia en política pública</b></li>
            </ul>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Metodología 6 R's</h2>
            <p className="text-lg text-muted-foreground pb-4">Conoce más sobre nuestra metodología!</p>
            <button className="bg-secondary text-white text-md px-6 py-3 rounded-full hover:bg-secondary/20 hover:text-secondary transition-colors">
              Más sobre las 6Rs
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
