export function getMealTotal(state) {
  let currTotal = 0;
  for (let i = 0; i < state.meals.length; i++) {
    const meal = state.meals[i];
    for (let j = 0; j < meal.foodItems.length; j++) {
      currTotal += meal.foodItems[j].calories;
    }
  }
  return currTotal;
}

export function getExerciseTotal(state) {
  const total = state.exercises.reduce((acc, curr) => {
    return curr.calories + acc;
  }, 0);
  return total;
}

export function dailyTotalCalories(state) {
  const mealTotal = getMealTotal(state);
  const exerciseTotal = getExerciseTotal(state);
  return mealTotal - exerciseTotal;
}

export function getMeals(state) {
  return state.meals;
}

export function getExercises(state) {
  return state.exercises;
}
 
