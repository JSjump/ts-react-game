import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
// import Form from './components/Form';
// import Func from './components/Func';

type ONGOING_GAME = -1;
const ONGOING_GAME = -1;
enum EPlayer {
  none,
  one,
  two,
}
interface IState {
  board:EPlayer[],
  nextPlayerTurn:EPlayer,
  gameIsWon:EPlayer | ONGOING_GAME;
}

class App extends Component<{},IState> {
  state = {
    board: [
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
            EPlayer.none,
           ],
           nextPlayerTurn:EPlayer.one,
           gameIsWon:ONGOING_GAME,
          }
          
    public renderStatus = () => {
      const { gameIsWon } = this.state;
  
      const winningText = gameIsWon !== EPlayer.none ? `Player ${gameIsWon} won` : 'The game is draw'
  
      return (
        <div style={{ marginTop: "30px" }}>
          { "Player 1 is green" } <br />
          { "Player 2 is red" } <br />
          { gameIsWon === ONGOING_GAME ? 'Game is ongoing' : winningText }
        </div>
      )
    }
        
  public  cellClick = (key:number) => {
    const {board ,nextPlayerTurn,gameIsWon} =this.state;
    if (gameIsWon !== ONGOING_GAME || board[key] !== EPlayer.none) {
      return
    }
    let newBoard = board.slice();
     newBoard[key] = nextPlayerTurn;
     let newGameIsWon = this.checkIfGameIsOver(newBoard);
    this.setState({
      board:newBoard,
      nextPlayerTurn: 3-nextPlayerTurn,
      gameIsWon: newGameIsWon
    })
  }


  public checkIfGameIsOver = (board: EPlayer[]) => {
    if (board[0] === board[1] && board[1] === board[2] && board[2] !== EPlayer.none) {
      return board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== EPlayer.none) {
      return board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== EPlayer.none) {
      return board[8];
    } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== EPlayer.none) {
      return board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== EPlayer.none) {
      return board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== EPlayer.none) {
      return board[2];
    } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== EPlayer.none) {
      return board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== EPlayer.none) {
      return board[2];
    }
    for(const player of board) {
      if (player === EPlayer.none) {
        return ONGOING_GAME;
      }
    }
    return EPlayer.none;

  }


  public renderCell= (index:number) => {
    const {board} = this.state 
    return (
      <div className="cell" data-player={board[index]} key={index} onClick={() => this.cellClick(index)}>
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
       { this.renderStatus() }
      </div>
    );
  }
}

export default App;
