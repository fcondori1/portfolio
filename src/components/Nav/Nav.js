import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { GrMenu } from 'react-icons/gr';
import styles from './Nav.module.css';

function Nav(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<>
			<nav>
				<div className={styles.menuNav}>
					<ul className={styles.navLists}>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/'>
								About
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/projects'>
								Projects
							</Link>
						</li>
						<li className={styles.navList}>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://docs.google.com/document/d/1MC2-wEsYiCKh6lgyDVsnpoQfQ_RnquQkdNntGw29CqU/edit?usp=sharing'>
								Resume
							</a>
						</li>
									<button className={styles.navBtn} onClick={handleToggle}>
										{navbarOpen ? (
											<GrClose style={{ width: '30px', height: '30px ' }} />
										) : (
											<GrMenu style={{ width: '30px', height: '30px' }} />
										)}
									</button>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Nav;
