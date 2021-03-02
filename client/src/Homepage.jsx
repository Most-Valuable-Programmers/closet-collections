import React from 'react';
import Sidebar from './components/sidebar/Global.jsx';
import Home from './components/Home.jsx';
import Closet from './components/Closet.jsx';
import Outfits from './components/OutfitGrid.jsx';
import Calendar from './components/Calendar.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className='App'>
      <Router>

        <Sidebar />
        <Switch>

        </Switch>
      </Router>
    </div>
  );
};

export default Homepage;
