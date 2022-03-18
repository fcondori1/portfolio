import React from 'react';
import styles from './Projects.module.css';

function Projects(props) {
	return (
		<div className={styles.bigBox}>
			<div className={styles.infoBox}>
				<a href='https://felp-official.netlify.app/' target='_blank'>
					<div className={styles.box1}></div>
				</a>
				<div className={styles.boxes}>
					<p className={styles.details}>Felp</p>
					<p className={styles.details}>
						A full stack application using React, MongoDB, Mongoose, and
						Express. Collaborated with other developers through pair programming
						to produce a single page application while maintaining a feature
						branch Git workflow.
					</p>
					<a
						href='https://github.com/team-one-coders/felp-frontend'
						target='_blank'>
						<div className={styles.gitDetails}>Github Repository</div>
					</a>
				</div>
			</div>
			<div className={styles.infoBox}>
				<a href='https://sleepy-sammet-19bc3d.netlify.app/' target='_blank'>
					<div className={styles.box2}></div>
				</a>
				<div className={styles.boxes}>
					<p className={styles.details}>Golazo Highlights App</p>
					<p className={styles.details}>
						A live database application using React that allows the user to see
						recent soccer matches using a 3rd party API to display data through
						components.
					</p>
					<a
						href='https://github.com/fcondori1/golazo-highlights-app'
						target='_blank'>
						<div className={styles.gitDetails}>Github Repository</div>
					</a>
				</div>
			</div>
			{/* <div className={styles.infoBox}>
				<a href='https://my-gifts.netlify.app/' target='_blank'>
					<div className={styles.box3}></div>
				</a>
				<div className={styles.boxes}>
					<p className={styles.details}>My Gifts</p>
					<p className={styles.details}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id quas
						dolore eveniet! Beatae doloribus necessitatibus, illo dicta officiis
						id reiciendis. Corrupti, ducimus? Cupiditate, obcaecati adipisci
						aspernatur temporibus delectus fugit.
					</p>
					<a href='https://github.com/fcondori1/front-my-gifts' target='_blank'>
						<div className={styles.gitDetails}>Github Repository</div>
					</a>
				</div>
			</div> */}
			<div className={styles.infoBox}>
				<a href='https://fcondori1.github.io/bridge-game/' target='_blank'>
					<div className={styles.box4}></div>
				</a>
				<div className={styles.boxes}>
					<p className={styles.details}>Bridge Game</p>
					<p className={styles.details}>
						A browser based game using Javascript, HTML and CSS. It uses modals,
						DOM manipulation, and event listeners to display a random path on
						the bridge to navigate yourself to get to the end with a life
						counter.
					</p>
					<a href='https://github.com/fcondori1/bridge-game' target='_blank'>
						<div className={styles.gitDetails}>Github Repository</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
