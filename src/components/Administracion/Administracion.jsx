import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProductoContext} from  "../../contexts/ProductoContext"

const Administracion = ()=>{

const { listadoProductos, eliminarProducto} = useContext(ProductoContext);


    return <>
    <h2>Gestión de productos</h2>
    <Link to="/AltaProducto">Alta Producto</Link>
 
    <ul>
    {listadoProductos.map( (item,index) =>
           <li key={index}>
                {item.nombre}
               <Link to={"/AltaProducto/"+item.id} >Editar</Link>
               
               <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
            </li>
            
        )
    }

     </ul>

    </>
}


export default Administracion;