import { useEffect, useState, useContext } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import styles from './ListadoProductos.module.css'
import { ProductoContext } from "../../contexts/ProductoContext";

const ListadoProductos = ({})=>{

   const {cargando, error, listadoProductos} = useContext(ProductoContext);

if(cargando)
    return <>Cargando...</>

if(error)
    return <>Error: {error}</>

return <>
    <div className={styles.listadoProductos}>
    {
        listadoProductos.map( (item,index) =>
            <Tarjeta key= {index}
                    item={item} 
                    ></Tarjeta>
        )
    }
    </div>
    </> 

}



export default ListadoProductos;