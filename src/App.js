import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return <Route to='/' component={Home} />;
}

export default App;
