//Boilerplate code
import React, {useState} from 'react';
//Import UI components 
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//Import the CSS
import useStyles from "./styles";
//Import the "input" component
import Input from "./Input";
//Import Google features
import {GoogleLogin} from "react-google-login";
//Import the icon
import Icon from "./Icon";

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = () => {

  };
  const handleChange = () => {

  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  //Create the google event handler functions
  const googleSuccess = async (res) => {
    console.log(res);
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign-in was unsuccessful. Try again later.")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">
          {isSignup?"Sign-up":"Sign-in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    <Input name="firstName" label="Last Name" handleChange={handleChange}  half/>
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
            {
              isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
            }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign-up" : "Sign-in"}
          </Button>
          <GoogleLogin
            clientId="755085294100-rakta8lm62050kj935pbji63n0vrua7d.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button 
                className={classes.googleButton} 
                color="primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon/>} 
                variant="contained"
              >
                Google Sign-in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {
                  isSignup ? "Already have an account? Sign-in" : "Don't have an account? Sign-up"
                }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;