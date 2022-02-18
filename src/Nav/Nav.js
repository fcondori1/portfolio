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
				<h1 className={styles.nav_welcome}>
					<Link className={styles.landing_phrase} to='/about'>
						Frankz Condori: Full Stack Developer
					</Link>
				</h1>
				<div className={styles.menuNav}>
					<button className={styles.navBtn} onClick={handleToggle}>
						{navbarOpen ? (
							<GrClose style={{ width: '30px', height: '30px ' }} />
						) : (
							<GrMenu style={{ width: '30', height: '30px' }} />
						)}
					</button>
					<ul
						style={{ display: navbarOpen ? 'flex' : 'none' }}
						className='menu_Nav'>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/about'>
								About
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/projects'>
								Projects
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
    }
    
    export default Nav;