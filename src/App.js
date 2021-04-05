import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import SignIn from "./components/Login/Login";
import Display from "./components/MealDisplay/MealDisplay";
import Register from "./components/Register/Register";
import Add from "./components/Add/Add";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Item</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>

          <Route path="/add">
            <Topics />
            <Add />
          </Route>

          <Route path="/edit/:id">
            <Topics />
            <Add />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
            <Display />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Add Item</h2>

      <ul>
        <li>
          <Link to={`${match.url}/meal`}>Add Meal</Link>
        </li>
        <li>
          <Link to={`${match.url}/exercise`}>Add Exercise</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Add Item.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>Add {topicId}</h3>;
}

// const ADD_EXERCISE = "ADD_EXERCISE";

// function reducer(state, action) {
//   if (action.type === ADD_EXERCISE) {
//     return {
//       ...state,
//       exercises: [
//         ...state.exercises,
//         { name: action.name, calories: action.calories },
//       ],
//     };
//   }
//   if (action.type === "ADD_MEAL") {
//     return {
//       ...state,
//       meals: [
//         {
//           ...state.meals,
//           foodItems: [{ name: action.name, calories: action.calories }],
//         },
//       ],
//     };
//   }
//   return state;
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       {getMealTotal(state)} <br />
//       {getExerciseTotal(state)} <br />
//       {dailyTotalCalories(state)} <br />
//       <button
//         onClick={() =>
//           dispatch({ type: ADD_EXERCISE, name: "push ups", calories: 33 })
//         }
//       >
//         Add Exercise
//       </button>
//       <button
//         onClick={() =>
//           dispatch({
//             type: "ADD_MEAL",
//             name: "Dinner",
//             foodItems: [{ name: "Burger", calories: 800 }],
//           })
//         }
//       >
//         Add Meal
//       </button>
//     </div>
//   );
// }
