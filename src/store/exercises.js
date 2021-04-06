const ADD_EXERCISE = "ADD_EXERCISE";
const REMOVE_EXERCISE = "REMOVE_EXERCISE";
const EDIT_EXERCISE = "EDIT_EXERCISE";

export const addExerciseAction = (exercises) => ({
  type: ADD_EXERCISE,
  exercises,
});

export const removeExerciseAction = (id) => ({
  type: REMOVE_EXERCISE,
  id,
});

export const editExerciseAction = (exercise) => ({
  type: EDIT_EXERCISE, exercise,
  exercise,
});

function cleanExerciseItems(items) {
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
    case ADD_EXERCISE:
      return [...state, { name: action.name, calories: action.calories }];
    case REMOVE_EXERCISE:
      return state.filter((exercise) => exercise.id !== action.id);

    default:
      return state;
  }
}
