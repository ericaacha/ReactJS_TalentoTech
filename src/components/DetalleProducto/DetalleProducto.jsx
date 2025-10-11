import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const DetalleProducto = (props)=>{

    const {id} = useParams();
    const [cargando, setCargando] = useState(true);
    const [error, setErros] = useState(null);
    const [producto, setProducto] = useState(null);

      useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
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
    <h2>{producto.title}</h2>
    <p>{producto.description}</p>
    <img src={producto.image}></img>
    </>



}

export default DetalleProducto;