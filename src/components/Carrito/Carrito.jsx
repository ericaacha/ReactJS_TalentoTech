
const Carrito = ({productos, vaciarCarrito})=>{


if(productos.length == 0)
    return <>Carrito Vacío</>


if(productos.length>0){

    return(<>
    <ul>
        {
        productos.map((item, index) =>
        <li key={index}> {item.title}</li>
        )
        }
    </ul>

    <button onClick={vaciarCarrito}>Vaciar carrito</button>

    </>
    );
}

}





export default Carrito;