import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import EditRecipe from './components/EditRecipe';

import { initialRecipes } from './data/recipes';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
  };

  const handleEditRecipe = (editedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === editedRecipe.id ? editedRecipe : recipe));
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
       
        <main className="flex-grow-1">
          <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home recipes={recipes} />} />
            <Route path="/recipes" element={<Recipes recipes={recipes} />} />
            <Route path="/add-recipe" element={<AddRecipe onAddRecipe={handleAddRecipe} />} />
            <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
            <Route path="/recipe-list" element={<RecipeList recipes={recipes} onDelete={handleDeleteRecipe} />} />
            <Route path="/edit-recipe/:id" element={<EditRecipe recipes={recipes} onEditRecipe={handleEditRecipe} />} />
          </Routes>
        </main>
       
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;