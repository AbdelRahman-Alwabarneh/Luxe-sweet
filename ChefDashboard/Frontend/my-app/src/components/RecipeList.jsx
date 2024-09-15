import React, { useState, useEffect } from 'react';
import { api } from '../api/axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from './Modal'; // Import the Modal component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      // Get the chefId from sessionStorage (or other storage)
    
  
      // Prepare the request with chefId if available
      const response = await api.get('recipes');
  
      const data = response.data;
  
      // Check if the response is an array of recipes
      if (Array.isArray(data)) {
        setRecipes(data);  // Update state with the recipes data
      } else {
        setError('Unexpected response format.'); // Handle unexpected response format
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes.'); // Set a meaningful error message for the user
    } finally {
      setLoading(false); // Ensure loading state is disabled once the fetch completes
    }
  };
  

  const updateRecipe = async (id, updatedData) => {
    try {
      const response = await api.put(`recipes/${id}`, updatedData);
      console.log('Recipe updated successfully:', response.data);
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe._id === id ? { ...recipe, ...updatedData } : recipe
        )
      );
    } catch (err) {
      console.error('Error updating recipe:', err);
    }
  };

  const handleCheckboxChange = async (id, event) => {
    const newShowState = event.target.checked;
    await updateRecipe(id, { show: newShowState });
    fetchRecipes();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      api.delete(`recipes/${id}`)
        .then(() => setRecipes(recipes.filter(recipe => recipe._id !== id)))
        .catch(error => console.error('Error deleting recipe:', error));
    }
  };

  const handleOpenModal = async (id) => {
    try {
      const response = await api.get(`recipes/${id}`);
      setSelectedRecipe(response.data);
   
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleAddNewRecipe = () => {
    window.location.href = '/recipes/new';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        {/* <Sidebar/> */}
      </div>

      <div className="relative w-3/4 mt-48 mr-20 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-column md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <button onClick={handleAddNewRecipe} className="px-4 py-2 bg-[#b0956e] text-white rounded hover:bg-[#a17e58] transition">
              Add New Recipe
            </button>
            <div>
              {/* Dropdown Action Button Code */}
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            {/* Search Input Code */}
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  Show
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Approved</th>
              <th scope="col" className="px-6 py-3">Cooking Time</th>
              <th scope="col" className="px-6 py-3">Actions</th>
              <th scope="col" className="px-6 py-3">View</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map(recipe => (
              <tr key={recipe._id} className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${recipe._id}`}
                      type="checkbox"
                      checked={recipe.show}
                      onChange={(event) => handleCheckboxChange(recipe._id, event)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "
                    />
                    <label htmlFor={`checkbox-table-search-${recipe._id}`} className="sr-only">checkbox</label>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="relative w-16 h-16">
                    {recipe.images.length > 0 && (
                      <img
                        src={recipe.images[0]}
                        alt="Recipe Image"
                        className="object-cover w-full h-full rounded-full"
                      />
                    )}
                  </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">{recipe.title}</div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  {recipe.isApproved ? <a href="#" className="font-medium text-green-600  hover:underline">approved</a> : <a href="#" className="font-medium text-red-600 hover:underline">not approved</a>}
                </td>
                <td className="px-6 py-4">{recipe.cookingTime} mins</td>

                <td className="flex px-6 py-4 space-x-2">
                  <Link to={`/recipes/${recipe._id}/edit`} >
                    <FaEdit className="mt-6" />
                  </Link>
                  <button onClick={() => handleDelete(recipe._id)}>
                    <FaTrash className="mt-6"/>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleOpenModal(recipe._id)} className="px-4 py-2 font-semibold text-[#b0956e] bg-transparent border border-[#b0956e] rounded hover:bg-[#a0785d] hover:text-white hover:border-transparent">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* RecipeDetailModal component */}
        {selectedRecipe && (
          <RecipeDetailModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            recipe={selectedRecipe}
          />
        )}
      </div>
    </div>
  );
};

// RecipeDetailModal component
const RecipeDetailModal = ({ isOpen, onClose, recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!isOpen || !recipe) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        {/* Main Image Section */}
        <img
          src={recipe.images[0]} // Display the first image prominently
          alt="Recipe Image"
          className="object-cover w-full rounded-lg h-96"
        />
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute p-2 bg-white rounded-full shadow-lg bottom-4 right-4"
        >
          <svg
            className={`w-6 h-6 transition-transform ${showDetails ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Details Section */}
        {showDetails && (
          <div className="p-6 bg-white border-t border-gray-200 rounded-b-lg shadow-md">
            <h1 className="mb-4 text-3xl font-bold">{recipe.title}</h1>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-xl font-semibold">Ingredients</p>
                <ul className="space-y-2 list-disc list-inside">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-base">{ingredient.name}: {ingredient.quantity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xl font-semibold">Instructions</p>
                <p className="text-base">{recipe.instructions}</p>
              </div>
              <div>
                <p className="mb-2 text-xl font-semibold">Cooking Time</p>
                <p className="text-base">{recipe.cookingTime} minutes</p>
              </div>
              <div>
                <p className="mb-2 text-xl font-semibold">Categories</p>
                <p className="text-base">{recipe.categories.join(', ')}</p>
              </div>
              <div>
                <p className="mb-2 text-xl font-semibold">Cuisine</p>
                <p className="text-base">{recipe.cuisine.name ? recipe.cuisine.name : 'Loading...'}</p>
              </div>
              {recipe.images.length > 1 && (
                <div>
                  <p className="mb-2 text-xl font-semibold">Additional Images</p>
                  <div className="flex flex-wrap gap-4">
                    {recipe.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Additional Recipe Image ${index}`}
                        className="object-cover w-32 h-32 border border-gray-300 rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="mb-2 text-xl font-semibold">Ratings</p>
                <ul className="space-y-2 list-disc list-inside">
                  {recipe.ratings.map((rating, index) => (
                    <li key={index} className="text-base">{rating.rating} stars - {rating.comment}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};


export default RecipeList;
