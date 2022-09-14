import * as api from "../api/index";
import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionTypes";

//Create action creators 
export const getPosts = () => async (dispatch) => {
    try
    {
        //Get the posts data using the API
        const {data} = await api.fetchPosts();
        //Dispatch the get action by passing the data as the payload
        dispatch({type:FETCH_ALL, payload:data});
    }
    catch(error)
    {
        console.log(error.message);
    }
};
export const createPost = (post) => async (dispatch) => {
    try
    {
        //Get the posts data using the API
        const {data} = await api.createPost(post);
        //Dispatch the create action by passing the data as the payload
        dispatch({type:CREATE, paylaod:data});
    }
    catch(error)
    {
        console.log(error.message);
    }
};
export const updatePost = (id, post) => async (dispatch) => {
    try
    {   
        //Get the posts data using the API
        const {data} = await api.updatePost(id, post);
        //Dispatch the update action by passing the data as the payload
        dispatch({type:UPDATE, payload:data});
    }
    catch(error)
    {
        console.log(error.message);
    }
};
export const deletePost = (id) => async (dispatch) => {
    try
    {
        await api.deletePost(id);
        dispatch({type:DELETE, payload:id});
    }
    catch(error)
    {
        console.log(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try
    {
        //Get the posts data using the API
        const {data} = await api.likePost(id);
        //Dispatch the update action by passing the data as the payload
        dispatch({type:UPDATE, payload:data});
    }
    catch(error)
    {
        console.log(error.message);
    }
}