import React from 'react';

function Square({ value, onSquareClick, isUsed, square}) {
  const squareStyle = {
    color: isUsed ? (value === 'X' ? 'blue' : 'orange') : 'inherit' //inherit here meaning "inherit this styling set in the parent element"
  }
  return (
    <button className={square} style={squareStyle} onClick={onSquareClick}>
      {value}
    </button>
  )
};

export default Square;