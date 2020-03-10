import React, {useState, useEffect} from 'react';
import '../App.css';

function AlexaAPI() {


	useEffect(() => {
		fetchItems();
	}, []);


	const fetchItems = async () => {
		const data = await fetch(
			'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
		);
		const items = await data.json();
		console.log(items);

	}

	return (
		<div>
			<h1>Alexa API</h1>
		</div>
	);
	
}


export default AlexaAPI;