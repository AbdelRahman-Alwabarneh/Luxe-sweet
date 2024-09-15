import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import RecipeForm from './RecipeForm';

const MySwal = withReactContent(Swal);

const RecipeFormAlert = ({ recipeId, onFormSubmit }) => {
  MySwal.fire({
    title: recipeId ? 'Edit Recipe' : 'Create New Recipe',
    html: <RecipeForm id={recipeId} onFormSubmit={onFormSubmit} />,
    showCancelButton: false,
    showConfirmButton: false,
    width: '800px',
    customClass: {
      container: 'swal2-custom-container',
    },
  });
  
  return null;
};

export default RecipeFormAlert;
