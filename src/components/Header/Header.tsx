import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component<{}, {}> {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Cover</h3>
          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/patients">
              Patients
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
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
