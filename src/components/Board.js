import React, { useState } from "react";
import Square from './Square';

export default function Board({xIsNext, squares, onPlay}) {
  // const [square] = useState("square");

  function handleClick(i) {
    if (squares[i]  || declareWinner(squares)) {
      return; // if squares array at index position is not null or a winner has been declared, return out of the handleClick function (board square has already been taken)
    }
    const nextSquares = squares.slice(); //nextSquares is a copy of the squares array. Immutability in play here- avoiding direct data mutation
    nextSquares[i] = "X"; //updating the array's selected index element to "X"

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {  //else statement for when O is next (xIsNext === false)
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function declareWinner(squares) {
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
      };
    };
    return null; // if for loop runs and no winner is declared, end function
  };

  const winner = declareWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} isUsed={squares[0] !==null} square="square"/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} isUsed={squares[1] !==null} square="square"/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} isUsed={squares[2] !==null} square="square"/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} isUsed={squares[3] !==null}square="square"/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} isUsed={squares[4] !==null}square="square"/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} isUsed={squares[5] !==null}square="square"/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} isUsed={squares[6] !==null}square="square"/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} isUsed={squares[7] !==null}square="square"/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} isUsed={squares[8] !==null}square="square"/>
      </div>
    </>
  );
};