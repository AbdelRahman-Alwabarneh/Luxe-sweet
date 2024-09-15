import  { useState, useEffect } from 'react';
import { api } from '../api/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
const RecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '' }],
    instructions: '',
    cookingTime: '',
    categories: '',
    cuisine: '',
    images: [''],
    ratings: [],
    createdBy: '',
    isApproved: false,
    isDeleted: false
  });
  const [cuisines, setCuisines] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (id) {
      api.get(`recipes/${id}`)
        .then(response => setRecipe(response.data))
        .catch(error => setError('Error fetching recipe. Please try again.'));
    }

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: type === 'checkbox' ? checked : (name === 'cookingTime' ? Number(value) : value)
    }));
  };

  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = { ...newIngredients[index], [name]: value };
    setRecipe(prevRecipe => ({ ...prevRecipe, ingredients: newIngredients }));
  };

  const handleAddIngredient = () => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, { name: '', quantity: '' }]
    }));
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe(prevRecipe => ({ ...prevRecipe, ingredients: newIngredients }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file)
        .then(() => getDownloadURL(storageRef))
        .then((downloadURL) => {
          setRecipe(prevRecipe => ({
            ...prevRecipe,
            images: [...prevRecipe.images, downloadURL],
          }));
          setSuccess('Image uploaded successfully!');
        })
        .catch((error) => {
          setError('Error uploading image. Please try again.');
        });
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = recipe.images.filter((_, i) => i !== index);
    setRecipe(prevRecipe => ({ ...prevRecipe, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? api.put(`recipes/${id}`, recipe) : api.post('recipes/createRecipe', recipe);
    request
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Recipe saved successfully!',
          confirmButtonColor: '#b0956e'
        }).then(() => {
          navigate('/');
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Error saving recipe. Please try again.',
          confirmButtonColor: '#b0956e'
        });
      });
  };
  

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 bg-[#b0956e] text-white h-screen p-6 flex flex-col">
        <h2 className="mb-6 text-2xl font-bold">Recipe Manager</h2>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li><a href="/dashboard" className="block py-2 px-4 hover:bg-white hover:text-[#b0956e] rounded transition">Dashboard</a></li>
            <li><a href="/recipes" className="block py-2 px-4 hover:bg-white hover:text-[#b0956e] rounded transition">Recipes</a></li>
            <li><a href="/profile" className="block py-2 px-4 hover:bg-white hover:text-[#b0956e] rounded transition">Profile</a></li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8 mx-20 mt-10">
        <h1 className="my-20 text-4xl font-bold text-[#b0956e] text-center">{id ? 'Edit Recipe' : 'Create New Recipe'}</h1>
        {error && <div className="p-4 mb-4 text-red-700 bg-red-100 border-l-4 border-red-500" role="alert">{error}</div>}
        {success && <div className="p-4 mb-4 text-green-700 bg-green-100 border-l-4 border-green-500" role="alert">{success}</div>}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block">
                <span className="font-semibold text-gray-700">Title</span>
                <input type="text" name="title" value={recipe.title} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
              </label>
              <label className="block">
                <span className="font-semibold text-gray-700">Cooking Time (minutes)</span>
                <input type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
              </label>
              <label className="block">
                <span className="font-semibold text-gray-700">Cuisine</span>
                <select name="cuisine" value={recipe.cuisine} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]">
                  <option value="">Select Cuisine</option>
                  {cuisines.map(cuisine => (
                    <option key={cuisine._id} value={cuisine._id}>{cuisine.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label className="block mb-2">
                <span className="font-semibold text-gray-700">Instructions</span>
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} rows="5" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
              </label>
              <label className="block mt-4">
                <span className="font-semibold text-gray-700 ">Categories</span>
                <input type="text" name="categories" value={recipe.categories} onChange={handleChange} placeholder="Enter categories separated by commas" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
              </label>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Ingredients</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center mb-2 space-x-2">
                <input type="text" name="name" value={ingredient.name} onChange={(e) => handleIngredientChange(index, e)} placeholder="Name" className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
                <input type="text" name="quantity" value={ingredient.quantity} onChange={(e) => handleIngredientChange(index, e)} placeholder="Quantity" className="w-1/4 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-[#b0956e] focus:ring-1 focus:ring-[#b0956e]" />
                <button type="button" onClick={() => handleRemoveIngredient(index)} className="px-3 py-2 text-white transition bg-red-500 rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddIngredient} className="mt-2 px-4 py-2 bg-[#b0956e] text-white rounded hover:bg-[#a17e58] transition">
              Add Ingredient
            </button>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Images</h3>
            <div className="grid grid-cols-3 gap-4">
              {recipe.images.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt={`Uploaded ${index + 1}`} className="object-cover w-full h-32 border border-gray-300 rounded" />
                  <button type="button" onClick={() => handleRemoveImage(index)} className="absolute px-2 py-1 text-white transition bg-red-500 rounded-full top-1 right-1 hover:bg-red-600">
                    X
                  </button>
                </div>
              ))}
            </div>
            <label className="mt-4 flex items-center px-4 py-2 bg-[#b0956e] text-white rounded hover:bg-[#a17e58] transition cursor-pointer">
              <span>Upload Image</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          <div className="flex justify-end mt-8">
            <button type="submit" className="px-6 py-3 bg-[#b0956e] text-white rounded hover:bg-[#a17e58] transition text-lg font-semibold">
              {id ? 'Update Recipe' : 'Create Recipe'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RecipeForm;
