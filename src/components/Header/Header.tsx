import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/kanta_logotype_RGB_small.png';

class Header extends Component<{}, {}> {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <div className="masthead-brand">
            <a
              className="nav-link"
              href="https://www.kanta.fi/en/system-developers"
            >
              <img src={Logo} />
            </a>
          </div>

          <nav className="nav nav-masthead justify-content-center">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/patients"
              className="nav-link"
              activeClassName="active"
            >
              Patients
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/akalliokoski/fhir-patient-creator"
            >
              Github
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
