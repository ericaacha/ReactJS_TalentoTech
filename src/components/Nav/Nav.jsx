import styles from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () =>{


    return <>
    <div className={styles.menuContainer}>
      <ul>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </div>
    </>
}


export default Nav;