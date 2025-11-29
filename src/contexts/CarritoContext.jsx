import { createContext, useState } from "react";
import {toast} from "react-toastify"


export const CarritoContext = createContext();

//proveedor

export function CarritoProvider({children}) {

   const[carrito, setCarrito] = useState([]);
   const [precioTotal, setPrecioTotal] = useState(0);

    const agregarProducto = (producto)=>{
        setCarrito([...carrito, producto]);
        const total = Number(precioTotal)+Number(producto.precio);
        setPrecioTotal(total);
        toast.success("Producto agregado al carrito");
    }

    const vaciarCarrito = ()=>{
        setCarrito([]);
    }
    
    const eliminarProducto = (item)=>{
        setCarrito(carrito.filter(producto => producto.id != item.id));
        toast.success("Producto eliminado del carrito");
        setPrecioTotal(Number(precioTotal)-Number(item.precio));
    }

    return (
        <CarritoContext.Provider value={{ carrito, 
        agregarProducto, vaciarCarrito, eliminarProducto,
        precioTotal }} >
         {children}
         </CarritoContext.Provider>

    );
}