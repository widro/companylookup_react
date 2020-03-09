import React from 'react';

export default class NewsAPI extends React.Component{
	state = {
		loading:true
	};


	async componentDidMount() {
		const url = "https://newsapi.org/v2/everything?apiKey=fcaf9015343540eda93767f8c306a3b1&language=en&sortBy=relevancy&from=2018-01-10&q=nintendo";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

	}

	render() {
		return (
			<div>
				this.state.loading ? <div>loading...</div> : <div>person...</div>
			</div>
		);

	}


}



