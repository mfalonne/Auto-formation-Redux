import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";

//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; //indique le chemin du reducer
import { getPosts } from "./actions/post.action.jsx";
import { getUser } from "./actions/user.action.jsx";

const store = configureStore({
  reducer: rootReducer, //permet de lui passer le reducer
  devTools: true, // nous permet de suivre les modificatione dans le devTools sur google
});

//Ajoute ces actions dans le store
store.dispatch(getPosts());
store.dispatch(getUser());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
