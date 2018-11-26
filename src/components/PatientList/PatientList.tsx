import React, { Component } from 'react';

export interface PatientListProps {
  patientIds: Array<string>;
  selectedId: string;
  onSelect: Function;
}

class PatientList extends Component<PatientListProps, {}> {
  onClick = (event: any, callback: any, args: Array<any>) => {
    event.preventDefault();
    callback(...args);
  };

  renderItem(id: string, selectedId: string, onSelect: Function) {
    const isSelected = id === selectedId;
    if (isSelected) {
      return <li>{id} *</li>;
    }

    return (
      <li onClick={evt => this.onClick(evt, onSelect, [id])} key={id}>
        <a href="">{id}</a>
      </li>
    );
  }

  render() {
    const { patientIds, selectedId, onSelect } = this.props;
    return (
      <ul>{patientIds.map(id => this.renderItem(id, selectedId, onSelect))}</ul>
    );
  }
}

export default PatientList;
