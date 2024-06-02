import { getConfig } from '@open-cells/core';

const {
  appConfig: {
    recipesService: { basePath = undefined, userId = undefined, actions = undefined } = {},
  } = {},
} = getConfig();

// Function to construct the fetch URL
function getFetchUrl(action: string, param?: string, paramValue?: string): URL {
  // Constructing the base URL with the action appended
  const data = new URL(`${basePath}/${userId}/${action}`);
  
  // If parameter and paramValue are provided, set them as search parameters
  if (param && paramValue) {
    data.searchParams.set(param, paramValue);
  }
  
  // Logging the constructed URL for debugging purposes
  console.log("FetchURL");
  console.log(data);
  
  // Returning the constructed URL
  return data;
}
async function fetchMeal(
  action: keyof typeof actions,
  param?: string,
  paramValue?: string,
): Promise<any> {
  const data = await fetch(getFetchUrl(actions[action], param, paramValue));
  console.log("fetchMeal");
  const jsonData = await data.json(); // Convert response to JSON

  if (jsonData.categories) {
    // Categories found in the response
    // Add the new category
    const newCategory = {
      idCategory: "15",
      strCategory: "Unhealthy",
      strCategoryThumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCql_O48kYpWVfSIVLzEHVpdSot5goyx5p_w&s",
      strCategoryDescription: "Let's face it. This stuff should not be even legal to order. But we are not your parents. Enjoy!"
    };
    jsonData.categories.push(newCategory);

    // Log the modified JSON data
    console.log(jsonData);
  } else if (jsonData.meals) {
    // Meals found in the response
    // Log the meals data
    console.log(jsonData.meals);
  } else {
    console.log("Neither categories nor meals found in the response.");

    // Create custom meal objects from the provided data
    const customMeals = [
      {
        strMeal: "Flamenquin Barranco",
        strMealThumb: "https://live.staticflickr.com/6089/6146695319_c1b6ebd28f_z.jpg",
        idMeal: "52874"
      },
      {
        strMeal: "Bacon Mug",
        strMealThumb: "https://26.media.tumblr.com/tumblr_l41kduXzOP1qc5kdko1_500.jpg",
        idMeal: "52878"
      }
    ];

    // Return the custom meals
    return { meals: customMeals };
  }

  return jsonData;
}



/* HOME */ export const getRandomMeal = async () => fetchMeal('random');
export const getMealByName = async (mealName: string) => fetchMeal('search', 's', mealName);
export const getMealsByInitial = async (mealInitial: string) =>
  fetchMeal('search', 'f', mealInitial);

/* RECIPE */ export const getMealDetailsById = async (id: string) => fetchMeal('lookup', 'i', id);

/* HOME, CATEGORY */ export const getAllCategories = async () => fetchMeal('categories');
export const getCategoriesList = async () => fetchMeal('list', 'c', 'list');
export const getAreasList = async () => fetchMeal('list', 'a', 'list');

/* INGREDIENTS */ export const getIngredientsList = async () => fetchMeal('list', 'i', 'list');
export const getMealsByMainIngredient = async (ingredient: string) =>
  fetchMeal('filter', 'i', ingredient);
export const getMealsByCategory = async (category: string) => fetchMeal('filter', 'c', category);
export const getMealsByArea = async (area: string) => fetchMeal('filter', 'a', area);
