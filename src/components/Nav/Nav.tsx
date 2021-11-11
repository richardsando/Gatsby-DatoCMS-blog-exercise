import { Link } from 'gatsby';
import React from 'react';
import './index.scss';

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <ul className="nav-list">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="list-item">
          <Link to="/items">Items</Link>
        </li>
        <li className="list-item">
          <Link to="/species">Species</Link>
        </li>
        <li className="list-item">
          <Link to="/specimens">Specimens</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
