import Dropdown from "../dropdown"

export default function AcountForm(){
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" name="title" id="title" placeholder="insira o titulo" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" title="login" />
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <Dropdown />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="password-repeat">Digite a senha novamente:</label>
                    <input type="password" name="password-repeat" id="password-repeat" />
                </div>
            </div>
            <div>
                <button>Cancelar</button>
                <button type="submit">Salvar</button>
            </div>
        </form>
    )
}