import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <MyPosts
      newPostText={state.profilePage.newPostText}
      postData={state.profilePage.postData}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />);

};

export default MyPostsContainer;