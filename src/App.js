import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';

import Nav from './components/Nav.js';
import { Form } from './components/Form.js';
import { NewsAPI } from './components/NewsAPI.js';
import AlexaAPI from './components/AlexaAPI.js';

import { createStore } from 'redux';

const reducer =  (state, action) => {
	switch(action.type){
		case "ADD":
			state = state + action.payload;
			break;
		case "SUBTRACT":
			state = state - action.payload;
			break;
	}
	return state;
};

const store = createStore(reducer,1);

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
        		<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/form" component={Form} />
				<Route path="/news" component={NewsAPI} />
				<Route path="/alexa" component={AlexaAPI} />
				</Switch>
        	</Row>
        </Container>
    </Router>
  );
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);

export default App;
