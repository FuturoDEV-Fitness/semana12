import {useContext} from "react"
import {UsuariosContext} from "../context/UsuariosContext"

function Home(){

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  return (
    <>
      <h1>Página home</h1>
      {usuarios.map((usuario, index) => (
        <h3 key={index}>{usuario.nome}</h3>
      ))}
    </>
  )
}

export default Home