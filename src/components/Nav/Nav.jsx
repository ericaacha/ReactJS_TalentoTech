import styles from './Nav.module.css'

const Nav = () =>{


    return <>
    <div className={styles.menuContainer}>
      <ul>
        <li>Home</li>
        <li>Acerca de</li>
        <li>Contacto</li>
        <li>Carrito</li>
      </ul>
    </div>
    </>
}


export default Nav;