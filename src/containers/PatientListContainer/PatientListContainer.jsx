import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientList from '../../components/PatientList/PatientList';

const mapStateToProps = state => {
  return {
    patientIds: Object.keys(state.patients)
  };
};

const PatientListContainer = withRouter(
  connect(
    mapStateToProps,
    null
  )(PatientList)
);

export default PatientListContainer;
