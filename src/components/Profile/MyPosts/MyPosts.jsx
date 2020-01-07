import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

  const addPost = () => props.addPost();

  const updateNewPostText = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={updateNewPostText}
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