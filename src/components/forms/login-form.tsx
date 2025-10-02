import Logo from "@/components/logo"

export function LoginForm() {
  return (
    <form>
      <div>
        <Logo /> 
      </div>
      <div>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <div>
        <button type="submit">Entrar</button>
        <button>Cadastre-se</button>
      </div>
    </form>
  )
}
