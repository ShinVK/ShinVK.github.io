import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorTest from '../pages/ColorTest';
import Home from '../pages/Home';
import Homepage from '../pages/Homepage';
// import NewHome from '../pages/NewHome';
import Profile from '../pages/Profile';
// import TestMui from '../pages/TestMui';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/home" component={ Homepage } />
      <Route exact path="/home/profile" component={ Profile } />
      <Route exact path="/color" component={ ColorTest } />
      {/* <Route exact path="/new" component={ NewHome } /> */}

    </Switch>
  );
}
