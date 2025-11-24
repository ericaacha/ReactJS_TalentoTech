import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";
import { CarritoProvider } from './contexts/CarritoContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ProductoProvider } from './contexts/ProductoContext.jsx';
import { SearchProvider } from './contexts/SearchContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Router>
       <SearchProvider>
        <ProductoProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
       </ProductoProvider>
       </SearchProvider>
    </Router>
     </AuthProvider>
  </StrictMode>,
)
