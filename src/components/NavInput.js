import React from 'react';

import { Link } from 'react-router-dom';


function NavInput() {
	return (
		<div className="NavInput">
			<input placeholder="Company Name" className="form-control" type="text" value="" />
			<input placeholder="Person Name" className="form-control" type="text" value="" />
		</div>
	);
}

export default NavInput;
