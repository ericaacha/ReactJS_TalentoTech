import { useEffect, useState, useContext } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import styles from './ListadoProductos.module.css'
import { ProductoContext } from "../../contexts/ProductoContext";
import Buscador from "../Buscador/Buscador";
import { SearchContext } from "../../contexts/SearchContext";

const ListadoProductos = ({})=>{

   const {cargando, error, listadoProductos} = useContext(ProductoContext);
   const {listadoProductoFiltrado, setListadoFiltrado, valorBusqueda} = useContext(SearchContext);
 
if(cargando)
    return <>Cargando...</>

if (error) return <>Error: {error?.message ?? String(error)}</>;

if(valorBusqueda.trim()===""){
    setListadoFiltrado(listadoProductos);
}

if(valorBusqueda.trim()!="" && (!listadoProductoFiltrado || listadoProductoFiltrado.length === 0)){
   
    return <>
     <Buscador /><br></br>
     Sin resultados encontrados.</>
}
return <>
    <Buscador />
    <div className={styles.listadoProductos}>
    {
        listadoProductoFiltrado.map( (item,index) =>
            <Tarjeta key= {index}
                    item={item} 
                    ></Tarjeta>
        )
    }
    </div>
    </> 

}



export default ListadoProductos;