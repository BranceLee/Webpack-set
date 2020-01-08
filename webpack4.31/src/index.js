const React = require('react');
const ReactDOM = require('react-dom');
import './index.scss';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Modal />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
