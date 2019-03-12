import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item nav-title" href="https://versions.bulma.io/0.7.0">
          Podcast Player
        </a>
        <a
          role="button"
          className={toggle ? 'navbar-burger burgers is-active' : 'navbar-burger burgers'}
          aria-label="menu"
          aria-expanded="false"
          data-target="menuButtons"
          onClick={() => setToggle(!toggle)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={toggle ? 'navbar-menu is-active' : 'navbar-menu'} id="menuButtons">
        <div className="navbar-end">
          <div className="navbar-item">
            <button type="button" className="button is-info" onClick={onClick}>
              {' '}
              <FontAwesomeIcon icon={faPlus} transform="left-4" />
              Add Podcast
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('Add'),
};

export default Navbar;
