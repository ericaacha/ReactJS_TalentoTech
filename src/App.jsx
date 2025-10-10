import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarListado from './components/MostrarListado'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Nav from './components/Nav/Nav'
import Contacto from './components/Contacto/Contacto'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About'
import Carrito from './components/Carrito/Carrito'
import ListadoProductos from './components/ListadoProductos/ListadoProductos'


function App() {

   const[carrito, setCarrito] = useState([]);

    const agregarProducto = (producto)=>{
        setCarrito([...carrito, producto]);
    }

    const vaciarCarrito = ()=>{
        setCarrito([]);
    }

  return (
    <div>
  
      <Header> </Header>
      <Nav></Nav>
       <Routes>
          <Route path="/galeria" element={<Gallery />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/productos" element={<ListadoProductos agregarAlCarrito={agregarProducto} />}></Route>
          <Route path="/carrito"  element={ <Carrito productos={carrito} vaciarCarrito={vaciarCarrito} />}></Route>
        </Routes>
     
     
      <Footer></Footer>
      
   
    </div>

  )
}

export default App
