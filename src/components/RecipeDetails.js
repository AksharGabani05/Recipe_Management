import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-gray-500">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{recipe.title}</h1>

     
      <div className="flex justify-center mb-8">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="rounded-lg shadow-lg w-full max-w-3xl object-cover"
        />
      </div>

   
      <p className="text-lg text-gray-700 mb-6">{recipe.description}</p>

     
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h3>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ol>
      </div>

     
      <p className="text-lg text-gray-700 font-medium">
        Cooking Time: <span className="text-gray-800 font-bold">{recipe.cookingTime}</span> minutes
      </p>
    </div>
  );
}

export default RecipeDetails;
