import { Link } from "wouter";
import { useState } from "react";
import logoNavbar from '@/assets/images/logo-hor-2t.png';

type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

const navLinks: NavLink[] = [
  {
    label: "¿Quiénes somos?",
    href: "/quienes-somos",
    children: [
      { label: "Misión, visión, valores y objetivos", href: "/quienes-somos#mision" },
      { label: "Principios", href: "/quienes-somos#principios" },
      { label: "Equipo de trabajo", href: "/quienes-somos#equipo" },
      { label: "Historia", href: "/quienes-somos#historia" },
      { label: "Resultados", href: "/quienes-somos#resultados" },
      { label: "Reconocimientos", href: "/quienes-somos#reconocimientos" },
      { label: "Transparencia", href: "/quienes-somos#transparencia" },
    ],
  },
  {
    label: "¿Qué hacemos?",
    href: "/que-hacemos",
    children: [
      { label: "Metodología 6 Rs", href: "/que-hacemos#metodologia" },
      {
        label: "Ejes",
        href: "/que-hacemos#ejes",
        children: [
          { label: "Eje 1: Sensibilización y capacitación", href: "/que-hacemos#sensibilizacion" },
          { label: "Eje 2: Reciclables Domésticos", href: "/que-hacemos#reciclables" },
          { label: "Eje 3: Comparte", href: "/que-hacemos#comparte" },
          { label: "Eje 4: Política", href: "/que-hacemos#politica" },
        ],
      },
    ],
  },
  {
    label: "Toma Acción",
    href: "/toma-accion",
    children: [
      { label: "Centros de acopio", href: "/toma-accion#acopio" },
      { label: "Unirse a programas", href: "/toma-accion#programas" },
      { label: "Donar", href: "/toma-accion#donar" },
      { label: "Cuida el medio ambiente", href: "/toma-accion#medio-ambiente" },
      { label: "Cursos", href: "/toma-accion#cursos" },
    ],
  },
  {
    label: "Aprende Más",
    href: "/aprende-mas",
    children: [
      { label: "Aliados", href: "/aprende-mas#aliados" },
      { label: "Nuestras investigaciones", href: "/aprende-mas#inv-propias" },
      { label: "Material adicional", href: "/aprende-mas#adicional" },
      { label: "Investigaciones externas", href: "/aprende-mas#inv-externas" },
      { label: "Casos de éxito", href: "/aprende-mas#casos-exito" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);


  const handleDropdownToggle = (href: string) => {
    if (openDropdown === href) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(href);
      setOpenSubDropdown(null);
    }
  };

  const handleSubDropdownToggle = (href: string) => {
    setOpenSubDropdown(openSubDropdown === href ? null : href);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
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
          <Link href="/" className="text-gray-700 text-md font-medium hover:text-secondary transition-colors">
            Inicio
          </Link>
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link href={link.href} className="text-gray-700 text-md font-medium hover:text-secondary transition-colors">
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {link.children.map((child) => (
                    <div key={child.href} className="relative group/sub">
                      <a
                        href={child.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-secondary/5 hover:text-secondary"
                      >
                        {child.label}
                        {child.children && <span className="ml-2 text-xs">▶</span>}
                      </a>
                      {child.children && (
                        <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-50">
                          {child.children.map((grandchild) => (
                            <a
                              key={grandchild.href}
                              href={grandchild.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary/5 hover:text-secondary"
                            >
                              {grandchild.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="mailto:culturambiental.mx@gmail.com"
            className="bg-secondary text-white text-md px-6 py-3 rounded-full hover:bg-secondary/20 hover:text-secondary transition-colors"
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
                onClick={() => handleDropdownToggle(link.href)}
              >
                {link.label}
                {link.children && (
                  <span>{openDropdown === link.href ? "▲" : "▼"}</span>
                )}
              </button>
              {openDropdown === link.href && link.children && (
                <div className="pl-4 space-y-1">
                  {link.children.map((child) => (
                    <div key={child.href}>
                      {child.children ? (
                        <>
                          <button
                            className="w-full text-left text-sm text-gray-600 py-1 flex justify-between"
                            onClick={() => handleSubDropdownToggle(child.href)}
                          >
                            {child.label}
                            <span>{openSubDropdown === child.href ? "▲" : "▼"}</span>
                          </button>
                          {openSubDropdown === child.href && (
                            <div className="pl-4 space-y-1">
                              {child.children.map((grandchild) => (
                                <a
                                  key={grandchild.href}
                                  href={grandchild.href}
                                  className="block text-sm text-gray-500 py-1"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {grandchild.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={child.href}
                          className="block text-sm text-gray-600 py-1"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      )}
                    </div>
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
