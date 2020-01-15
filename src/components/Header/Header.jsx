import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
	return(
		<header className={s.header}>
			<img src='https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png' alt='logo' />
			<div className={s.loginBlock}>
				<NavLink to='/login'>Login</NavLink>
			</div>
		</header>
	);
}

export default Header;