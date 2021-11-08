import React, { useState } from 'react';
import styles from '../Styles/Home.module.css';
import GridCards from '../components/Home/GridCards';
import SearchForm from '../components/Home/SearchForm';

function Home() {
	// Acá creamos el estado search, para comunicar los componentes (search y gridcard)
	// Cuando escribamos en el search, se vera reflejado en el estado search y se actualizara el estado
	const [search, setSearch] = useState('');
	// Poder actualizar el estado, cuando se haga la actualización (cuando haga el submit)
	const handleChangeSearch = (e) => setSearch(e);
	return (
		<div className={styles.content}>
			<div className={styles.main}>
				<SearchForm search={search} onChange={handleChangeSearch} />
				<GridCards search={search} />
			</div>
		</div>
	);
}

export default Home;
