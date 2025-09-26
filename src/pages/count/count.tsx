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

export function CountPage() {
  const conta = {
    titulo: "Login PC",
    usuario: "tuilara-lavarda",
    senha: "Tui100800%",
    categoria: categorias[2],
  };

  const Icon = conta.categoria.icon;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Informações da Conta</h2>
      <div className="space-y-3">
        <div>
          <span className="font-medium">Título:</span>
          <p>{conta.titulo}</p>
        </div>
        <div>
          <span className="font-medium">Usuário:</span>
          <p>{conta.usuario}</p>
        </div>
        <div>
          <span className="font-medium">Senha:</span>
          <p>{conta.senha}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Categoria:</span>
          <Icon className="h-5 w-5 text-gray-600" />
          <p>{conta.categoria.label}</p>
        </div>
      </div>
    </div>
  );
}