import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { store } from '../../utils/store';
import { history, getSelectedPatientId } from '../../utils/route';
import { fetchPatient } from '../../actions';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Patients from '../Patients/Patients';
import NoMatch from '../NoMatch/NoMatch';

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

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/patients" component={Patients} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
