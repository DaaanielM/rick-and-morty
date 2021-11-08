import React, { useState } from 'react';
import styles from '../../Styles/Search.module.css';
function SearchForm({ onChange }) {
	// El local state de la función se llama search y se le asigna un string vacío
	const [search, setSearch] = useState('');
	// El evento onChange se ejecuta cuando el usuario escribe en el input

	const handleSubmit = (e) => {
		e.preventDefault();
		// Indica que realizo una busqueda, que hizo un cambio y se va a actualizar el state del padre (el del home)
		onChange(search);
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				className={styles.search}
				type='search'
				placeholder='Busca el personaje'
				// Actualizamos el estado del input
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
		</form>
	);
}

export default SearchForm;
