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

export async function saveFoodEntry(food, calories) {
  try {
    const url = `https://choosin-foods.herokuapp.com/api/v1/foods?food_name=${food}&calories=${calories}`
    const result = await fetch(url, {method: 'POST'});
    const data = await result.json()
    return data
  } catch (error) {
      return(error)
  }
};

export async function deleteFood(userID, mealID, foodID) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/meal-foods?userID=" + userID + "&mealID=" + mealID + "&foodID=" + foodID
    const result = await fetch(url, {method: 'DELETE'});
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchFood(food) {
  try {
    const url = `http://choosin-foods.herokuapp.com/api/v1/foods?food_name=${food}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    return null;
  }

export async function logInUser(email, password) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/users?email=" + email + "&password=" + password
    const result = await fetch(url, {method: 'POST'});
    const api_key = await result.json()
    return api_key
  } catch (error) {
    return error
  }
}

export async function registerUser(email, password, passwordConfirmation) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/users/register?email=" + email + "&password=" + password + "&password_confirmation=" + passwordConfirmation
    const result = await fetch(url, {method: 'POST'});
    const api_key = await result.json()
    return api_key
  } catch (error) {
    return error
  }
}
