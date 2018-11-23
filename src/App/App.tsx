import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/patients" component={Patients} />
    </div>
  </Router>
);

const About = () => <h2>About</h2>;
const Topic = ({ match }: { match: any }) => (
  <h3>Requested Param: {match.params.id}</h3>
);
const Patients = ({ match }: { match: any }) => (
  <div>
    <h2>Patients</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default App;
