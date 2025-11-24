import { createContext, useState } from "react";
import {toast} from "react-toastify"


export const CarritoContext = createContext();

//proveedor

export function CarritoProvider({children}) {

   const[carrito, setCarrito] = useState([]);

    const agregarProducto = (producto)=>{
        setCarrito([...carrito, producto]);
        toast.success("Producto agregado al carrito")
    }

    const vaciarCarrito = ()=>{
        setCarrito([]);
    }
    
    const eliminarProducto = (item)=>{
        setCarrito(carrito.filter(producto => producto.id != item.id))
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, vaciarCarrito, eliminarProducto }} >
         {children}
         </CarritoContext.Provider>

    );
}