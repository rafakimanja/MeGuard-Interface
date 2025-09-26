import CardsCount from "@/components/cards-count";
import AppPagination from "@/components/pagination";
import { SearchBar } from "@/components/search";
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
        <div className="flex justify-center ">
            <div className="w-3/4">
                <div className="flex justify-end pt-5">
                    <SearchBar />
                </div>
                <div className="grid grid-cols-3 gap-10 pb-4 pt-20">
                    <CardsCount senhas={senhas} />
                </div>
                <AppPagination />
            </div>
        </div>
    )
}