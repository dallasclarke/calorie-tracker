const ADD_EXERCISE = "ADD_EXERCISE";
const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const addExerciseAction = (exercises) => ({
  type: ADD_EXERCISE,
  exercises,
});

export const removeExerciseAction = (id) => ({
  type: REMOVE_EXERCISE,
  id,
});

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
