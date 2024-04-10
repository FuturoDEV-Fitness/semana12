import { useContext } from "react"
import { UsuariosContext } from "../context/UsuariosContext"

function Cadastro(){

  const {count, dispatch} = useContext(UsuariosContext)

  return (
    <>
      <h1>Página Cadastro</h1>
      <h3>Contador: {count}</h3>
      <button onClick={() => dispatch({type: "ADD"})}>Adicionar</button>
      <button onClick={() => dispatch({type: "REMOVE"})}>Remover</button>
      <button onClick={() => dispatch({type: "MULTIPLY"})}>Dobrar</button>
    </>
  )
}

export default Cadastro