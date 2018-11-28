import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PatientView from '../../components/PatientView/PatientView';

const mapStateToProps = (state, ownProps) => {
  const { patients } = state;
  const { patientId } = ownProps.match.params;
  return {
    patient: patients[patientId]
  };
};

const PatientViewContainer = withRouter(connect(mapStateToProps)(PatientView));

export default PatientViewContainer;
