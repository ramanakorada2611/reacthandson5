import PureComponents from './Components/PureComponents';
import './App.css';
import Sample from './Sample';
import Extra from './Extra';
import Hoc from './Components/Hoc';

function App() {
  return (
    <div className="App">
      <h1 className='head'>HANDSON5</h1>
      <PureComponents/>
      <Sample/>
      <Extra/>
      <Hoc/>
      <h1><u>Higher Order Components:</u></h1>
      <p>A higher-order component HOC is an advanced technique in React for reusing component logic.
      a higher-order component is a function that takes a component and returns a new component.
      </p>
    </div>
  );
}

export default App;
