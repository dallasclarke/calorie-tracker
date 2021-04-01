const ADD_MEAL = "ADD_MEAL";

export const addMealAction = (name, foodItems) => ({
  type: ADD_MEAL,
  name,
  foodItems,
});

export default function (state = [], action) {
  if (action.type === ADD_MEAL) {
    return [...state, { name: action.name, foodItems: action.foodItems }];
  }

  return state;
}
