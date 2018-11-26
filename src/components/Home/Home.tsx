import React, { Component } from 'react';
import PatientListContainer from '../../containers/PatientListContainer/PatientListContainer';
import PatientCreatorContainer from '../../containers/PatientCreatorContainer/PatientCreatorContainer';

class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <PatientCreatorContainer />
        <PatientListContainer />
      </div>
    );
  }
}

export default Home;
