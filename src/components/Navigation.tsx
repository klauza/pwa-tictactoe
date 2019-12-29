import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navigation
