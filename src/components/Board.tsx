import React, {useState} from 'react';
import styled from 'styled-components';
import Square from './Square';


const Container = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 50px);
  .board{

    &-row{
      display: block;
    }
  }
`;

const Board: React.FC = () => {

  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
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
    return <Square value={boardSquares[index]} handleClick={() => handleClick(index)} />
  }

function calculateWinner(squares: Array<number>) {
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
    <Container>
      <div className="board">
        <div>{status}</div>
        <div className="board-row">{renderSquare(0)} {renderSquare(1)} {renderSquare(2)}</div>
        <div className="board-row">{renderSquare(3)} {renderSquare(4)} {renderSquare(5)}</div>
        <div className="board-row">{renderSquare(6)} {renderSquare(7)} {renderSquare(8)}</div>
      </div>
    </Container>
  )
}

export default Board
