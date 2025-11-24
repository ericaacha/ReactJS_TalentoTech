import { useContext, useEffect } from "react";
import { ProductoContext, ProductoProvider } from "../../../contexts/ProductoContext";
import { useParams } from "react-router-dom";


const EdicionProducto = ()=> {

const {getProductoById, producto, cargando,
     error, 
     actualizarProducto, 
     setProducto    } = useContext(ProductoContext);
const {id} = useParams();

//llama a api para obtener datos
useEffect(() => {
        if (!id) return;
        getProductoById(id);  
    }, [id]);



if(cargando){
    return "Cargando";
}

if(error){
    return "Error";
}

//actualiza el estado
const handleChange = (e)=>{
  const {name, value} = e.target;
  
 setProducto({ ...producto, [name]:value});

}

 const handleSubmit = (e)=>{
    e.preventDefault();
    debugger;
   
        if (!producto.id) return;
        actualizarProducto(producto);  
  
 }


return (<>
<form onSubmit={handleSubmit}>

        <h2>Edición producto</h2>
        <div>
            <label>Nombre</label>
            <input type="text"
             name="nombre"
             value={producto.nombre}
           onChange={handleChange}
             ></input>
           {/* {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>} */}
        </div>

         <div>
            <label>Precio</label>
            <input type="number"
             name="precio"
             value={producto.precio}
            onChange={handleChange}
             ></input>
             {/* {errores.precio && <p style={{color:'red'}}>{errores.precio}</p>} */}
        </div>

        <div>
            <label>Descripción</label>
            <textarea type="text"
             name="descripcion"
             value={producto.descripcion}
             onChange={handleChange}
              />
             {/* {errores.descripcion && <p style={{color:'red'}}>{errores.descripcion}</p>} */}
        </div>
        
        <button type="submit">Editar</button>
    </form>


</>);

};
