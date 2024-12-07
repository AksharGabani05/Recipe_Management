import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
           
            <div className="relative">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover"
                />
            </div>

            
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 truncate">
                    {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                    {recipe.instructions}
                </p>
                <div className="flex items-center justify-between mt-4">
                  
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">
                           
                            ★★★★☆
                        </span>
                        <span className="text-gray-500 text-xs">4.5/5</span>
                    </div>
                    <Link
                        to={`/recipe/${recipe.id}`}
                        className="bg-dark text-white text-sm px-4 py-2 rounded-md transition duration-200"
                    >
                        View Recipe
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
