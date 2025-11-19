import { useEffect, useState, useContext } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import styles from './ListadoProductos.module.css'
import { CarritoContext } from '../../contexts/CarritoContext';

const ListadoProductos = ({})=>{

    const [listadoProductos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setErrorFetch] = useState(null);


    useEffect(()=>{
        fetch('https://691d0718d58e64bf0d34c432.mockapi.io/v1/productos')
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