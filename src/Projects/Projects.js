import React from 'react';
import styles from './Projects.module.css'

function Projects(props) {
    return (
			<div className={styles.bigBox}>
				<div className={styles.box}>Project 1</div>
				<div className={styles.box}>Project 2</div>
				<div className={styles.box}>Project 3</div>
				<div className={styles.box}>Project 4</div>
			</div>
		);
}

export default Projects;