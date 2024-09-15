import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import RecipeDetail from '../components/RecipeDetail';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div>
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipeDetailPage;
