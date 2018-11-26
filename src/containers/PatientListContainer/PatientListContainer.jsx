import { connect } from 'react-redux';
import PatientList from '../../components/PatientList/PatientList';

const mapStateToProps = state => {
  return {
    patientIds: Object.keys(state.patients)
  };
};

const PatientListContainer = connect(
  mapStateToProps,
  null
)(PatientList);

export default PatientListContainer;
