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

        if(!formProducto.nombre?.trim()){
            nuevosErrores.nombre="El nombre es obligatorio.";
        }

        if(!formProducto.precio || formProducto.precio<=0){
            nuevosErrores.precio = "El precio debe ser mayor o igual a cero."
        }

        if(!formProducto.descripcion?.trim() || formProducto.descripcion.length<10){
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
<div className="container d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12">
           
          <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white border-0">
<           h2>{modo==="editar"?"Edición producto":"Alta producto"}</h2>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-4">
                <label htmlFor="nombre" className="col-form-label">Nombre</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formProducto.nombre || ''}
                  placeholder="ingrese nombre"
                  onChange={handleChange}
                />
                {errores.nombre && <div className="invalid-feedback d-block">{errores.nombre}</div>}
          
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4">
                <label htmlFor="precio" className="col-form-label">Precio</label>
              </div>
              <div className="col-8">
                 <input type="number"
                        name="precio"
                        className="form-control"
                        id="precio"
                        value={formProducto.precio || ''}
                        placeholder="ingrese precio"
                        onChange={handleChange}
                        />
               {errores.precio && <div className="invalid-feedback d-block">{errores.precio}</div>}
          
              </div>
            </div>
        <div className="row g-3 align-items-center mb-3">
              <div className="col-4">
                <label htmlFor="descripcion" className="col-form-label">Descripción</label>
              </div>
              <div className="col-8">
                
                <input
                  type="text"
                  name="descripcion"
                  className="form-control"
                  id="descripcion"
                  value={formProducto.descripcion || ''}
                  placeholder="ingrese descripcion"
                   onChange={handleChange}
                />
                {errores.descripcion && <div className="invalid-feedback d-block">{errores.descripcion}</div>}
          
             
              </div>
            </div>

            <div className="row mt-3">
                <div className="col-6">
                <button className="btn btn-outline-secondary w-100" onClick={()=>volver() }>Cancelar</button>
                </div>
                <div className="col-6">
                <button type="submit" className="btn btn-primary w-100">{modo==="agregar"? 'Agregar':'Guardar'}</button>
           </div>
            </div>
          </form>
        </div>
      </div>
    
    </>);
}




export default AltaModificacionProducto;