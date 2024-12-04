import React from 'react';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Recipes({ recipes }) {
  return (
    <>
    <Header/>
    <div className="recipe-list-header">
    <h1 className="mb-4 text-center">All Recipes</h1>
    </div>
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Recipes;