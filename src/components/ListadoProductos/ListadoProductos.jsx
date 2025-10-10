import { useEffect, useState } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import styles from './ListadoProductos.module.css'

const ListadoProductos = ({agregarAlCarrito})=>{

    const [listadoProductos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setErrorFetch] = useState(null);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            setProductos(datos);
            setCargando(false);
        })
        .catch((error)=> {
            setErrorFetch(error);
            setCargando(false);
    });


    },[]);



if(cargando)
    return <>Cargando...</>

if(error)
    return <>Error: {error}</>

return <>
<div className={styles.listadoProductos}>
        {
        listadoProductos.map( (item,index) =>
            <Tarjeta key= {index} item={item} agregarAlCarrito={agregarAlCarrito}></Tarjeta>

        )
        }
</div>
    </> 

}



export default ListadoProductos;