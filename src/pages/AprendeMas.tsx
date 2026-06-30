import { Aliados } from '@/components/Aliados';
import { NuestrasInv } from '@/components/NuestrasInv';
import { MaterialAdicional } from '@/components/MaterialAdicional';
import { InvExternas } from '@/components/InvExternas';
import { CasosExito } from '@/components/CasosExito';

export default function AprendeMas() {
  return (
    <div className="min-h-screen pt-8 bg-muted/30">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary py-4">Aprende más</h1>
        <Aliados />
        <NuestrasInv />
        <MaterialAdicional />
        <InvExternas />
        <CasosExito />
      </main>
    </div>
  );
}