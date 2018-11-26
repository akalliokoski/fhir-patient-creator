import axios from 'axios';
import {
  generateUUIDv4,
  generatePatientResource,
  createFhirPatient
} from '../utils/util';

// Action types
export const CREATE_PATIENT = 'CREATE_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';

export function createPatient() {
  return async (dispatch: Function) => {
    const response = await createFhirPatient();
    console.log(response);
    dispatch({
      type: ADD_PATIENT,
      payload: response.data
    });
  };
}
