import { Hero } from '@/components/Hero';
import { ImpactMetrics } from '@/components/ImpactMetrics';
import { Programs } from '@/components/Programs';
import { Storytelling } from '@/components/Storytelling';
import { HowWeHelp } from '@/components/HowWeHelp';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { EmotionalCTA } from '@/components/EmotionalCTA';
import { HomeCarousel } from "@/components/HomeCarousel"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <HomeCarousel />
        </section>
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
