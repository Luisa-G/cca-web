import { useEffect } from 'react';
import { CentrosAcopioListado } from '@/components/CentrosAcopioListado';
import { PuntosLimpiosListado } from '@/components/PuntosLimpiosListado';


export default function CentrosAcopio() {
  // Wouter no reinicia el scroll al navegar: llegamos desde la mitad de Toma acción.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-8 bg-primary">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-primary pb-6 text-shadow-xs text-shadow-muted-foreground">Centros de acopio y Puntos limpios</h1>
        <p className="text-lg md:text-xl text-muted-foreground pt-6 text-center bg-background">
          Ya separas material valorizable ¿pero no sabes a dónde llevarlo?
        </p>
        <p className="text-lg md:text-xl text-muted-foreground text-center bg-background">
          Aquí te compartimos algunas opciones:
        </p>
        <CentrosAcopioListado />
        <PuntosLimpiosListado />
      </main>
    </div>
  );
}
