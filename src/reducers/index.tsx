import { combineReducers } from 'redux';
import { ADD_PATIENT, SET_ACTIVE_PATIENT } from '../actions';

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

function activePatientId(state = null, action: any) {
  switch (action.type) {
    case SET_ACTIVE_PATIENT:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  patients,
  activePatientId
});

export default rootReducer;
