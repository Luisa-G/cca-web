import { useEffect } from "react";
import { useLocation } from "wouter";

// Al cambiar de ruta, regresa al inicio de la página.
// useLocation devuelve solo la ruta (sin #hash), así que navegar a
// "/quienes-somos#equipo" sigue funcionando: el scroll al hash lo hace
// useNavigateToHash 100 ms después, y este efecto corre antes.
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}