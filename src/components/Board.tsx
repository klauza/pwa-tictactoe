import React, {useState} from 'react';
import Square from './Square';



const Board: React.FC = () => {

  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let status;
  const winner = calculateWinner(boardSquares);

  status = winner 
    ? `Winner is ${winner}` 
    : `Next player is: ${xIsNext ? "X" : "O"}`;


  const handleClick = (index: number) => {
    const squares = [...boardSquares];

    if(calculateWinner(boardSquares) || squares[index]) return;  // exit if square already filled 

    squares[index] = xIsNext ? "X" : "O";

    setBoardSquares(squares);

    setXIsNext(!xIsNext);
  }

  const renderSquare = (index: number) => {
    return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
  }

function calculateWinner(squares: any) {
    const winningLanes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 5],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningLanes.length; i++){
      const [a, b, c] = winningLanes[i];
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a]
      }
    }
    return null;
  };

  return (
    <div>
      <div>{status}</div>
      <div>{renderSquare(0)} {renderSquare(1)} {renderSquare(2)}</div>
      <div>{renderSquare(3)} {renderSquare(4)} {renderSquare(5)}</div>
      <div>{renderSquare(6)} {renderSquare(7)} {renderSquare(8)}</div>
    </div>
  )
}

export default Board
