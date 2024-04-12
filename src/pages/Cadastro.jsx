import { useContext } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import styles from "./Cadastro.module.css";
import CadastroUsuario from "../components/molecules/CadastroUsuario";

function Cadastro() {

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  function CadastrarUsuario(novoUsuario){
    setUsuarios([...usuarios, novoUsuario])
  }

  return (
    <>
      <div className={styles.card}>
        <h1>Página Cadastro</h1>
      </div>
      <CadastroUsuario submit={CadastrarUsuario}/>
    </>
  );
}

export default Cadastro;
