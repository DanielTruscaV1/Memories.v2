//Boilerplate code
import React from 'react';
//Import the "Post" component
import Post from "./Post/Post";

//Import UI components
import {Grid, CircularProgress} from "@material-ui/core";

//Import the styles
import useStyles from "./styles";

//Import Redux features
import {useSelector} from "react-redux";

const Posts = () => {
  //Use the styles 
  const classes = useStyles();
  //Use the "useSelector" custom hook to initialize the posts vairable
  const posts = useSelector((state) => state.posts);
  return (
    posts.length? <CircularProgress/>:(
      <Grid className={classes.contaienr} container alignItems="stretch" spacing={3}>
        {
          !posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
                <Post post={post}/>
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts;