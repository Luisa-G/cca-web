interface MapaEmbedProps {
  direccion: string;
  titulo: string;
}

// Mapa de Google Maps incrustado a partir de la dirección (sin API key).
export function MapaEmbed({ direccion, titulo }: MapaEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;

  return (
    <iframe
      src={src}
      title={`Mapa: ${titulo}`}
      className="w-full h-56 border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
