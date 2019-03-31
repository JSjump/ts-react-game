import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Func from './components/Func';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Form name={'string'} age={12}></Form>   
      <Func name={'zhhhhhhhhhh'}></Func> 
      </div>
    );
  }
}

export default App;
