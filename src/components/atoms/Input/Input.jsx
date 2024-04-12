import { TextField } from "@mui/material";

function Input({label, value, onChange}){
  return (
    <TextField 
      label={label} 
      sx={{"m" : 2}} 
      value={value} 
      onChange={onChange}
    />
)
}

export default Input