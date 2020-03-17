import React from 'react';

export class NewsAPI extends React.Component{
	state = {
		loading:true,
		article: null,
	};



	async componentDidMount() {
		const url = "https://newsapi.org/v2/everything?apiKey=fcaf9015343540eda93767f8c306a3b1&language=en&sortBy=relevancy&from=2018-01-10&q=nintendo";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({article: data.articles[0], loading:false});
		console.log(data.articles[0]);

	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.article ? <div>loading...</div> : (
					<div>
						<div>{this.state.article.title}</div>
						<div>{this.state.article.description}</div>
						<div>{this.state.article.content}</div>
					</div>)
			}
			</div>
		);

	}


}



