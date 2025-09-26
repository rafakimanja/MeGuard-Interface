import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"
import CardCount from "./card-count"

type CardSenha = {
    title: string,
    icon: LucideIcon
}

type CardsCountProps = {
    senhas: CardSenha[]
}

export default function CardsCount({ senhas }: CardsCountProps){
    return(
        <>
            {
                senhas.map((senha, index) => (
                    <Link to='/count' key={index}>
                        <CardCount key={index} title={senha.title} icon={senha.icon} />
                    </Link>
                ))
            }
        </>
    )
}