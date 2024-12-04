import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RecipeForm from '../components/RecipeForm';

function EditRecipe({ recipes, onEditRecipe }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  const handleSubmit = (recipeData) => {
    onEditRecipe({ ...recipeData, id: recipe.id });
    toast.success('Recipe updated successfully!');
    navigate('/recipe-list');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Edit Recipe</h1>
      <RecipeForm onSubmit={handleSubmit} initialData={recipe} />
    </div>
  );
}

export default EditRecipe;