import { connect } from 'react-redux';
import PatientView from '../../components/PatientView/PatientView';

const mapStateToProps = state => {
  const { patients, selectedPatientId } = state;
  return {
    patient: patients[selectedPatientId]
  };
};

const PatientViewContainer = connect(mapStateToProps)(PatientView);

export default PatientViewContainer;
