import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import ShallowPage from "./pages/shallow";
import DeepPage from "./pages/deep";
import FallbackPage from "./pages/fallback";
import { Nav } from "./components/nav";
import { name, version } from "../package.json";

function App() {
  return (
    <BrowserRouter>
      <Nav title={`${name} ${version}`} />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shallow" component={ShallowPage}></Route>
        <Route path="/deep/:id" component={DeepPage}></Route>
        <Route component={FallbackPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
