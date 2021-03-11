import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';

import Home from "./pages/Home";
import Workbench from "./pages/Workbench";

const App = () => (
  <Switch>
    <Route exact={true} path="/workbench" component={Workbench} />
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;
