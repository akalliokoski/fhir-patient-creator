import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { store } from '../../utils/store';
import { history, getSelectedPatientId } from '../../utils/route';
import { fetchPatient } from '../../actions';
import Header from '../Header/Header';
import About from '../About/About';
import Home from '../Home/Home';
import PatientListContainer from '../../containers/PatientListContainer/PatientListContainer';
import PatientCreatorContainer from '../../containers/PatientCreatorContainer/PatientCreatorContainer';
import PatientViewContainer from '../../containers/PatientViewContainer/PatientViewContainer';

class App extends Component {
  unlistenHistory: any;

  componentDidMount() {
    this.unlistenHistory = history.listen((location, action) => {
      this.fetchPatientIfPathChanged(location.pathname);
    });
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  fetchPatientIfPathChanged(pathname: string) {
    const patientId = getSelectedPatientId();
    if (!patientId) {
      return;
    }

    store.dispatch(fetchPatient(patientId));
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />

          <Route exact={true} path="/" components={Home} />

          <Route component={PatientCreatorContainer} />
          <Route component={PatientListContainer} />

          <Route path="/patients/:patientId" component={PatientViewContainer} />

          <Route path="/about" components={About} />
        </div>
      </Router>
    );
  }
}

export default App;
