import { combineReducers } from 'redux';
import { ADD_PATIENT, SET_PATIENT } from '../actions';

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
    case SET_PATIENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  patients
});

export default rootReducer;
