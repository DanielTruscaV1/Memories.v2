//Import React
import React, { useState, useEffect } from "react";
//Import @material-ui components
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";

//Import an image
import memories from "./images/memories.png";

//Import the "Form" and "Posts" components
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

//Import styles
import useStyles from "./styles";

//Import Redux features
import {useDispatch} from "react-redux";

//Import the actions
import {getPosts} from "./actions/posts";

//Create the "App" component
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    //Use the styles
    const classes = useStyles();
    //Create a dispatch variable using the "useDispatch" custom hook
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    //Return the HTML
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories-v2
                    <img  className={classes.image} src={memories} alt="memories" height="60"/>
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>  
            </Grow>
        </Container>
    );
}

//Export the "App" component
export default App;