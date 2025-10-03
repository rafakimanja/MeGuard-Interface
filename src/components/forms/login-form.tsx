import Logo from "@/components/logo"

export function LoginForm() {
  return (
    <form className="h-[600px] w-[450px] bg-gray-400">
      <div className="h-1/3 flex items-center justify-center">
        <Logo /> 
      </div>
      <div className="h-1/3 flex flex-col justify-center items-center gap-3">
        <div className="w-80 flex flex-col gap-2">
          <label htmlFor="username" className="ml-4 font-bold text-xl">Usuario:</label>
          <input type="text" name="username" id="username" className="bg-gray-500 rounded-2xl h-9 text-white pl-5" />
        </div>
        <div className="w-80 flex flex-col gap-2">
          <label htmlFor="password" className="ml-4 font-bold text-xl" >Senha:</label>
          <input type="password" name="password" id="password" className="bg-gray-500 rounded-2xl h-9 text-white pl-5" />
        </div>
      </div>
      <div className=" h-1/3 flex flex-col items-center justify-center gap-2">
        <button type="submit" className="h-10 w-[200px] rounded-3xl hover:cursor-pointer bg-gray-300">Entrar</button>
        <button className="h-10 w-[200px] rounded-3xl hover:cursor-pointer bg-gray-300">Cadastre-se</button>
      </div>
    </form>
  )
}
