import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RecipeList({ recipes, onDelete }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      onDelete(id);
    }
  };

  const renderTableRows = () => {
    if (recipes.length === 0) {
      return (
        <tr>
          <td colSpan="2" className="text-center py-6 text-gray-500 text-lg">
            No recipes available. Add some recipes to display them here.
          </td>
        </tr>
      );
    }

    return recipes.map((recipe) => (
      <tr key={recipe.id} className="hover:bg-gray-50 transition duration-300">
        <td className="px-6 py-4 text-gray-800">{recipe.title}</td>
        <td className="px-6 py-4 flex gap-3">
          <Link
            to={`/edit-recipe/${recipe.id}`}
            className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(recipe.id)}
            className="bg-red-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Header />
    
      <div className="container mx-auto mt-8 px-4">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Title</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RecipeList;
