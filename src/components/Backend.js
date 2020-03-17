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
		const url = "https://waldenfarms.panosdev.com/companylookup_api.php";

		const obj = {
			"scraper_companyname": "sega"
			};

		//const response = await fetch(url);
		const response = await fetch(url, {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		    },
			body: JSON.stringify(obj)
		  });
 


		const data = await response.json();
		this.setState({responsejson: data, loading:false});
		console.log(data);
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.responsejson ? <div>loading...</div> : (
					<div>
						<div>{this.state.responsejson.finalanswer}</div>
					</div>)
			}
			</div>
		);
	}
}



