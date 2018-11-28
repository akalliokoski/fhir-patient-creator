import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>
            By{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/akalliokoski/"
            >
              akalliokoski
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
