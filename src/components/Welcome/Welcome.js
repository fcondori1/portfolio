import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';
import 'animate.css';

function Welcome(props) {
	return (
		<div className={styles.welcomePage}>
			<h1 className={styles.introPage}>Frankz Condori: Full Stack Developer</h1>
			{/* <Link to='/about'>
				<h2
					className={`${styles.animate__animated} ${styles.animate__pulse} ${styles.animate__infinite}`}>
					Click here to get to know a bit more about me!
				</h2>
			</Link> */}
		</div>
	);
}

export default Welcome;
