export async function fetchMealHistory(query, userKey) {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/meals?api_key=" + userKey
    const result = await fetch(url);
    const data = await result.json()
    return data
  } catch (error) {
      return(error)
  }
}
