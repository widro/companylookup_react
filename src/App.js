import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';

import Nav from './components/Nav.js';
import { NavInput } from './components/NavInput.js';
import { Form } from './components/Form.js';
import { NewsAPI } from './components/NewsAPI.js';
import { Patent } from './components/Patent.js';
import { Backend } from './components/Backend.js';
import AlexaAPI from './components/AlexaAPI.js';

import { createStore } from 'redux';

const initialState = {
	result: 1, 
	companyname: 'nintendo', 
	personname: 'steve jobs', 
	lastValues: []
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload, 
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload, 
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
};

const store = createStore(reducer);

store.subscribe(() => {
	console.log("Store updated!", store.getState());

});


store.dispatch({
	type: "ADD",
	payload: 100
});

store.dispatch({
	type: "ADD",
	payload: 22
});

store.dispatch({
	type: "SUBTRACT",
	payload: 80
});
function App() {
  return (
  	<Router>
        <Container>
        	<Row>
        		<Nav />
        	</Row>
        	<Row>
        		<NavInput />
        	</Row>
        	<Row>
        		<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/form" component={Form} />
				<Route path="/news" component={NewsAPI} />
				<Route path="/alexa" component={AlexaAPI} />
				<Route path="/patent" component={Patent} />
				<Route path="/backend" component={Backend} />
				</Switch>
        	</Row>
        </Container>
    </Router>
  );
}

const Home = () => (
	<div>
		<h1>Home Page</h1>

		<button type="button" className="form-control btn-primary">Target Look Up</button>
		<br/><br/>
		<button type="button" className="form-control btn-primary">Potential Client Search</button>
	</div>
);

export default App;
