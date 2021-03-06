import React from "react";


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

function Square(props) {
    return (
      <button
        className="square"
        onClick={
          props.onClick
        }
      >
        {props.value}
      </button>
    );
  }


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: Array(9).fill(null), 
      isXNext:true, 
      winner: null
    };
  }
  handleClick(i){
    const square = this.state.val.slice();
    if(square[i] || this.state.winner ){
        return;
    }
    if(this.state.isXNext){
    square[i] = 'X';
    }
    else{
        square[i] = 'Y';
    }
    const winner = calculateWinner(square);
    this.setState({val:square, isXNext: !this.state.isXNext, winner:winner});
  }
  renderSquare(i) {
    return <Square value={this.state.val[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
      const winner = this.state.winner;
      let status;
      if(winner){
          status = "we have a winner !!" + winner;
      }
      else {
         status = "Next player:" + (this.state.isXNext ? 'X':'Y');
      }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history:[{
                square : {
                val: Array(9).fill(null)
            }}],
            isXNext:true, 
            winner: null
        }
    }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


