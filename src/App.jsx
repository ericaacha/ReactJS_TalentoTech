import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Nav from './components/Nav/Nav'
import Administracion from './components/Administracion/Administracion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About'
import Carrito from './components/Carrito/Carrito'
import ListadoProductos from './components/ListadoProductos/ListadoProductos'
import DetalleProducto from './components/DetalleProducto/DetalleProducto'
import Login from './components/Login/Login'
import RutaProtegida from './components/Utils/RutaProtegida'
import AltaModificacionProducto from './components/Administracion/AltaModificacionProducto'

function App() {

   const[isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <div>
  
      <Header> </Header>
      <Nav></Nav>
       <Routes>
          <Route path="/galeria" element={<Gallery />}></Route>
          <Route path="/administracion" element={
           // <RutaProtegida>
                <Administracion />
         //</RutaProtegida>
         }>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/productos" element={<ListadoProductos/>}></Route>
          <Route path="/carrito"  element={ 
            <RutaProtegida>
              <Carrito />
             </RutaProtegida>
             }></Route>
          <Route path="/detalle/:id" element={<DetalleProducto  />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path= "/AltaModificacionProducto/:id?" element={
            // <RutaProtegida>
              <AltaModificacionProducto />
           // </RutaProtegida>
          }></Route>
          
        </Routes>
     
     
      <Footer></Footer>
      
   
    </div>

  )
}

export default App
