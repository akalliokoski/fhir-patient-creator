import { combineReducers } from 'redux';
import { ADD_PATIENT } from '../actions';

export interface AppState {
  patients: Array<string>;
}

const DEFAULT_PATIENTS_STATE = {
  '600746': {},
  '640239': {},
  '640394': {}
};

function patients(state = DEFAULT_PATIENTS_STATE, action: any) {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        [action.payload.id]: action.payload,
        ...state
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  patients
});

export default rootReducer;
