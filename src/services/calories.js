const fetchMealHistory = async (query) => {
  try {
    const url = "https://choosin-foods.herokuapp.com/api/v1/recipes?key=92e8d1428fcadc1c114e4d05b203df9b" + query
    const result = await fetch(url);
    const data = await result.json()
    return data
  } catch (error) {
      return(error)
  }
}

module.exports = fetchMealHistory;
