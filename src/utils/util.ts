import axios from 'axios';

const FHIR_BASE = 'http://hapi.fhir.org/baseDstu3';

export const generateUUIDv4 = async () => {
  const { data } = await axios.get(
    'https://www.uuidgenerator.net/api/version4'
  );
  return data;
};

export const generatePatientResource = (uuid: string) => {
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

export const createFhirPatient = async () => {
  const uuid = await generateUUIDv4();
  const resource = generatePatientResource(uuid);
  return axios.post(`${FHIR_BASE}/${resource.resourceType}`, resource);
};

export const fetchFhirPatient = async (id: string) => {
  return axios.get(`${FHIR_BASE}/Patient/${id}`);
};
