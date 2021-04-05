import { v4 as uuidv4 } from "uuid";

const ADD_MEAL = "ADD_MEAL";
const REMOVE_MEAL = "REMOVE_MEAL";
const EDIT_MEAL = "EDIT_MEAL";

export const addMealAction = (name, foodItems) => ({
  type: ADD_MEAL,
  name,
  foodItems,
});

export const removeMealAction = (id) => ({
  type: REMOVE_MEAL,
  id,
});

export const editMealAction = (id, name, foodItems) => ({
  type: EDIT_MEAL,
  id,
  name,
  foodItems,
});

function cleanFoodItems(items) {
  return items
    .filter((item) => {
      // remove any items that were only for diplay but not actual items
      return item.name !== "" && item.calories !== "";
    })
    .map((item) => {
      // convert calories to numbers for easy calculations
      return {
        ...item,
        calories: Number(item.calories),
      };
    });
}

export default function (state = [], action) {
  switch (action.type) {
    case ADD_MEAL:
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.name,
          foodItems: cleanFoodItems(action.foodItems),
        },
      ];
    case REMOVE_MEAL:
      return state.filter((meal) => meal.id !== action.id);
    case EDIT_MEAL:
      return state.map((meal) => {
        if (meal.id === action.id) {
          return {
            ...meal,
            name: action.name,
            foodItems: cleanFoodItems(action.foodItems),
          };
        }

        return meal;
      });

    default:
      return state;
  }
}
