import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";
const PostForm = () => {
  // permet de récupérer les données qui sont taper dans notre fomulaire
  const form = useRef();

  //Recuperer les données dans le store
  const user = useSelector((state) => state.userReducer);

  //Envoyer les données le store
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };
    await dispatch(addPost(postData));
    dispatch(getPosts());
    form.current.reset(); // remet tout à 0
  };
  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
