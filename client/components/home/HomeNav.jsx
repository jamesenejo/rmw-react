import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => (
  <nav className="navigation-bar">
    <Link to="/" className="navigation-brand">
      <img src="../../assets/img/logormww.png" alt="Logo" />
    </Link>
    <div className="navigation">
      <p>Working...</p>
    </div>
  </nav>
);

export default HomeNav;
