import { connect } from 'react-redux';
import PatientCreator from '../../components/PatientCreator/PatientCreator';
import { createPatient } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onCreate: event => dispatch(createPatient())
});

const PatientCreatorContainer = connect(
  null,
  mapDispatchToProps
)(PatientCreator);

export default PatientCreatorContainer;
