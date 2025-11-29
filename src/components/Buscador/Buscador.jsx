import { useContext, useEffect } from "react";
import { ProductoContext } from "../../contexts/ProductoContext";
import { SearchContext } from "../../contexts/SearchContext";



const Buscador = ()=>{

    const {listadoProductos} = useContext(ProductoContext);
  
    const {setListadoFiltrado, valorBusqueda, setValorBusqueda} = useContext(SearchContext);

    useEffect(() => {

        if(valorBusqueda===''){
        setListadoFiltrado(listadoProductos);
        }else{
        setListadoFiltrado(listadoProductos.filter((producto)=>producto.nombre.includes(valorBusqueda)
            ));
        }   
   }, [valorBusqueda, listadoProductos]);

 const handleChange = (e) => {
        const {name, value} = e.target;
//Esto crea un nuevo objeto copiando todas las propiedades actuales de producto (...producto),
//pero reemplaza solo la propiedad cuyo nombre coincide con el name del input que cambió.
            //cada vez que cambia busqueda, actualiza listado
setValorBusqueda(value);
   
    }

    return(<>
    <div className="d-flex justify-content-center">
        <form className="col-6  my-4" role="search">
            <input className="form-control me-2 justify-content-center"
            type="search"
            placeholder="Ingrese producto para buscar" 
            aria-label="Search"
            onChange={handleChange}
            value={valorBusqueda} />
        
        </form>
       
       </div>
       
    </>);


}

export default Buscador;