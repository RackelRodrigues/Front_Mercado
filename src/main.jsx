import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/Login.jsx';
import Errorpage from './pages/Errorpage.jsx';
import CreateAccount from './pages/createAccount.jsx';
import Home from './pages/Home.jsx'


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
  }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
