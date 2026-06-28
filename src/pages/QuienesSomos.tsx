import { Mision } from '@/components/Mision';
import { Principios } from '@/components/Principios';
import { Equipo } from '@/components/Equipo';
import { Historia } from '@/components/Historia';
import { Resultados } from '@/components/Resultados';
import { Reconocimientos } from '@/components/Reconocimientos';
import { Transparencia } from '@/components/Transparencia';

//Falta terminar y reacomodar
import { Mision2 } from '@/components/Mision2';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen pt-8 bg-muted/30">
    {/* <div className="max-w-6xl mx-auto px-4 py-16"> */}
      <main>
        <h1 className="text-4xl md:text-5xl text-secondary-foreground text-center bg-secondary py-4">¿Quiénes somos?</h1>
        <Mision />
        <Mision2 />
        <Principios />
        <Equipo />
        <Historia />
        <Resultados />
        <Reconocimientos />
        <Transparencia />
      </main>
    </div>
  );
}