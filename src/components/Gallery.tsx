import { motion } from 'framer-motion';
import gallery1 from '@/assets/images/gallery-1.png';
import gallery2 from '@/assets/images/gallery-2.png';
import gallery3 from '@/assets/images/gallery-3.png';
import gallery4 from '@/assets/images/gallery-4.png';

const images = [
  { src: gallery1, alt: "Hands holding glowing seedling", className: "col-span-1 row-span-1" },
  { src: gallery2, alt: "Community gathering park", className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2" },
  { src: gallery3, alt: "Volunteer handing food box", className: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Children running joyful outdoors", className: "col-span-1 row-span-1 md:col-span-2" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Moments of Hope</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-[600px] md:h-[800px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group ${img.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
