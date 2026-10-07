import { CentrosAcopio } from '@/components/CentrosAcopio';
import { Unirse } from '@/components/Unirse';
import { Donar } from '@/components/Donar';
import { MedioAmbiente } from '@/components/MedioAmbiente';
import { Cursos } from '@/components/Cursos';

export default function TomaAccion() {
  return (
    <div className="min-h-screen pt-8 bg-secondary">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary pb-6 text-shadow-xs text-shadow-muted-foreground">Toma acción</h1>
        <CentrosAcopio />
        <Unirse />
        <Donar />
        <MedioAmbiente />
        <Cursos />
      </main>
    </div>
  );
}