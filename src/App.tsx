import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

/*interface AppProp {
  header: string,
  body?: string //This means this property is optional. It can either be defined or undefined
}*/

//This is how we destructure the props and giving default values to a prop in case it's undefined
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </Router>
  );
}

export default App;
