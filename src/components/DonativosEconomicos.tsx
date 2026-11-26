import { useState } from "react";
import { Copy, Check } from "lucide-react";

// TODO: reemplazar con los datos bancarios reales de CCA Chihuahua, A.C.
const datos: { label: string; value: string; copiable?: boolean }[] = [
  { label: "Beneficiario", value: "Centro de Cultura Ambiental de Chihuahua, A.C." },
  { label: "Banco", value: "[BANCO]" },
  { label: "CLABE interbancaria", value: "[CLABE]", copiable: true },
  { label: "Número de cuenta", value: "[NÚMERO DE CUENTA]", copiable: true },
  { label: "Concepto", value: "Donativo" },
];

export function DonativosEconomicos() {
  const [copiado, setCopiado] = useState<string | null>(null);

  const copiar = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiado(label);
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      // El portapapeles puede no estar disponible; no hacemos nada
    }
  };

  return (
    <section id="donativos-economicos" className="bg-background">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6 text-center">
          Donativos económicos
        </h2>
        <p className="text-md md:text-lg text-muted-foreground pb-4 text-center">
          Puedes realizar una transferencia o depósito con los siguientes datos:
        </p>

        <div className="mx-auto max-w-3xl rounded-md border p-5 bg-muted">
          <dl className="divide-y divide-border">
            {datos.map(({ label, value, copiable }) => (
              <div
                key={label}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-md text-muted-foreground">{label}</dt>
                <dd className="flex items-center gap-2 text-md md:text-lg font-bold text-muted-foreground break-all">
                  {value}
                  {copiable && (
                    <button
                      type="button"
                      aria-label={`Copiar ${label}`}
                      onClick={() => copiar(label, value)}
                      className="p-1 rounded-md hover:bg-background transition-colors"
                    >
                      {copiado === label ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="text-md text-muted-foreground pt-6 text-center">
          Contáctanos para más información al{" "}
          <a href="tel:+526142154235" className="font-bold underline">
            614 215 4235
          </a>{" "}
          o al correo{" "}
          <a href="mailto:culturambiental.mx@gmail.com" className="font-bold underline">
            culturambiental.mx@gmail.com
          </a>{" "}
        </p>
        <p className="text-md text-muted-foreground text-center">
          Si deseas <b>comprobante fiscal</b>, envíanos tu <b>cédula de situación fiscal</b> al mismo correo o teléfono.
        </p>
        <p className="text-md text-muted-foreground pt-3 text-center">
          Somos donataria autorizada y podemos emitir recibos deducibles de impuestos.
        </p>
      </div>
    </section>
  );
}
