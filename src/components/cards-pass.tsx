import type { LucideIcon } from "lucide-react"
import CardPassword from "./card-pass"

type CardSenha = {
    title: string,
    icon: LucideIcon
}

type CardsPasswordProps = {
    senhas: CardSenha[]
}

export default function CardsPassword({ senhas }: CardsPasswordProps){
    return(
        <>
            {
                senhas.map((senha, index) => (
                    <CardPassword key={index} title={senha.title} icon={senha.icon} />
                ))
            }
        </>
    )
}