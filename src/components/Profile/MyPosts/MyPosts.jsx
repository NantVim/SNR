import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
	return (
		<div>
			<div>	My posts</div>
			<div>New post</div>

			<div className={s.posts}>
				<Post count='55' message='Hi, how are you?'/>
				<Post count='73' message='It s my first post'/>
			</div>
		</div>
	);
};

export default MyPosts;