import { combineReducers } from 'redux';

export interface AppState {
  patients: Array<string>;
}

const DEFAULT_PATIENTS_STATE = {
  '600746': {}
};

function patients(state = DEFAULT_PATIENTS_STATE, action: string) {
  return state;
}

const rootReducer = combineReducers({
  patients
});

export default rootReducer;
