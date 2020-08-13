import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import './index.scss';
import Modal from './components/Modal';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <Modal />
      <HashRouter>
        <Link to="/about">about</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </HashRouter>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
