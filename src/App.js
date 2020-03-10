import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';

import Nav from './components/Nav.js';
import { Form } from './components/Form.js';
import { NewsAPI } from './components/NewsAPI.js';
import { AlexaAPI } from './components/AlexaAPI.js';






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
