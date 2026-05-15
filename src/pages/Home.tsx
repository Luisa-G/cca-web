import { Hero } from '@/components/Hero';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Programs } from '@/components/Programs';
import { Storytelling } from '@/components/Storytelling';
import { HowWeHelp } from '@/components/HowWeHelp';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { EmotionalCTA } from '@/components/EmotionalCTA';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <ImpactMetrics />
        <Programs />
        <Storytelling />
        <HowWeHelp />
        <Gallery />
        <Testimonials />
        <EmotionalCTA />
      </main>
    </div>
  );
}
