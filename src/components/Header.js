import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Voting Page
        </NavLink>
        <NavLink to="/results" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Results Page
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;