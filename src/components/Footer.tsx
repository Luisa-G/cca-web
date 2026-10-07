import { Link } from "wouter";
import { LucideInstagram, LucideFacebook, LucideYoutube } from "lucide-react";
import logoFooter from '@/assets/images/logo-hor-b.png';

export default function Footer() {
  return (
    <footer className="bg-border text-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 items-center justify-items-center text-center">
        <div>
          <img
            src={logoFooter}
            alt="CCA Chihuahua"
            className="h-30 object-contain"
          />
        </div>
        <div>
          <a href="mailto:culturambiental.mx@gmail.com" className="text-sm hover:text-surface">culturambiental.mx@gmail.com</a>
          <p className="text-sm mt-1">Calle Kansas 2028, Col. Quintas Campestre</p>
          <p className="text-sm">Chihuahua, Chih., CP 31213</p>
          <p className="text-sm mt-1">Tel: 614 215 4235</p>
        </div>
        <div className="flex justify-center gap-3">
          <a href="https://www.instagram.com/culturambiental.mx/" target="_blank" rel="noreferrer" className="hover:text-muted">
            <LucideInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/culturambiental.mx" target="_blank" rel="noreferrer" className="hover:text-muted">
            <LucideFacebook size={30} />
          </a>
          <a href="https://www.youtube.com/@ecorecolectachihuahua6514" target="_blank" rel="noreferrer" className="hover:text-muted">
            <LucideYoutube size={30} />
          </a>
        </div>
      </div>
      <div className="border-t border-surface text-center text-xs py-4 text-surface">
        © Todos los derechos reservados
      </div>
      <div className="text-center text-xs py-4 text-surface">
        <Link href="/aviso-privacidad" className="hover:text-white">Aviso de privacidad</Link>
      </div>
    </footer>
  );
}