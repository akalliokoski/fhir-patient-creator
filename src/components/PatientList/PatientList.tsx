import React, { Component } from 'react';

export interface PatientListProps {
  patientIds: Array<string>;
  activeId: string;
  onSelect: Function;
}

class PatientList extends Component<PatientListProps, {}> {
  onClick = (event: any, callback: any, args: Array<any>) => {
    event.preventDefault();
    callback(...args);
  };

  renderItem(id: string, activeId: string, onSelect: Function) {
    const isActive = id === activeId;
    return (
      <li onClick={evt => this.onClick(evt, onSelect, [id])} key={id}>
        <a href="">{id}</a>
        <span>{isActive ? ' *' : ''}</span>
      </li>
    );
  }

  render() {
    const { patientIds, activeId, onSelect } = this.props;
    return (
      <ul>{patientIds.map(id => this.renderItem(id, activeId, onSelect))}</ul>
    );
  }
}

export default PatientList;
