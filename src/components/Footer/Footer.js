import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
			<div className='footers'>
				<ul className='foot'>
					<li className='footers'>
						<a
							href='https://github.com/fcondori1'
							target='_blank'
							rel='noreferrer'>
							<div className='icons2 animate__animated animate__fadeInLeft'></div>
						</a>
					</li>
					<li className='footers'>
						<a
							href='https://www.linkedin.com/in/frankz-condori/'
							target='_blank'
							rel='noreferrer'>
							<div className='icons3 animate__animated animate__fadeInUp'></div>
						</a>
					</li>
					<li className='footers'>
						<a
							href='mailto:frankzcondori@gmail.com'
							target='_blank'
							rel='noreferrer'>
							<div className='icons1 animate__animated animate__fadeInRight'></div>
						</a>
					</li>
				</ul>
			</div>
		);
}

export default Footer;