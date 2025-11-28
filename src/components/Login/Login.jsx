import { useState } from "react";
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario]= useState('');
    const [contrasenia, setContrasenia] = useState('');
    const {login} = useAuthContext();
    const navigate = useNavigate();

const handleSubmit = (e) =>{

    e.preventDefault();
    if(!login(usuario, contrasenia)){
        alert("credenciales incorrectas");
    }else{
        navigate("/productos");
    }
}

    return (<>
<form onSubmit={handleSubmit}>

    <h2>Inico sesión</h2>
    <div>
        <label>Usuario</label>
        <input type='text'
        value = {usuario}
        onChange={(e)=> setUsuario(e.target.value)}></input>
    </div>
     <div>
        <label>Contraseña</label>
        <input type='password'
        value = {contrasenia}
        onChange={(e)=>setContrasenia(e.target.value)}></input>
    </div>
    <button type="submit">Ingresar</button>
</form>

    </>);

}
export default Login;