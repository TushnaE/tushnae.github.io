import React from 'react';
import logo from './logo.svg';
import './App.css';


import Home from "./components/Home";


function App() {
  return (

    // <Router>
    //   <Route path="/home" component={Home} />
    // </Router>


    <div className="App">


      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        



        <p>
          Edit <code>src/App.js</code> and  to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
