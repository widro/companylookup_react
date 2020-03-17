import React from 'react';

export class Backend extends React.Component{
	state = {
		loading:true,
		responsejson: null,
	};

	generatematchrow(content, n, matchnumber){
		var endtext2;
		var endtextextend = content.substring(n+200);

		var n2a = endtextextend.indexOf('.')
		if(n2a>0){
			endtext2 = endtextextend.substring(0, n2a);
		}

		var contentwithmatch = content.substring(n, n-200) + content.substring(n, n+200) + endtext2 + " ";

		return contentwithmatch;
	}

	async componentDidMount() {
		const url = "https://newsapi.org/v2/everything?apiKey=fcaf9015343540eda93767f8c306a3b1&language=en&sortBy=relevancy&from=2018-01-10&q=nintendo";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({responsejson: data, loading:false});
		console.log(data);
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.responsejson ? <div>loading...</div> : (
					<div>
						<div>{this.state.responsejson}</div>
					</div>)
			}
			</div>
		);
	}
}



