import { history } from '../utils/route';
import { createFhirPatient, fetchFhirPatient } from '../utils/utils';

// Action types
export const CREATE_PATIENT = 'CREATE_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
export const SET_PATIENT = 'SET_PATIENT';
export const SET_PATIENT_SELECTED = 'SET_PATIENT_SELECTED';

function addPatient(patient: any) {
  return {
    type: ADD_PATIENT,
    payload: patient
  };
}

function setPatient(patient: any) {
  return {
    type: SET_PATIENT,
    payload: patient
  };
}

function setPatientSelected(id: string) {
  return {
    type: SET_PATIENT_SELECTED,
    payload: id
  };
}

export function fetchPatient(id: string) {
  return async (dispatch: Function, getState: Function) => {
    const { patients } = getState();
    const patient = patients[id];
    if (!patient) {
      return Promise.resolve();
    }

    const { data: fetchedData } = await fetchFhirPatient(id);
    dispatch(setPatient(fetchedData));
  };
}

export function createPatient() {
  return async (dispatch: Function) => {
    const { data } = await createFhirPatient();
    dispatch(addPatient(data));

    const { id } = data;
    history.push(`/patients/${id}`);
  };
}
