import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerNav, NavStyles } from './NavigationStyles';

const Navigation = () => {
  return (
    <ContainerNav>
      <h1>HRnet</h1>
      <NavStyles>
        <Link to="/">Create Employee</Link>
        <Link to="/current-employees">Current Employees</Link>
      </NavStyles>
    </ContainerNav>
  );
};

export default Navigation;
