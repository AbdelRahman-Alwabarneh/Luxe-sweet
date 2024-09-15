import  { useState, useEffect } from 'react';
import api from '../api/axios';

const RecipeManagement = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '' }],
    instructions: '',
    cookingTime: '',
    categories: [''],
    cuisine: '',
    images: [''],
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('recipes/setrecipes', newRecipe);
      setRecipes([...recipes, response.data]);
      setNewRecipe({
        title: '',
        ingredients: [{ name: '', quantity: '' }],
        instructions: '',
        cookingTime: '',
        categories: [''],
        cuisine: '',
        images: [''],
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await api.delete(`/recipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Recipe Management</h1>

      {/* Add New Recipe Form */}
      <form onSubmit={handleAddRecipe} className="p-6 mb-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Add New Recipe</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={newRecipe.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Instructions</label>
          <textarea
            name="instructions"
            value={newRecipe.instructions}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Cooking Time (in minutes)</label>
          <input
            type="number"
            name="cookingTime"
            value={newRecipe.cookingTime}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Cuisine</label>
          <input
            type="text"
            name="cuisine"
            value={newRecipe.cuisine}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>

      {/* Recipe List */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-2 text-xl font-semibold">{recipe.title}</h2>
            <p className="mb-2 text-sm">Cuisine: {recipe.cuisine}</p>
            <p className="mb-4 text-sm">Cooking Time: {recipe.cookingTime} minutes</p>
            <div className="mb-4">
              <h3 className="font-semibold">Instructions</h3>
              <p className="text-sm">{recipe.instructions}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleDeleteRecipe(recipe._id)}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
              {/* Add Edit Button with similar functionality */}
              {/* <button className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Edit</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeManagement;
