import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// eslint-disable-next-line 
import About from './components/About';
import Portfolio from './components/Portfolio';
// eslint-disable-next-line 
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
