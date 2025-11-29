import { createContext, useState, useEffect} from "react";
import {toast} from "react-toastify"

export const ProductoContext = createContext();

export function ProductoProvider({children}) {

 const [listadoProductos, setProductos] = useState([]);
 const [cargando, setCargando] = useState(true);
 const [error, setError] = useState(null);
 const [producto, setProducto] = useState(null);

const API_URL="https://691d0718d58e64bf0d34c432.mockapi.io/v1/productos/";
   

    useEffect(()=> {getListadoProductos()}, []);


    const getListadoProductos = async() =>
    {
     setError(null);
     setCargando(true);

     fetch(API_URL)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            setProductos(datos);
            setCargando(false);
        })
        .catch((error)=> {
            setError(error);
            setCargando(false);
        });
    }


    const getProductoById = (id) => {
        setCargando(false);
        setError(null);
    fetch(API_URL+id)
        .then(res => res.json())
        .then(data => {
            setProducto(data);
            setCargando(false);
        })
        .catch(error => {
          setError(error);
           setCargando(false);
        });
};

const actualizarProducto = async (producto) => {

try{
    setCargando(true);
    setError(null);
    const respuesta = await fetch(API_URL+producto.id,
        {
            method: 'PUT',
             headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        }
    )
    if(!respuesta.ok){
    setError('error en actualizarProducto');
    setCargando(true);
    }else{
    setCargando(false);

     //actualiza listado local
    const productoActualizado = await respuesta.json();
    setProductos(listadoProductos.map(p=> p.id=== productoActualizado.id? productoActualizado:p));
    }
     
   
}catch(error){
    setError(error);
    setCargando(true);
}


}

const AgregarProducto = async (productoForm)=>{

    try{

        const respuesta = await fetch(API_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productoForm)
            }

        )

        if(!respuesta.ok){
            throw new Error ('Error al agregar producto');
           
        }else
        {
            const nuevoProducto = await respuesta.json();

            //se agrega en el estado global
            setProductos(listado => [nuevoProducto, ...listado]);
            toast.success("Producto agregado");
        }

    }catch(error){
        console.error(error);
    }




}


const eliminarProducto = async (id)=>{
const confirmar = window.confirm("¿Estás seguro de eliminar?");

    if (confirmar) {
    const respuesta = await fetch(API_URL+id,

         {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

    )
    if(respuesta.ok){
     // Filtra y crea un nuevo array sin el producto eliminado
        setProductos(listadoProductos.filter(p => p.id !== id));
    }
}

}


    return (<ProductoContext.Provider value={{cargando, error, 
    listadoProductos,
    producto, 
    getProductoById,
    AgregarProducto,
    actualizarProducto,
    setProducto,
    eliminarProducto,
    setProductos}}>
        {children}
    </ProductoContext.Provider>);

}