import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://dummyjson.com/recipes?limit=0");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if recipes are not already fetched
    if (recipes.length === 0) {
      fetchRecipes();
    } else {
      setLoading(false);
    }
  }, [recipes]);

  return (
    <RecipesContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipesContext.Provider>
  );
};
