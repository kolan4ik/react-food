import { API_URL } from './config';

const getMealbyId = async mealId => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await response.json();
};

const getAllCategory = async () => {
  const response = await fetch(API_URL + 'categories.php');
  return await response.json();
};

const getFilteredCategory = async filter => {
  const response = await fetch(API_URL + 'filter.php?c=' + filter);
  return await response.json();
};

export { getMealbyId, getAllCategory, getFilteredCategory };
