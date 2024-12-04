import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RecipeList({ recipes, onDelete }) {
  return (
    <>
    <Header/>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">Recipe List</h1>
      </div>

      <div className="container mx-auto mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Title</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Cooking Time</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length > 0 ? (
                recipes.map(recipe => (
                  <tr
                    key={recipe.id}
                    className="hover:bg-gray-100 border-b transition duration-200"
                  >
                    <td className="px-6 py-4 text-gray-800">{recipe.title}</td>
                    <td className="px-6 py-4 text-gray-800">{recipe.cookingTime} minutes</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link
                        to={`/edit-recipe/${recipe.id}`}
                        className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => onDelete(recipe.id)}
                        className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-6 text-gray-500 text-lg"
                  >
                    No recipes available. Add some recipes to display them here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default RecipeList;
