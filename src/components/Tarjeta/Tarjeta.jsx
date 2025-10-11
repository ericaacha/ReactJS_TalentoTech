import "./Tarjeta.css";
import {Link} from "react-router-dom";

const Tarjeta = (props) => {

 
  return (
    <>
      <div className="card">
        <h2>{props.item.title}</h2>
        <p>${props.item.price}</p>
        <button onClick={() => props.agregarAlCarrito(props.item)}> Agregar al carrito </button>
        <button><Link to={`/detalle/${props.item.id}`}> Detalle </Link></button>
      </div>
    </>
  );
};

export default Tarjeta;
