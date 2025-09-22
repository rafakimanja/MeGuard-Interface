import CardsPassword from "@/components/cards-pass";
import { 
    GlobeLock,
    MonitorSmartphone,
    Mail,
    CircleUser 
 } from 'lucide-react';

const senhas = [
    { title: "GOV", icon:  GlobeLock },
    { title: "Netflix", icon: MonitorSmartphone },
    { title: "Gmail", icon: Mail },
    { title: "PC Trabalho", icon: CircleUser }
]

export default function HomePage(){
    return(
        <>
            <h1>Pagina de home</h1>
            <div className="grid grid-cols-4 gap-4 p-4">
                <CardsPassword senhas={senhas} />
            </div>
        </>
    )
}