import {Link} from "react-router-dom"

function Navbar(){
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/lista">Lista</Link>
    </nav>
  )
}

export default Navbar