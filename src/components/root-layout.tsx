import { Outlet } from "react-router";
import AppSidebar from "./sidebar";

export default function RootLayout() {
  return (
      <div className="flex h-screen w-screen">
        {/* Sidebar fixa à esquerda */}
        <AppSidebar />

        {/* Conteúdo principal */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
  );
}
