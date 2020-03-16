import React from 'react';

import { Link } from 'react-router-dom';
import NavInput from './NavInput.js';


function Nav() {
	return (
		<nav>
			<ul>
				<Link to='/'>
				<li>Home</li>
				</Link>
				<Link to='/form'>
				<li>Form</li>
				</Link>
				<Link to='/news'>
				<li>News</li>
				</Link>
				<Link to='/alexa'>
				<li>Alexa</li>
				</Link>
				<NavInput />
			</ul>
		</nav>

	);
}

export default Nav;
