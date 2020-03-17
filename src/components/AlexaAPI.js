import React, {useState, useEffect} from 'react';
import '../App.css';

function AlexaAPI() {


	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);


	const fetchItems = async () => {
		//const url = "https://newsapi.org/v2/everything?apiKey=fcaf9015343540eda93767f8c306a3b1&language=en&sortBy=relevancy&from=2018-01-10&q=nintendo";
		//const data = await fetch(url);
		//const items = await data.json();
		//console.log(items.articles);
		//setItems(items.articles);

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