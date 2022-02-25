import React from 'react';
import styles from './Projects.module.css';

function Projects(props) {
	return (
		<div className={styles.bigBox}>
			<div className={styles.infoBox}>
				<div className={styles.box1}></div>
				<p>Felp</p>
			</div>
			<div className={styles.infoBox}>
				<div className={styles.box2}></div>
				<p>Golazo Highlights App</p>
			</div>
			<div className={styles.infoBox}>
				<div className={styles.box3}></div>
				<p>My Gifts</p>
			</div>
			<div className={styles.infoBox}>
				<div className={styles.box4}></div>
				<p>Bridge Game</p>
			</div>
		</div>
	);
}

export default Projects;
