import React, { useState } from 'react';
import styles from '../../Styles/Search.module.css';
function Search({ onChange }) {
	const [search, setSearch] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		onChange(search);
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				className={styles.search}
				type='search'
				placeholder='Busca el personaje'
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
		</form>
	);
}

export default Search;
