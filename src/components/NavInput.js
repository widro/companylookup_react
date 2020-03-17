import React, { Component } from 'react'

export class NavInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			companyname: '',
			personname:'',
			email:'',
			website:'',
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

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		});
	}

	handleWebsiteChange = (event) => {
		this.setState({
			website: event.target.value
		});
	}



	handleSubmit = (event) => {
		alert(`${this.state.companyname} ${this.state.personname} ${this.state.email} ${this.state.website}`);

		event.preventDefault();
	}

	render() {
		return(
		<form onSubmit={this.handleSubmit}>
			<div className="NavInput">
				<div className="col-lg-2">
					<input placeholder="Company Name" className="form-control" type="text" value={this.state.companyname} onChange={this.handleCompanyNameChange} />
				</div>
				<div className="col-lg-2">
					<input placeholder="Person Name" className="form-control" type="text" value={this.state.personname} onChange={this.handlePersonNameChange} />
				</div>
				<div className="col-lg-2">
					<input placeholder="Email" className="form-control" type="text" value={this.state.email} onChange={this.handleEmailChange} />
				</div>
				<div className="col-lg-2">
					<input placeholder="Website" className="form-control" type="text" value={this.state.website} onChange={this.handleWebsiteChange} />
				</div>
				<div className="col-lg-2">
					<button type="submit" className="form-control btn-primary">Update</button>
				</div>
			</div>
		</form>




		)

	}

}

