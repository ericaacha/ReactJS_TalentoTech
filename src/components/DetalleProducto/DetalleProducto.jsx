import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const DetalleProducto = (props)=>{

    const {id} = useParams();
    const [cargando, setCargando] = useState(true);
    const [error, setErros] = useState(null);
    const [producto, setProducto] = useState(null);

      useEffect(() => {
        fetch(`https://691d0718d58e64bf0d34c432.mockapi.io/v1/productos/${id}`)
        .then(respuesta => respuesta.json())
        .then(dato => {
            setProducto(dato);
            setCargando(false);
        })
        .catch(error =>{
             setErros(error);
             setCargando(false);
        });
        },[id]);

    if(cargando){
        return <>Cargando...</>
    }


    return <>
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <p>{producto.precio}</p>
    <img src={producto.avantar}></img>
    </>



}

export default DetalleProducto;