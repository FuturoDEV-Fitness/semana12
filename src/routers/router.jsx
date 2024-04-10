/**
 * PASSOS PARA CONFIGURAR O REACT ROUTER DOM
 * 
 * 1 - [X] - INSTALE O REACT ROUTER DOM USANDO O COMANDO npm install react-router-dom
 * 2 - [X] - IMPORTE O createBrowserRouter DA BIBLIOTECA REACT ROUTER DOM
 *    'import {createBrowserRouter} from "react-router-dom"'
 * 3 - [X] - CRIE A LISTA DE ROTAS USANDO A FUNÇÃO createBrowserRouter
 * 4 - [x] - IMPORTE O RouterProvider DA BIBLIOTECA REACT ROUTER DOM
 *      'import {createBrowserRouter, RouterProvider} from "react-router-dom"'
 * 5 - [x] - CONFIGURAR O PROVIDER PASSANDO A PROP DAS ROTAS
 * 6 - [x] - CRIAR AS PÁGINAS E CONFIGURAR NA LISTA DE ROTAS
 * 7 - [X] - IMPORTAR AS PÁGINAS
 */

import App from '../App.jsx'
import Home from "../pages/Home.jsx"
import Cadastro from "../pages/Cadastro.jsx"
import Lista from "../pages/Lista.jsx"
import PaginaErro from '../pages/PaginaErro.jsx'

import {createBrowserRouter} from "react-router-dom"

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/lista",
        element: <Lista />
      }
    ]
  },
])

export default routers