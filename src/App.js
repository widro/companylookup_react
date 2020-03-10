import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter } from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';

import { Form } from './components/Form.js';
import { NewsAPI } from './components/NewsAPI.js';





function App() {
  return (
        <Container>
        	<Row>
        		<h4>Company Lookup</h4>
        	</Row>
        </Container>
  );
}

export default App;
