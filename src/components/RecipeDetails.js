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
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{recipe.title}</h1>

      
      <div className="flex justify-center mb-10">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="rounded-xl shadow-xl w-full max-w-4xl object-cover"
        />
      </div>

    
      <p className="text-lg text-gray-800 mb-8 text-center">{recipe.description}</p>

     
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Ingredients</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-xl font-medium">•</span>
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Instructions</h3>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="leading-relaxed">{instruction}</li>
          ))}
        </ol>
      </div>

    
      <div className="mt-10 text-center">
        <p className="text-xl text-gray-600">Enjoy your delicious recipe! 😊</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
