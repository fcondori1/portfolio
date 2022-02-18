import React from 'react';
import styles from './Contact.module.css'

function Contact(props) {
	return (
		<div>
            <div>
			<form className={styles.form}>
				<label for='name'></label>
				<input type='text' placeholder='Name'></input>
				<label></label>
				<input type='e-mail' placeholder='E-mail'></input>
				<label></label>
				<input type='text' placeholder='Message'></input>
			</form>
            </div>
            <div>Socials</div>
		</div>
	);
}

export default Contact;
