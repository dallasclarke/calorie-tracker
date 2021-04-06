import { v4 as uuidv4 } from "uuid";
import { createStore, applyMiddleWare, compose, combineReducers } from "redux";
import meals from "./meals";
import user from "./user";
import exercises from "./exercises";

const rootReducer = combineReducers({ user, meals, exercises });

const initialState = {
  user: { email: "joe@123.com", id: 123 },
  meals: [],
  exercises: [],
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
