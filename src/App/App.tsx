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
    </div>
  </Router>
);

const About = () => <h2>About</h2>;

export default App;
