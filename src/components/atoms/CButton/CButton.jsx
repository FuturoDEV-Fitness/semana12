import {Button} from "@mui/material"

function CButton({onClick, children}){
  return (
    <Button onClick={onClick} variant="contained" sx={{"mt" : 3}}>
      {children}
    </Button>
  )
}

export default CButton