import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import './App.css';

function App() {
  const HatsPage = () => {
    return (
      <div>
        <h1>Hats Page</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
