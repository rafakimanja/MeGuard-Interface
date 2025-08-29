import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import './register.css'
import placeholder from '@/assets/placeholder.svg'

export default function Register(){
    return(
        <div className="bg-register">
            <Card className="bg-register-card">
                <CardContent className="card-content">
                    <form action="" className="form">
                        <div className="form-body">
                            <div className="form-header">
                                <h1 className="form-title">Registre-se</h1>
                                <p className="form-subtitle">Preencha o formulário para criar uma conta</p>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="example@email.com" required />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="username">Usuario</Label>
                                <Input id="username" type="text" placeholder="nome de usuário" required />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="password">Senha</Label>
                                <Input id="password" type="password" placeholder="senha" />
                            </div>
                            <div className="divisor">
                                <hr />
                            </div>
                            <Button type="submit" className="w-full">cadastrar</Button>
                        </div>
                    </form>
                    <div className="img-wrapper">
                        <img src={placeholder} alt="" className="image" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}