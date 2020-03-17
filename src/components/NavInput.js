import React, { Component } from 'react'

export class NavInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			companyname: '',
			personname:'',
		}
	}

	handleCompanyNameChange = (event) => {
		this.setState({
			companyname: event.target.value
		});
	}

	handlePersonNameChange = (event) => {
		this.setState({
			personname: event.target.value
		});
	}



	handleSubmit = (event) => {
		alert(`${this.state.companyname} ${this.state.personname}`);

		event.preventDefault();
	}

	render() {
		return(
		<form onSubmit={this.handleSubmit}>
			<div className="NavInput">
				<div className="col-lg-5">
					<input placeholder="Company Name" className="form-control" type="text" value={this.state.companyname} onChange={this.handleCompanyNameChange} />
				</div>
				<div className="col-lg-5">
					<input placeholder="Person Name" className="form-control" type="text" value={this.state.personname} onChange={this.handlePersonNameChange} />
				</div>
				<div className="col-lg-2">
					<button type="submit" className="form-control btn-primary">Update</button>
				</div>
			</div>
		</form>




		)

	}

}

