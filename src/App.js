import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Link} from '@material-ui/core'
import { Grid } from "@material-ui/core";
import Loginform from "./RegisterForm/Loginform";
import Register from './Registerpage'
import Appbar from './RegisterForm/Appbar'
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start"
    }
  },
  header: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    color: theme.palette.primary.light
  },
  toolbar: {
    justifyContent: "center"
  }
}));
function App() {
  const classes = useStyles();
  return (
 
<>
    <Appbar/>
    <Router>     

            <Route exact path="/register" component={Register} />   
            <Route exact path="/" component={Loginform} />   

        </Router>
    </>
  );
}

export default App;
