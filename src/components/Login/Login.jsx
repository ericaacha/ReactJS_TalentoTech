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

     <div className="container d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12">
          <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white border-0">
            <h2 className="mb-4 text-center">Iniciar sesión</h2>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4">
                <label htmlFor="usuario" className="col-form-label">Usuario</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="usuario"
                  value={usuario}
                  placeholder="ingrese usuario"
                  onChange={(e)=> setUsuario(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-4">
                <label htmlFor="contrasenia" className="col-form-label">Contraseña</label>
              </div>
              <div className="col-8">
                <input
                  type="password"
                  className="form-control"
                  id="contrasenia"
                  value={contrasenia}
                  placeholder="ingrese contraseña"
                  onChange={(e)=> setContrasenia(e.target.value)}
                />
              </div>
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
      

    </>);

}
export default Login;