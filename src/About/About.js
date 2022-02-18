import React from 'react';
import styles from './About.module.css'

function About(props) {
    return (
			<>
				<div className={styles.container}>
					<h2>About Me:</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						natus nihil quo eius distinctio id laboriosam delectus, iste iusto
						eligendi deleniti veritatis iure reprehenderit quis veniam
						consequuntur! Nihil, adipisci nesciunt?
					</p>
					<h2>Skills:</h2>
					<ul className={styles.list}>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
					</ul>
				</div>
			</>
		);
}

export default About;