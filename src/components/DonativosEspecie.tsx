
const donativos: string[] = [
  "Equipo de seguridad (guantes, chalecos, zapatos de seguridad, mandiles, etc.)",
  "Contenedores: Rejas de plástico, maxi costales",
  "Gasolina o vales de combustible",
  "Artículos en buen estado que podamos vender o intercambiar como parte de nuestras estrategias de procuración de fondos",
];

export function DonativosEspecie() {
  return (
    <section id="donativos-especie" className="bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Donativos en especie
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-4 text-center">
          Apóyanos con insumos que necesitamos para operar, como:
        </p>

        <div className="mx-auto max-w-3xl rounded-md border p-5 bg-muted">
          <ul className="list-disc pl-5 space-y-1 text-md md:text-lg text-muted-foreground leading-relaxed sm:columns-2 sm:gap-10">
            {donativos.map((item) => (
              <li key={item} className="break-inside-avoid">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-md text-muted-foreground pt-6 text-center">
          Para coordinar la entrega de tu donativo, escríbenos a{" "}
          <a href="mailto:culturambiental.mx@gmail.com" className="font-bold underline">
            culturambiental.mx@gmail.com
          </a>{" "}
          o llama al{" "}
          <a href="tel:+526142154235" className="font-bold underline">
            614 215 4235
          </a>
          .
        </p>
      </div>
    </section>
  );
}
