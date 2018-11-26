import { combineReducers } from 'redux';
import { ADD_PATIENT, SET_PATIENT_SELECTED } from '../actions';

// TODO: define AppState interface

const DEFAULT_PATIENTS_STATE = {
  '600746': null,
  '640239': null,
  '640394': null
};

function patients(state = DEFAULT_PATIENTS_STATE, action: any) {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        [action.payload.id]: null,
        ...state
      };
    default:
      return state;
  }
}

function selectedPatientId(state = null, action: any) {
  switch (action.type) {
    case SET_PATIENT_SELECTED:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  patients,
  selectedPatientId
});

export default rootReducer;
