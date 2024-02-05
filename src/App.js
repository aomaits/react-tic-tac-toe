import React, { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // (create an array of 9 elements, set them all to null)
  const [currentMove, setCurrentMove] =useState(0);
  const xIsNext = currentMove % 2 ===0; 
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) { //takes in the recent copy of squares array from the Board child element, nextSquares
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //spread out the history array then add in the currentMove number, also takes in the board's array
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); //last element of the nextHistory array
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}