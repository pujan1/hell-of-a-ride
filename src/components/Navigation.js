import React from "react";
import { NavLink } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">Hell of a ride</div>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
        />
        <label
          className="menu-icon"
          for="menu-btn"
        >
          <span className="navicon">
          </span>
        </label>
        <ul className="menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/plan">Plan</NavLink></li>
          <li><NavLink to="/explore">Explore</NavLink></li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;