import styles from './Carrito.module.css'

const Carrito = ({productos, vaciarCarrito, eliminarProducto})=>{


if(productos == undefined || productos.length == 0)
    return <>Carrito Vacío</>


if(productos.length>0){

    return(<>
    <ul className={styles.carritoLista}>
        {productos.map((item, index) => (
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