import React from 'react';

import { Link } from 'react-router-dom';


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
				<Link to='/patent'>
				<li>Patent</li>
				</Link>
				<Link to='/backend'>
				<li>Backend</li>
				</Link>
			</ul>
		</nav>

	);
}

export default Nav;
