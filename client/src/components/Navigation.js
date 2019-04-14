import React from "react";
import { NavLink } from 'react-router-dom';
import "./navigation.scss"

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <nav className="wrapper">
          <div className="logo"></div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="label-toggle"></label>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/plan">Plan</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
          </ul>
        </nav>
      </nav>
    </div>

  );
};

export default Navigation;