import Boton from "../Boton/Boton";
import './Tarjeta.css'
const Tarjeta = (props)=>{

    return (
        <>
  
  <div class="card">
    <h2>{props.titulo}</h2>
    <p>{props.descripcion}</p>
    <Boton texto={props.botonTexto}></Boton>
  </div>
      
        </>
    );


}

export default Tarjeta;