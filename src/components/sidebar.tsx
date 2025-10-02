import { Home, FilePlus } from "lucide-react"
import { Link } from "react-router"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Adicionar",
    url: "/form",
    icon: FilePlus,
  },
]

export default function AppSidebar() {
  return (
    <aside>
      {
        items.map((item) => (
          <Link to={item.url}>
            <item.icon />
            {item.title}
          </Link>
        ))
      }
    </aside>
  )
}