import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

function Welcome(props) {
    return (
			<div className={styles.welcomePage}>
				<h1>Frankz Portfolio</h1>
				<Link to='/about'>
					<h2>Click here to get to know a bit more about me!</h2>
				</Link>
			</div>
		);
}

export default Welcome;