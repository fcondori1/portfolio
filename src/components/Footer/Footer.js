import React from 'react';
import './Footer.css';
import github from '../../assets/github_logo.png';
import linkedin from '../../assets/linkedin_logo.png';
import gmail from '../../assets/gmail_logo.png';

function Footer(props) {
	return (
		<div className='foot'>
			<a href='https://github.com/fcondori1' target='_blank' rel='noreferrer'>
				<img
					src={github}
					alt='github logo'
					className='foot-icons animate__animated animate__fadeInLeft'></img>
			</a>
			<a
				href='https://www.linkedin.com/in/frankz-condori/'
				target='_blank'
				rel='noreferrer'>
				<img
					src={linkedin}
					alt='linkedin logo'
					className='foot-icons animate__animated animate__fadeInUp'></img>
			</a>
			<a href='mailto:frankzcondori@gmail.com' target='_blank' rel='noreferrer'>
				<img
					src={gmail}
					alt='gmail logo'
					className='foot-icons animate__animated animate__fadeInRight'></img>
			</a>
		</div>
	);
}

export default Footer;
