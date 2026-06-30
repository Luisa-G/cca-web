import { CentrosAcopio } from '@/components/CentrosAcopio';
import { Unirse } from '@/components/Unirse';
import { Donar } from '@/components/Donar';
import { MedioAmbiente } from '@/components/MedioAmbiente';
import { Cursos } from '@/components/Cursos';

export default function TomaAccion() {
  return (
    <div className="min-h-screen pt-8 bg-muted/30">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary py-4">Toma acción</h1>
        <CentrosAcopio />
        <Unirse />
        <Donar />
        <MedioAmbiente />
        <Cursos />
      </main>
    </div>
  );
}