import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Homepage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
};

export default App;
