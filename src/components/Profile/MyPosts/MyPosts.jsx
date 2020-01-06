import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="20" rows="5"/>
        </div>
        <div>
          <button>Add post</button>
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