import React from 'react';
import Header from './components/Menu/Header';
import { useState } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Menu/Login/Login';

//const App = () => {
  //return (
    //<div>
      //<Header />
    //</div>
  //);
//};

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <Header />
    </div>
  )
}

export default App;


