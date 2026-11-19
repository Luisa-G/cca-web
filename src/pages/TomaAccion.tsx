import { DonarIntro } from '@/components/DonarIntro';
import { DonativosEspecie } from '@/components/DonativosEspecie';
import { DonativosEconomicos } from '@/components/DonativosEconomicos';
import { AcopioIntro } from '@/components/AcopioIntro';
import { AcopioCarrusel } from '@/components/AcopioCarrusel';
import { AccionesConjuntas } from '@/components/AccionesConjuntas';


export default function TomaAccion() {
  return (
    <div className="min-h-screen pt-8 bg-secondary">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary pb-6 text-shadow-xs text-shadow-muted-foreground">Toma acción</h1>
        <DonarIntro />
        <DonativosEspecie />
        <DonativosEconomicos />
        <AcopioIntro />
        <AcopioCarrusel />
        <AccionesConjuntas />
      </main>
    </div>
  );
}