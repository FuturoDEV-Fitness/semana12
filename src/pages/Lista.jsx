import { Card, Button, CardActions, CardContent, CardHeader } from "@mui/material";
import { useContext } from "react";
import { UsuariosContext } from "../context/UsuariosContext";

function Lista() {

  const {usuarios} = useContext(UsuariosContext)

  return (
    <>
      {usuarios.map((usuario, index) => {
        return (
          <Card key={index}>
            <CardContent>
              <h3>{usuario.nome}</h3>
            </CardContent>
            <CardActions>
                <Button>Ver detalhes</Button>
            </CardActions>
          </Card>
        )
      })}
    </>
  );
}

export default Lista;
