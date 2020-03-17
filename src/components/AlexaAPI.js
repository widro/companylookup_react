import React, {useState, useEffect} from 'react';
import '../App.css';

function AlexaAPI() {


	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);


	const fetchItems = async () => {
		const url = "https://awis.api.alexa.com/api?Action=urlInfo&ResponseGroup=Rank&Url=nintendo.com";
		const data = await fetch(url, { 
								   method: 'post', 
								   headers: new Headers({
								     'Authorization': 'AWS4-HMAC-SHA256', 
								     'Credential': 'AWS4-HMAC-SHA256', 
								     'Type': 'application/xml', 
								     'X-Amz-Date': 'AWS4-HMAC-SHA256', 
								     'x-api-key': 'AWS4-HMAC-SHA256', 
								     'Content-Type': 'application/xml'
								   })
								 });


		const items = await data.json();
		console.log(items.articles);
		setItems(items.articles);

	}

	return (
		<div>
			<h1>Alexa API</h1>
			{items.map(item => (
				<h3 key={item.url}> {item.title }</h3>
			))};

		</div>
	);
	
}


export default AlexaAPI;