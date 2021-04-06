import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignIn from "./components/Login/Login";
import Display from "./components/MealDisplay/MealDisplay";
import Register from "./components/Register/Register";
import Add from "./components/Add/Add";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>

          <Route path="/add">
            <Add />
          </Route>

          <Route path="/edit/:id">
            <Add />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Display />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
