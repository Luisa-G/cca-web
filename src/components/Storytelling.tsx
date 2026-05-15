import { motion } from 'framer-motion';
import storyPortrait from '@/assets/images/story-portrait.png';

export function Storytelling() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src={storyPortrait} 
                alt="Portrait of a young woman looking hopeful" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-wide uppercase text-sm mb-6 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
              Every number is a name. Every name is a story.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                When we started Hopelly, we made a promise: we would never reduce human lives to statistics on a dashboard. We believe that true impact isn't just about scale; it's about depth.
              </p>
              <p>
                It's about Maria, who opened her own bakery after receiving a micro-loan. It's about David, who learned to code in our community center and now builds software for his city. It's about the quiet, powerful ripple effect of one person believing in another.
              </p>
            </div>
            <button className="mt-10 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
              Read Our Stories
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
