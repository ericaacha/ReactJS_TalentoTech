import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarListado from './components/MostrarListado'
import Boton from './components/Boton/Boton'
import Tarjeta from './components/Tarjeta/Tarjeta'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)
  const nombres=['Tomas', 'Abrojito'];

  return (
    <div>
      {/* <MostrarListado nombresAlumnos={nombres}></MostrarListado> */}
      
      {/* <Tarjeta titulo="Oferta especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto = "Ver más">
      </Tarjeta> */}
      <Header> </Header>
      <Nav></Nav>
      <Main></Main>
      <Gallery></Gallery>
     <Footer></Footer>
      </div>

  )
}

export default App
