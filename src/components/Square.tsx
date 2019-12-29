import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
  border: 1px solid black;
  width: 50px; height: 50px;
`;

export interface SquareProps {
  value: number,
  onClick: Function
} 

const Square: React.FC<SquareProps> = (props: any) => {
  return (
    <SquareButton onClick={props.onClick}> 
      {props.value}
    </SquareButton>
  )
}

export default Square
