import logo from './logo.svg';
import './App.css';
import ResponsiveComponent from './Components/ResponsiveComponent';
import Card from './Components/Card';
import List from './Components/List';
import 'flowbite';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ResponsiveComponent /> */}
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Card />
      </div> */}
      <List/>
    </div>
  );
}

export default App;
