import { useState } from "react";
import { Globe, Mail, Lock, Smartphone, CreditCard, ShoppingCart, Wifi, Key, Github } from "lucide-react";

const categorias = [
  { value: "site", label: "Site", icon: Globe },
  { value: "email", label: "Email", icon: Mail },
  { value: "acesso", label: "Acesso", icon: Lock },
  { value: "app", label: "Aplicativo", icon: Smartphone },
  { value: "cartao", label: "Cartão de Crédito", icon: CreditCard },
  { value: "loja", label: "Loja Online", icon: ShoppingCart },
  { value: "wifi", label: "Wi-Fi", icon: Wifi },
  { value: "chave", label: "Chave/API Key", icon: Key },
  { value: "github", label: "GitHub", icon: Github },
];

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(categorias[0]);

  return (
    <div className="relative w-64">
      {/* Botão principal */}
      <button
        className="w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-white shadow-sm"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <selected.icon className="w-4 h-4" />
          {selected.label}
        </span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-md z-10">
          {categorias.map((c) => (
            <div
              key={c.value}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelected(c);
                setOpen(false);
              }}
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
