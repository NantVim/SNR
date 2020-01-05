import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return(
		<header className={s.header}>
			<img src='https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png' alt='logo' />
		</header>
	);
}

export default Header;