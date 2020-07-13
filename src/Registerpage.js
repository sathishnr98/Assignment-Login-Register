import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Sidebar from "./RegisterForm/sidebar"
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//REGISTER FORM
import Register from './RegisterForm'
//HEADER
import Typography from "@material-ui/core/Typography";
//CONTEXT
import UserContextProvider from "./RegisterForm/UserContext";

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

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Registerpage() {
  const classes = useStyles();
  return (
    <>
    <Sidebar/>
    <UserContextProvider>
      <Grid container className={classes.root}>
        <Grid item className={classes.header} xs={12} md={4}>
          <Typography variant='h3' className={classes.title}>
            Registration
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Complete all 3 steps to finish registration process
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
         <Register/>
        </Grid>
      </Grid>
    </UserContextProvider>
    </>

  );
}

export default Registerpage;
