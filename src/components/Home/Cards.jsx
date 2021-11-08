import React from 'react';
import styles from '../../Styles/Card.module.css';
const Cards = ({ name, species, image, gender, id }) => {
	return (
		<div className={styles.mainCard}>
			<div className={styles.card}>
				<img className={styles.image} src={image} alt='Cargando...' />
				<div className={styles.content}>
					<h4 className={styles.name}>{name}</h4>
				</div>
				<div className={styles.dates}>
					<p className={styles.specie}>Specie: {species}</p>
					<p className={styles.gender}>Gender: {gender}</p>
				</div>
			</div>
		</div>
	);
};

export default Cards;
