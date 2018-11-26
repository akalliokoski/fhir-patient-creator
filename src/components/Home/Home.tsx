import React, { Component } from 'react';
import PatientListContainer from '../../containers/PatientListContainer/PatientListContainer';
import PatientCreatorContainer from '../../containers/PatientCreatorContainer/PatientCreatorContainer';
import PatientViewContainer from '../../containers/PatientViewContainer/PatientViewContainer';

class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <PatientCreatorContainer />
        <PatientListContainer />
        <PatientViewContainer />
      </div>
    );
  }
}

export default Home;
