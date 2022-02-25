import React from 'react';
import styles from './About.module.css'
import { Link } from 'react-router-dom';

function About(props) {
    return (
			<>
				<h2>Frankz Condori: Full Stack Developer</h2>
				<div className={styles.container}>
					<h2>About Me:</h2>
					<div className={styles.info}>
						<p className={styles.text}>
							Software Engineer with management and communication skills stemmed
							from 6 years in sales. A passion to help others live life by
							making everyday technology and software easily legible. Driven to
							elevate individuals and companies towards future technology.
						</p>
						<div className={styles.picture}></div>
					</div>
					<div className={styles.skills}>
						<h2>Skills:</h2>
						<ul className={styles.list}>
							<li>JavaScript</li>
							<li>Python</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>React</li>
							<li>Rest API</li>
							<li>Express</li>
							<li>MongoDb</li>
							<li>PostgreSQL</li>
							<li>Github</li>
						</ul>
					</div>
				</div>
			</>
		);
}

export default About;