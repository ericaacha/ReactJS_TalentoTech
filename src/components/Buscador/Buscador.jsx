import { useContext, useState } from "react";
import { ProductoContext } from "../../contexts/ProductoContext";
import { SearchContext } from "../../contexts/SearchContext";



const Buscador = ()=>{

    const {listadoProductos} = useContext(ProductoContext);
  
    const {setListadoFiltrado, valorBusqueda, setValorBusqueda} = useContext(SearchContext);

 const handleChange = (e) => {
        const {name, value} = e.target;
//Esto crea un nuevo objeto copiando todas las propiedades actuales de producto (...producto),
//pero reemplaza solo la propiedad cuyo nombre coincide con el name del input que cambió.
            //cada vez que cambia busqueda, actualiza listado
setValorBusqueda(value);
if(value===''){
 setListadoFiltrado(listadoProductos);
}else{
 setListadoFiltrado(listadoProductos.filter((producto)=>producto.nombre.includes(value)
    ));
}
   
    }

    return(<>
        <input type="text"
        value={valorBusqueda}
        placeholder="Ingrese producto para buscar" 
        onChange={handleChange}
        />
    </>);


}

export default Buscador;