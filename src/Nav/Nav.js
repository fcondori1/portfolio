import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <Link to='/About'>
            <h1>About</h1>
            </Link>
            <Link to='/Projects'>
            <h1>Projects</h1>
            </Link>
            <Link to='/Contact'>
            <h1>Contact</h1>
            </Link>
        </div>
    );
}

export default Nav;