import { Metodologia } from '@/components/Metodologia';
import { Ejes } from '@/components/Ejes';
import { Sensibilizacion } from '@/components/Sensibilizacion';
import { Reciclables } from '@/components/Reciclables';
import { Comparte } from '@/components/Comparte';
import { Politica } from '@/components/Politica';

export default function QueHacemos() {
  return (
    <div className="min-h-screen pt-8 bg-muted/30">
      <main>
        <h1 className="text-4xl text-secondary-foreground text-center bg-secondary py-4">¿Qué hacemos?</h1>
        <Metodologia />
        <Ejes />
        <Sensibilizacion />
        <Reciclables />
        <Comparte />
        <Politica />
      </main>
    </div>
  );
}