import React, { useEffect, useState } from "react";
import "./App.css";
import { TopNav } from "./components/TopNav";
import { SideMenu } from "./components/SideMenu";
import { RecipeGrid } from "./components/RecipeGrid";
import { RecipeDetailModal } from "./components/RecipeDetailModal";
import { fetchRecipes, fetchCuisines, fetchIngredients } from "./services/api";

const App = () => {
  // THEME
  const [theme] = useState("light"); // Single theme for now per requirements

  // RECIPES DATA
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Load initial data
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // PUBLIC_INTERFACE: fetch initial recipes and filters
    async function loadInitial() {
      const [allRecipes, cuisinesList, ingredientsList] = await Promise.all([
        fetchRecipes(),
        fetchCuisines(),
        fetchIngredients()
      ]);
      setRecipes(allRecipes);
      setFilteredRecipes(allRecipes);
      setCuisines(cuisinesList);
      setIngredients(ingredientsList);
      const fav = (JSON.parse(localStorage.getItem("favorites")) || []);
      setFavorites(fav);
    }
    loadInitial();
  }, [theme]);

  // Filtering and searching logic
  useEffect(() => {
    let filtered = [...recipes];
    if (search)
      filtered = filtered.filter(r => (
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase())
      ));
    if (selectedCuisine)
      filtered = filtered.filter(r => r.cuisine === selectedCuisine);
    if (selectedIngredient)
      filtered = filtered.filter(r => r.ingredients.includes(selectedIngredient));
    setFilteredRecipes(filtered);
  }, [search, selectedCuisine, selectedIngredient, recipes]);
  
  // Handle favorites (persist in localStorage for demo)
  const toggleFavorite = (recipeId) => {
    let newFav;
    if (favorites.includes(recipeId)) {
      newFav = favorites.filter(id => id !== recipeId);
    } else {
      newFav = [...favorites, recipeId];
    }
    setFavorites(newFav);
    localStorage.setItem("favorites", JSON.stringify(newFav));
  };

  // Only show details for selected recipe
  const openRecipeDetail = (recipe) => setSelectedRecipe(recipe);
  const closeRecipeDetail = () => setSelectedRecipe(null);

  return (
    <div className="App app-grid">
      <TopNav
        search={search}
        setSearch={setSearch}
        favoritesCount={favorites.length}
      />
      <SideMenu
        cuisines={cuisines}
        ingredients={ingredients}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
        selectedIngredient={selectedIngredient}
        setSelectedIngredient={setSelectedIngredient}
        resetFilters={() => { setSelectedCuisine(""); setSelectedIngredient(""); setSearch(""); }}
      />
      <main className="app-main">
        <RecipeGrid
          recipes={filteredRecipes}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onCardClick={openRecipeDetail}
        />
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={closeRecipeDetail}
          isFavorite={selectedRecipe && favorites.includes(selectedRecipe.id)}
          onToggleFavorite={() => selectedRecipe && toggleFavorite(selectedRecipe.id)}
        />
        {/* Fallback for empty */}
        {filteredRecipes.length === 0 && (
          <div className="empty-state">
            <h2>No recipes found</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
