import React from 'react';

export class Patent extends React.Component{
	state = {
		loading:true,
		docs:null,
	};



	async componentDidMount() {
		const url = "https://developer.uspto.gov/ibd-api/v1/patent/application?searchText=muzik&start=0&rows=99";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.response.docs);
		this.setState({docs: data.response.docs, loading:false});

	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.docs ? <div>loading...</div> : (
					<div>
					{this.state.docs.map(item => (
						<h3 key={item.documentID}> {item.title }</h3>
					))};
					</div>

					)
			}
			</div>
		);

	}


}



