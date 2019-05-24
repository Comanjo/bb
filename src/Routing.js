import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/Form'
import Home from './components/Home'


function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form/" component={Form} />
        
        </Switch>
    </Router>
  );
}

export default Routing;