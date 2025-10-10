import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarListado from './components/MostrarListado'
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
      
      <Header> </Header>
      <Nav></Nav>
      <Main></Main>
      <Gallery></Gallery>
      <Footer></Footer>
    
    </div>

  )
}

export default App
