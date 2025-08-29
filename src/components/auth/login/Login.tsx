import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import './login.css'

export default function Login() {
  return (
    <div className="bg-login">
        <Card className="bg-login-card" >
            <CardHeader>
                <CardTitle>Faça login na sua conta!</CardTitle>
                <CardDescription>Digite seu e-mail abaixo para acessar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="bg-login-form">
                        <div className="form-group">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="exemplo@email.com" required />
                        </div>
                        <div className="form-group">
                            <div className="form-label-row">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="forgot-password"> Esqueceu sua senha ? </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="card-footer">
                <Button type="submit" className="w-full" style={{ cursor: 'pointer' }}> Login </Button>
                <Button variant="outline" className="w-full" style={{ cursor: 'pointer' }}> Inscreva-se </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
