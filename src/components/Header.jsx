import React from 'react';
import styles from '../Styles/Header.module.css';
import Logo from '../Images/Rick_and_Morty.png';
function Header() {
	return (
		<>
			<header className={styles.main}>
				<img src={Logo} className={styles.logo} alt='logo' />
			</header>
		</>
	);
}

export default Header;
