import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
  background: #6498ed;
  display: flex;
  flex-direction: row;
  box-shadow: 0 -2px 2px -1px rgba(0,0,0,.75); 
  border-radius: 7.5px;
  @media(min-width: 1024px){
    width: 30%;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  }
  a{
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: white;
    line-height: 50px;
    &:nth-child(2){
      border-left: 1px solid #fff;
    }
  }
`;

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Wrapper>
  )
}

export default Navigation
