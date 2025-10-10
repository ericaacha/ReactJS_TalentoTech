import "./Tarjeta.css";

const Tarjeta = (props) => {

 
  return (
    <>
      <div className="card">
        <h2>{props.item.title}</h2>
        <p>${props.item.price}</p>
        <button
          onClick={() => props.agregarAlCarrito(props.item)}
        >Agregar</button>
      </div>
    </>
  );
};

export default Tarjeta;
