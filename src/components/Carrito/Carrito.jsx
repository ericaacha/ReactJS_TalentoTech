import { CarritoContext } from '../../contexts/CarritoContext';
import styles from './Carrito.module.css'
import { useContext } from 'react';

const Carrito = ()=>{

const {carrito, vaciarCarrito, eliminarProducto} = useContext(CarritoContext);

if(carrito == undefined || carrito.length == 0)
    return <>Carrito Vacío</>


if(carrito.length>0){

    return(<>
    <ul className={styles.carritoLista}>
        {carrito.map((item, index) => (
            <li key={index} className={styles.carritoItem}>
            <span className={styles.carritoTitle}>{item.title}</span>
            <span className={styles.carritoPrice}>${item.price}</span>
            <span className={styles.carritoEliminar}><button onClick={()=>eliminarProducto(item)}>Eliminar</button></span>
            </li>
        ))}
    </ul>

    
    <button onClick={vaciarCarrito}>Vaciar carrito</button>

    </>
    );
}

}





export default Carrito;