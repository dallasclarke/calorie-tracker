const ADD_MEAL = "ADD_MEAL";
const REMOVE_MEAL = "REMOVE_MEAL";

export const addMealAction = (name, foodItems) => ({
  type: ADD_MEAL,
  name,
  foodItems,
});

export const removeMealAction = (id) => ({
  type: REMOVE_MEAL,
  id,
});

export default function (state = [], action) {
  
  switch (action.type) {
    case ADD_MEAL: 
      return [...state, {name: action.name, foodItems: action.foodItems}];
    case REMOVE_MEAL:
      return state.filter((meal) => meal.id !== action.id);

    default:
      return state;
  }
}
