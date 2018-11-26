import React, { Component } from 'react';

export interface PatientCreatorProps {
  onCreate(): void;
}

class PatientCreator extends Component<PatientCreatorProps, {}> {
  render() {
    const { onCreate } = this.props;
    return (
      <div>
        <button onClick={onCreate}>Create Patient</button>
      </div>
    );
  }
}

export default PatientCreator;
