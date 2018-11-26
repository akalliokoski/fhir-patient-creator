import React, { Component } from 'react';

export interface PatientViewProps {
  patient: any;
}

class PatientView extends Component<PatientViewProps, {}> {
  render() {
    const { patient } = this.props;
    if (!patient) {
      return null;
    }

    const name = patient.name ? patient.name[0] : { given: [], family: '' };
    return (
      <div>
        <p>ID: {patient.id}</p>
        <p>Status: {patient.text.status}</p>
        <p>Birthdate: {patient.birthDate}</p>
        <p>
          Name: {name.given.join(' ')} {name.family}
        </p>
      </div>
    );
  }
}

export default PatientView;
