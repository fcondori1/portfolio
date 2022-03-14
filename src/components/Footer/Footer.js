import React from 'react';
import styles from './Footer.module.css'

function Footer(props) {
    return (
			<div>
				<ul className={styles.foot}>
					<li className={styles.footers}>
						<a
							href='mailto:frankzcondori@gmail.com'
							target='_blank'
							rel='noreferrer'>
							<div className={styles.icons1}></div>
						</a>
					</li>
					<li className={styles.footers}>
						<a
							href='https://github.com/fcondori1'
							target='_blank'
							rel='noreferrer'>
							<div className={styles.icons2}></div>
						</a>
					</li>
					<li className={styles.footers}>
						<a
							href='https://www.linkedin.com/in/frankz-condori/'
							target='_blank'
							rel='noreferrer'>
							<div className={styles.icons3}></div>
						</a>
					</li>
				</ul>
			</div>
		);
}

export default Footer;