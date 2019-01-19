import * as React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import { Home, About } from './containers';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Helmet title="Default title" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <hr />
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
