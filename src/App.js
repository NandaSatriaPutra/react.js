import React from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AboutComp from './Component/Fungsional/AboutComp';
import Homepage from './Component/Fungsional/Homepage';
const App = () => {
  return (
<BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/About" component={AboutComp}/>
    </Switch>
</BrowserRouter>
  );
}

export default App;
