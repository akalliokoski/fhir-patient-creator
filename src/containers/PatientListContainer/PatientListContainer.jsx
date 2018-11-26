import { connect } from 'react-redux';
import PatientList from '../../components/PatientList/PatientList';
import { selectPatient } from '../../actions';

const mapStateToProps = state => {
  return {
    patientIds: Object.keys(state.patients),
    selectedId: state.selectedPatientId
  };
};

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(selectPatient(id))
});

const PatientListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);

export default PatientListContainer;
