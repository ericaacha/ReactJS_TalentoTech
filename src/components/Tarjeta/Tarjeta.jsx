import "./Tarjeta.css";
import {Link} from "react-router-dom";
import { CarritoContext } from '../../contexts/CarritoContext';
import { useContext } from 'react';


const Tarjeta = (props) => {

  const {agregarProducto} = useContext(CarritoContext);
 
  
  return (
    <>
    <div className="card">
        <img className="card-img-top" src={props.item.avatar}/>
         <div className="card-body">
          <h5 className="card-title">{props.item.nombre}</h5>
        
       
        <button className="btn btn-primary btn-eq" onClick={() => agregarProducto(props.item)}> Agregar al carrito </button>
      
        <button  className="btn btn-outerside-secondary btn-eq"><Link to={`/detalle/${props.item.id}`}> Detalle </Link></button>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
