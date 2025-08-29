import { Outlet, Link } from "react-router";

export default function AuthLayout(){
    return(
        <div>
            <h2>Area de Autenticação</h2>

            <Outlet />

            <hr />

            <nav>
                <Link to='/login'>Login</Link> | {" "}
                <Link to='/register'>Registrar</Link>
            </nav>
        </div>
    )
}