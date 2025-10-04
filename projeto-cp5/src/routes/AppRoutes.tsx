import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Formulario from "../pages/Formulario";
import FuncionariosLista from "../pages/Funcionarios";
import App from "../App";



export const routes = createBrowserRouter ([
  {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Home />
    },
   {
        path: '/formulario',
        element: <Formulario />
    },
    {
        path: '/funcionarios',
        element: <FuncionariosLista />
    }
    ]
  }
   
]) 

  
      
    
  