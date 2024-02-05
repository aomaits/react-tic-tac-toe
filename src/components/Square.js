import React from 'react';

function Square({ value, onSquareClick, isUsed, square}) {
  const squareStyle = {
    color: isUsed ? (value === 'X' ? 'blue' : 'orange') : 'inherit'
  }
  return (
    <button className={square} style={squareStyle} onClick={onSquareClick}>
      {value}
    </button>
  )
};

export default Square;