import { createContext, useState, useContext } from "react";


export const AuthContext = createContext();

//proveedor
export function AuthProvider({children}){

    const [user, setUser] = useState(null);

const USUARIOS_FAKE = [
  { 
    id: 1, 
    usuario: 'admin', 
    contrasenia: '1234', 
    rol: 'admin',
    nombre: 'Admin'
  },
  { 
    id: 2, 
    usuario: 'maria', 
    contrasenia: '1234', 
    rol: 'usuario',
    nombre: 'Maria'
  }
];

    const login = (usuario, contrasenia)=>{

        const usuarioLog = USUARIOS_FAKE.find(u=>u.usuario === usuario && u.contrasenia === contrasenia);

          if(usuarioLog){
            //simula token
            const token = `fake-token-${usuarioLog}`;

            //almacena el token
            localStorage.setItem('authToken', token);

            setUser(usuarioLog);
            return true;
          }else{
            return false;
          }
       
    }


    const logout = ()=> {
        localStorage.removeItem('authToken');
        setUser(null);
    }



    return (
        <AuthContext.Provider value={{user,login, logout}}>
            {children}
        </AuthContext.Provider>
    );



}


export const useAuthContext = () => {

    return useContext(AuthContext);
}