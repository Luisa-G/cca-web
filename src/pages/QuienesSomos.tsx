
import { Principles } from '@/components/Principles';
import { AboutUs } from '@/components/AboutUs';
import { Programs } from '@/components/Programs';
import { History } from '@/components/History';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Storytelling } from '@/components/Storytelling';
import { Team } from '@/components/Team';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-background pt-8">
    {/* <div className="max-w-6xl mx-auto px-4 py-16"> */}
      <main>
        <h1 className="text-3xl font-bold text-green-800 text-center">¿Quiénes somos?</h1>
        <AboutUs />
        <Principles />
        <Team />
        <History />
        <ImpactMetrics />
        <Programs />
        <Storytelling />        
      </main>
    </div>
  );
}