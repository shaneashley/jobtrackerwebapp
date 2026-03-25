// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.navText};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    color: ${(props) => props.theme.navText};
    text-decoration: none;
    margin-left: 1rem;
  }
`;

const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Navbar = ({ toggleTheme }) => {
  return (
    <Nav>
      <div>Job Tracker</div>
      <NavLinks>
        <Link to="/">Job List</Link>
        <Link to="/add">Add Job</Link>
        <Link to="/dashboard">Dashboard</Link>
      </NavLinks>
      <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
    </Nav>
  );
};

export default Navbar;