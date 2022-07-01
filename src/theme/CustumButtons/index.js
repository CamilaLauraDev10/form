import idea from "../../Assets/idea.png"
import { TextField } from '@mui/material';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import theme from "../theme";

const CancellButton = withStyles({
    root: {
      background: theme.palette.primary.main, '&:hover': {
        background: theme.palette.secondary.dark,
     },
      borderRadius: 10,
      border: 0,
      fontFamily: "Arial",
      color: theme.palette.primary.contrastText,
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
    label: {
      textTransform: "capitalize",
      fontSize: 20
    }
})(props => <Button {...props} />);


const AddButton = withStyles({
    root: {
      background: theme.palette.info.main, '&:hover': {
        background: theme.palette.info.dark,
     },
      borderRadius: 10,
      border: "10px transparent",
      fontFamily: "Arial",
      color: theme.palette.primary.contrastText,
      height: "50%",
      width: "75%",
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      display: "block",
    },
    label: {
      textTransform: "capitalize",
      fontSize: 30
    }
})(props => <Button {...props} />);

const LogoButton = withStyles({
    root: {
      background: `url(${idea})`,
      borderRadius: 10,
      border: 0,
      width:130,
      height:125,
      fontFamily: "Arial",
      color: theme.palette.primary.contrastText,
      padding: "0 30px",
    },
})(props => <Button {...props} />);


const CustomTextField = withStyles({
  root: {
    background: theme.palette.primary.contrastText,
    width: "70%",
  },
  label: "Outlined"

})(props => <TextField {...props}/>);

const CustomButtonAccept = withStyles({
    root: {
      background: theme.palette.success.main, '&:hover': {
        background: theme.palette.success.dark,
     },
      marginTop: "10px",
      borderRadius: 10,
      border: 0,
      fontFamily: "Arial",
      color: theme.palette.primary.contrastText,
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
    label: {
      textTransform: "capitalize",
      fontSize: 20
    }
})(props => <Button {...props} />);

export { CustomButtonAccept, CancellButton, AddButton, LogoButton, CustomTextField};