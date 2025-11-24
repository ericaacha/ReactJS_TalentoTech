/*import { useContext, useState, useEffect } from "react";
import { ProductoContext } from "../../../contexts/ProductoContext";
import { useParams } from "react-router-dom";
// ...existing code...
const AltaProducto = () => {

    const {id} = useParams();
    // fijo: usar array destructuring
    const [errores, setErrores]= useState({});

    // estado local del formulario (evita leer propiedades de producto null)
    const [formProducto, setFormProducto] = useState({
      nombre: '',
      precio: '',
      descripcion: ''
    });

    const {getProductoById, producto, cargando,
     error, 
     actualizarProducto, 
     setProducto,
     AgregarProducto   } = useContext(ProductoContext);

    let esEdicion = Boolean(id);

    // cargar producto si hay id
    useEffect(() => {
        if (!id) return;
        getProductoById(id);  
    }, [id]);

    // sincronizar producto del contexto al formulario cuando llega
    useEffect(() => {
      if (producto) {
        setFormProducto({
          nombre: producto.nombre ?? '',
          precio: producto.precio ?? '',
          descripcion: producto.descripcion ?? ''
        });
      }
    }, [producto]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormProducto(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       if(validarFormulario()){
        if(esEdicion){
            // incluir id si hace falta para la API
            const payload = producto?.id ? { ...formProducto, id: producto.id } : formProducto;
            actualizarProducto(payload); 
        }else{
            AgregarProducto(formProducto);//guarda con api 
        }

        // limpiar
        setFormProducto({ nombre:'', precio:'', descripcion:''});
        setErrores({});
        // opcional: limpiar el producto del contexto
        if (setProducto) setProducto(null);
       } else {
        console.log("validacion error");
       }
    }

    const validarFormulario =()=>{

        const nuevosErrores ={};

        if(!formProducto.nombre.trim()){
            nuevosErrores.nombre="El nombre es obligatorio.";
        }

        const precioNum = Number(formProducto.precio);
        if(!formProducto.precio || isNaN(precioNum) || precioNum < 0){
            nuevosErrores.precio = "El precio debe ser mayor o igual a cero."
        }

        if(!formProducto.descripcion.trim() || formProducto.descripcion.length<10){
            nuevosErrores.descripcion="La descripción debe ser al menos 10.";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length===0;
    }

    // mostrar estado de carga/errores si corresponde
    if (esEdicion && cargando) return <>Cargando...</>;
    if (error) return <>Error</>;

    return (<>
    <form onSubmit={handleSubmit}>

        <h2>{esEdicion?"Edición producto":"Alta producto"}</h2>
        <div>
            <label>Nombre</label>
            <input type="text"
             name="nombre"
             value={formProducto.nombre}
             onChange={handleChange}
             ></input>
            {errores.nombre && <p style={{color:'red'}}>{errores.nombre}</p>}
        </div>

         <div>
            <label>Precio</label>
            <input type="number"
             name="precio"
             value={formProducto.precio}
             onChange={handleChange}
             ></input>
             {errores.precio && <p style={{color:'red'}}>{errores.precio}</p>}
        </div>

        <div>
            <label>Descripción</label>
            <textarea
             name="descripcion"
             value={formProducto.descripcion}
             onChange={handleChange}
              />
             {errores.descripcion && <p style={{color:'red'}}>{errores.descripcion}</p>}
        </div>
        
        <button type="submit">{esEdicion ? "Actualizar" : "Agregar"}</button>
    </form>
    </>);
}

export default AltaProducto;*/
// ...existing code...

import { useContext, useState, useEffect } from "react";
import { ProductoContext } from "../../../contexts/ProductoContext";
import { useParams } from "react-router-dom";

const AltaProducto = () => {

   const {id} = useParams();
   const [errores, setErrores]= useState({});

    const {getProductoById, producto, cargando,
     error, 
     actualizarProducto, 
     setProducto,
     AgregarProducto   } = useContext(ProductoContext);

      const [formProducto, setFormProducto] = useState({
      nombre: '',
      precio: '',
      descripcion: ''
    });


    let esEdicion = Boolean(id);

    //1) llama a api para obtener datos y carga en Producto
    useEffect(() => {
        if(esEdicion) {
            getProductoById(id);  
        }
    }, [id]);

    //2) actualiza form con datos de Producto
    useEffect(()=>{
       setFormProducto({
        nombre : producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        id: producto.id
       })
    }, [producto]);


    const handleChange = (e) => {
        const {name, value} = e.target;
//Esto crea un nuevo objeto copiando todas las propiedades actuales de producto (...producto),
//pero reemplaza solo la propiedad cuyo nombre coincide con el name del input que cambió.
        setFormProducto({ ...formProducto, [name]:value});
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       debugger;
       if(validarFormulario()){
        
        if(esEdicion){
            actualizarProducto(formProducto); 
        }else{
            AgregarProducto(formProducto);//guarda con api 
        }
               
        setFormProducto({ 'nombre':'',
        'precio':'',
        'descripcion':'',
        'id':''});//limpia el form

        setErrores({});
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

    return (<>
    <form onSubmit={handleSubmit}>

        <h2>{esEdicion===true?"Edición producto":"Alta producto"}</h2>
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
        
        <button type="submit">Agregar</button>
    </form>
    </>);
}




export default AltaProducto;