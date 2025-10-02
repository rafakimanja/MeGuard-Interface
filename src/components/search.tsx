import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input type="text" name="" id="" placeholder="pesquisar..." />
    </div>
  );
}
