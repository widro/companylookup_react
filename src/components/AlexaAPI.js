import React, {useState, userEffect} from 'react';
import '../App.css';

export class AlexaAPI extends React.Component{

	async componentDidMount() {
		const data = await fetch('https://fornite-public-api.theapinetwork.com/prod09/upcoming/get');
		console.log(data)

	}

	render() {
		return (
			<div>
				<h1>Alexa API</h1>
			</div>
		);
	}
}

