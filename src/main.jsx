import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";
import { CarritoProvider } from './contexts/CarritoContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Router>
      
      <CarritoProvider>
        <App />
      </CarritoProvider>
     
    </Router>
     </AuthProvider>
  </StrictMode>,
)
