import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './components/Form';
// import Func from './components/Func';

class App extends Component {
  state = {
    board: [0,0,0,0,0,0,0,0,0]
  }

  public renderCell= (index:number) => {
    return (
      <div className="cell">
      </div>
    )
  }
  public renderBoard=() => {
    return (
      <div className="board-container">
      {this.state.board.map((val,key) => this.renderCell(key))}
      </div>
    )
  }
  render() {
    return (
      <div className="App">
      {/* <Form name={'string'} age={12}></Form>   
      <Func name={'zhhhhhhhhhh'}></Func>  */}
       {this.renderBoard()}
      </div>
    );
  }
}

export default App;
