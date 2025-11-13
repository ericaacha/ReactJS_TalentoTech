import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {


    return <>

        <header className="header-minimalista">
            <h1 className="titulo-minimalista">Tienda online</h1>
            <Link className="botonMinimalista" to="/login">Iniciar sesión</Link>
            <Link className="botonMinimalista" to="/administracion">Administración</Link>
   
        </header>


    </>
}

export default Header;