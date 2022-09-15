import React,{ useState, useEffect } from 'react';

//Import @material-ui components
import {Container, Grow, Grid} from "@material-ui/core";

//Import the "Form" and "Posts" components
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

//Import Redux features
import {useDispatch} from "react-redux";


//Import the actions
import {getPosts} from "../../actions/posts";

import useStyles from "./styles";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    //Use the styles
    const classes = useStyles();
    //Create a dispatch variable using the "useDispatch" custom hook
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

  return (
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
  )
}

export default Home;