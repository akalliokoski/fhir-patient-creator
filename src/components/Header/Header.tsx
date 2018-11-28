import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component<{}, {}> {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/akalliokoski/fhir-patient-creator"
          >
            Github
          </a>
        </li>
      </ul>
    );
  }
}

export default Header;
