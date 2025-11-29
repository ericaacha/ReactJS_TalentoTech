import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {ProductoContext} from  "../../contexts/ProductoContext"
import AltaModificacionProducto from "./AltaModificacionProducto";

const Administracion = ()=>{

const { listadoProductos, eliminarProducto} = useContext(ProductoContext);
const [mostrarForm, setMostrarForm] = useState(false);
const [modoForm, setModoForm] = useState("agregar");
const [productoSeleccionado, setProductoSeleccionado] = useState({});

const abrirFormParaEditar = (producto1)=> {
    setProductoSeleccionado(producto1);
    setMostrarForm(true);
    setModoForm("editar");
}

const abrirFormParaAgregar = ()=> {
    setProductoSeleccionado({});
    setMostrarForm(true);
    setModoForm("agregar");
}

const mostrarGrilla = () => {
    setProductoSeleccionado({});
    setMostrarForm(false);
}
    return <>
    <h2>Administración de productos</h2>
    {!mostrarForm && <button type="button" className="btn btn-primary mb-3" onClick={abrirFormParaAgregar}>Nuevo producto</button> }
 
    {!mostrarForm &&
    <div className="container p-0">
      <ul className="list-group">
        {listadoProductos.map( (item,index) =>
           <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong className="me-2">{item.nombre}</strong>
                  <small className="text-muted">{item.descripcion}</small>
                </div>
                  <div className="btn-group btn-group-sm" role="group" aria-label="acciones">
                  <button type="button" className="btn btn-outline-secondary me-2 border-0 rounded-pill" onClick={()=>abrirFormParaEditar(item)}>Editar</button>
                  <button type="button" className="btn btn-outline-secondary border-0 rounded-pill" onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
                </div>
                
            </li>
            
        )
        }
      </ul>
    </div>
}
    {mostrarForm && (
        <>
        <AltaModificacionProducto modo= {modoForm} 
        productoInicial={productoSeleccionado || {}}
        mostrarGrilla={mostrarGrilla}
        />

        
        </>

    )}

    </>
}


export default Administracion;