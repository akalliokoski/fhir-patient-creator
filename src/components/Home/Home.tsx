import React, { Component } from 'react';
import { store } from '../../utils/store';
import { createPatient } from '../../actions';

class Home extends Component<{}, {}> {
  onCreateButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    store.dispatch(createPatient());
  };

  render() {
    return (
      <main role="main" className="inner cover">
        <h1 className="cover-heading">FHIR Patient Creator</h1>
        <p className="lead">
          App for creating FHIR patient resources in{' '}
          <a
            href="https://www.kanta.fi/en/system-developers/my-kanta-pages-phr"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Kanta PHR
          </a>{' '}
          <a
            href="http://fhirsandbox.kanta.fi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sandbox environment
          </a>
          .
        </p>
        <p className="lead">
          <a
            href="#"
            onClick={this.onCreateButtonClick}
            className="btn btn-lg btn-primary"
          >
            Create New Patient
          </a>
        </p>
      </main>
    );
  }
}

export default Home;
