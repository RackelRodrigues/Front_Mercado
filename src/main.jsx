import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/Login.jsx';
import Errorpage from './pages/Errorpage.jsx';
import CreateAccount from './pages/createAccount.jsx';
import Home from './pages/Home.jsx'
import MeuCarrinho from './pages/carrinho.jsx'
import DadosIncompletos from './pages/DadosIncompletos.jsx'
import Animais from './pages/category/Animais.jsx';
import Bebidas from './pages/category/Bebidas.jsx'
import Congelados from './pages/category/Congelados.jsx'
import Frescos from './pages/category/Frescos.jsx'
import Higiene from './pages/category/Higiene.jsx'
import Limpeza from './pages/category/Limpeza.jsx'
import Mercearia from './pages/category/Mercearia.jsx'
import Organicos from './pages/category/Organicos.jsx'
import Padaria from './pages/category/Padaria.jsx'
import Saude from './pages/category/saude.jsx'
import Addressdata from './pages/Addressdata.jsx'







const router =  createBrowserRouter ([
  {
    path: "/",
    element:<App/>,
    errorElement: <Errorpage/>, 
    children:[
    {
        path: "Home",
        element: <Home/>,
  },
      
  {
    path: "Login",
    element:<Login/>,
  },
  {
    path: "Create account",
    element: <CreateAccount/>,
  },
  {
    path: "Address",
    element: <Addressdata/>,
  },
  {
    path: "Meu Carrinho",
    element: <MeuCarrinho/>,
  },
  {
    path: "DadosIncompletos",
    element: <DadosIncompletos/>,
  },
  {
    path: "Animais",
    element: <Animais/>,
  },
  {
    path: "Bebidas",
    element: <Bebidas/>,
  },
  {
    path: "Congelados",
    element: <Congelados/>,
  },
  {
    path: "Frescos",
    element: <Frescos/>,
  },
  {
    path: "Higiene",
    element: <Higiene/>,
  },
  {
   path: "Limpeza",
    element: <Limpeza/>,
  },
  {
    path: "Mercearia",
    element: <Mercearia/>,
  },
  {
    path: "Organicos",
    element: <Organicos/>,

  }, {
    path: "saude",
    element: <Saude/>,

  },{
    path:"Padaria",
    element: <Padaria/>,
  }
]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
