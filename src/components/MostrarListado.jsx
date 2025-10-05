const MostrarListado = (props)=>{
    debugger;
//const nombres = props.nombresAlumnos;
return(<div>
    <ul>
        {
        props.nombresAlumnos.map( nombre => (
        <li key={nombre}>{nombre}</li>
        ))
        }
</ul>
</div>);

}

export default MostrarListado;