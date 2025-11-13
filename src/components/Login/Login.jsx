import { useState, useContext } from "react";
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario]= useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuthContext();
    const navigate = useNavigate();

const handleSubmit = (e) =>{

    e.preventDefault();
    if(usuario == "admin" && password=="1234"){
     login(usuario);
     navigate('/administracion');

    }else{
        alert("credenciales incorrectas");
    }
}

    return <>
<form onSubmit={handleSubmit}>

    <h2>Iniciar sesión</h2>
    <div>
        <label>Usuario</label>
        <input type='text'
        value = {usuario}
        onChange={(e)=> setUsuario(e.target.value)}></input>
    </div>
     <div>
        <label>Contraseña</label>
        <input type='password'
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <button type="submit">Ingresar</button>
</form>

    </>
}

export default Login;