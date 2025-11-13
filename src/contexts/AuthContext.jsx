import { createContext, useState, useContext } from "react";


export const AuthContext = createContext();

//proveedor
export function AuthProvider({children}){

    const [user, setUser] = useState(null);


    const login = (username)=>{
        //simula token
        const token = `fake-token-${username}`;

        //almacena el token
        localStorage.setItem('authToken', token);

        setUser(username);
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