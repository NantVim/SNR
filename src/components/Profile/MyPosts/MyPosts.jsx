import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.pushPost(props.postData, text);
  };

  let changeValueTextarea = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={changeValueTextarea}
            value={props.newPostText}
            cols="20"
            rows="5"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {props.postData.map(post => (
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