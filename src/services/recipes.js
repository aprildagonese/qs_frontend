export async function fetchRecipes(query) {
  try {
    const url = "https://choosin-foods-recipes.herokuapp.com/api/v1/recipes?key=9c18d10fb5a0f5a8aa140aa5e94ceb87&ingredient=" + query
    const result = await fetch(url);
    const data = await result.json()
    const ingredient = data.ingredient
    const recipes = data.recipes
    return({ingredient: ingredient, recipes: recipes})
  } catch (error) {
    return(error)
  }
}
