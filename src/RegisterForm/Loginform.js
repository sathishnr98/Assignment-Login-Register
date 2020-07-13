import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import Appbar from "./Appbar"

const styles = theme => ({
  margin: {
      margin: theme.spacing.unit * 2,
  },
  padding: {
      padding: theme.spacing.unit
  }
});
export class FormUserDetails extends Component {

   
  constructor(){
    super()
      this.state={
        username:'',
        password:''
    }
  }
  validation = () => {
    let ele=document.querySelectorAll('.status')
    ele.forEach(element => {
      element.innerHTML=""    
    });
    let status = true;
    console.log(this.state.username)
    if (this.state.username.trim().length < 1) {
      status = false
      document.getElementsByClassName('username-error')[0].innerHTML="Please enter username"
    }
    console.log(this.state.password)
    if (this.state.password.trim().length < 1) {
      status = false
      document.getElementsByClassName('password-error')[0].innerHTML="Please enter password"
    }
    else if(this.state.username !='midas' || this.state.password != 'midas'){
      status=false
      document.getElementsByClassName('password-error')[0].innerHTML="Invalid credentails"
    }
    return status
  }

  continue = e => {
    e.preventDefault();
    if (this.validation()) {
    this.props.history.push("/Register");
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
        <Appbar/>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="username" name="username" label="Username" type="text" fullWidth autoFocus required />
                            <span style={{color:'red'}}  className="username-error status"></span>

                        </Grid>

                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" onChange={this.handleChange}  name="password" label="Password" type="password" fullWidth required />
                     
                            <span style={{color:'red'}}  className="password-error status"></span>

                        </Grid>

                    </Grid>
  
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button onClick={this.continue} variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        </>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FormUserDetails);
