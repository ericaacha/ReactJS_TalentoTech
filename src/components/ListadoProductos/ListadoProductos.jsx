import { useEffect, useState, useContext } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import styles from './ListadoProductos.module.css'
import { CarritoContext } from '../../contexts/CarritoContext';

const ListadoProductos = ({})=>{

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
            <Tarjeta key= {index}
                    item={item} 
                    ></Tarjeta>
        )
    }
    </div>
    </> 

}



export default ListadoProductos;