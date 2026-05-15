import { Link } from "wouter";
import { LucideInstagram, LucideFacebook, LucideYoutube } from "lucide-react";
import logoFooter from '@/assets/images/logo-hor-b.png';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src={logoFooter}
            alt="CCA Chihuahua"
          />
        </div>
        <div>
          <p className="text-sm">culturambiental.mx@gmail.com</p>
          <p className="text-sm mt-1">Calle Kansas 2028, Col. Quintas Campestre</p>
          <p className="text-sm">Chihuahua, Chih., CP 31213</p>
          <p className="text-sm mt-1">Tel: 614 215 4235</p>
        </div>
        <div>
          <div className="flex gap-2 text-sm">
            <a href="https://www.instagram.com/culturambiental.mx/" target="_blank" rel="noreferrer" className="hover:text-white/70">
              <LucideInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/culturambiental.mx" target="_blank" rel="noreferrer" className="hover:text-white/70">
              <LucideFacebook size={20} />
            </a>
            <a href="https://www.youtube.com/@ecorecolectachihuahua6514" target="_blank" rel="noreferrer" className="hover:text-white/70">
              <LucideYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 text-center text-xs py-4 text-white/60">
        © Todos los derechos reservados
      </div>
      <div className="text-center text-xs py-4 text-white/60">
        <Link href="/aviso-privacidad" className="hover:text-white">Aviso de privacidad</Link>
      </div>
    </footer>
  );
}