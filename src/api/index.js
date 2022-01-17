import axios from  'axios';

const url = 'http://localhost:5000/recipes';

export const fetchRecipe = ()=> axios.get(url);
export const createRecipe = (newRecipe)=> axios.post(`${url}/add`,newRecipe);
export const updateRecipe = (id , updateRecipe)=> axios.put(`${url}/update/${id}`,updateRecipe);
export const deleteRecipe = (id)=> axios.delete(`${url}/delete/${id}`);