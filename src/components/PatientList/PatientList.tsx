import React, { Component } from 'react';

export interface PatientListProps {
  patientIds: Array<string>;
}

class PatientList extends Component<PatientListProps, {}> {
  render() {
    const { patientIds } = this.props;
    return (
      <ul>
        {patientIds.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    );
  }
}

export default PatientList;
