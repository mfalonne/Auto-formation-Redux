import axios from "axios";

export const GET_USER = "GET_USER"; // ajout du type de la requette
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios.get("http://localhost:3000/user").then((res) => {
      //console.log(res.data[0]);
      // envoie des donnée au reducer
      dispatch({ type: GET_USER, payload: res.data[0] });
    });
  };
};

export const addUserLike = (data) => {
  // dispactch va permettre d'envoyer les données au reducer
  return (dispatch) => {
    // recupère les données dans la BDD
    return axios
      .put(`http://localhost:3000/user/${data.id}`, data)
      .then((res) => {
        //console.log(res);
        // envoie des donnée au reducer
        dispatch({ type: ADD_USER_LIKE, payload: data });
      });
  };
};
