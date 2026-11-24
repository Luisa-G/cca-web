import { HeroBanner } from '@/components/HeroBanner';
import { MisionHome } from '@/components/MisionHome';
import { SeisRsHome } from '@/components/SeisRsHome';
import { EjesHome } from '@/components/EjesHome';
import { TomaAccionHome } from '@/components/TomaAccionHome';
import { Referencias } from '@/components/Referencias';
import { ImpactMetrics } from '@/components/ImpactMetrics';



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroBanner />
        <MisionHome />
        <SeisRsHome />
        <EjesHome />
        <ImpactMetrics />
        <TomaAccionHome />
        <Referencias />
      </main>
    </div>
  );
}
