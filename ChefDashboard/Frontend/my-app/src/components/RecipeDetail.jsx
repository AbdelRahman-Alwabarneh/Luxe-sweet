import  { useEffect, useState } from 'react';
import { api } from '../api/axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [cuisines, setCuisines] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the recipe details
    api.get(`/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => {
        console.error('Error fetching recipe:', error);
        setError('Failed to fetch recipe.');
      });

    // Fetch the list of cuisines
    api.get('cuisine/getAllCuisines')
      .then(response => {
       
        if (Array.isArray(response.data.cuisine)) {
          setCuisines(response.data.cuisine);
        } else {
          setError('Error fetching cuisines. Please try again.');
        }
      })
      .catch(error => setError('Error fetching cuisines. Please try again.'));
  }, [id]);

  const getCuisineName = (cuisineId) => {
    console.log(cuisineId);
    const cuisine = cuisines.find(c => c._id === cuisineId);
    return cuisine ? cuisine.name : 'Unknown';
  };

  if (error) return <p className="font-semibold text-red-600">{error}</p>;
  // if (!recipe) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 bg-white border-r border-gray-200 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">Navigation</h2>
        <ul className="space-y-4">
          <li><a href="#" className="text-blue-600 hover:underline">Dashboard</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">My Recipes</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 mt-16 space-y-8">
        <h1 className="mb-8 text-4xl font-extrabold">{recipe.title}</h1>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Ingredients</p>
          <ul className="space-y-2 list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg">{ingredient.name}: {ingredient.quantity}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Instructions</p>
          <p className="text-lg">{recipe.instructions}</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Cooking Time</p>
          <p className="text-lg">{recipe.cookingTime} minutes</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Categories</p>
          <p className="text-lg">{recipe.categories.join(', ')}</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Cuisine</p>
          <p className="text-lg">{getCuisineName(recipe.cuisine.name)}</p>
        </div>
        {recipe.images.length > 0 && (
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <p className="mb-4 text-2xl font-semibold">Images</p>
            <div className="flex flex-wrap gap-4">
              {recipe.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Recipe Image ${index}`}
                  className="object-cover w-48 h-48 border border-gray-300 rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl font-semibold">Ratings</p>
          <ul className="space-y-2 list-disc list-inside">
            {recipe.ratings.map((rating, index) => (
              <li key={index} className="text-lg">{rating.rating} stars - {rating.comment}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
