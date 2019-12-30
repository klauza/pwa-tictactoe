import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  border: 1px solid black;
  width: 50px; height: 50px;
`;

export interface SquareProps {
  value: number,
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  // handleClick: Function
} 

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  return (
    <SquareButton onClick={props.handleClick}> 
      {props.value}
    </SquareButton>
  )
}

export default Square
