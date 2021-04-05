import {v4 as uuidv4} from "uuid";
import { createStore, applyMiddleWare, compose, combineReducers } from "redux";
import meals from "./meals";
import user from "./user";
import exercises from "./exercises";

const rootReducer = combineReducers({ user, meals, exercises });

const initialState = {
  user: { email: "joe@123.com", id: 123 },
  meals: [
    {
      name: "lunch",
      id: uuidv4(),
      foodItems: [
        { name: "Bread", calories: 35 },
        { name: "Apple", calories: 20 },
        { name: "Steak", calories: 600 },
      ],
    },
    {
      name: "dinner",
      id: uuidv4(),
      foodItems: [
        { name: "Chicken", calories: 344 },
        { name: "Rice", calories: 200 },
        { name: "Asparagus", calories: 70 },
      ],
    },
  ],
  exercises: [
    { name: "Running", calories: 300, id: uuidv4() },
    { name: "Sit ups", calories: 100, id: uuidv4() },
    { name: "Sprints", calories: 50, id: uuidv4() },
  ],
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
