import { Mision } from '@/components/Mision';
import { Principios } from '@/components/Principios';
import { Equipo } from '@/components/Equipo';
import { Historia } from '@/components/Historia';
import { Resultados } from '@/components/Resultados';
import { Reconocimientos } from '@/components/Reconocimientos';
import { Transparencia } from '@/components/Transparencia';

//Falta terminar y reacomodar

import { CarouselVertical } from '@/components/rpueba';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen pt-8 bg-secondary">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary pb-6 text-shadow-xs text-shadow-muted-foreground">¿Quiénes somos?</h1>
        <Mision />
        <Principios />
        <Equipo />
        <Historia />
        <Resultados />
        <Reconocimientos />
        <Transparencia />
        <CarouselVertical />
      </main>
    </div>
  );
}