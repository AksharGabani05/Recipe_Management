import React, { useState, useEffect } from 'react';

function RecipeForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        ingredients: initialData.ingredients.join(', '),
        instructions: initialData.instructions.join('\n')
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions.split('\n').filter(item => item.trim() !== '')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter recipe title"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description"
          required
        ></textarea>
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients (comma-separated)</label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="E.g., flour, sugar, eggs"
          required
        />
      </div>

      {/* Instructions */}
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">Instructions (one per line)</label>
        <textarea
          id="instructions"
          name="instructions"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Step 1: Preheat oven...\nStep 2: Mix ingredients..."
          required
        ></textarea>
      </div>

      {/* Cooking Time */}
      <div className="mb-4">
        <label htmlFor="cookingTime" className="block text-gray-700 font-medium mb-2">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.cookingTime}
          onChange={handleChange}
          placeholder="E.g., 30"
          required
        />
      </div>

      {/* Image URL */}
      <div className="mb-6">
        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={formData.image}
          onChange={handleChange}
          placeholder="Paste an image URL"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
      >
        {initialData ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
}

export default RecipeForm;
