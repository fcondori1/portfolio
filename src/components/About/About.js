import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';

function About(props) {
	return (
		<>
			<div className={styles.containerL}>
				<h2>Frankz Condori: Full Stack Developer</h2>
				<div className={styles.container}>
					<h2>About Me:</h2>
					<div className={styles.info}>
						<div>
							<p className={styles.text}>
								WELCOME! My name is Frankz and I am a graduate of management at Salisbury University. I love gaming, soccer, and of course coding! This new passion is what inspired me to change career paths. Check out some of the stuff I have worked on!
							</p>
							<p className={styles.text}>
								Software Engineer with management and communication skills
								stemmed from 6 years in sales. A passion to help others live
								life by making everyday technology and software easily legible.
								Driven to elevate individuals and companies towards future
								technology.
							</p>
						</div>
						<div className={styles.picture}></div>
					</div>
					<div className={styles.skills}>
						<h2>Languages and Tools:</h2>
						<p align='center'>
							<a
								href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
									alt='javascript'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://www.python.org'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
									alt='python'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://reactjs.org/'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
									alt='react'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://www.w3.org/html/'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
									alt='html5'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://www.w3schools.com/css/'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
									alt='css3'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://expressjs.com'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
									alt='express'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://nodejs.org'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
									alt='nodejs'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://www.mongodb.com/'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
									alt='mongodb'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://www.postgresql.org'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
									alt='postgresql'
									width='40'
									height='40'
								/>
							</a>
							<a
								href='https://heroku.com'
								target='_blank'
								rel='noreferrer'
								className={styles.tools}>
								<img
									src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
									alt='heroku'
									width='40'
									height='40'
								/>
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
