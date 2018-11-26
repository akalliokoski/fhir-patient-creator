import React, { Component } from 'react';
import axios from 'axios';

const FHIR_BASE = 'http://hapi.fhir.org/baseDstu3';
const RESOURCE_TYPE_PATIENT = 'Patient';

const generateUUIDv4 = async () => {
  const { data } = await axios.get(
    'https://www.uuidgenerator.net/api/version4'
  );
  return data;
};

const getPatientBody = (uuid: string) => {
  return {
    resourceType: 'Patient',
    id: `${uuid}`,
    meta: {
      profile: ['http://phr.kanta.fi/StructureDefinition/fiphr-patient-stu3']
    },
    identifier: [
      {
        system: 'urn:ietf:rfc:3986',
        value: `urn:uuid:${uuid}`
      }
    ],
    active: true
  };
};

class Home extends Component<{}, {}> {
  createPatient = async () => {
    const uuid = await generateUUIDv4();
    const body = getPatientBody(uuid);
    const response = await axios.post(
      `${FHIR_BASE}/${RESOURCE_TYPE_PATIENT}`,
      body
    );
    await this.updatePatient(response.data.id);
  };

  async updatePatient(id: string) {
    const { data } = await axios.get(
      `${FHIR_BASE}/${RESOURCE_TYPE_PATIENT}/${id}`
    );
    this.setState({ patient: data });
  }

  render() {
    return (
      <div>
        <button onClick={this.createPatient}>Create Patient</button>
      </div>
    );
  }
}

export default Home;
