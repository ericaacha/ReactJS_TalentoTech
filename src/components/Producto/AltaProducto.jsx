import { useState } from "react";
import { AgregarProducto } from "../../Api";


const AltaProducto = () => {

    const [producto, setProducto]= useState({
        'nombre':'',
        'precio':'',
        'descripcion':''
    });
    
    const [errores, setErrores]=useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
//Esto crea un nuevo objeto copiando todas las propiedades actuales de producto (...producto),
//pero reemplaza solo la propiedad cuyo nombre coincide con el name del input que cambió.
        setProducto({ ...producto, [name]:value});
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       if(validarFormulario()){
        AgregarProducto(producto);//guarda con api 
       setProducto({ 'nombre':'',
        'precio':'',
        'descripcion':''});//limpia el form
        setErrores({});
       }
       else{
        console.log("validacion error");
       }
   

    }


    const validarFormulario =()=>{

        const nuevosErrores ={};

        if(!producto.nombre.trim()){
            nuevosErrores.nombre="El nombre es obligatorio.";
        }

        if(!producto.precio || producto.precio<=0){
            nuevosErrores.precio = "El precio debe ser mayor o igual a cero."
        }

        if(!producto.descripcion.trim() || producto.descripcion.length<10){
            nuevosErrores.descripcion="La descripción debe ser la menos 10.";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length===0;
    }

    return (<>
    <form onSubmit={handleSubmit}>

        <h2>Alta producto</h2>
        <div>
            <label>Nombre</label>
            <input type="text"
             name="nombre"
             value={producto.nombre}
             onChange={handleChange}
             ></input>
            {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>}
        </div>

         <div>
            <label>Precio</label>
            <input type="number"
             name="precio"
             value={producto.precio}
             onChange={handleChange}
             ></input>
             {errores.precio && <p style={{color:'red'}}>{errores.precio}</p>}
        </div>

        <div>
            <label>Descripción</label>
            <textarea type="text"
             name="descripcion"
             value={producto.descripcion}
             onChange={handleChange}
              />
             {errores.descripcion && <p style={{color:'red'}}>{errores.descripcion}</p>}
        </div>
        
        <button type="submit">Agregar</button>
    </form>
    </>);
}




export default AltaProducto;