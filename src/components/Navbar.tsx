import { Link } from "wouter";
import { useState } from "react";
import logoNavbar from '@/assets/images/logo-hor-2t.png';

const navLinks = [
  {
    label: "¿Quiénes somos?",
    href: "/quienes-somos",
    children: [
      { label: "Mensaje de Consejeras", href: "/quienes-somos#consejeras" },
      { label: "Misión y visión", href: "/quienes-somos#mision" },
      { label: "Historia", href: "/quienes-somos#historia" },
      { label: "Equipo", href: "/quienes-somos#equipo" },
      { label: "Resultados", href: "/quienes-somos#resultados" },
      { label: "ODS", href: "/quienes-somos#ods" },
      { label: "Reconocimientos", href: "/quienes-somos#reconocimientos" },
      { label: "Transparencia", href: "/quienes-somos#transparencia" },
    ],
  },
  {
    label: "¿Qué hacemos?",
    href: "/que-hacemos",
    children: [
      { label: "Programa de sensibilización", href: "/que-hacemos#sensibilizacion" },
      { label: "Reciclables Domésticos", href: "/que-hacemos#rd" },
      { label: "Centros de acopio", href: "/que-hacemos#acopio" },
      { label: "Programa Comparte", href: "/que-hacemos#comparte" },
      { label: "Foros y eventos", href: "/que-hacemos#foros" },
      { label: "Investigación", href: "/que-hacemos#inv" },
      { label: "Política pública", href: "/que-hacemos#politicas" },
    ],
  },
  {
    label: "Toma Acción",
    href: "/toma-accion",
  },
  {
    label: "Aprende Más",
    href: "/aprende-mas",
    children: [
      { label: "Red medio ambiental", href: "/aprende-mas#red" },
      { label: "Directorios", href: "/aprende-mas#directorios" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white shadow-sm- sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <img
            src={logoNavbar}
            alt="CCA Chihuahua"
            className="h-20 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-md font-medium hover:text-green-700 transition-colors">
            Inicio
          </Link>
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link href={link.href} className="text-md font-medium hover:text-green-700 transition-colors">
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="mailto:culturambiental.mx@gmail.com"
            className="bg-green-700 text-white text-md px-6 py-3 rounded-full hover:bg-green-800 transition-colors"
          >
            Donar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link href="/" className="block text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          {navLinks.map((link) => (
            <div key={link.href}>
              <button
                className="w-full text-left text-sm font-medium py-1 flex justify-between"
                onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
              >
                {link.label}
                <span>{openDropdown === link.href ? "▲" : "▼"}</span>
              </button>
              {openDropdown === link.href && link.children && (
                <div className="pl-4 space-y-1">
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-gray-600 py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}