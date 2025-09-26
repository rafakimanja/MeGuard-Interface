import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Mail, Lock, Smartphone, CreditCard, ShoppingCart, Wifi, Key, Github } from "lucide-react";

interface FormValues {
  titulo: string;
  usuario: string;
  senha: string;
  confirmSenha: string;
  categoria: string;
}

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

export default function CountFormPage() {
  const [form, setForm] = useState<FormValues>({
    titulo: "",
    usuario: "",
    senha: "",
    confirmSenha: "",
    categoria: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.senha !== form.confirmSenha) {
      setError("As senhas não coincidem");
      return;
    }
    setError("");
    console.log("Valores do form:", form);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Cadastrar Conta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Título */}
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <Input
            name="titulo"
            placeholder="Ex: Minha Conta"
            value={form.titulo}
            onChange={handleChange}
          />
        </div>

        {/* Usuário */}
        <div>
          <label className="block text-sm font-medium mb-1">Usuário</label>
          <Input
            name="usuario"
            placeholder="nome@usuario"
            value={form.usuario}
            onChange={handleChange}
          />
        </div>

        {/* Senha */}
        <div>
          <label className="block text-sm font-medium mb-1">Senha</label>
          <Input
            type="password"
            name="senha"
            placeholder="••••••"
            value={form.senha}
            onChange={handleChange}
          />
        </div>

        {/* Confirmar Senha */}
        <div>
          <label className="block text-sm font-medium mb-1">Confirmar Senha</label>
          <Input
            type="password"
            name="confirmSenha"
            placeholder="••••••"
            value={form.confirmSenha}
            onChange={handleChange}
          />
        </div>

        {/* Categoria */}
        <div>
          <label className="block text-sm font-medium mb-1">Categoria</label>
          <Select onValueChange={(val) => setForm((p) => ({ ...p, categoria: val }))}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <div className="flex items-center gap-2">
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Botão */}
        <Button type="submit" className="w-full">
          Salvar
        </Button>
      </form>
    </div>
  );
}
