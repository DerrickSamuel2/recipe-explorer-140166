import React from "react";
import "./RecipeGrid.css";
import { RecipeCard } from "./RecipeCard";

// PUBLIC_INTERFACE
export function RecipeGrid({ recipes, favorites, onToggleFavorite, onCardClick }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={() => onToggleFavorite(recipe.id)}
          onClick={() => onCardClick(recipe)}
        />
      ))}
    </div>
  );
}
