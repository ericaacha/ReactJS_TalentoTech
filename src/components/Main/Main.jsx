import styles from './Main.module.css'
import Carrito from '../Carrito/Carrito';


const Main = ()=>{


    return <>
    <main>
       
        <h2>Productos</h2>
        <p>A continuación podras encontrar los más vendidos</p>

         <Carrito></Carrito>
       
    </main>
    </>


}

export default Main;