import React, { Component } from 'react'

export class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			companyname: '',
			newsoutput:'',
			dropdownname: 'nintendo'
		}
	}

	handleCompanyNameChange = (event) => {
		this.setState({
			companyname: event.target.value
		});
	}

	handleNewsOutputChange = (event) => {
		this.setState({
			newsoutput: event.target.value
		})
	}

	handleDropdownChange = (event) => {
		this.setState({
			dropdownname: event.target.value
		})
	}

	handleSubmit = (event) => {
		alert('${this.state.companyname} ${this.state.newsoutput}');

		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Company</label>
					<input className="form-control" type="text" value={this.state.companyname} onChange={this.handleCompanyNameChange}/>
				</div>
				
				<div>
					<label>News Output</label>
					<textarea value={this.state.newsoutput} onChange={this.handleNewsOutputChange}/>
				</div>

				<div>
					<label>Dropdown</label>
					<select value={this.state.dropdownname} onChange={this.handleDropdownChange}>
						<option value="nintendo">Nintendo</option>
						<option value="sega">Sega</option>
						<option value="playstation">Playstation</option>
					</select>
				</div>

				<div>
					<button type="submit">Subvmit
						
					</button>
				</div>
				
			</form>


		)

	}

}

//export default Form