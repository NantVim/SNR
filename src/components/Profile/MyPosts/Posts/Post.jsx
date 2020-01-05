import React from "react";
import s from "./Post.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"
           alt="avatar"/>
      {props.message}
      <div>
        Like  <span>count: {props.count}</span>
      </div>
    </div>
  );
};

export default Posts;