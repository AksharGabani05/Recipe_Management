import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      
        <Link className="text-white text-2xl font-semibold" to="/home">
          Recipe Management
        </Link>
        
        
        <button 
          className="text-white lg:hidden focus:outline-none"
          onClick={handleNavCollapse}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`lg:flex ${isNavCollapsed ? 'hidden' : 'block'} lg:block`}>
          <ul className="flex space-x-6">
            
            <li>
              <Link 
                className="text-white hover:text-orange-500 transition duration-200"
                to="/recipes" 
                onClick={handleNavCollapse}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link 
                className="text-white hover:text-orange-500 transition duration-200"
                to="/add-recipe" 
                onClick={handleNavCollapse}
              >
                Add Recipe
              </Link>
            </li>
            <li>
              <Link 
                className="text-white hover:text-orange-500 transition duration-200"
                to="/recipe-list" 
                onClick={handleNavCollapse}
              >
                Manage Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
