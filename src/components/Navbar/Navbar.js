import React from 'react';
import {Link} from "react-router-dom";
//Import UI components
import {AppBar, Typography, Avatar, Toolbar, Button} from "@material-ui/core";

//Import the CSS
import useStyles from "./styles";

//Import an image
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles(); 
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories-v2
          <img  className={classes.image} src={memories} alt="memories" height="60"/>
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {
          user? (
            <div className="classes.profile">
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt[0]}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button variant="container" className={classes.logout} color="secondary">
                Sign-out
              </Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">

            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;