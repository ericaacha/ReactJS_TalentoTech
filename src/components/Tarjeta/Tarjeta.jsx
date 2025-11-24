import "./Tarjeta.css";
import {Link} from "react-router-dom";
import { CarritoContext } from '../../contexts/CarritoContext';
import { useContext } from 'react';

const Tarjeta = (props) => {

  const {agregarProducto} = useContext(CarritoContext);
 
  
  return (
    <>
      <div className="card">
        <h2>{props.item.nombre}</h2>
        <p>${props.item.precio}</p>
        
        <img src={props.item.avatar}/>
        <button onClick={() => agregarProducto(props.item)}> Agregar al carrito </button>
        <button><Link to={`/detalle/${props.item.id}`}> Detalle </Link></button>
      </div>
    </>
  );
};

export default Tarjeta;
