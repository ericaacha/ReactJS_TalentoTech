import './Header.css'
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {

 const {user, logout} = useAuthContext();

    return <>

        <header className="header-minimalista">
          <div>
             <Link className="botonMinimalista" to="/productos">
            <h1 className="titulo-minimalista">Electro tienda</h1>
           </Link>
           </div>
           <div><Link className="botonMinimalista" to="/carrito"><FaShoppingCart /> Carrito</Link>
             {user ? (
              <button className="botonMinimalista" onClick={logout}>Cerrar sesión</button>
            ) : (
              <Link className="botonMinimalista" to="/login">Iniciar sesión</Link>
            )} 
          
           {user?.rol === 'admin'?
           <Link className="botonMinimalista" to="/administracion">Administración</Link>:''}
        </div>
        </header>


    </>
}

export default Header;