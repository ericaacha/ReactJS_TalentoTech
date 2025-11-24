import { createContext, useState } from "react";



export const SearchContext = createContext();

//proveedor

export function SearchProvider({children}) {

const [listadoProductoFiltrado, setListadoFiltrado] = useState([]);
const [valorBusqueda, setValorBusqueda] = useState("");

      return (
            <SearchContext.Provider value={{    
                  listadoProductoFiltrado,
                  setValorBusqueda,
                  valorBusqueda,
                  setListadoFiltrado}} >
             {children}
             </SearchContext.Provider>
    
        );
}

