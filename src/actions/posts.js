import * as api from "../api/index";

//Create action creators 
export const getPosts = () => async (dispatch) => {
    try
    {
        //Get the posts data using the API
        const {posts} = await api.fetchPosts();
        //Dispatch the get action by passing the data as the payload
        dispatch({type:"FETCH_ALL", payload:posts});
    }
    catch(error)
    {
        console.log(error.message);
    }
};
export const createPost = (post) => async (dispatch) => {
    try
    {
        const {data} = await api.createPost(post);
        dispatch({type:"CREATE", paylaod:data});
    }
    catch(error)
    {
        console.log(error.message);
    }
};