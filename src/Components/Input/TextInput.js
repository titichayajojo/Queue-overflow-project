import classes from "./Textinput.module.css";
import TextField from "@mui/material/TextField";
import { fontWeight } from "@mui/system";
export default function TextInput(props) {
  return (
    <div className={classes.textInput}>
      <div style={{ color: "black", color: "grey" }}>{props.title}</div>
      <TextField className={classes.textField} sx={{ marginTop: 1 }} />
    </div>
  );
}
