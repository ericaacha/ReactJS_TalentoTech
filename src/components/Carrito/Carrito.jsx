import { useState } from "react";


const Carrito = ()=>{

    
    let listadoProductos = ["Camisa","Pantalón","Remera","Zapatillas"];
    const[carrito, setCarrito]=useState([]);

    const agregarCarrito = (producto)=>{
        console.log(carrito)
    setCarrito([...carrito, producto]);
    }

    const vaciarCarrito = (e)=> {
        e.eve
        setCarrito([])}


return(<>

<ul>
{listadoProductos.map( (item,index) =>
    <li key= {index}>{ item }
        <button onClick={()=>{agregarCarrito(item)}}>Agregar</button>
    </li>

)}
</ul>

<ul>
    {
carrito.map((item, index) =>
 <li key={index}> {item}</li>
)
}
</ul>
<button onClick={vaciarCarrito}>Vaciar carrito</button>


{/* items del carrito */}
{/* boton vaciar carrito */}
</>

);


}


export default Carrito;