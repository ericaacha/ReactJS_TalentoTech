import { useContext, useState, useEffect } from "react";
import { ProductoContext } from "../../contexts/ProductoContext";
import { useParams } from "react-router-dom";

const AltaModificacionProducto = ({ productoInicial = {}, modo = "agregar" , mostrarGrilla }) => {

  
   const [errores, setErrores]= useState({});

    const {
     actualizarProducto, 
     AgregarProducto   } = useContext(ProductoContext);

     //estado de formulario
      const [formProducto, setFormProducto] = useState(productoInicial);


    const handleChange = (e) => {
        const {name, value} = e.target;
//Esto crea un nuevo objeto copiando todas las propiedades actuales de producto (...producto),
//pero reemplaza solo la propiedad cuyo nombre coincide con el name del input que cambió.
        setFormProducto({ ...formProducto, [name]:value});
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       
       if(validarFormulario()){
        
        if(modo=="editar"){
            actualizarProducto(formProducto); 
        }else{
            AgregarProducto(formProducto);//guarda con api 
        }
               
        mostrarGrilla();
        
        }  
       else{
        console.log("validacion error");
       }
   

    }


    const validarFormulario =()=>{

        const nuevosErrores ={};

        if(!formProducto.nombre.trim()){
            nuevosErrores.nombre="El nombre es obligatorio.";
        }

        if(!formProducto.precio || formProducto.precio<=0){
            nuevosErrores.precio = "El precio debe ser mayor o igual a cero."
        }

        if(!formProducto.descripcion.trim() || formProducto.descripcion.length<10){
            nuevosErrores.descripcion="La descripción debe ser la menos 10.";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length===0;
    }

    const volver = () => {
        const confirmar = window.confirm("¿Estás seguro de cancelar?");

    if (confirmar) { 
        mostrarGrilla();
        setFormProducto({});
        setErrores({});
    }

    }
    return (<>

    <form onSubmit={handleSubmit}>

        <h2>{modo==="editar"?"Edición producto":"Alta producto"}</h2>
        <div>
            <label>Nombre</label>
            <input type="text"
             name="nombre"
             value={formProducto.nombre || ''}
             onChange={handleChange}
             ></input>
            {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>}
        </div>

         <div>
            <label>Precio</label>
            <input type="number"
             name="precio"
             value={formProducto.precio || ''}
             onChange={handleChange}
             ></input>
             {errores.precio && <p style={{color:'red'}}>{errores.precio}</p>}
        </div>

        <div>
            <label>Descripción</label>
            <textarea type="text"
             name="descripcion"
             value={formProducto.descripcion || ''}
             onChange={handleChange}
              />
             {errores.descripcion && <p style={{color:'red'}}>{errores.descripcion}</p>}
        </div>

        <button onClick={()=>volver()}>Cancelar</button>
        <button type="submit">{modo==="agregar"? 'Agregar':'Guardar'}</button>
        
    </form>
    </>);
}




export default AltaModificacionProducto;