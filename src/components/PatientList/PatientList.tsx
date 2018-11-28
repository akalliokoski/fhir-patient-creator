import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSelectedPatientId } from '../../utils/history';

export interface PatientListProps {
  patientIds: Array<string>;
}

class PatientList extends Component<PatientListProps, {}> {
  renderItem(id: string, selectedId: string | undefined) {
    const isSelected = id === selectedId;
    if (isSelected) {
      return <li key={id}>{id}</li>;
    }

    return (
      <li key={id}>
        <Link to={`/patients/${id}`}>{id}</Link>
      </li>
    );
  }

  render() {
    const { patientIds } = this.props;
    const selectedId = getSelectedPatientId();
    return <ul>{patientIds.map(id => this.renderItem(id, selectedId))}</ul>;
  }
}

export default PatientList;
