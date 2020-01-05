import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' alt='img'></img>
			</div>

			<div>ava + description</div>

			<MyPosts />
		</div>
	);
}

export default Profile;