import { type LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type CardPasswordProps = {
    title: string,
    icon: LucideIcon
}

export default function CardPassword({ title, icon: Icon }: CardPasswordProps){
    return(
        <Card className="w-[250px] h-[110px]">
            <CardContent className="flex items-center justify-center gap-2 mt-3">
                <h1 className="font-bold text-2xl">{title}</h1>
                <Icon size={35}/>
            </CardContent>
        </Card>
    )
}