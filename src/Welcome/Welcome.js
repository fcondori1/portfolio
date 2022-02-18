import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

function Welcome(props) {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to='/about'><h2>Click to Enter</h2></Link>
        </div>
    );
}

export default Welcome;