import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ProductoContext } from "../../contexts/ProductoContext";


const DetalleProducto = (props)=>{

    const {id} = useParams();
    
const {cargando, error, producto, getProductoById} = useContext(ProductoContext);    

    useEffect(() => {
        
        getProductoById(id);  
    }, [id]);

    if(!producto){
        return <>Cargando...</>
    }

    if(error){
        return error;
    }

    return <>
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <p>{producto.precio}</p>
    <img src={producto.avatar}></img>
    </>



}

export default DetalleProducto;