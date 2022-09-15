//Boilerplate code
import React, {useState, useEffect} from 'react';
//Import UI components
import {TextField, Button, Typography, Paper} from "@material-ui/core";

//Import the styles
import useStyles from "./styles";

import FileBase from "react-file-base64";

//Import Redux features
import {useDispatch, useSelector} from "react-redux";

import {createPost, updatePost} from "../../actions/posts";

const Form = ({currentId, setCurrentId}) => {
  //Use the styles 
  const classes = useStyles();
  //Create the state
  const [postData, setPostData] = useState({creator:"", title:"", message:"", tags:"", selectedFile:""});

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(post)
      setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //If there is a current id
    if(currentId)
      dispatch(updatePost(currentId, postData));
    else
      dispatch(createPost(postData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;