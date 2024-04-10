/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 
 * 1 - [x] - IMPORTE O createContext DO REACT
 * 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 * 
 * 4 - [X] - CRIE A VARIÁVEL DO PROVIDER
 * 5 - [x] - RECEBA A PROP CHILDREN
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [x] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
 * 
 * 9 - [x] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [x] - IMPORTE O useContext DO REACT
 * 11 - [x] - RECEBA OS DADOS GLOBAIS USANDO O useContext
 */

import {createContext, useReducer, useState} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
  const [usuarios, setUsuarios] = useState([
    {
      nome: "Bruno",
      email: "email@email.com"
    },
    {
      nome: "Guilherme",
      email: "email@email.com"
    },
    {
      nome: "Paulo",
      email: "email@email.com"
    }
  ])

  const [count, dispatch] = useReducer(reducer, 0)

  function reducer(state, action){
    switch(action.type){
      case "ADD":
        return state + 1;
      case "REMOVE":
        return state - 1;
      case "MULTIPLY":
        return state * 2;
    }
  }


  return (
    <UsuariosContext.Provider value={{usuarios, setUsuarios, count, dispatch}}>
      {children}
    </UsuariosContext.Provider>
  )
}