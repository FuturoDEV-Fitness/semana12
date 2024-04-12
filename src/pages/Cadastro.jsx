import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import styles from "./Cadastro.module.css";
import { Button, TextField } from "@mui/material";

function Cadastro() {

  const [novoUsuario, setUsuario] = useState({
    nome: "",
    email: ""
  })

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  function CadastrarUsuario(){
    setUsuarios([...usuarios, novoUsuario])
  }

  return (
    <>
      <div className={styles.card}>
        <h1>Página Cadastro</h1>
      </div>
      <TextField 
        label="Nome do usuário" 
        sx={{"m" : 2}} 
        value={novoUsuario.nome} 
        onChange={(evento) => setUsuario({ ...novoUsuario, nome: evento.target.value})}
      />
      <TextField 
        label="Email do usuário" 
        sx={{"m" : 2}} 
        value={novoUsuario.email} 
        onChange={(evento) => setUsuario({ ...novoUsuario, email: evento.target.value})}
      />
      <Button variant="contained" sx={{"mt" : 3}} onClick={() => CadastrarUsuario()}>Cadastrar</Button>
    </>
  );
}

export default Cadastro;
