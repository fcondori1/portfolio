import React from 'react';
import './Projects.css';
import felp from '../../assets/Felp.png';
import golazo from '../../assets/Golazo.png';
import bridge from '../../assets/Bridge-Game.png';
import salon from '../../assets/Salon.png';
// import gifts from '../../assets/My-Gifts.png';


function Projects(props) {
	return (
		<div className='bigBox'>
			<div className='infoBox'>
				<a href='https://felp-official.netlify.app/' target='_blank'>
					<img src={felp} alt='felp app webpage' className='box'></img>
				</a>
				<div className='boxes'>
					<p className='details'>Felp</p>
					<p className='details'>
						A full stack application using React, MongoDB, Mongoose, and
						Express. Collaborated with other developers through pair programming
						to produce a single page application while maintaining a feature
						branch Git workflow.
					</p>
					<a
						href='https://github.com/team-one-coders/felp-frontend'
						target='_blank'>
						<div className='gitDetails'>Github Repository</div>
					</a>
				</div>
			</div>
			<div className='infoBox'>
				<a href='https://sleepy-sammet-19bc3d.netlify.app/' target='_blank'>
					<img src={golazo} alt='golazo app webpage' className='box'></img>
				</a>
				<div className='boxes'>
					<p className='details'>Golazo Highlights App</p>
					<p className='details'>
						A live database application using React that allows the user to see
						recent soccer matches using a 3rd party API to display data through
						components.
					</p>
					<a
						href='https://github.com/fcondori1/golazo-highlights-app'
						target='_blank'>
						<div className='gitDetails'>Github Repository</div>
					</a>
				</div>
			</div>
			{/* <div className='infoBox'>
				<a href='https://my-gifts.netlify.app/' target='_blank'>
					<div className='box3'></div>
				</a>
				<div className='boxes'>
					<p className='details'>My Gifts</p>
					<p className='details'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id quas
						dolore eveniet! Beatae doloribus necessitatibus, illo dicta officiis
						id reiciendis. Corrupti, ducimus? Cupiditate, obcaecati adipisci
						aspernatur temporibus delectus fugit.
					</p>
					<a href='https://github.com/fcondori1/front-my-gifts' target='_blank'>
						<div className='gitDetails'>Github Repository</div>
					</a>
				</div>
			</div> */}
			<div className='infoBox'>
				<a href='https://fcondori1.github.io/bridge-game/' target='_blank'>
					<img src={bridge} alt='bridge-game webpage' className='box'></img>
				</a>
				<div className='boxes'>
					<p className='details'>Bridge Game</p>
					<p className='details'>
						A browser based game using Javascript, HTML and CSS. It uses modals,
						DOM manipulation, and event listeners to display a random path on
						the bridge to navigate yourself to get to the end with a life
						counter.
					</p>
					<a href='https://github.com/fcondori1/bridge-game' target='_blank'>
						<div className='gitDetails'>Github Repository</div>
					</a>
				</div>
			</div>
			<div className='infoBox'>
				<a href='https://noelia.netlify.app/' target='_blank'>
					<img src={salon} alt='salon webpage' className='box'></img>
				</a>
				<div className='boxes'>
					<p className='details'>Salon Site</p>
					<p className='details'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint
						voluptatum iure impedit voluptas fugiat dignissimos quia, veniam ex
						illo ducimus doloribus ipsa harum consectetur, hic quas tempora
						obcaecati. Autem!
					</p>
					<a href='https://github.com/fcondori1/salon-nr' target='_blank'>
						<div className='gitDetails'>Github Repository</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
