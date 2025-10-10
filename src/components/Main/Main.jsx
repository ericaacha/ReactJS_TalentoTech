import styles from './Main.module.css'
import Carrito from '../Carrito/Carrito';
import ListadoProductos from '../ListadoProductos/ListadoProductos';
import { useState } from "react";

const Main = ()=>{

    const[carrito, setCarrito] = useState([]);

    const agregarProducto = (producto)=>{
        setCarrito([...carrito, producto]);
    }

    const vaciarCarrito = ()=>{
        setCarrito([]);
    }


    return <>
    <main>
       
        <h2>Productos</h2>
        <p>A continuación podras encontrar los más vendidos</p>
        <ListadoProductos agregarAlCarrito={agregarProducto}></ListadoProductos>
        <Carrito productos={carrito} vaciarCarrito={vaciarCarrito}></Carrito>
       
    </main>
    </>


}

export default Main;