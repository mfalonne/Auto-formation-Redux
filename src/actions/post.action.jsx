import axios from "axios";

export const GET_POSTS = "GET_POSTS"; // ajout du type de la requette
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const getPosts = () => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios.get("http://localhost:3000/posts").then((res) => {
      //console.log(res);
      // envoie des donnée au reducer
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};

export const addPost = (data) => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios.post("http://localhost:3000/posts", data).then((res) => {
      //console.log(res);
      // envoie des donnée au reducer
      dispatch({ type: ADD_POST, payload: data });
    });
  };
};

export const editPost = (data) => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((res) => {
        //console.log(res);
        // envoie des donnée au reducer
        dispatch({ type: EDIT_POST, payload: data });
      });
  };
};

export const deletePost = (postId) => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
      //console.log(res);
      // envoie des donnée au reducer
      dispatch({ type: DELETE_POST, payload: postId });
    });
  };
};

export const addPostLike = (data) => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((res) => {
        //console.log(res);
        // envoie des donnée au reducer
        dispatch({ type: ADD_POST_LIKE, payload: data });
      });
  };
};
