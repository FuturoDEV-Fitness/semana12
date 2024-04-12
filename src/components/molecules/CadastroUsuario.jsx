import { useState } from "react"
import CButton from "../atoms/CButton/CButton"
import Input from "../atoms/Input/Input"

export default function CadastroUsuario({submit}){

  const [novoUsuario, setUsuario] = useState({
    nome: "",
    email: ""
  })

  function CadastrarUsuario(){
    submit(novoUsuario)
  }

  return (
    <>
      <Input 
        label="Nome do usuário" 
        value={novoUsuario.nome} 
        onChange={(evento) => setUsuario({ ...novoUsuario, nome: evento.target.value})}
      />
      <Input 
        label="Email do usuário" 
        value={novoUsuario.email} 
        onChange={(evento) => setUsuario({ ...novoUsuario, email: evento.target.value})}
      />
      <CButton onClick={() => CadastrarUsuario()}>Cadastrar</CButton>
      <CButton>Limpar</CButton>
    </>
  )
}