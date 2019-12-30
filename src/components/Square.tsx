import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  border: 1px solid black;
  width: 75px; height: 75px;
  position: relative;
  cursor: pointer;
  span{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export interface SquareProps {
  value: number,
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  // handleClick: Function
} 

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  return (
    <SquareButton onClick={props.handleClick}> 
      <span>{props.value}</span>
    </SquareButton>
  )
}

export default Square
