import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home({ recipes }) {
  const featuredRecipes = recipes.slice(0, 6); 

  return (
    <div>
      <Header/>

      <div className="container mt-5">
        <h2 className="mb-4">Featured Recipes</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} className="col">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/recipes" className="btn btn-lg">View All Recipes</Link>
        </div>
      </div>

     
      <div className="container mt-5">
        <h2 className="mb-4 text-center">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src="https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="About Us" 
              className="img-fluid rounded" 
            />
          </div>
          <div className="col-md-6">
            <p>
              We are passionate about bringing you the best recipes from around the world. 
              Our collection includes a variety of dishes, from classic comfort food to exotic international cuisines.
            </p>
            <p>
              Whether you're a beginner in the kitchen or a seasoned chef, our easy-to-follow recipes will guide you step by step 
              to create delicious meals. Join us in exploring the world of flavors and cooking tips!
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
