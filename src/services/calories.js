export async function fetchMealHistory(userKey) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/meals?api_key=" + userKey
    const result = await fetch(url);
    const data = await result.json()
    return data
  } catch (error) {
      return(error)
  }
};

export async function saveMealEntry(userKey, meal, date, food) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/meal-foods?api_key=" + userKey + "&meal_name=" + meal + "&date=" + date + "&food_name=" + food
    const result = await fetch(url, {method: 'POST'});
    const data = await result.json()
    return data
  } catch (error) {
      return(error)
  }
};
