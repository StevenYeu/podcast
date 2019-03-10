import React from 'react';

const Navbar = () => (
  <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://versions.bulma.io/0.7.0">
        <img
          src="https://versions.bulma.io/0.7.0/images/bulma-logo-white.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
);

export default Navbar;
