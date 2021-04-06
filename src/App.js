import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMealAction } from "./store/meals";

import SignIn from "./components/Login/Login";
import Display from "./components/MealDisplay/MealDisplay";
import Register from "./components/Register/Register";
import Add from "./components/Add/Add";

export default function App() {
  const [token, setToken] = useState();
  const dispatch = useDispatch();

  // if (!token) {
  //   return <SignIn />
  // }

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((meals) => {
        meals.forEach((meal) => {
          dispatch(addMealAction(meal.id, meal.name, meal.foodItems));
        });
      });
  }, []);

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
