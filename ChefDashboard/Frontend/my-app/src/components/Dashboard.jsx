// src/components/AdminDashboard.js
import { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import RecipeDetails from './RecipeDetail';


const AdminDashboard = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'edit', 'view'

  const handleEdit = (id) => {
    setSelectedRecipeId(id);
    setViewMode('edit');
  };

  const handleView = (id) => {
    setSelectedRecipeId(id);
    setViewMode('view');
  };

  const handleSave = () => {
    setViewMode('list');
    setSelectedRecipeId(null);
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      {viewMode === 'list' && (
        <RecipeList onEdit={handleEdit} onView={handleView} />
      )}
      {viewMode === 'edit' && (
        <RecipeForm recipeId={selectedRecipeId} onSave={handleSave} />
      )}
      {viewMode === 'view' && (
        <RecipeDetails recipeId={selectedRecipeId} />
      )}
    </div>
  );
};

export default AdminDashboard;
