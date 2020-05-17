import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Speakers from './components/pages/Speakers';
import SpeakerInfo from './components/pages/SpeakerInfo';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/speakerinfo/:id' component={SpeakerInfo} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
