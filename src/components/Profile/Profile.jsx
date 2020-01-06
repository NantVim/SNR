import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={s.content}>

			<ProfileInfo />
			<MyPosts
				postData={props.profileData.postData}
				newPostText={props.profileData.newPostText}
				pushPost={props.pushPost}
				updateNewPostText={props.updateNewPostText}
			/>

		</div>
	);
};

export default Profile;