import React from 'react';
import TicTacToe from './TicTacToe';

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      Main
      <TicTacToe />
    </div>
  )
}

export default Main
