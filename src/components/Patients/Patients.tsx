import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PatientListContainer from '../../containers/PatientListContainer/PatientListContainer';
import PatientCreatorContainer from '../../containers/PatientCreatorContainer/PatientCreatorContainer';
import PatientViewContainer from '../../containers/PatientViewContainer/PatientViewContainer';

class Patients extends Component {
  render() {
    return (
      <div>
        <PatientCreatorContainer />
        <PatientListContainer />
        <Route path="/:patientId" component={PatientViewContainer} />
      </div>
    );
  }
}

export default Patients;
