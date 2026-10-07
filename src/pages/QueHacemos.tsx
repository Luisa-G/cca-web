import { Metodologia } from '@/components/Metodologia';
import { Ejes } from '@/components/Ejes';

export default function QueHacemos() {
  return (
    <div className="min-h-screen pt-8 bg-secondary">
      <main>
        <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center bg-secondary pb-6 text-shadow-xs text-shadow-muted-foreground">¿Qué hacemos?</h1>
        <Metodologia />
        <Ejes />
      </main>
    </div>
  );
}