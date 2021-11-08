import React, { useState } from 'react';
import styles from '../Styles/Home.module.css';
import GridCards from '../components/Home/GridCards';
import Search from '../components/Home/Search';

function Home() {
	const [search, setSearch] = useState('');
	const handleChangeSearch = (e) => setSearch(e);
	return (
		<div className={styles.content}>
			<div className={styles.main}>
				<Search onChange={handleChangeSearch} />
				<GridCards search={search} />
			</div>
		</div>
	);
}

export default Home;
