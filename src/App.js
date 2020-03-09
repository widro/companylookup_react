import React from 'react';
import './App.css';

import { Form } from './components/Form.js'
import { NewsAPI } from './components/NewsAPI.js'

function App() {
  return (
    <>
    <Form />
    <hr />
    <NewsAPI />
    </>

  );
}

export default App;
