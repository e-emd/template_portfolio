import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Route path='/'>
        <AboutUs />
      </Route>
      <Route path='/work'>
        <OurWork />
      </Route>
      <Route path='/contact'>
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
