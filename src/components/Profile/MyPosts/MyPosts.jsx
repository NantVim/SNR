import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={updateNewPostText}
            value={props.state.profileState.newPostText}
            cols="20"
            rows="5"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {props.state.profileState.postData.map(post => (
          <Post
            id={post.id}
            count={post.likesCount}
            message={post.message}
          />
        ))}
      </div>

    </div>
  );
};

export default MyPosts;