import React, {useState, useEffect} from 'react';
import '../App.css';

function Patent() {


	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);


	const fetchItems = async () => {
		const url = "https://developer.uspto.gov/ibd-api/v1/patent/application?searchText=muzik&start=0&rows=99";
	}

	return (
		<div>
			<h1>Patent</h1>
			{items.map(item => (
				<h3 key={item.url}> {item.title }</h3>
			))};

		</div>
	);
	
}


export default Patent;