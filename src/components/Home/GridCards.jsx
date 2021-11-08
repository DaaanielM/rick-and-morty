import React, { useState, useEffect } from 'react';
import styles from '../../Styles/GridCards.module.css';
import { getCharacters } from '../../services/api';
import Card from '../../components/Home/Cards';
const GridCards = ({ search }) => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);

	const getData = async () => {
		const response = await getCharacters(page, search);
		if (response) {
			setData(response.results);
			setMaxPages(response.info.pages);
		} else {
			alert('Ha ocurrido un error, intentelo más tarde');
		}
	};
	useEffect(() => {
		getData();
	}, [page, search]);

	const handleNextPage = () => {
		if (page < maxPages) {
			setPage(page + 1);
		}
	};

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	return (
		<>
			<div className={styles.container}>
				{data.map((item, index) => (
					<Card {...item} key={item.id} />
				))}
			</div>
			<div className={styles.mainButtons}>
				<button className={styles.button} onClick={handlePreviousPage}>
					Behind
				</button>
				<button className={styles.button} onClick={handleNextPage}>
					Next
				</button>
			</div>
		</>
	);
};

export default GridCards;
